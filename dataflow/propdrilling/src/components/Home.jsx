import React from 'react'
import { UserContext } from '../contexts/UserContext';
import { ThemeContext } from '../contexts/ThemeContext';
import "./Home.css";

function Home() {
    const {user} = React.useContext(UserContext);
    const {theme} = React.useContext(ThemeContext);
  return (
    <div className={theme} style={{border: "2px solid black" ,padding:"5px", margin: "5px"}}>
      <h1>Hi! {user.name}, this is my home page</h1>
    </div>
  )
}

export default Home
