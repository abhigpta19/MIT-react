import React from 'react'
import {useParams, useSearchParams, useLocation} from "react-router-dom";

console.log("Dynamic Page loaded");

function DynamicName() {
    const obj = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    const queryName = searchParams.get("name");
    const queryId = searchParams.get("id");

  return (
    <div style={{border: "2px solid black", margin: "10px", padding: "10px"}}>
      <h1>this is my dynamic name : {obj.dynamicname}</h1>
      <h1>the query parameter is : {queryName}</h1>
      <h1>the query id is : {queryId}</h1>
      <h1>the base route is : {location.pathname}</h1>
      <h1>the query paramters are : {location.search}</h1>
    </div>
  )
}

export default DynamicName
