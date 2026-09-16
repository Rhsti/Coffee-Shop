import Footer from "../component/footer/Footer"
import Header from "../component/header/Header"
import coffeeimg  from '../assets/coffee.jpg'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
    <Header/>
    <main className="flex-1">
        <section className=" text-amber-950 flex gap-6 flex-col items-center justify-center my-30">
            <h1 className="md:text-8xl text-6xl tracking-widest ">4
                <img className="inline ml-5  md:w-25 md:h-25 w-20 h-20 rounded-full"
                 src={coffeeimg} alt="A cup of coffee" /> 4</h1>
        <p className="md:text-3xl text-2xl">Page not found</p>
        </section>
    </main>
    <Footer/>

    </div>
  )
}

export default NotFound