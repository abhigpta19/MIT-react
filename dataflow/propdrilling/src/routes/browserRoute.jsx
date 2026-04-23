import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../components/Home";
import Login from "../components/Login";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/login",
                element : <Login/>
            }
        ]
    }
])