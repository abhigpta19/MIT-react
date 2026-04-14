import React from 'react'
import {createBrowserRouter, Outlet, RouterProvider, useRouteError} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Contacts from './components/Contacts'

function AppLayout()
{
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}

const Error = function({component}){

  const err = useRouteError();
  console.log(component);
  console.log(err);

  return (
    <div>
      <h1>404 not found {component}</h1>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error component="Home" />,
    children: [
      { path: "/", element: <Home /> }, 
      { path: "/contacts", element: <Contacts /> },
    ]
  }
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
