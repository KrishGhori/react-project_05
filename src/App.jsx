import { useState } from 'react'
import Card from './Components/Card'
import './App.css'

function App() {
 
  const [name,setname] = useState('')
  return (
    <div>
      <Card tittle="Card1" name={name} setname = {setname}></Card>
      <Card tittle="Card2" name={name} setname = {setname}></Card>
    </div>
  )
}

export default App
