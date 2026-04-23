import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

//  {
//             id: 1,
//             name: "I phone 14 Pro Max",
            // imageUrl: 'https://www.shutterstock.com/image-photo/closeup-top-view-macbook-by-260nw-2460310013.jpg',
//             price: 150000,
//             quantity: 3
//         }

function CartItems({ cartItem }) {
    const {addToCart, removeFromCart} = useContext(CartContext);
  return (
    <div style={{border:"1px solid black", margin:"5px", padding: "5px", display: "flex", alignItems: "center"}}>
      <img src={cartItem.imageUrl} alt={cartItem.name} style={{width: "100px"}}/>

      <div style={{border:"2px solid black", margin: "5px" , padding : "5px"}}>
        <h3>{cartItem.name}</h3>
        <p>Price per item: ${cartItem.price.toLocaleString()}</p>
        <button onClick={()=>addToCart(cartItem)}>+</button>
        <p>Quantity: {cartItem.quantity}</p>
        <button onClick={()=>removeFromCart(cartItem)}>-</button>
        <h3>Total Price: ${(cartItem.price * cartItem.quantity).toLocaleString()}</h3>
      </div>
        
    </div>
  )
}

export default CartItems
