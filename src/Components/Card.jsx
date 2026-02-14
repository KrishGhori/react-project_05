import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className="card">
      <input 
        type="text" 
        placeholder="Enter your name"
        onChange={(e)=> props.setname(e.target.value)} 
      />
      <p>you are inside a child, you entered: {props.name}</p>
    </div>
  )
}


export default Card
