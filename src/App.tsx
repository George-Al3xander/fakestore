import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/nav/Nav'
import Product from './components/products/Product'
import useFetch from './hooks/useFetch'
import Products from './components/products/Products'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './components/products/ProductsPage'
import SingleProductPage from './components/products/SingleProductPage'
import MobileNav from './components/nav/MobileNav'
import { typeProduct } from './types/types'
import { CartContext } from './context/context'


function App() { 
  const [mobileMenu, setMobileMenu] = useState(false);
  
  const showMenu = () => {
    setMobileMenu(true)
  }

  const closeMenu = () => {
    setMobileMenu(false)
  }

  const [cart, setCart] = useState<typeProduct[]>([])

  
  return (
    <div>
      <CartContext.Provider value={{cart, setCart}}>
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
