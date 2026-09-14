import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import Herosection from '../../component/herosection/Herosection'

function Home() {
  return (
    // <div >
  <>
   
   
    <div className="min-h-screen flex flex-col">
       <Header/>
        <Herosection/>
      {/* Your page content */}
      <main className="flex-1">
       
      </main>

      <Footer />
    </div>
    </>
  )
}

export default Home