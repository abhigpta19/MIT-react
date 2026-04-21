import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useComponentSize } from '../hooks/useComponentSize'
import './Header.css'

function Header() {
    const { isAuth } = useAuth();

    function handleStyle({ isActive }) {
        return {
            color: isActive ? "red" : "black"
        };
    }

    return (
        <>
            <ul className='list-container'>
                <div className='list-container'>
                    <li className='list-item'><NavLink to="/" style={handleStyle}>Home</NavLink></li>
                    <li className='list-item'><NavLink to="/github" style={handleStyle}>Github</NavLink></li>
                    <li className='list-item'><NavLink to="/todos" style={handleStyle}>Todos</NavLink></li>
                    <li className='list-item'><NavLink to="/contact" style={handleStyle}>Contact</NavLink></li>
                    <li className='list-item'><NavLink to="/about" style={handleStyle}>About Us</NavLink></li>
                </div>
                <div className='list-container'>
                    {isAuth ? <li><NavLink to="/logout">Logout</NavLink></li> : (
                        <>
                            <li className='list-item'><NavLink to="/login" style={handleStyle}>Login</NavLink></li>
                            <li className='list-item'><NavLink to="/signup" style={handleStyle}>Signup</NavLink></li>
                        </>
                    )}
                </div>
            </ul>
            
        </>
    )
}

export default Header
