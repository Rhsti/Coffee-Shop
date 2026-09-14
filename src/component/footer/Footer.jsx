import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import coffeelogo from '../../assets/CqvMN.jpg'

function Footer() {
    const socialLinks = [
        {name: 'Facebook', href: 'https://facebook.com', icon: FaFacebook },
        {name: 'Instagram' ,  href: 'https://instagram.com' , icon: FaInstagram},
        {name: 'Twitter', href: 'https://twitter.com', icon: FaTwitter}
    ]
  return (
    <footer className="w-full h-full max-h-50  bg-gray-900 fixed ">
        <section className="flex  flex-col md:flex-row justify-around
        items-center mt-10  text-amber-50 ">
           <div >
            <img className="w-full max-w-20 rounded-full"  src={coffeelogo} alt="Coffeeshop Logo" />
           </div>
        <div>
         <ul className="flex flex-row gap-5 mt-5" >
            {socialLinks.map((item) => {
                const Icon = item.icon
                return(
                    <li key={item.name}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
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