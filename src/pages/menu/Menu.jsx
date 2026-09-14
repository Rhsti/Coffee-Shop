import Footer from "../../component/footer/Footer"
import Header from "../../component/header/Header"

function Menu() {
  
  return (
    <>
    <Header/>

    <h1 >menu</h1>
     <section className="grid md:grid-cols-2  grid-cols-1 gap-5
    md:mt-20  md:ml-10 md:p-4  pr-10  md:mr-0">
    <div className="  md:mt-0 mt-10 ml-10  md:ml-0 ">
      <img className="w-full max-w-150 h-auto  rounded-4xl  mx-auto " src="https://img.magnific.com/free-photo/cute-brunette-girl-barista-cafe-staff-pouring-water-from-kettle-brewing-filter-coffee-cou_1258-138368.jpg?semt=ais_hybrid&w=740&q=80"
       alt="A woman pouring coffee into a cup at the cafe" />
    </div>
    <div className=" ">
       <h1 className="text-4xl underline text-center ">About Us </h1>
    <p className=" text-center w-100%  mt-13 text-xl leading-10
     tracking-wide ml-10 md:ml-0">
      At Coffee House in Berdorf. Germony: we pride ourseives on being o
        ge-to destinodion for cotlee lovers ond comersation seekers olke.
        wre dedicoted to previding on esceptional coffee experience in o

        TESTIMONIAL

        ctuy ond inviting aimgiphers, wheru guusts cun relos, unwirid und
       enjoy their time in comtort.</p>

</div>
   </section>
   <div className="bg-white dark:bg-gray-800">
  <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
  <p className="text-gray-600 dark:text-gray-300">
    Lorem ipsum...
  </p>
</div>
   <Footer/>
    </>
  )
}

export default Menu