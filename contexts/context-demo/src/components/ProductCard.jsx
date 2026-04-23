import React,{useContext} from 'react'
import { CartContext } from '../context/cartContext'

// {
//     id: 1,
//     name: 'I Phone 14 Pro Max',
//     price: 150000,
//     description: 'This is the description for iphone 14 pro max',
//     imageUrl: 'https://cdn.mos.cms.futurecdn.net/v2/t:0,l:747,cw:1921,ch:1921,q:80,w:1921/yDn3ZSXu9eSBxmXQDZ4PCF.jpg'
//   }

function ProductCard({ product }) {

    const {addToCart} = useContext(CartContext);

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', width: '600px' }}>
      <img style={{width: "100px"}} src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toLocaleString()}</p>
      <p>{product.description}</p>
      <button onClick={()=>addToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
