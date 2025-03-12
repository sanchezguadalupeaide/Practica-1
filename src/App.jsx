import { useState } from 'react'
import './App.css'
import { Busqueda } from './assets/Componentes/Busqueda'

function App() {
  const [buscarPersonaje, setBuscarPersonaje] = useState("")

  return (
    <>
      <Busqueda buscarPersonaje={buscarPersonaje} setBuscarPersonaje={setBuscarPersonaje}/>
    </>
  )
}

export default App
