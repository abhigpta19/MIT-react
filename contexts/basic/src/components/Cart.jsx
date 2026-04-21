import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div>
      <h1>Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>
            ${item.price} × {item.quantity}
          </p>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h2>Total Items: {totalItems}</h2>
      <h2>Total Price: ${totalPrice}</h2>
    </div>
  );
}

export default Cart;