import React from 'react'
import {useState,useEffect} from 'react';
import './testimonials.css'
import axios from 'axios'
// import AVRT1 from '../../assets/avatar1.jpg'
// import AVRT2 from '../../assets/avatar2.jpg'
// import AVRT3 from '../../assets/avatar3.jpg'
// import AVRT4 from '../../assets/avatar4.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';




// const data = [
//   {
//     avatar : AVRT1,
//     namee: 'RAQUEL',
//     review:'<<Raquel>> : Es un luchador siempre estuvo con el pueblo, un gran lider',
//      },
  
//      {
//       avatar : AVRT2,
//       namee: 'ROSA',
//       review:'<<Raquel>> : Guido Ramos es un luchador sociale que si podra gestionar el distrito paucaarpata para que se sea un lugar mejor',
//        },
  
//        {
//         avatar : AVRT3,
//         namee: 'LEANDRA',
//         review:'<<Leandra>> : Es un buen candidato, se que lograra llegar muy lejos, peru libre fuerza nacida del pueblo ',
//          },
//        {
//        avatar : AVRT4,
//        namee: 'DON GATO',
//        review:'<<Don gato>> : Guido Ramos sera un buen alcalde conoce toda la problematica del pueblo, conoce todo los lugares',
//       }
  
// ];





const Testimonials = () => {


  const [listadoTestimonial,setListadoTestimonial] = useState([]);

  useEffect(()=>{
      axios.get('http://localhost:8000/testimonio')
      .then(res=>{
          console.log(res.data)
          setListadoTestimonial(res.data)
      })
  },[]);





  return (
    <section id='testimonials'>
      <h5>Opiniones de nuestros simpatizantes de YO AREQUIPA</h5>
      <h2>TESTIMONIOS</h2>

      <Swiper className="container testimonial__container" modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination ={{ clickable : true }}>    
     
     
      {
        listadoTestimonial.map(({foto,nombre,descripcion}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
            <div className="cliente__avatar">   
            <img src={foto} alt="description imagen"/>
             </div>
             <h5 className="client__name">{nombre}</h5>
             <small className="client__review">{descripcion}</small>    
          </SwiperSlide>

          )

        })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials