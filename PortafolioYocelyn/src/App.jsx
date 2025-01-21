import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Descripcion from '../src/Pages/Descripcion'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>

      <Descripcion/>
      

      </div>
    
  )
}

export default App
