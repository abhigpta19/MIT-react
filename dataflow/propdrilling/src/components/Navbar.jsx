import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from "../contexts/UserContext.js"
import { ThemeContext } from '../contexts/ThemeContext.js';

function Navbar() {
    const {user} = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);

  return (
      <div style={{border: "2px solid black" ,padding:"5px", margin: "5px", display: "flex", gap: "10px", justifyContent: "space-between"}}>
        <div style={{display: "flex", gap: "10px"}}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
        <div>
            <button onClick={()=>setTheme(theme==="light"?"dark":"light")}>ToggleTheme</button>
            <div>{user ? `Welcome, ${user.name}!` : "Not Logged In"}</div>
            <div>{theme ? `Current theme: ${theme}` : "Theme not set"}</div>
        </div>
        
      </div>
  )
}

export default Navbar
