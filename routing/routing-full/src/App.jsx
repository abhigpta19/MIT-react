import React,{lazy, Suspense} from 'react'
import { Outlet, createBrowserRouter, RouterProvider, useRouteError } from 'react-router-dom';

const Header = lazy(()=>import('./components/Header.jsx'));
const Footer = lazy(()=>import('./components/Footer.jsx'));
const Home = lazy(()=>import('./components/Home.jsx'));
const About = lazy(()=>import('./components/About.jsx'));
const Contact = lazy(()=>import('./components/Contact.jsx'));
const FeedbackPage = lazy(()=>import('./components/FeedbackPage.jsx'));
const DynamicName = lazy(()=>import('./components/DynamicName.jsx'));
const Login = lazy(()=>import('./components/Login.jsx'));
const Logout = lazy(()=>import('./components/Logout.jsx'));
import ProtectedRoute from './components/ProtectedRoute.jsx';




function AppLayout()
{
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

function ErrorComponent({page}){

  const err = useRouteError();
  console.log(page, err);
  return (
    <div style={{border: "2px solid red", margin: "10px", padding: "10px"}}>
      <h1>404 Error</h1>
      <p>The page <b>{page}</b> does not exist</p>
      <h2 style={{color: "red"}}>{err.message}</h2>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement : <ErrorComponent page="app"/>,
    children: [
      {
        path : "/",
        element : (<ProtectedRoute>
          <Home/>
        </ProtectedRoute>),
        errorElement : <ErrorComponent page="home"/>
      },
      {
        path : "/about",
        element : (<ProtectedRoute>
          <About/>
        </ProtectedRoute>),
        errorElement : <ErrorComponent page="about"/>
      },
      {
        path : "/login",
        element : <Login/>
      },
      {
        path : "/logout",
        element : <Logout/>

      },
      {
        path : "/contact",
        errorElement : <ErrorComponent page="contact"/>,
        children : [
          {
            path : "/contact",
            element : (<Suspense fallback={<h1>Loading.....</h1>}>
                <Contact/>
            </Suspense>)
          },
          {
            path : "/contact/feedback",
            element : <FeedbackPage/>
          },
          {
            path : "/contact/:dynamicname",
            element : <DynamicName/>
          }
        ]
      }
    ]
  }
]);


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
