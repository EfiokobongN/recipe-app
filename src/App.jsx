import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Recipe from './pages/Recipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Recipe/>
    </>
  )
}

export default App
