import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5 className='get'>Llegar a saber</h5>
      <h2 className='about'>Sobre mi Persona</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
        <img src={ME}  alt="About Imagen"/>      
        </div>
       </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
          <FaAward className='about__icon'/>
          <h5>Rector de la Universidad San Agustin</h5>
          <small>10 años</small>
          </article>
          
          <article className="about__card">
          <FiUsers className='about__icon'/>
          <h5>Simpatizantes</h5>
          <small>contamos con mas de 15 000 seguidores</small>
          </article>

          <article className="about__card">
          <VscFolderLibrary className='about__icon'/>
          <h5>Proyectos Planteados</h5>
          <small>proyectos para una Arequipa Moderna</small>
          </article>
        </div>
        <p>
           Tenemos una trayectoria en manejo de gestion, vamos capacitados con una buena plana de tecnicos.
        </p>
        <a href="#contact" className='btn btn-primary'>ABAJO </a>


      </div>
    </div>
        
    </section>
  )
}

export default About