import React, { useState } from 'react'
import './reduxintro.js'

function App() {
  const [state, setState] = useState({count : 0});

  function handleClick()
  {
    setState({...state,count:state.count+1});
    console.log(state.count);
  }

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default App
