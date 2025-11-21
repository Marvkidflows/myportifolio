import './index.css'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Navbar'
import About from './Components/about/About'
import Experience from './Components/Experience/Experience'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Testimonial from './Components/Testimonial/Testimonial'
import Skills from './Components/Skills/Skills'

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Skills/>
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
