import {useState } from 'react'
import Header from './components/Header'
import Nav from './components/nav/Nav'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './components/products/ProductsPage'
import SingleProductPage from './components/products/SingleProductPage'
import MobileNav from './components/nav/MobileNav'
import { CartProvider} from './hooks/cart/useCart'
import Cart from './components/cart/Cart'
import OrderPage from './components/order/OrderPage'
import { CartStatusProvider } from './hooks/cart/useCartStatus'
import HomePage from './components/home/HomePage'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





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
        <ToastContainer />
        {mobileMenu ? <MobileNav closeMenu={closeMenu} /> : null}
        <Cart  /> 
        <Header  showMenu={showMenu}/>
        <Nav/>  
        <Routes>
          <Route path='/' element={<HomePage />} />
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
