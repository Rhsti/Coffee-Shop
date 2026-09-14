import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/about/About'
import Menu from './pages/menu/Menu'
import NotFound from './pages/NotFound'
import Location from './pages/Location'
import Contact from './pages/Contact'

function App() {
 

  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Menu' element={<Menu/>}/>
    <Route path='/Location' element={<Location/>}/>
    <Route path='/Contact'  element={<Contact/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
      
    
    </>
  )
}

export default App
