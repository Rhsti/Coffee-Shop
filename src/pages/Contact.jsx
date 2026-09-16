import {  FaMessage, FaMobile } from "react-icons/fa6"
import Footer from "../component/footer/Footer"
import Header from "../component/header/Header"

function Contact() {
  const Contact = [
    {text: '02388392229', icon: FaMobile},
    {text: 'lemlem@gmail.com' , icon: FaMessage},
    
  ]
  return (
    <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-1">
          <section className="flex flex-col items-center pt-15 mx-3">
            <div>
                <h1 className="text-4xl underline text-center italic font-bold ">CONTACT US</h1>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 
                w-full md:max-w-250 max-w-120 pt-15 ">
               
                <ul className="flex flex-col gap-4 mt-10 mx-10 ">
                   {Contact.map((item) => {
                     const Icon = item.icon;
                     return(
                      <li key={item.text}>
                       <Icon className="inline mr-3" size={20}/>  {item.text}
                      </li>
                     )
                   })} 
                </ul>
                 <form action="" className="flex flex-col my-10 gap-7 mx-10  md:mx-0 ">
                    <input class="border invalid:border-red-500 p-3 outline-0 " type="name" id="name" placeholder="Name" />
                    <input class="border invalid:border-red-500 p-3 outline-0"  type="email" name="email" id="email" placeholder="Email" />
                    <textarea class="border invalid:border-red-500 p-3 outline-0"  name="textarea" id="textarea" minLength={20} placeholder="Message"></textarea>
                    <button type="submit" className="bg-amber-950 text-white w-30 rounded-full p-3 ">Submit</button>
                </form>
            </div>
          </section>
        </main>
        <Footer/>
    </div>
  )
}

export default Contact