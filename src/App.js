import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import { evaluate } from 'mathjs';

import { useState } from 'react';
import Titulo from './componentes/Titulo';



function App() {

  const [input, setInput] = useState('');

  const esOperador = params => {
    return isNaN(params) && (params !== '.') && (params !== '=') && (params !== '')
  }

  const esNumero = params => {
    return !isNaN(params)
  }

  

  function cambiarInput(params) {
    let ultimoSimbolo = input.charAt(input.length - 1)
    
    if(input==='' && (params==='*' ||  params==='/')){
      alert("Ingrese valores para realizar los cálculos")
    }else if(esNumero(ultimoSimbolo) || esNumero(params)){
      setInput(input + params)
    }else if(esOperador(ultimoSimbolo) && esOperador(params)) {
      setInput(input.substring(0, input.length - 1) + params)
    }
    
  }

  function limpiarInput() {
    setInput('')
  }

  function resolverOperacion() {
    if (input){
      setInput(evaluate(input).toString())
    } else {
      alert("Ingrese valores para realizar los cálculos")
    }
    
  }


  return (
    <div className='App'>
      <Titulo nombreImagen={'Calculator'}/>
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
          <BotonClear limpiarConsola={ limpiarInput }>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
