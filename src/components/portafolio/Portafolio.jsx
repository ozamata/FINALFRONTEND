import React from 'react'
import {useState,useEffect} from 'react';
import './portafolio.css';
import axios from 'axios'

// import IMG1 from '../../assets/portfolio1.jpg'
// import IMG2 from '../../assets/portfolio2.jpg'
// import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.jpg'
// import IMG6 from '../../assets/portfolio6.jpg'


// const data = [
//   {
//     id : 1,
//     image: IMG1,
//     title:'Visitando los pueblos mas olvidaros',
//     github:'https://www.youtube.com/watch?v=pTIygftOT_4',
//     demo: 'http://perulibre.pe/mas-alla-de-las-mentiras/'
//   },
  
//   {
//     id : 2,
//     image: IMG2,
//     title:'CED PERU LIBRE AREQUIPA',
//     github:'https://www.youtube.com/watch?v=koVANEpgwxU',
//     demo: 'http://perulibre.pe/secretario-general-de-peru-libre-saluda-al-pueblo-peruano-por-el-ano-nuevo-2022/'
//   },
  
//   {
//     id : 3,
//     image: IMG3,
//     title:'Saludos por el dias de la Mujer Trabajadora',
//     github:'https://www.youtube.com/watch?v=aLycUfuitM8',
//     demo: 'http://perulibre.pe/guerra-judicial-y-estigmatizacion-mediatica-el-caso-de-vladimir-cerron-y-peru-libre/'
//   },
//   {
//     id : 4,
//     image: IMG4,
//     title:'Caravana por la nueva Constitucion',
//     github:'https://www.youtube.com/watch?v=50qgoG46TMo',
//     demo: 'http://perulibre.pe/guerra-judicial-y-estigmatizacion-mediatica-el-caso-de-vladimir-cerron-y-peru-libre/'
//   },
  
//   {
//     id : 5,
//     image: IMG5,
//     title:'Encuentro con Guido Bellido',
//     github:'https://www.youtube.com/watch?v=C27HRb38cI8',
//     demo: 'http://perulibre.pe/peru-libre-rechaza-la-vacancia-presidencial/'
//   },
  
//   {
//     id : 6,
//     image: IMG6,
//     title:'Reespaldo Guido Bellido',
//     github:'https://www.youtube.com/watch?v=C27HRb38cI8',
//     demo: 'http://perulibre.pe/peru-libre-rechaza-la-vacancia-presidencial/'
//   }
  

// ];


const Portafolio = () => {

  const [listadoNoticias,setListadoNoticias] = useState([]);

  useEffect(()=>{
      axios.get('http://localhost:8000/noticias')
      .then(res=>{
          console.log(res.data)
          setListadoNoticias(res.data)
      })
  },[]);


  return (
    <section id='portafolio'>
      <h5>VISITANDO HASTA EL ULTIMO RINCON DE AREQUIPA</h5>
      <h2>NOTICIAS</h2>

      <div className="container portafolio__container">
      {
        listadoNoticias.map(({noticias_id,imagen_noticias,descripcion,video,informacion}) => {
          return (
            <article key={noticias_id} className="portafolio__item">
            <div className="portafolio_item-image">   
            <img src={imagen_noticias} alt={imagen_noticias}/>
             </div>
              <h3>{descripcion}</h3>
              <div className="portafolio__item-cta">
             <a href={video} className="btn" target="_blank">Ver video</a>
             <a href={informacion} className="btn btn-primary" target="_blank">Mas informacion</a>
          </div>
          </article>

          )

        })
        }
      </div>


    </section>
  )
}

export default Portafolio