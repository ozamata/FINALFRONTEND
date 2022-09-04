import React from 'react'
import './Landings404Page.css'
import { Link, useNavigate } from 'react-router-dom';

const Landings404Page = () => {
  const navigate = useNavigate();
  return (


    <body className='cuerpo'>
      <section className='error-message'>
        <section className='error-message__container '>
        <h1 className='animated bounce'>ERROR 404</h1>
        <p>Pagina no Encontrada</p>
        </section>

        <button
              className="l-404-page__message-link l-404-page__message-link--active"
              onClick={() => navigate(-1)}
            >
              Go Backs
            </button>
            <Link to="/" className="l-404-page__message-link">Go to Home Page</Link>


      </section>

    <footer className='footer'>
     <a href="https://www.facebook.com/SolucionesTIAQP" target='_blank'>Terminos de Uso
     </a>
     <a href="https://www.facebook.com/SolucionesTIAQP" target='_blank'>Declaracion de privasidad
     </a>
     <a href="https://www.facebook.com/SolucionesTIAQP" target='_blank'>Centro de ayuda
     </a><a href="">
     </a>
     </footer>
    </body>
  

  )
}

export default Landings404Page