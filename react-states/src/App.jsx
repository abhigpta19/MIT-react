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


// import React, { useState, useEffect } from "react";
// import "./App.css";
// import TodoShimmer from "./TodoShimmer";

// function App() {
//   const [search, setSearch] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [allTodos, setAllTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   console.log("app rendered");

//   async function handleApi() {
//     const response = await fetch("https://dummyjson.com/todos");
//     const data = await response.json();

//     setAllTodos(data.todos);
//     setLoading(false);
//   }

//   useEffect(() => {
//     handleApi();
//   }, []);

//   useEffect(()=>{
    
//     const newTodos = allTodos.filter(function(val){
//       return val.todo.toLowerCase().includes(search.toLowerCase());
//     });
//     setTodos(newTodos);
//   },[search]);

//   // return <TodoShimmer/>


//   return (
//     <div className="container">
//       <h1 className="title">📝 Todo Dashboard</h1>

//       <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />

//       {loading?<TodoShimmer/>:<div className="todo-grid">
//         {todos.map((val) => {
//           return (
//             <div
//               key={val.id}
//               className={`todo-card ${
//                 val.completed ? "completed" : "pending"
//               }`}
//             >
//               <h3 className="todo-text">{val.todo}</h3>
//               <span className="badge">
//                 {val.completed ? "Done" : "Pending"}
//               </span>
//             </div>
//           );
//         })}
//       </div>}
//     </div>
//   );
// }

// export default App;


// import React,{useState,useEffect, useRef} from 'react'
// import TodoShimmer from './TodoShimmer'

// function App() {

//   const [allTodos, setAllTodos] = useState([]);
//   const [filteredTodos, setFilteredTodos] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//   // const timeoutId = useRef(null);

//   async function handleApi()
//   {
//     const response = await fetch("https://dummyjson.com/todos");
//     const data = await response.json();

//     setAllTodos(data.todos);
//     setLoading(false);
//   }

//   function handleSearch(){
//     console.log("the filtering triggered");
//     const filtered = allTodos.filter(function(val){
//       return val.todo.toLowerCase().includes(search.toLowerCase());
//     });
//     setFilteredTodos(filtered);
//   }

//   useEffect(function(){
//     handleApi();
//   },[])

//   useEffect(function(){

//     const timeoutId = setTimeout(handleSearch,500);

//     return function(){
//       clearTimeout(timeoutId);
//     }
//   },[search,allTodos])

//   if(loading)
//     return <TodoShimmer/>;
  

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
//       <ul>
//         {filteredTodos.map((val)=>(
//           <li key={val.id}>{val.todo}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { AbortableSearch } from './components/AbortableSearch'

// function App() {

//   const [todos, setTodos] = React.useState([]);
//   const controllerRef = React.useRef(null);

//     async function handleApi()
//   {
//     if(controllerRef.current)
//     {
//       controllerRef.current.abort();
//     }

//     const controller = new AbortController();
//     controllerRef.current = controller;

//     const response = await fetch("https://dummyjson.com/todos",{signal: controller.signal });
//     const data = await response.json();

//     setTodos(data.todos);

//   }

  
//     return (
//     <div>
//       <h1>Todo List</h1>
//       <button onClick={handleApi}>Fetch Data</button>
//       <ul>
//         {todos.map((val)=>(
//           <li key={val.id}>{val.todo}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }


// export default App



// import React,{useMemo} from 'react'
// import { AbortableSearch } from './components/AbortableSearch'

// const Child = React.memo(function({val, handleClick}){
//   console.log("the child rendered");

//   return (<>
//       <h1>{val.value}</h1>
//     <button onClick={handleClick}>Click me</button>
//     </>);
// })

// function App() {

//   const [count, setCount] = React.useState(0);

//   const val = useMemo(function(){
//     return {value : 10};
//   },[]);

//   const handleClick = React.useCallback(function(){ 
//     console.log("the button is clicked without callback")
//   },[]);

//   return (
//     <div>
//       <Child val={val} handleClick={handleClick}/>

//      <h1>Count : {count}</h1>
//      <button onClick={()=>setCount(count+1)}>Inc Count</button>

