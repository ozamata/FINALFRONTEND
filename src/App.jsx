import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portafolio  from './components/portafolio/Portafolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import {BsWhatsapp} from 'react-icons/bs'


function App  () {
  return (

    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portafolio />
    <Testimonials />
    <Contact />
    <Footer />
    <a href="https://api.whatsapp.com/send?phone=51951136410" className="btn-wsp" target="_blank">
	   <BsWhatsapp className="fa fa-whatsapp icono"/>
	  </a>
    </>

    

  )
}

export default App