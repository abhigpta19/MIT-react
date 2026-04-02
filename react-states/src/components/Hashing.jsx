// import React, { useState } from "react";

// function slowFunction(num) {
//   console.log("Running slow function...");
//   for (let i = 0; i < 1e9; i++) {} // simulate heavy work
//   return num * 2;
// }

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const result = slowFunction(count);

//   return (
//     <div>
//       <h2>Result: {result}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment Count
//       </button>

//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//       />
//     </div>
//   );
// }





// import React, { useState, useMemo } from "react";

// function slowFunction(num) {
//   console.log("Running slow function...");
//   for (let i = 0; i < 1e9; i++) {}
//   return num * 2;
// }

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const result = useMemo(() => {
//     return slowFunction(count);
//   }, [count]);

//   return (
//     <div>
//       <h2>Result: {result}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment Count
//       </button>

//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//       />
//     </div>
//   );
// }



// import React, { useState, useMemo } from "react";

// export default function App() {
//   const [search, setSearch] = useState("");
//   const [count, setCount] = useState(0);

//   const items = ["apple", "banana", "orange", "grape", "mango"];

//   const filteredItems = useMemo(() => {
//     console.log("Filtering...");
//     return items.filter((item) =>
//       item.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [search]);

//   return (
//     <div>
//       <input
//         placeholder="Search fruit"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <ul>
//         {filteredItems.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>

//       <button onClick={() => setCount(count + 1)}>
//         Re-render ({count})
//       </button>
//     </div>
//   );
// }




// import React, { useState } from "react";

// const Child = ({ items, handleClick }) => {
//   console.log("Child Rendered");
//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//       <ul>
//         {items.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default function App() {
//   const [count, setCount] = useState(0);

//   const items = ["apple", "banana", "orange"];

//   const handleClick = () => {
//     console.log("Clicked");
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>
//         Re-render Parent
//       </button>

//       <Child items={items} handleClick={handleClick} />
//     </div>
//   );
// }


// [] !== []   // true
// () => {} !== () => {} // true


// const Child = React.memo(({ items, handleClick }) => {
//   console.log("Child Rendered");
//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//       <ul>
//         {items.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// });




// import React, { useState, useMemo, useCallback } from "react";

// const Child = React.memo(({ items, handleClick }) => {
//   console.log("Child Rendered");
//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//       <ul>
//         {items.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// });

// export default function App() {
//   const [count, setCount] = useState(0);

//   const items = useMemo(() => {
//     return ["apple", "banana", "orange"];
//   }, []);

//   const handleClick = useCallback(() => {
//     console.log("Clicked");
//   }, []);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>
//         Re-render Parent
//       </button>

//       <Child items={items} handleClick={handleClick} />
//     </div>
//   );
// }

import React, { useState, useMemo, useCallback, useRef } from "react";

// 🔥 Render Counter Hook
function useRenderCount(name) {
  const count = useRef(0);
  count.current++;
  console.log(`${name} rendered:`, count.current);
  return count.current;
}

// 🔥 Child Component (List)
const List = React.memo(({ items }) => {
  const renders = useRenderCount("List");

  return (
    <div style={styles.box}>
      <h3>List Component (renders: {renders})</h3>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
});

// 🔥 Child Component (Button)
const Button = React.memo(({ onClick }) => {
  const renders = useRenderCount("Button");

  return (
    <div style={styles.box}>
      <h3>Button Component (renders: {renders})</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});

export default function Hashing() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const renders = useRenderCount("App");

  // 🔥 Large Data (simulate heavy work)
//   const data = useMemo(() => {
//     console.log("Generating data...");
//     return Array.from({ length: 100 }, (_, i) => `Item ${i}`);
//   }, []);

const data = () => {
    console.log("Generating data...");
    return Array.from({ length: 100 }, (_, i) => `Item ${i}`);
  };

  // ❌ Without useMemo → filtering runs every render
//   const filteredItems = useMemo(() => {
//     console.log("Filtering items...");
//     return data.filter((item) =>
//       item.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [search, data]);

const filteredItems = () => {
    console.log("Filtering items...");
    return data().filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  };

//   ❌ Without useCallback → new function each render
//   const handleClick = useCallback(() => {
//     console.log("Button clicked");
//   }, []);

const handleClick = ()=>{
    console.log("button clicked")
}

  return (
    <div style={styles.container}>
      <h2>🔥 Ultimate React Optimization Demo</h2>
      <h3>App renders: {renders}</h3>

      {/* Search */}
      <input
        style={styles.input}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Re-render trigger */}
      <button onClick={() => setCount(count + 1)}>
        Re-render App ({count})
      </button>

      <div style={styles.flex}>
        <List items={filteredItems()} />
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
  },
  input: {
    padding: "8px",
    marginRight: "10px",
  },
};