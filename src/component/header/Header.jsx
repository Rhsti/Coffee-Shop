import coffeelogo from '../../assets/CqvMN.jpg'
import { Link } from 'react-router-dom'
import './Header.css'
import { useState } from 'react'

function Header(){
 const [open, setOpen] = useState(false);
  return(

    // header items-start
    <header  className="bg-red-950 py-3 ">
    {/* nav */}
    <nav className="mx-auto flex  max-w-7xl md:items-center    md:justify-between py-6 lg:px-8">
    {/* logo   lg:flex-1*/}
    <div className="flex">
   
    <img  src={coffeelogo} alt="Coffeeshop Logo" />   
 </div>
    
      {/* Nav List  */}
   <ul className="flex flex-col md:flex-row gap-10 hidden  md:block md:flex py-12 md:py-0 md:pr-8 " >
        <li><Link to="/"  className="Link-style">Home</Link></li>
        <li><Link to="/Menu"  className="Link-style">Menu</Link></li>
        <li><Link to="/About"  className="Link-style">About</Link></li>
        <li><Link to="#"  className="Link-style">Location</Link></li>
        <li><Link to="#"  className="Link-style">Contact</Link></li>
      </ul>
 
      
    </nav>
      
       {/* mobile menus */}
     <div className="absolute inset-y-0 right-0  p-6  md:hidden ">
      
         <button  onClick={() => setOpen(!open)}  type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
          {open ?  (
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          ): (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          )}
        
        </button>
     </div>
    {open && (
     
        <ul className="md:hidden flex flex-col gap-8 px-6 py-8 items-center ">
          <li><Link to="/" className="Link-style" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/Menu" className="Link-style" onClick={() => setOpen(false)}>Menu</Link></li>
          <li><Link to="/About" className="Link-style" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="#" className="Link-style" onClick={() => setOpen(false)}>Location</Link></li>
          <li><Link to="#" className="Link-style" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      )}
        
    </header>
    
  )
}
export default Header