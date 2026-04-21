// import React,{createContext, useContext} from 'react'
// import {createBrowserRouter, NavLink, Outlet, RouterProvider, useOutletContext} from 'react-router-dom'

// const UserContext = createContext({user: "default"});

// const Header = () => {
//   const {user} = useContext(UserContext);

//   return (
//     <div style={{border:"2px solid black"}}>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/about">About</NavLink>
//       <NavLink to="/contact">Contact</NavLink>

//       <NavLink to="/login">Login</NavLink>
//       <h1>Welcome, {user}!</h1>
//     </div>
//   )
// }

// const Footer = () => {
//   return (
//     <div>
//       <h1>Footer</h1>
//     </div>
//   )
// }




// function Layout() {
//   const [user, setUser] = React.useState("Abhishek");

//   return (
//     <UserContext.Provider value={{user, setUser}}>
//     <div>
//       <UserContext.Provider value={{user:"eleven", setUser}}>
//         <Header />
//       </UserContext.Provider>
//       <Outlet context={{type: "inside outlet"}} />
//       <Footer />
//     </div>
//     </UserContext.Provider>
//   )
// }

// function Home() {
//   const {type} = useOutletContext();
//   console.log(type);

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <h1>{type}</h1>
//     </div>
//   )
// }

// function About() {
//   return (
//     <div>
//       <h1>About Page</h1>
//     </div>
//   )
// }

// function Contact() {
//   const {user} = useContext(UserContext);
//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <h2>Contact {user} for more information.</h2>
//     </div>
//   )
// }

// function Login() {
//   const [username, setUsername] = React.useState("");
//   const {setUser} = useContext(UserContext);
//   return (
//     <div>
//       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       <button onClick={() => setUser(username)}>Login</button>
//       <h1>Login Page</h1>
//     </div>
//   )
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {path: "/", element: <Home />}, 
//       {path: "about", element: <About />},
//       {path: "contact", element: <Contact />},
//       {path: "login", element: <Login />}
//     ]
//   }
// ]);


// function App() {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   )
// }

// export default App


import { createBrowserRouter, NavLink, Outlet, RouterProvider } from "react-router-dom";
import { CartProvider } from "./contexts/cartContext.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";

const Navbar = () => {
  return (
    <div style={{border: "2px solid black", padding: "10px"}}>
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  )
}

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Products /> },
      { path: "/cart", element: <Cart /> }
    ]
  }
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;