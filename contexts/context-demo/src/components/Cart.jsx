import React,{useContext} from 'react'
import CartItems from './CartItems'
import { CartContext } from '../context/cartContext'

function Cart() {

    const {cart: cartItems,  totalPriceofCart} = useContext(CartContext);
    console.log(cartItems);

  return (
    <div style={{border:"2px solid black", margin:"5px", padding: "5px"}}>
        <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <CartItems key={item.id} cartItem={item} />
      ))}
      <h1>
        Total Cart Price : {totalPriceofCart()}
      </h1>
    </div>
  )
}

export default Cart
