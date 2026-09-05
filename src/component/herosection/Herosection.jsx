import Flyingcoffee from '../../assets/flying-cup-of-coffee.png'
function Herosection(){
    return(
        <section class=" grid grid-cols-2 bg-red-950 h-130 py-8">
          <div class=" ml-70 tracking-wide  w-100">
            <h1 class="text-3xl text-yellow-600 italic " >Best Coffee</h1>
            <h2  class="text-2xl py-2 text-gray-100">Make your day great with our special coffee!</h2>
            <p class="py-6 text-gray-300">Welcome to our cote parndise, whare avery bean tels
              e stury and every cup sporks jey. </p> 
            <button class="bg-yellow-500 mr-8 p-1 w-28 rounded-full">Order Now</button>
            <button class=" text-white rounded-full w-29 p-1 border-white border">Contact Us</button>
            </div>
          <div class="justify-items-center-safe">
            <img class="h-100 w-auto" src={Flyingcoffee} alt="flying-cup-of-coffee" />
          </div>
        </section>
    )
}
export default Herosection