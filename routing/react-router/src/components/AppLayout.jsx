import React from 'react'
import Header from './Header'
import Footer from './Footer'

console.log("app layout file loaded");

function AppLayout({children}) {
  console.log("app layout rendered");
  return (
    <div>
      <Header />
        {children} 
      <Footer/>
    </div>
  )
}

export default AppLayout
