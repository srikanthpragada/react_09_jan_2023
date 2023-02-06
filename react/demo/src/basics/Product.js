import React from 'react'

export default function Product({name, price, features}) {

  return (
    <>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <ul>
      {
        features.map( (f, idx) => <li key={idx}>{f}</li>)
      }
      </ul>
    </> 
  )
}
