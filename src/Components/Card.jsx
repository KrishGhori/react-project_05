import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=> props.setname(e.target.value)} />
      <p>you are inside a child , you enter :- {props.name}</p>
    </div>
  )
}

export default Card
