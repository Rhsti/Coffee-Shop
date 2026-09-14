import coffeelogo from '../../assets/CqvMN.jpg'
import { Link } from 'react-router-dom'
import './Header.css'
import { useState } from 'react'

function Header(){
 const [open, setOpen] = useState(false);
 const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Menu', to: '/Menu' },
  { name: 'About', to: '/About' },
  { name: 'Location', to: '#' },
  { name: 'Contact', to: '#' },
]
  return(

    // header items-start
    <header  className="bg-red-950 py-3 ">
    {/* nav */}
    <nav className="mx-auto flex  max-w-7xl md:items-center 
       md:justify-between py-6 lg:px-8">
    {/* logo   lg:flex-1*/}
    <div className="flex">
   
    <img className='w-full max-w-20 '  src={coffeelogo} alt="Coffeeshop Logo" />   
 </div>
    
      {/* Nav List  */}
   <ul className=" md:flex-row gap-10 hidden  md:flex py-12 md:py-0 md:pr-8 " >
       {navLinks.map((link) => (
         <li key={link.name}>
          <Link to={link.to} className='Link-style'>{link.name}</Link>
         </li>
       ))}
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
          {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.to} className="Link-style" onClick={() => setOpen(false)}>
            {link.name}</Link>
            </li>

          ))}
        </ul>
      )}
        
    </header>
    
  )
}
export default Header