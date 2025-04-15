import Navbar from '../src/components/Navbar'
import Hero from "../src/components/Hero"
import Carousel from "../src/components/Carousel"
import AboutUs from "../src/components/AboutUs"
import CompanyInfo from "../src/components/CompanyInfo"
import ContactForm from "../src/components/ContactForm"
import Footer from "../src/components/Footer"
import BrandCarousel from '../src/components/BrandCarousel'
import LinkWhatsapp from './components/LinkWhatsapp'

function App() {
  return (
    <div className="min-h-screen bg-[#b4d5c4]/10">
      <Navbar />
      <main>
        <Hero />
        <Carousel />
        <AboutUs />
        <BrandCarousel/>
        <CompanyInfo />
        <ContactForm />
        
      </main>
      <Footer />
      <LinkWhatsapp/>
    </div>
  )
}

export default App