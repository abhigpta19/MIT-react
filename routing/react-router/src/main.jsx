import { StrictMode, use, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
// import Header from './components/Header.jsx'
// import Footer from './components/Footer.jsx'
// import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import Contact from './components/Contact.jsx'
// import ContactName from './components/ContactName.jsx'

const Header = lazy(() => import('./components/Header.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
const Home = lazy(() => import('./components/Home.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const ContactName = lazy(() => import('./components/ContactName.jsx'));

import { createBrowserRouter, RouterProvider, Outlet, useRouteError } from 'react-router-dom'
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("auth");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

function Login(){

  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("auth", "true");
    navigate(-1);
  }
  
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

function Logout(){

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("auth");
    navigate("/login");
  }
  
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}


function AppLayout(){
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

function ErrorPage({error}){

  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>404 Not Found {error.statusText}</h1>
      <p style={{color:"red"}}>{err.message}</p>
    </div>
  )
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement : <ErrorPage error="layout error"/>,
    children : [
      {
        path : "/",
        element : <Home/>,
        errorElement : <ErrorPage error="home error"/>
      },
      {
        path: "/about",

        element: (<ProtectedRoute>
          <About/>
          </ProtectedRoute>),
        errorElement : <ErrorPage error="about error"/>
      },
      {
        path: "/login",
        element: <Login/>,
        errorElement : <ErrorPage error="login error"/>
      },
      {
        path: "/logout",
        element: <Logout/>,
        errorElement : <ErrorPage error="logout error"/>
      },
      {
        path: "/contact",
        children: [
          {
            path: "/contact",
            element: (<Suspense fallback={<h1>Loading...</h1>}>
              <ProtectedRoute>
                <Contact/>
              </ProtectedRoute>
              </Suspense>) ,
            errorElement : <ErrorPage error="contact error"/>
          },
          {
            path: "/contact/feedback",
            element: <h1>Feedback Page</h1>,
            errorElement : <ErrorPage error="feedback error"/>
          },
          {
            path: "/contact/:dynamic",
            element: <ContactName/>,
            errorElement : <ErrorPage error="contact name error"/>
          }
        ]

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
