import { FaSearch } from "react-icons/fa"
import Footer from "../../component/footer/Footer"
import Header from "../../component/header/Header"
import HotBeverages from '../../assets/flying-cup-of-coffee.png'


function Menu() {
  
  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
        <Header/>
{/* flex flex-col items-center */}
          <main className="flex-1 mt-20"> 
           <section className="flex justify-center  ">
             <form action="" className="flex gap-4  mx-5">
                <select className="relative left-4 lg:px-10 md:px-6 px-2 rounded-l-xl bg-amber-400 outline-0" name="filter" id=""filter >
              <option   value="all">All</option>
              <option value="iphone">Iphone</option>
             </select>
               <input className="w-full p-3 lg:px-70  md:px-30 px-10 ps-9 bg-neutral-secondar
              y-medium border border-default-medium text-heading 
              text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs
               placeholder:text-body"  type="search" name="search" id="search
                " placeholder="Search" />
                <button className="bg-amber-500 relative right-5 lg:px-10 md:px-6 px-2 py-3.5 rounded-r-xl">{FaSearch} Search</button>
               
             </form>
          
           </section>
              <div className="flex justify-center mt-25 text-3xl
              font-bold tracking-wider italic uppercase underline decoration-amber-200">
                 <h1>Our Menu</h1>
              </div>
           <section className="grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2 
           mx-15 
            mt-30  mb-20 gap-20 ">
             
            <div className="text-center"> 
              <img src={HotBeverages} className="" alt="" />
              <h3 className="font-bold py-2 ">Hot Beverages</h3>
              <p className="hidden md:block min-w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempora
                reiciendis eum minus?
              </p>
            </div>
            <div className="text-center"> 
              <img src={HotBeverages} className="" alt="" />
              <h3 className="font-bold py-2 ">Coffee</h3>
              <p className="hidden md:block min-w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempora
                reiciendis eum minus?
              </p>
            </div>
            <div className="text-center"> 
              <img src={HotBeverages} className="" alt="" />
              <h3 className="font-bold py-2 ">Hot Water</h3>
              <p className="hidden md:block min-w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempora
                reiciendis eum minus?
              </p>
            </div>
            <div className="text-center"> 
              <img src={HotBeverages} className="" alt="" />
              <h3 className="font-bold py-2 ">Refreshment</h3>
              <p className="hidden md:block min-w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempora
                reiciendis eum minus?
              </p>
            </div>
            <div className="text-center"> 
              <img src={HotBeverages} className="" alt="" />
              <h3 className="font-bold py-2 ">Cold Beverages</h3>
              <p className="hidden md:block min-w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempora
                reiciendis eum minus?
              </p>
            </div>
           </section>
          </main>
   <Footer/>
    </div>
  
    </>
  )
}

export default Menu