import Footer from "../component/footer/Footer"
import Header from "../component/header/Header"

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-1">
          <section className="flex flex-col items-center justify-center">
            <div>
                <h1 className="text-4xl underline text-center italic ">CONTACT US</h1>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 items-center 
            justify-end">
               
                <ul>
                 <li>segsd</li>
                </ul>
                 <form action="">
                    <input class="border invalid:border-red-500" type="name" id="name" placeholder="Name" />
                    <input class="border invalid:border-red-500"  type="email" name="email" id="email" placeholder="Email" />
                    <textarea class="border invalid:border-red-500"  name="textarea" id="textarea" minLength={20}>Message</textarea>
                    <button type="submit">Submit</button>ton
                </form>
            </div>
          </section>
        </main>
        <Footer/>
    </div>
  )
}

export default Contact