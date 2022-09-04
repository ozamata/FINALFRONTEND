import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'




const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/rohel-sanchez-229877203/' target="_blank"><BsLinkedin/></a>
        <a href='https://www.instagram.com/sanchezrohel/' target="_blank"><FaInstagramSquare/></a>
        <a href='https://www.facebook.com/rohel.sanchez' target="_blank"><BsFacebook/></a>

    </div>
  )
}

export default HeaderSocials