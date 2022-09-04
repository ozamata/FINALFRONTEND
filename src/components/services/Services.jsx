import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {

  return (
    <section id='services'>
      <h5>Estrategias</h5>
      <h2>PLAN DE GOBIERNO PAUCARPATA</h2>
    
    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>SEGURIDAD</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Camaras Vigilancia para puntos fijos</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Supervision comisarias</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Vecinos de junta emergencia</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Nuevas comisarias</p>
          </li>


        </ul>
      </article>


      <article className="service">
        <div className="service__head">
          <h3>SALUD</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Oficinas de salud</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>chequeo gratuito</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Vaso de leche</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Infraestructura mejorada</p>
          </li>


        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>EDUCACION</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Reparacion de colegios</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Intalacion de equipos</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Cooncurso aptitud</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Cursos de especializaciones</p>
          </li>
        </ul>
      </article>

      <article className="service">
        <div className="service__head">
          <h3>INFRAESTRUCTURA</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Puente en lugares fijos</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>apoyo al poblador en construccion</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>mantenimiento pistas</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>contruccion parques</p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>TURISMO</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Eventos culturales</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Mirador Paucarpata</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Concurso de comida,danza, etc</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Reparacion de lugares turisticos</p>
          </li>
        </ul>
       </article>
       <article className="service">
        <div className="service__head">
          <h3>TECNOLOGIA</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Capacitacion a los jovenes</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Uso de los drones para la vigilancia</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Concurso de proyectos</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Capacitacion IE</p>
          </li>
        </ul>
      </article>



    </div>
    
    </section>
  )
}

export default Services