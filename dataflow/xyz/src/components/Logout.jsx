import React from 'react'

function Logout() {
  return (
    <div style={{border:"2px solid black", padding:"10px", margin:"10px"}}>
      <button onClick={()=>localStorage.removeItem("auth")}>Logout</button>
    </div>
  )
}

export default Logout
