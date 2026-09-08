import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/about/About'

function App() {
 

  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
  </Routes>
      
    
    </>
  )
}

export default App
