import React, { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(1)

  function increment() {
     setCounter(counter + 1)
     console.log(counter);
  }

  return (
    <>
    <h1>Counter</h1>
    <h2>{counter}</h2>
    <button onClick={increment}>Increment</button>
    </>
  )
}
