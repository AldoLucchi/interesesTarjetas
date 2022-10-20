import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Button from "./components/Button"
import { formatearDinero, calcularTotalPagar } from './helpers'
import logos from './img/logos.png'

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(12);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(() => {
      const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
      setTotal(resultadoTotalPagar);
  }, [cantidad, meses]);

  useEffect(() => {
      setPago(total / meses);
  }, [total]);

  const MIN = 0;
  const MAX = 200000;
  const STEP = 100;

  function handleChange(e) {
      setCantidad(+e.target.value);
  }
  
  function handleClickDecremento() {
    const valor = cantidad - STEP;

    setCantidad(valor);
  }

  function handleClickIncremento() {
    const valor = cantidad + STEP;

    setCantidad(valor);
  }

  return (
      <div className="my-2 max-w-lg mx-auto bg-gray-200 shadow p-10 rounded-3xl">
          <Header />
          
          <div className='flex justify-between my-6'> 
            <Button 
              operador='-'
              fn={handleClickDecremento}
            />
            <Button 
              operador='+'
              fn={handleClickIncremento}
            />
          </div>

          <input 
              type='range' 
              className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
              onChange={handleChange}
              min={MIN}
              max={MAX}
              step={STEP}
              value={cantidad}
          />

          <input className='text-center my-2 text-3xl font-extrabold text-lime-600'
              type='text' 
              onChange={handleChange}
              min={MIN}
              max={MAX}
              step={STEP}
              value={cantidad}
          />


          <p className='text-center my-4 text-5xl font-extrabold text-indigo-600'>
            { formatearDinero(cantidad)}
          </p>

          <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
              Elige plan de <span className='text-indigo-600 uppercase'>Cuotas </span> de la tarjeta
          </h2>
          <div className='w-32 my-3'>
            <img src={logos} alt="Imagen Logo" />
          </div>

          <select
            className='mt-1 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
            value={meses}
            onChange={ e => setMeses(+e.target.value)}
          >
              <option value="12">AHORA 12  </option>
              <option value="18">AHORA 18  </option>
          </select>

          <div className='my-5 space-y-3 bg-gray-50 p-5'>
            <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
                Resumen <span className='text-indigo-600'>de pagos </span>
            </h2>

            <p className='text-xl text-gray-500 text-center font-bold'>{meses} Cuotas</p>
            <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(total)} Total a pagar</p>
            <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(pago)} Mensuales</p>
          </div>
      </div>

      
  )
}


export default App
