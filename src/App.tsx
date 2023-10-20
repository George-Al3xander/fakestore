import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/nav/Nav'

import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './components/products/ProductsPage'
import SingleProductPage from './components/products/SingleProductPage'
import MobileNav from './components/nav/MobileNav'
import { typeProduct } from './types/types'
import { CartContext } from './context/context'
import OrderNotification from './components/OrderNotification'
import Cart from './components/cart/Cart'
import OrderPage from './components/order/OrderPage'

function App() { 
  const [mobileMenu, setMobileMenu] = useState(false);
  
  const showMenu = () => {
    setMobileMenu(true)
  }

  const closeMenu = () => {
    setMobileMenu(false)
  }

  const [cart, setCart] = useState<typeProduct[]>([])
  const [orderProduct, setOrderProduct] = useState<typeProduct | null>(null)
  const [notification, setNotification] = useState(false)

  const [cartStatus, setCartStatus] = useState(false)

  const addToCart = (product: typeProduct, count: number) => {    
    if(cart.length == 0) {
        setCart([{...product, count}])
    } else {
        const oldItem = cart.some((el) => el.id == product.id) 
        if(oldItem) {    
          const tempArray = cart.map((item) => {
            if(item.id == product.id) {
              return {...item, count: item.count! + count}
            } else {
              return item
            }            
          })
          setCart(tempArray)          
        } else {    
          setCart([...cart, {...product, count}])             
        }
    }
    setOrderProduct(product)    
    setNotification(true);
  }

  const removeFromCart = (id:number) => {
    const tempArray = cart.filter((prod) => prod.id != id)
    setCart(tempArray)
  }
  
  return (
    <div>
      <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart}}>
       {notification ?  <OrderNotification setCartStatus={setCartStatus} setNotification={setNotification} product={orderProduct!}/> : null}
        {mobileMenu ? <MobileNav closeMenu={closeMenu} /> : null}
        {cartStatus ? <Cart cart={cart} setCart={setCart} setCartStatus={setCartStatus}/> : null}
        <Header setCartStatus={setCartStatus} showMenu={showMenu}/>
        <Nav/>    
        <Routes>
          <Route path='/shop' element={<ProductsPage />}/>
          <Route path='/products/:productId' element={<SingleProductPage />}/>
          <Route path='/products/category/:id' element={<ProductsPage />}/>
          <Route path='/order/*' element={<OrderPage />}/>
        </Routes>
        <Footer />
      </CartContext.Provider>
    </div>
  )
}

export default App
