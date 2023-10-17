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

  const addToCart = (product: typeProduct, count: number) => {
    if(cart.length == 0) {
        setCart([{...product, count}])
    } else {
        const newItem = cart.some((el) => el.id != product.id)
        if(newItem) {    
          setCart([...cart, {...product, count}])    
        } else {            
          const tempArray = cart.map((item) => {
            if(item.id == product.id) {
              return {...item, count: item.count! + count}
            } else {
              return item
            }            
          })
          setCart(tempArray)          
        }
    }
    setOrderProduct(product)
    setNotification(true);
  }
  
  return (
    <div>
      <CartContext.Provider value={{cart, setCart, addToCart}}>
       {notification ?  <OrderNotification  setNotification={setNotification} product={orderProduct!}/> : null}
        {mobileMenu ? <MobileNav closeMenu={closeMenu} /> : null}
        <Header showMenu={showMenu}/>
        <Nav/>    
        <Routes>
          <Route path='/shop' element={<ProductsPage />}/>
          <Route path='/products/:productId' element={<SingleProductPage />}/>
          <Route path='/products/category/:id' element={<ProductsPage />}/>
        </Routes>
        <Footer />
      </CartContext.Provider>
    </div>
  )
}

export default App
