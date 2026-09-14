import Footer from "../component/footer/Footer"
import Header from "../component/header/Header"
import coffeeimg  from '../assets/coffee.jpg'

function NotFound() {
  return (
    <>
    <Header/>
    <main>
        <section className=" text-amber-950 flex gap-6 flex-col items-center justify-center my-30">
            <h1 className="text-8xl tracking-widest ">4
                <img className="inline ml-5 w-full max-w-25 h-25  rounded-full"
                 src={coffeeimg} alt="" /> 4</h1>
        <p className="text-3xl">Page not found</p>
        </section>
    </main>
    <Footer/>

    </>
  )
}

export default NotFound