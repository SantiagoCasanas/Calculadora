import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { evaluate } from 'mathjs';

import { useState } from 'react';



function App() {

  const [input, setInput] = useState('');

  function cambiarInput(params) {
    setInput(input + params)
  }

  function limpiarInput() {
    setInput('')
  }

  function resolverOperacion() {
    if (input){
      setInput(evaluate(input))
    } else {
      alert("Ingrese valores para realizar los cálculos")
    }
    
  }


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo-imagen'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={cambiarInput}>1</Boton>
          <Boton manejarClic={cambiarInput}>2</Boton>
          <Boton manejarClic={cambiarInput}>3</Boton>
          <Boton manejarClic={cambiarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={cambiarInput}>4</Boton>
          <Boton manejarClic={cambiarInput}>5</Boton>
          <Boton manejarClic={cambiarInput}>6</Boton>
          <Boton manejarClic={cambiarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={cambiarInput}>7</Boton>
          <Boton manejarClic={cambiarInput}>8</Boton>
          <Boton manejarClic={cambiarInput}>9</Boton>
          <Boton manejarClic={cambiarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={resolverOperacion}>=</Boton>
          <Boton manejarClic={cambiarInput}>0</Boton>
          <Boton manejarClic={cambiarInput}>.</Boton>
          <Boton manejarClic={cambiarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear limpiarConsola={ limpiarInput }>Limpiar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
