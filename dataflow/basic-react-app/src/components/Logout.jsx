import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
