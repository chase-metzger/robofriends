import React, { useState } from 'react'

export default function CounterButton ({ color }) {
  const [count, setCount] = useState(0)
  return <button color={color} onClick={() => setCount(count + 1)}>Count: {count}</button>
}
