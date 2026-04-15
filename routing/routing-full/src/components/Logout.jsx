import React from 'react'
console.log("logout page loaded")
function Logout() {

    function handleLogout()
    {
        localStorage.removeItem("auth");
    }
    
  return (
    <div>
      <h1>this is my logout page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
