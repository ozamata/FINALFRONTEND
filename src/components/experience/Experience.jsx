import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    
<h5>QUE HABILIDAD TENGO</h5>
<h2>EXPERIENCIA</h2>

<div className="container experience__container">
  <div className="experience__frontend">
<h3>PROVINCIAL</h3>
<div className="experience__content">
    <article className="experience__details">
    <BsPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>Rector Unsa </h4>
    <small className="text-light">2 años</small>
    </div>
    </article>

    <article className="experience__details">
    <BsPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>Candidato gobernacion</h4>
    <small className="text-light">Proyecto</small>
    </div>

    </article>

    <article className="experience__details">
    <BsPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>Docente </h4>
    <small className="text-light">20 años</small>
    </div>
    </article>

    <article className="experience__details">
    <BsPatchCheckFill className='experience__details-icon'/>
    <div> <h4>Contador</h4>
    <small className="text-light">5 años</small>
    </div>
    </article>





  </div>
  </div>

  <div className="experience__Backend">
    <h3>REGIONAL</h3>
    <div className="experience__content">
        <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
        <div> <h4>DOCENCIA UNIVERSIDAD SAN AGUSTIN</h4>
        <small className="text-light">2 años</small>
        </div>
        </article>

        <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
        <div><h4>DECANO</h4>
        <small className="text-light">2 años</small>
        </div>
        </article>

        <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>GERENCIA</h4>
        <small className="text-light">2 años</small>
        </div>
        </article>

        <article className="experience__details">
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>APOYO EN OTRAS AREAS</h4>
        <small className="text-light">2 años</small>
        </div>
        </article>



      </div>
      </div>

    </div>






    </section>
  )
}

export default Experience