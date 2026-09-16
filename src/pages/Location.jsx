import Footer from "../component/footer/Footer"
import Header from "../component/header/Header"
import location from '../assets/location.jpg'
function Location() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1  flex  items-center justify-center">
     <div className=" mx-10 mt-16 w-120 md:w-170 h-full  bg-sky-50 flex flex-col justify-center items-center">
         <div>
             <h1 className="text-4xl py-8 ">Directions</h1>
         </div>
       
        <div>
            
        <a  href="https://www.google.com/maps/place/Coffee+Twins+-+Specialty+coffee/@48.1210567,11.5581541,17z/data=!3m1!4b1!4m6!3m5!1s0x479ddf46a7900001:0xdfbb554c61efee48!8m2!3d48.1210567!4d11.5607344!16s%2Fg%2F11tfdntzgw?hl=nl&entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D" 
        target="_blank" rel="noopener noreferrer">
            <img src={location} alt="Find us on Google Maps"
             className=" px-3 h-70 md:h-80 rounded-2xl cursor-pointer hover:scale-105 transition-transform" />
        </a>

        </div>
        <div>
            <p className="py-10 text-center px-10 ">
                Find us in Munich and enjoy your favorite coffee with us.
Click the map for directions.
            </p>
        </div>
      
       
     </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Location