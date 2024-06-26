import { Routes, Route } from "react-router-dom"
import Navbar from "./Navbar.js"
import Home from "./Home.js"
import About from "./About.js"
import Gallery from "./Gallery.js"
import datamain from "./data.js"
import Services from "./Services.js"
import Contact from "./Contact.js"
import Footer from "./Footer.js"
import "./App.css"


export default function App () {

  return (
  <div>
  <Navbar/>
  <Routes>
    <Route>
      <Route  path="/" index element= {<Home />}/>
      <Route  path="/about"  element= {<About />}/>
      <Route  path="/gallery" element= {<Gallery />}/>
      <Route  path="/services"  element= {<Services />}/>
      <Route  path="/contact"  element= {<Contact />}/>
      <Route  path="/footer"  element= {<Footer />}/>
    </Route>
  </Routes>
  <Home />
   <About/>
  <Gallery  data={datamain.data}/>
  <Services/>
  <Contact/> 
  <Footer/> 

  </div>
  )
  
}
