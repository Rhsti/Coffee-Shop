import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import Herosection from '../../component/herosection/Herosection'
import buttercroissant from '../../assets/buttercroissant.jpg'
import tea from '../../assets/tea.jpg'
import coffee from '../../assets/coffee.jpg'
import sandwich from '../../assets/sandwich.jpg'
import smoothie from '../../assets/smoothie.jpg'
import rezeptsmoothie from '../../assets/rezept-smoothie.jpg'
import { FaCoffee, FaHeart } from 'react-icons/fa'
function Home() {
  return (
    // <div >
  <>
   
   
    <div className="min-h-screen flex flex-col">
       <Header/>
        <Herosection/>
      {/* Your page content */}
      <main className="flex-1 ">
         <div className='flex flex-col items-center 
         justify-center mt-10 gap-6 md:text-xl text-lg m-10 '>
          <h1 className='decoration-amber-400 md:text-4xl text-xl font-bold uppercase underline italic pb-5'>Welcome to Our Coffee Shop 
            <FaCoffee className='inline ml-2'/></h1>
          <p className='font-bold '>Good coffee. Great moments. A place to feel at home.</p>
          <p className='md:max-w-5xl max-w-3xl md:text-center leading-8 md:tracking-wider tracking-normal'>Welcome to our coffee shop, where every cup is made with care and every visit is meant to be enjoyed. From rich, freshly brewed coffee to delicious pastries 
            and cozy surroundings, we are here to make your day a little better.</p>
          <p className='md:max-w-5xl max-w-3xl md:text-center leading-8 md:tracking-wider tracking-normal'>Whether you are starting your morning, catching up with friends, or simply taking a
             moment for yourself,<span className='font-bold'> you are always welcome here.</span></p>
           <p className='font-bold'>Come in, grab your favorite cup, and stay awhile.
           <FaHeart className='inline ml-2 text-red-700'/> </p>
           <h2 className='mt-10 font-bold text-2xl underline italic uppercase'>gallery</h2>
         </div>
        {/*  max-w-100 w-full mx-auto */}
        <section className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2
         gap-5 justify-center m-10 '>
          
          <div className=''>
            <img className='h-full'  src={buttercroissant} alt="A perfect coffee with buttercroissant." />
          </div>
        <div className=''>
           <img className='h-full'  src={tea} alt="A tasty tea in the cup." />

        </div>
        <div className=' '>
           <img className='h-full'  src={coffee} alt="A tasty coffee in the cup." />

        </div>
         <div className=' '>
           <img className='h-full'  src={sandwich} alt="Fresh and tasty sandwich." />

         </div>
        <div className=''>
          <img className='h-full'  src={smoothie} alt="smoothie with psyllium husks and coconut water." />

        </div>
           
        <div className=''>
          <img className='h-full'  src={rezeptsmoothie} alt="smoothie with banana and berries  and spinach." />

        </div>
         <div className=' '>
           <img className='h-full '  src={sandwich} alt="Fresh and tasty sandwich." />

         </div>
        
        <div className=''>
          <img className='h-full'  src={rezeptsmoothie} alt="smoothie with banana and berries  and spinach." />

        </div>
        
        </section>
        
      </main>

      <Footer />
    </div>
    </>
  )
}

export default Home