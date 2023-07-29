import React from 'react'
import '../hojas-de-estilo/boton.css'

function Boton( props ) {

    const esOperador = params => {
        return isNaN(params) && (params !== '.') && (params !== '=')
    }

  return (
    <div
    className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
    onClick={() => props.manejarClic(props.children)}>
      { props.children }
    </div>
  )
}

export default Boton
