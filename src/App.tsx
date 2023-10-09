import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Product from './components/products/Product'
import useFetch from './hooks/useFetch'
import Products from './components/products/Products'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './components/products/ProductsPage'
import SingleProductPage from './components/products/SingleProductPage'


function App() {
  const [count, setCount] = useState(0)
  const products = useFetch('https://fakestoreapi.com/products')
  return (
    <div>
      <Header />
      <Nav/>    
      <Routes>
        <Route path='/shop' element={<h1>Shop</h1>}/>
        <Route path='/products/:productId' element={<SingleProductPage />}/>
        <Route path='/products/category/:id' element={<ProductsPage />}/>

      </Routes>
      <Footer />
    </div>
  )
}

export default App
