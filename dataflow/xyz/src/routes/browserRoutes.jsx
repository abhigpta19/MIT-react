import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Login = lazy(()=>import('../components/Login.jsx'))
const Logout = lazy(()=>import('../components/Logout.jsx'))
const Signup = lazy(()=>import('../components/Signup.jsx'))
const Home = lazy(()=>import('../components/Home.jsx'))
const About = lazy(()=>import("../components/About.jsx"));
const Contact = lazy(()=>import("../components/Contact.jsx"));
const Github = lazy(()=>import('../components/Github.jsx'))
const Todos = lazy(()=>import('../components/Todos.jsx'))
const AppLayout = lazy(()=>import('../layouts/AppLayout.jsx'))

export const router = createBrowserRouter([{
    path : "/",
    element : <AppLayout/>,
    children : [
        {
            path : '/',
            element : <Home/>
        },
        {
            path : '/about',
            element : <About/>
        },
        {
            path : '/contact',
            element : <Contact/>
        },
        {
            path: "/login",
            element : <Login/>
        },
        {
            path: "/logout",
            element: <Logout/>
        },
        {
            path: '/signup',
            element : <Signup/>
        },
        {
            path: '/github',
            element : <Github/>
        },
        {
            path : "/todos",
            element: <Todos/>
        }
    ]
}]);