//     </div>
//   )
// }

// export default App





// function App() {
//   const [query, setQuery] = useState("");

//   const debounceRef = useRef(null);

//   const handleSearch = (value) => {
//     clearTimeout(debounceRef.current);

//     debounceRef.current = setTimeout(() => {
//       console.log("API Call:", value);
//     }, 500);
//   };

//   const controllerRef = useRef(null);

// const fetchData = async (query) => {
//   if (controllerRef.current) {
//     controllerRef.current.abort();
//   }

//   controllerRef.current = new AbortController();

//   try {
//     const res = await fetch(`/api?q=${query}`, {
//       signal: controllerRef.current.signal,
//     });
//     const data = await res.json();
//   } catch (err) {
//     if (err.name === "AbortError") {
//       console.log("Request cancelled");
//     }
//   }
// };

// const filteredData = useMemo(() => {
//   console.log("Filtering...");
//   return data.filter(item => item.includes(query));
// }, [data, query]);

//   return (
//     <input
//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//     />
//   );
// }


// import React, {
//   useState,
//   useMemo,
//   useCallback,
//   useRef,
//   useEffect,
// } from "react";

// // 🔥 Render Counter Hook
// function useRenderCount(name) {
//   const count = useRef(0);
//   count.current++;
//   console.log(`${name} rendered:`, count.current);
//   return count.current;
// }

// // 🔥 Child Component (List)
// const List = React.memo(({ items }) => {
//   const renders = useRenderCount("List");

//   return (
//     <div style={styles.box}>
//       <h3>List Component (renders: {renders})</h3>
//       {items.map((item) => (
//         <div key={item.id}>{item.todo}</div>
//       ))}
//     </div>
//   );
// });

// // 🔥 Child Component (Button)
// const Button = React.memo(({ onClick }) => {
//   const renders = useRenderCount("Button");

//   return (
//     <div style={styles.box}>
//       <h3>Button Component (renders: {renders})</h3>
//       <button onClick={onClick}>Click Me</button>
//     </div>
//   );
// });

// export default function Hashing() {
//   const [count, setCount] = useState(0);
//   const [search, setSearch] = useState("");
//   const [todos, setTodos] = useState([]);

//   const renders = useRenderCount("App");

//   // 🔥 Fetch data from DummyJSON
//   useEffect(() => {
//     console.log("🌐 Fetching todos...");
//     fetch("https://dummyjson.com/todos?limit=100")
//       .then((res) => res.json())
//       .then((data) => setTodos(data.todos));
//   }, []);

//   // ❌ BAD: Filtering runs on EVERY render
//   const filteredItems = useCallback(() => {
//     console.log("❌ Filtering items...");
//     return todos.filter((item) =>
//       item.todo.toLowerCase().includes(search.toLowerCase())
//     );
//   };

//   // ❌ BAD: new function every render
//   const handleClick = () => {
//     console.log("button clicked");
//   };

//   return (
//     <div style={styles.container}>
//       <h2>🔥 React Optimization Demo (With API)</h2>
//       <h3>App renders: {renders}</h3>

//       {/* Search */}
//       <input
//         style={styles.input}
//         placeholder="Search todos..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* Re-render trigger */}
//       <button onClick={() => setCount(count + 1)}>
//         Re-render App ({count})
//       </button>

//       <div style={styles.flex}>
//         <List items={filteredItems()} />
//         <Button onClick={handleClick} />
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "20px",
//     fontFamily: "sans-serif",
//   },
//   flex: {
//     display: "flex",
//     gap: "20px",
//     marginTop: "20px",
//   },
//   box: {
//     border: "1px solid #ccc",
//     padding: "10px",
//     width: "300px",
//     maxHeight: "300px",
//     overflowY: "auto",
//   },
//   input: {
//     padding: "8px",
//     marginRight: "10px",
//   },
// };






import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";

// 🔥 Render Counter Hook
function useRenderCount(name) {
  const count = useRef(0);
  count.current++;
  console.log(`${name} rendered:`, count.current);
  return count.current;
}

