import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components.jsx/Navbar'
import {FaBars} from 'react-icons/fa'
import Sidebar from './Components.jsx/Sidebar'
import Home from './Components.jsx/Home'
import Skills from './Components.jsx/Skills'
import Project from './Components.jsx/Project'
import Services from './Components.jsx/Services'
import Form from './Components.jsx/Form'
import Name from './Components.jsx/Name'
import Aos from 'aos'
import 'aos/dist/aos.css'




function App() {
  useEffect(() => {
   Aos.init()
  }, [])
  

  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  

  return (
    
    <>
    <div>
    <Navbar/>
    <ul className='lg:hidden sm:block fixed top-0 z-{1000}'>
      <li className='w-screen text-white bg-pink-900 p-3'>
        <FaBars onClick={toggleIsOpen}/>
      </li>
    </ul>
    {isOpen && <Sidebar handleClose={toggleIsOpen}/>}
    <Home/>
    <Skills/>
    <Project/>
    <Services/>
    <Form/>
    <Name/>
    </div>
    </>
  )
}

export default App
