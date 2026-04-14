import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import ContactName from './components/ContactName.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import App from '../../src/App.jsx'

function AppLayout(){
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        children: [
          {
            path: "/contact",
            element: <Contact/> 
          },
          {
            path: "/contact/feedback",
            element: <h1>Feedback Page</h1>
          },
          {
            path: "/contact/:dynamic",
            element: <ContactName/>
          }
        ]

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