// 🔥 Child Component (List)
const List = React.memo(({ items, type }) => {
  const renders = useRenderCount("List");

  return (
    <div style={styles.box}>
      <h3>List ({type}) renders: {renders}</h3>

      {items.map((item, i) => (
        <div key={i}>
          {type === "todos" ? item.todo : item.login}
        </div>
      ))}
    </div>
  );
});

// 🔥 Child Component (Button)
const Button = React.memo(({ onClick }) => {
  const renders = useRenderCount("Button");

  return (
    <div style={styles.box}>
      <h3>Button renders: {renders}</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});

export default function Hashing() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [type, setType] = useState("todos"); // 🔥 which API

  const renders = useRenderCount("App");

  // 🔥 Fetch TODOS
  const fetchTodos = async () => {
    console.log("🌐 Fetching TODOS...");
    const res = await fetch("https://dummyjson.com/todos?limit=100");
    const json = await res.json();
    setData(json.todos);
    setType("todos");
  };

  // 🔥 Fetch USERS
  const fetchUsers = async () => {
    console.log("🌐 Fetching USERS...");
    const res = await fetch("https://api.github.com/users");
    const json = await res.json();
    setData(json);
    setType("users");
  };

  // ❌ BAD: filtering runs every render
  const filteredItems = () => {
    console.log("❌ Filtering items...");
    return data.filter((item) => {
      const value =
        type === "todos" ? item.todo : item.login;

      return value
        ?.toLowerCase()
        .includes(search.toLowerCase());
    });
  };

  // ❌ BAD: new function each render
  const handleClick = () => {
    console.log("button clicked");
  };

  return (
    <div style={styles.container}>
      <h2>🔥 React Optimization Demo (Multi API)</h2>
      <h3>App renders: {renders}</h3>

      {/* Search */}
      <input
        style={styles.input}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Buttons */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setCount(count + 1)}>
          Re-render App ({count})
        </button>

        <button onClick={fetchTodos} style={{ marginLeft: "10px" }}>
          Load Todos
        </button>

        <button onClick={fetchUsers} style={{ marginLeft: "10px" }}>
          Load Users
        </button>
      </div>

      <div style={styles.flex}>
        <List items={filteredItems()} type={type} />
        <Button onClick={handleClick} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif",
  },
  flex: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  },
  box: {
    border: "1px solid #ccc",
    padding: "10px",
    width: "300px",
    maxHeight: "300px",
    overflowY: "auto",
  },
  input: {
    padding: "8px",
    marginRight: "10px",
  },
};


// import React,{useState, memo, useMemo, useCallback} from 'react'

// const Child= memo(function({val, handleClick}) {

//   console.log("the child rendered")
//   return (
//     <div>
//       <h1>Value : {val.value}</h1>
//       <button onClick={handleClick}>Click Child</button>
//     </div>
//   )
// })


// function App() {
//   const [count, setCount] = useState(0);

//   console.log("App rendered");

//   // const handleChildClick = useMemo(function(){
//   //   return function()
//   // {
//   //   console.log("the child button is clicked")
//   // }},[]);  wrong method

//   const handleChildClick = useCallback(function(){
//     console.log("teh child button is clicked");
//   },[]);

//   const val = useMemo(function(){
//     return {value : 10};
//   },[]);

 

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={()=>setCount(count+1)}>Click App</button>

//       <Child val={val} handleClick={handleChildClick}/>
//     </div>
//   )
// }

// export default App






// function App() {

//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);

//   function heavyfn(val)
//   {
//     console.log("the heavy function is called");
//     for(let i=0;i<1000000000;i++);

//     return 2*val;

//   }

//   // const val = heavyfn()
//   const val = useMemo(function(){
//     return heavyfn(count);
//   },[count]);
//   // const val = 10;

//   return (
//     <div>
//       <h1>Val: {val}</h1>
//        <h1>Count : {count}</h1>
//       <button onClick={()=>setCount(count+1)}>Click</button>

//       <h1>Count2 : {count2}</h1>
//       <button onClick={()=>setCount2(count2+1)}>Click count 2</button>
//     </div>
//   )
// }

// export default App
