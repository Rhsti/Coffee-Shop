import coffeelogo from '../../assets/CqvMN.jpg'
import { Link } from 'react-router-dom'
import './Header.css'

function Header(){

  return(

    // header
    <header  className="bg-red-950 py-3 ">
    {/* nav */}
    <nav className="  mx-auto flex max-w-7xl items-center justify-between py-6 lg:px-8">
    {/* logo */}
    <div className="flex lg:flex-1">
   
    <img  src={coffeelogo} alt="Coffeeshop Logo" />   
 </div>
    
      {/* Nav List  */}
   <ul className="flex flex-col md:flex-row gap-10 sm:hidden  md:block md:flex" >
        <li><Link to="#"  className="Link-style">Home</Link></li>
        <li><Link to="#"  className="Link-style">Menu</Link></li>
        <li><Link to="/About"  className="Link-style">About</Link></li>
        <li><Link to="#"  className="Link-style">Location</Link></li>
        <li><Link to="#"  className="Link-style">Contact</Link></li>
      </ul>
 
      
    </nav>
       {/* mobile menus */}
     <div className="fixed inset-y-0 right-0  p-6  lg:hidden ">
      
       <button type="button" command="close" commandfor="mobile-menu" className="-m-2.5 rounded-md p-2.5 text-gray-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
             <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">

          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        
        </button>
     </div>

        
    </header>
    
  )
}
export default Header