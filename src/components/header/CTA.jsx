import React from 'react'
import CV from  '../../assets/cv.pdf'


const CTA = () => {
  return (
    <div className='cta'>
    <a href='#contact' className='btn btn-primary'>CONTACTANOS</a>
    <a href={CV}download className='btn'>DESCARGAR PLAN DE GOBIERNO</a>
    
    </div>

  )
}

export default CTA