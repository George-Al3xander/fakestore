import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-[200vh]' >
      <Header />
     <Nav/>
      
    </div>
  )
}

export default App
