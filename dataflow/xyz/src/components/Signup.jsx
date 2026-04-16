import React, { useState } from 'react'

function Signup() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSignup(){
        if(password !== confirmPassword)
        {
            alert("your passwrod and confirm passwrod are not same");
            return;
        }

        const registerString = localStorage.getItem("registered");
        const registeredUsers = JSON.parse(registerString) || {};

        if(registeredUsers[name])
        {
            alert("the user already found");
            return;
        }

        registeredUsers[name]=password;
        localStorage.setItem("registered",JSON.stringify(registeredUsers));
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
        <div>
            <label>Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}  />
        </div>
        <button disabled={!(name && password && confirmPassword)} onClick={handleSignup}>Signup</button>
    </div>
  )
}

export default Signup
