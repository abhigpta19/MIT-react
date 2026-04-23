import React, { use, useContext } from 'react'
import Logout from './Logout.jsx';
import { UserContext } from '../contexts/UserContext.js';

function Sidebar() {

    const {user} = useContext(UserContext);
    console.log(user);
  return (
    <div style={{border: "2px solid black" ,padding:"5px", margin: "5px"}}>
      <h1>this is my sidebar</h1>
      <p>{user ? `Welcome, ${user.name}!` : "Not Logged In"}</p>
      <Logout/>
    </div>
  )
}

export default Sidebar
