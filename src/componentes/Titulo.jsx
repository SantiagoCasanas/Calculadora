import React from 'react'
import '../hojas-de-estilo/titulo.css'

function Titulo(props) {
  return (
    <div className='contenedor-titulo'>
      <img 
        className='imagen-titulo'
        src={require(`../imagenes/${props.nombreImagen}.png`)}
        alt='Titulo'
        />
    </div>
  )
}

export default Titulo
