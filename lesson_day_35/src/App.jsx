import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToggleHeart } from './components/ToggleHeart'
import { ToggleExample } from './components/ToggleExample'
import { Counter } from './components/Counter'
import { TicTacToe } from './components/TicTacToe'
import { Products } from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToggleHeart />
      <ToggleExample />
      <Counter />
      <TicTacToe />
      <Products />
    </>
  )
}

export default App
