import React from 'react'
import ProductCard from './ProductCard'
import { PRODUCT_LIST } from '../const/productList'

function Products() {
  return (
    < div style={{border:"2px solid black", margin: "5px", padding:"5px"}}>
      <h2>Products Page</h2>
      <ul>
        {PRODUCT_LIST.map(product => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
