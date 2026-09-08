import Flyingcoffee from '../../assets/flying-cup-of-coffee.png'
function Herosection(){
    return(
        <section className=" grid grid-cols-1 bg-red-950 md:h-130 h-160 py-8
         md:grid-cols-2 ">
          <div className=" md:ml-70 tracking-wide  w-100 ml-50">
            <h1 className="text-3xl text-yellow-600 italic " >Best Coffee</h1>
            <h2  className="text-2xl py-2 text-gray-100">Make your day great with our special coffee!</h2>
            <p className="py-6 text-gray-300">Welcome to our cote parndise, whare avery bean tels
              e stury and every cup sporks jey. </p> 
            <button className="bg-yellow-500 mr-8 p-1 w-28 rounded-full">Order Now</button>
            <button className=" text-white rounded-full w-29 p-1 border-white border">Contact Us</button>
            </div>
          <div className="justify-items-center-safe">
            <img className="md:h-100 h-80 w-auto m-13 py-10 md:m-0 md:py-0" src={Flyingcoffee} alt="flying-cup-of-coffee" />
          </div>
        </section>
    )
}
export default Herosection