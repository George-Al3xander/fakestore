import {useState } from 'react'
import Header from './components/Header'
import Nav from './components/nav/Nav'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './components/products/ProductsPage'
import SingleProductPage from './components/products/SingleProductPage'
import MobileNav from './components/nav/MobileNav'
import { CartProvider} from './hooks/cart/useCart'
import OrderNotification from './components/cart/notifs/OrderNotification'
import Cart from './components/cart/Cart'
import OrderPage from './components/order/OrderPage'
import { CartStatusProvider } from './hooks/cart/useCartStatus'
import Notications from './components/cart/notifs/Notications'


function App() { 
  const [mobileMenu, setMobileMenu] = useState(false);
  
  const showMenu = () => {
    setMobileMenu(true)
  }

  const closeMenu = () => {
    setMobileMenu(false)
  }

  

   
  
   
  
  return (
    <div>
     <CartProvider >      
      <CartStatusProvider>      
        {/* <OrderNotification/>       */}
        <Notications />
        {mobileMenu ? <MobileNav closeMenu={closeMenu} /> : null}
        <Cart  /> 
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
