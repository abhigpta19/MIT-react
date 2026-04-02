// import React,{useState,memo} from 'react'

// const Count1 = memo(function({count1, setCount1}){
//   console.log("Count1 component is rendering");

//   return (
//     <div style={{ border: '1px solid black', margin: '10px' }}>
//       <h1>Count1: {count1}</h1>
//       <button onClick={() => setCount1(count1 + 1)}>Increment Count1</button>
//     </div>
//   )
// });

// const Count2 = memo(function({count2, setCount2}){

//   console.log("Count2 is rendering");

//   return (
//     <div style={{ border: '1px solid black', margin: '10px' }}>
//       <h1>Count2: {count2}</h1>
//       <button onClick={() => setCount2(count2 + 1)}>Increment Count2</button>
//     </div>
//   )
// });

// function App() {

//   console.log("App is rendering")

//   const [count1, setCount1] = useState(0);
//   const [count2,setCount2] = useState(0);

//   return (
//     <div>
//       <Count1 count1={count1} setCount1={setCount1}/>
//       <Count2 count2={count2} setCount2={setCount2}/>
//     </div>
//   )
// }

// export default App


// import React,{memo, useState,useCallback} from 'react'

// const Child = memo(function({count,onClick}){
//   console.log("the child rendered");

//   return (<>
//       <h1>{count}</h1>
//     <button onClick={onClick}>Click me</button>
//   </>);
// });

// function App() {

//   console.log("App rendered")
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);

//   const handleClick = function(){
//     console.log("the button is clicked without callback")
//     setCount(count+1);
//   };

//   return (
//     <div>
//       <h1>Count2 : {count2}</h1>
//       <button onClick={()=>setCount2(count2+1)}>Click the count2 button</button>

//       <Child count={count} onClick={handleClick}/>
//     </div>
//   )
// }

// export default App

// import {useState,useEffect} from 'react'



// function Comp1(){
//   return (<div style={{border: "2px solid black", backgroundColor: "red", padding: "5px", margin: "5px"}}>
//   <h1>this is component 1</h1>
//   </div>)
// }


// function Comp2(){
//   return (<div style={{border: "2px solid black", backgroundColor: "aqua", padding: "5px", margin: "5px"}}>
//   <h1>this is component 2</h1>
//   </div>)
// }



// function App() {

//   const [isComp1, setComp1] = useState(false);  

//   const [count , setCount] = useState(0);

//   function fn1()
//   {
//     alert("this is triggered when component is changed")
//   }

//   function fn2()
//   {
//     alert("this is triggered when count is changed")
//   }

//   function fn3(){
//     alert("this is function 3")
//   }

  
//   useEffect(fn1,[isComp1]);
//   useEffect(fn2,[count]);
//   useEffect(fn3,[]);
//   useEffect(function(){
//     alert("this is the function 4");
//   },[isComp1,count])
  
//   return (
//     <div style={{border: "2px solid black"}}>
//       <h1>This is App Comp</h1>
//       {isComp1?Comp1():Comp2()}
//       <button onClick={()=>setComp1(!isComp1)}>Toggle</button>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Inc</button>
//     </div>
//   )
// }

// export default App



// import {useState, useEffect} from 'react'

// const obj = { a: 10 ,b :20}
// const {a} = obj;

// {
//   useState : function(init){

//   }
// }


// import {useState,useEffect} from "react";

// function Counter1()
// {
//   const [count1,setCount1] = useState(0);


 

//   const style = {
//     border : "2px solid black",
//     padding: "10px",
//     margin: "10px",
//     backgroundColor : "aqua"
//   }

//   useEffect(function(){
//     alert(`the useeffect for count1 run with value ${count1}`);

//     return ()=>{
//       alert(`the cleanup for count1 run with value ${count1}`);
//     }
//   },[count1])

//   useEffect(function(){
//     alert("counter1 mounted")

//     return function(){
//       alert("the counter1 is unmounted");
//     }
//   },[])

//   alert("this is my counter 1 outside useeffect");

//   return (
//     <div style={style}>
//       <h1>Count1 is : {count1}</h1>
//       <button onClick={()=>setCount1(count1+1)}>increament</button>
//     </div>
//   )
// }

// function Counter2()
// {
//   const [count2,setCount2] = useState(0);
 

