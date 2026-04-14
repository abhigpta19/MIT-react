import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// function Header() {
//   return (
//     <div>
//       <Link to="/">Home</Link>
//       <Link to="/contacts">Contacts</Link>
//       <Link to="/about">About</Link>
//     </div>
//   )
// }

// function Header() {
//   return (
//     <div>
//       <a href="/">Home</a>
//       <a href="/contacts">Contacts</a>
//     </div>
//   )
// }

function Header() {
  return (
    <div>
      <NavLink to="/" style={(isActive) => { return { backgroundColor: isActive ? 'lightgray' : 'white' } }}>Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </div>
  )
}

export default Header
