import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Product from './components/products/Product'
import useFetch from './hooks/useFetch'
import Products from './components/products/Products'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)
  const products = useFetch('https://fakestoreapi.com/products')
  return (
    <div>
      <Header />
     <Nav/>    
     {products ? <Products products={products}/>  : null}
      <Footer />
    </div>
  )
}

export default App
