import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6dnv7ie', 'template_ktiwl2n', form.current, 'Rnjn4DppXBjMoCBAZ')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });

e.target.reset()


  };

  return (
    <section id='contact'>
      <h5>Ponerse en Contacto</h5>
      <h2>CONTACTAME</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Correo</h4>
            <h5>rohelsanchez1@gmail.com</h5>
            <a href="mailto:josecarhuas736@gmail.com" target="_blank">Enviar Mensaje</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>rohel.sanchez</h5>
            <a href="https://m.me/ricardogui.gonzalesmedina" target="_blank">Enviar Mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsap</h4>
            <h5>+51951136410</h5>
            <a href="https://api.whatsapp.com/send?phone=51951136410" target="_blank">Enviar Mensaje</a>
          </article>

        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Nombres completos'required id="" />
            <input type="email" name="email" placeholder='Tu correo ' required id=""  />
            <textarea name="message" id=""  rows="7" placeholder='Tu Mensaje' required></textarea>
            <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
          </form>
      </div>
    </section>
  )
}

export default Contact