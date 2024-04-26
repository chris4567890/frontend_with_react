import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import upper from './file1'
import { text1,text2,text3 } from './file1'
import obj,{males,females} from './file2'

const person = obj;
const {firstname,email} = person;
const nameArrays = [...males,...females,"Helle","Tina"];
const personV2n= {...person,phone:112,nameArrays};
function App() {
  
  return(
    <div>
      <h2>Ex 1
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
    </h2>
    <h2>Ex 2
      <p>{firstname},{email}</p>
      <p>{males}</p>
      <p>{nameArrays}</p>
      <p></p>
    </h2>
    </div>
    
       
  )
}

export default App
