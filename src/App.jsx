import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
    <Router>
      <Routes>
       <Route path="/" element={<Info/>}/>
       <Route path="/details" element={<Details/>}/>
       <Route path="/other" element={<Other/>}/>
       <Route path="/endings" element={<Endings/>}/>
      </Routes>

    </Router>
     {/* <Info/> */}
     {/* <Details/>
     <Other/>
     <Endings/>*/}

     <Footer/> 
        
    </>
  )
}

export default App
