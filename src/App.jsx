import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Info from './components/Info'
import Details from './components/Details'
//import Other from './components/Other'
import Endings from './components/Endings'
import ContactInfo from './components/ContactInfo'
import Guests from './components/Guests'
import Footer from './components/Footer'
import AnythingElse from './components/AnythingElse'
import './App.css'
import {DndContext} from '@dnd-kit/core';


function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    <Router>
      <Routes>
       <Route path="/" element={<Info/>}/>
       <Route path="/contactInfo" element={<ContactInfo/>}/>
       <Route path='/guests' element={<Guests/>}/>
       <Route path="/details" element={<Details/>}/>
       <Route path="/anythingelse" element={<AnythingElse/>}/>
       <Route path="/endings" element={<Endings/>}/>
      </Routes>

    </Router>
     <DndContext>
         <Footer/> 
    </DndContext>
    </>
  )
}

export default App
