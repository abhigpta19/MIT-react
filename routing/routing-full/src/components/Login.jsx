import React from 'react'

console.log("Login loaded");

function Login() {

    function handleLogin()
    {
        localStorage.setItem("auth",true);
    }
    
  return (
    <div>
      <h1>this is my login page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
