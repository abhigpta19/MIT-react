import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';

function Logout() {
    const {user, setUser} = useContext(UserContext);
  return (
    <div style={{border: "2px solid black" ,padding:"5px", margin: "5px"}}>
        <h1>Current User : {user.name}</h1>
      <button onClick={() => setUser({...user, name: "no user"})}>Logout</button>
    </div>
  )
}

export default Logout
