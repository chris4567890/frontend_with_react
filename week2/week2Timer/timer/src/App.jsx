import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimerThing from './componenets/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TimerThing/>
    </>
  )
}

export default App
