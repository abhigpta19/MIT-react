import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

function Header() {
    const {cart} = useContext(CartContext);
  return (
    <div style={{border: "2px solid black", display: "flex", height:"60px", justifyContent:"space-between", padding:"10px"}} >
      <p>Home</p>
      <div>
        ({cart.length})
        <img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png" style={{height: "40px"}} />
      </div>
      
    </div>
  )
}

export default Header
