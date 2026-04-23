import React,{useContext} from 'react'
import { UserContext } from '../contexts/UserContext';

function Login() {
    const {user, setUser} = useContext(UserContext);

  return (
    <div style={{border: "2px solid black" ,padding:"5px", margin: "5px"}}>
      <h1>this is my login page</h1>
      <input type="text" onChange={(e)=>setUser({...user, name: e.target.value})}/>
    </div>
  )
}

export default Login
