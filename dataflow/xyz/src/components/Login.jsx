import React, { useState } from 'react'

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin()
    {
        const regiteredStr = localStorage.getItem("registered");
        const registeredUsers = JSON.parse(regiteredStr) || {};
        
        if(!registeredUsers[name])
        {
            alert("user not found");
            return;
        }

        if(password !== registeredUsers[name])
        {
            alert("incorrect password");
            return;
        }

        alert("login successful")
        localStorage.setItem("auth",true);
    }

  return (
    <div style={{border:"2px solid black", margin: "10px",padding: "10px"}}>
        <div>
            <lable>UserName</lable>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        
        <div>
            <label>Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button disabled={!(name && password)} onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
