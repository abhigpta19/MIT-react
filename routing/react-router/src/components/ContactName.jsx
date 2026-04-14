import React from 'react'
import {useParams, useLocation, useSearchParams} from "react-router-dom"

console.log("contact name file loaded");

function ContactName() {
  console.log("contact name rendered");
  const res = useParams();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  console.log(res);
  console.log(location);
  console.log(searchParams.get("name"));

  return (
    <div>
      <h1>this is contact name page with dynamic value {res.dynamic}</h1>
      <h1>the name is {searchParams.get("name")}</h1>
    </div>
  )
}

export default ContactName
