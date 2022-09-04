import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <section id='footer'>
      <a href="#" className='footer__logo'> 👍YO AREQUIPA👍</a>
      <ul className='permalink'>
     <li><a href="#"></a></li>
     <li><a href="about"></a>Inicio</li>
     <li><a href="experiencie">Experiencia</a></li>
     <li><a href="services">Services</a></li>
     <li><a href="portafolio">Plan Gobierno</a></li>
     <li><a href="testimonials">Noticias</a></li>
     <li><a href="contact">Contactame</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/ricardogui.gonzalesmedina" target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/perulibrecen/" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com/PERU_LIBRE1" target='_blank'><IoLogoTwitter/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; MASTER RED S.A.C All rights reserved.</small>
      </div>


    </section>
  )
}

export default Footer