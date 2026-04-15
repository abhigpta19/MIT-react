import React from 'react'
import {useLocation} from "react-router-dom"

console.log("home loaded")

function Home() {

    // useState();
    const location = useLocation();

  return (
    <div style={{border: "2px solid black", margin: "10px", padding: "10px"}}>
      <h1>This is my home page</h1>
      <h1>the base url is : {location.pathname}</h1>
      <h1>the search is : {location.search}</h1>
    </div>
  )
}

export default Home
