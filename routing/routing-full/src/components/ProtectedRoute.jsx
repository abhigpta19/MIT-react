import React from 'react'
import {useNavigate, Navigate} from "react-router-dom";

function ProtectedRoute({children}) {
    const navigate = useNavigate();

    const isLogin = localStorage.getItem("auth");
    console.log("islogin" , isLogin)

    if(!isLogin)
    {
        return <Navigate to="/login"/>
    }

        return (<div>
            {children}
        </div>)
}

export default ProtectedRoute
