import { useReducer, useState } from 'react'
import Header from './components/Header'
import Nav from './components/nav/Nav'

import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './components/products/ProductsPage'
import SingleProductPage from './components/products/SingleProductPage'
import MobileNav from './components/nav/MobileNav'
import { typeAction, typeProduct } from './types/types'
import { CartContext } from './context/context'
import OrderNotification from './components/OrderNotification'
import Cart from './components/cart/Cart'
import OrderPage from './components/order/OrderPage'
import { useCart } from './hooks/useCart'

function App() { 
  const [mobileMenu, setMobileMenu] = useState(false);
  
  const showMenu = () => {
    setMobileMenu(true)
  }

  const closeMenu = () => {
    setMobileMenu(false)
  }

  
  const [orderProduct, setOrderProduct] = useState<typeProduct | null>(null)
  const [notification, setNotification] = useState(false)


  const {cart, addToCart, removeFromCart} = useCart()

  const [cartStatus, setCartStatus] = useState(false)

  // const addToCart = (product: typeProduct, count: number) => {    
  //   //dispatch({type: "ADD", product,count})
  //   setOrderProduct(product)    
  //   setNotification(true);
  // }

   
  
  return (
    <div>
      <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
       {notification ?  <OrderNotification setCartStatus={setCartStatus} setNotification={setNotification} product={orderProduct!}/> : null}
        {mobileMenu ? <MobileNav closeMenu={closeMenu} /> : null}
        {cartStatus ? <Cart cart={cart}  setCartStatus={setCartStatus}/> : null}
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
