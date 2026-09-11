import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/about/About'
import Menu from './pages/menu/Menu'

function App() {
 

  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Menu' element={<Menu/>}/>
  </Routes>
      
    
    </>
  )
}

export default App
