import React from 'react'
import {useParams} from "react-router-dom"

function ContactName() {
  const res = useParams();
  console.log(res);
  return (
    <div>
      <h1>this is contact name page with dynamic value {res.dynamic}</h1>
    </div>
  )
}

export default ContactName
