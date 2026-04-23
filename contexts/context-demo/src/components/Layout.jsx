import React from 'react'
import Header from './Header'
import Products from './Products'
import Cart from './Cart'
import { CartProvider } from '../context/cartContext'

function Layout() {
  return (
    <div>
        <CartProvider>
      <Header/>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        
            <Products/>
            <Cart/>
        
        
      </div>
      </CartProvider>
    </div>
  )
}

export default Layout
