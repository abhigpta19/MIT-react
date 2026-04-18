import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Login() {
    const { login } = useAuth();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    console.log("login",location);

    function handleLogin() {
        const result = login(name, password);
        
        if (!result.success) {
            setError(result.error);
            return;
        }

        alert("Login successful");
        setError("");
        // navigate("/");

        navigate(location.state || "/");
    }

    return (
        <div style={{ border: "2px solid black", margin: "10px", padding: "10px" }}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div>
                <label>UserName</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button disabled={!(name && password)} onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
