import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Signup() {
    const { signup } = useAuth();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleSignup() {
        const result = signup(name, password, confirmPassword);

        if (!result.success) {
            setError(result.error);
            return;
        }

        alert("Signup successful! Please login.");
        setError("");
        navigate("/login");
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
            <div>
                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button disabled={!(name && password && confirmPassword)} onClick={handleSignup}>Signup</button>
        </div>
    )
}

export default Signup
