import Flyingcoffee from '../../assets/flying-cup-of-coffee.png'
function Herosection(){
    return(
      // tracking-wide
        <section className=" grid grid-cols-1 bg-red-950 md:h-130 h-160 py-8
         md:grid-cols-2 pl-4 ">
          <div className="grid  justify-items-center ">
            <h1 className="text-3xl text-yellow-600 italic " >Best Coffee</h1>
            <h2  className="text-2xl pt-2 md:pt-0 text-gray-100 w-90">Make your day great with our special coffee!</h2>
            <p className="md:py-0 py-6  text-gray-300 w-90">Welcome to our cote parndise, whare avery bean tels
              e stury and every cup sporks jey. </p> 
           <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4'>
             <button className="   bg-yellow-500  p-1 w-28 rounded-full md:mb-0 mb-6  md:h-9 ">Order Now</button>
            <button className=" text-white rounded-full w-29 p-1 md:h-9 border-white border">Contact Us</button>
           
           </div>
            </div>
          <div className="justify-items-center-safe">
            <img className="md:h-100 h-80 w-auto m-13 pb-18 md:m-0 md:py-0" src={Flyingcoffee} alt="flying-cup-of-coffee" />
          </div>
        </section>
    )
}
export default Herosection