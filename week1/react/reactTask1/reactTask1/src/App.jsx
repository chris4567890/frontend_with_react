import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Welcome,MultiWelcome,WelcomePerson } from './file3'
import { persons } from './file2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h3>Ex 3
      </h3>
      <Welcome name="Patrick destroyer of worlds"/>    
      <MultiWelcome/>
     
      
     </div>
    </>
  )
}

export default App
