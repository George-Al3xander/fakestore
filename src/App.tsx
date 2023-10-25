import {  useState } from 'react'
import Header from './components/Header'
import Nav from './components/nav/Nav'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './components/products/ProductsPage'
import SingleProductPage from './components/products/SingleProductPage'
import MobileNav from './components/nav/MobileNav'
import { CartProvider } from './hooks/cart/useCart'
import OrderNotification from './components/OrderNotification'
import Cart from './components/cart/Cart'
import OrderPage from './components/order/OrderPage'
import { CartStatusProvider, useCartStatus } from './hooks/cart/useCartStatus'


function App() { 
  const [mobileMenu, setMobileMenu] = useState(false);
  
  const showMenu = () => {
    setMobileMenu(true)
  }

  const closeMenu = () => {
    setMobileMenu(false)
  }

  
  const cartStatus = useCartStatus()

  

   
  
  return (
    <div>
     <CartProvider >
      <CartStatusProvider>      
        <OrderNotification/>      
        {mobileMenu ? <MobileNav closeMenu={closeMenu} /> : null}
        {cartStatus ? <Cart  /> : null}
        <Header  showMenu={showMenu}/>
        <Nav/>    
        <Routes>
          <Route path='/shop' element={<ProductsPage />}/>
          <Route path='/products/:productId' element={<SingleProductPage />}/>
          <Route path='/products/category/:id' element={<ProductsPage />}/>
          <Route path='/order/*' element={<OrderPage />}/>
        </Routes>
        <Footer />
        </CartStatusProvider>
     </CartProvider>    
    </div>
  )
}

export default App
