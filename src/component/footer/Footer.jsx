import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import coffeelogo from '../../assets/CqvMN.jpg'

function Footer() {
    const socialLinks = [
        {name: 'Facebook', href: 'https://facebook.com', icon: FaFacebook, color:  "text-blue-500" },
        {name: 'Instagram' ,  href: 'https://instagram.com' , icon: FaInstagram,  color: "text-pink-500",},
        {name: 'Twitter', href: 'https://twitter.com', icon: FaTwitter ,  color: "text-sky-500",}
    ]
  return (
    <footer className="w-full bg-gray-900
     py-6 relative top-6 ">
        <section className="flex  flex-col md:flex-row  justify-around 
        items-center  mt-5   text-amber-50 ">
           <div >
            <img className="w-full max-w-20 rounded-full"  src={coffeelogo} alt="Coffeeshop Logo" />
           </div>
        <div>
         <ul className="flex flex-row gap-5 my-10" >
            {socialLinks.map((item) => {
                const Icon = item.icon
                return(
                    <li key={item.name}>
                    <a className={item.color} href={item.href} target="_blank" rel="noopener noreferrer">
                    <Icon size={24}/>
                    </a>
                    </li>
                )
})}
         </ul>
        </div>
        <div>
          <p >&copy; 2026 Coffee Shop</p>
        </div>
     
        </section>
    </footer>
  )
}

export default Footer