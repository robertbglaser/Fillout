import { useState } from 'react'
import Info from './components/Info'
import Details from './components/Details'
import Other from './components/Other'
import Endings from './components/Endings'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Info/>
     {/* <Details/>
     <Other/>
     <Endings/>*/}

     <Footer/> 
        
    </>
  )
}

export default App
