import { useState } from 'react'
import Card from './Components/Card'
import './App.css'

function App() {
  const [name, setname] = useState('')

  return (
    <div className="app-container">
      <Card name={name} setname={setname} />
      <Card name={name} setname={setname} />
    </div>
  )
}


export default App
