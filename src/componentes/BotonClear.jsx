import React from 'react'
import '../hojas-de-estilo/boton-clear.css'

function BotonClear(props) {
  return (
    <div 
    className='boton-clear'
    onClick={() => props.limpiarConsola()}>
      {props.children}
    </div>
  )
}

export default BotonClear
