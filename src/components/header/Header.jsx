import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css'
import ME from '../../assets/me.png'



const Header = () => {  


  return (




    <div className='container header__container'>
      <h5>Por una Region moderna</h5>
      <h1>👍ROHEL SANCHEZ SANCHEZ👍</h1>
      <h5 className='text-light'>Candidato gobernador de Arequipa</h5>   
  <CTA />
  <HeaderSocials />
<div className="me">
  <img src={ME} alt="me"/>
</div>
<a href="#contact" className='scroll__down'>Desplazarte hacia abajo</a>
    

    

    </div>


  )
}

export default Header