//   const style = {
//     border : "2px solid black",
//     padding: "10px",
//     margin: "10px",
//     backgroundColor : "yellow"
//   }

//   useEffect(function(){
//     alert(`the useeffect for count2 run with value ${count2}`);

//     return ()=>{
//       alert(`the cleanup for count2 run with value ${count2}`);
//     }
//   },[count2])

//   useEffect(function(){
//     alert("counter2 mounted");

//     return ()=>{
//       alert("the count2 is unmounted");
//     }
//   },[])

//   return (
//     <div style={style}>
//       <h1>Count2 is : {count2}</h1>
//       <button onClick={()=>setCount2(count2+1)}>increament</button>
//     </div>
//   )
// }

// function App() {

//   const style = {
//     border : "2px solid black",
//     padding: "10px",
//     margin: "10px",
//     backgroundColor : "red"
//   }

//   const [toggle, setToggle] = useState(true);

//   const Comp = toggle?Counter1:Counter2;

//   useEffect(function(){
//     alert("the app is mounted");

//     return ()=>{
//       alert("the app is unmounted");
//     }
//   },[])

//   return (
//     <div style={style}>
//       <h1>This is my app</h1>
//       <Comp/>
//       <button onClick={()=>setToggle(!toggle)}>Toggle</button>
//     </div>
//   )
// }

// export default App


// import React,{useState, useEffect} from 'react'
// import PasswordGen from './components/PasswordGen'
// import './App.css'

// function App() {

//   function passwordGenerator(length, isNumber, isSpecial)
//   {
//     let sampleSpace = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
//     if(isNumber)
//     {
//       sampleSpace += "0123456789";
//     }

//     if(isSpecial)
//     {
//       sampleSpace += "!@#$%^&*(){}[]?/";
//     }

//     let password = "";
//     let sampleLen = sampleSpace.length;

//     for(let i=1;i<=length;i++)
//     {
//       let randomChar = sampleSpace[Math.floor(Math.random()*sampleLen)];
//       password += randomChar;
//     }

//     return password;
//   }
  
//   const [length, setLength] = useState(10);
//   const [isNumber, setNumber] = useState(false);
//   const [isSpecial, setSpecial] = useState(true);
//   const [copied, setCopied] = useState(false);
//   const [password, setPassword] = useState(passwordGenerator(length,isNumber,isSpecial));

//   function handleCopy()
//   {
//     setCopied(true);
//     navigator.clipboard.writeText(password);
//     setTimeout(function(){
//       setCopied(false);
//     },1500);
//   }

//   useEffect(function(){
//     const newPass = passwordGenerator(length,isNumber,isSpecial);
//     setPassword(newPass);
//   },[length,isNumber,isSpecial]);


  
//   return (
//     <div className='container'>
//       <h1>Password is : {password}</h1>
//       <button onClick={handleCopy} style={copied?{backgroundColor:"red"}:{}}>{copied?"Copied!!!":"Copy"}</button>
//       <input type="range" max={20} min={8} value={length} onChange={(e)=>setLength(e.target.value)}/>
//       <h3>Lenght : {length}</h3>
//       <input type="checkbox" checked={isNumber} onClick={()=>setNumber(!isNumber)}/>
//       <h3>Numbers</h3>
//       <input type="checkbox" checked={isSpecial} onClick={()=>setSpecial(!isSpecial)}/>
//       <h3>Symbols</h3>
//     </div>
//   )
// }

// export default App


import React, { useState, useEffect } from "react";
import "./App.css";
import TodoShimmer from "./TodoShimmer";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function handleApi() {
    const response = await fetch("https://dummyjson.com/todos");
    const data = await response.json();

    setTodos(data.todos);
    setLoading(false);
  }

  useEffect(() => {
    handleApi();
  }, []);


  return (
    <div className="container">
      <h1 className="title">📝 Todo Dashboard</h1>

      {loading?<TodoShimmer/>:<div className="todo-grid">
        {todos.map((val) => {
          return (
            <div
              key={val.id}
              className={`todo-card ${
                val.completed ? "completed" : "pending"
              }`}
            >
              <h3 className="todo-text">{val.todo}</h3>
              <span className="badge">
                {val.completed ? "Done" : "Pending"}
              </span>
            </div>
          );
        })}
      </div>}
    </div>
  );
}

export default App;