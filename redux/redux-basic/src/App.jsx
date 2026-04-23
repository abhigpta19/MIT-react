import React, { useState, useEffect } from 'react'
import { store } from './test.js'

function App() {

  const [state, setState] = useState(store.getState());
  const ref = React.useRef();
  
  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);
  
  const { name, age, city, balance } = state;
  const dispatch = store.dispatch;
  
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Balance: {balance}</p>

      <input type="text" ref={ref}/>
      <button onClick={() => dispatch({type: "CHANGE_NAME", payload: ref.current.value})}>Update Name</button>
      <button onClick={() => dispatch({type: "CHANGE_CITY", payload: ref.current.value})}>Update City</button>
      <button onClick={() => dispatch({type: "INCREASE_BALANCE", payload: parseInt(ref.current.value)})}>Increase Balance</button>
      <button onClick={() => dispatch({type: "DECREASE_BALANCE", payload: parseInt(ref.current.value)})}>Decrease Balance</button>
      <button onClick={() => dispatch({type: "CHANGE_AGE", payload: parseInt(ref.current.value)})}>Update Age</button>
    </div>
  )
}

export default App
