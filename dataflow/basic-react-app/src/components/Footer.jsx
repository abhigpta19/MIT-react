import React from 'react'
import { useComponentSize } from '../hooks/useComponentSize'

function Footer() {
  const { ref, size} = useComponentSize();
  
  return (
    <div ref={ref} style={{border:"2px solid black", margin: "10px"}}>
      <h1>This is a footer</h1>
      <h2>Width: {size.width}</h2>
      <h2>Height: {size.height}</h2>
    </div>
  )
}

export default Footer
