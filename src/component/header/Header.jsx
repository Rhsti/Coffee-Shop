function Header(){
  return(

    // header
    <header class="bg-red-950 py-3">
    {/* nav */}
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
    {/* logo */}
    <div class="flex lg:flex-1">
   
    <img src="./assets/coffeeshop logo.jpg" alt="Coffeeshop Logo" />   
 </div>
 
      {/* Nav List  */}
   <ul class="flex flex-col md:flex-row gap-10 " >
        <li><a href="#"  class="text-sm/6 font-semibold text-white">Home</a></li>
        <li><a href="#"  class="text-sm/6 font-semibold text-white">Menu</a></li>
        <li><a href="#"  class="text-sm/6 font-semibold text-white">About</a></li>
        <li><a href="#"  class="text-sm/6 font-semibold text-white">Location</a></li>
        <li><a href="#"  class="text-sm/6 font-semibold text-white">Contact</a></li>
      </ul>
 
      
    </nav>
       {/* mobile menus */}
     <div class="fixed inset-y-0 right-0  p-6  lg:hidden ">
      
       <button type="button" command="close" commandfor="mobile-menu" class="-m-2.5 rounded-md p-2.5 text-gray-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
                <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
             <button type="button" command="--toggle" commandfor="mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">

          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 in-aria-expanded:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        
        </button>
     </div>
    </header>
    
  )
}
export default Header