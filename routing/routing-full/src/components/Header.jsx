import React from 'react'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';

//link navlink
console.log("header loaded");

function Login()
{
  function handleLogin()
  {
    localStorage.setItem("auth",true);
  }

  return <button onClick={handleLogin}>Login</button>
}

function Logout()
{
  function handleLogout()
  {
    localStorage.removeItem("auth");
  }

  return <button onClick={handleLogout}>Logout</button>
}

function handleStyle({isActive})
{
    return {color : isActive ? "red" : "black"};
}

function Header() {
    const [search, setSearch] = React.useState("");
    const [query, setQuery] = React.useState("");

    const navigate = useNavigate();
    const [_, setSearchParms] = useSearchParams();


    function handleSearch(){
        navigate(`/contact/${search}`);
    }

    function handleQuery()
    {
        setSearchParms({name: query, id:1234, phone: 1234567890});
    }
    
    function handleBack()
    {
        navigate(-1);
    }

  return (
    <ul style={{display: "flex", gap: "20px", listStyle: "none", border: "2px solid black", padding: "10px"}}>
        <li><button onClick={handleBack}>Back</button></li>
        <li><NavLink to="/" style={handleStyle}>Home</NavLink></li>
        <li><NavLink to="/about" style={handleStyle}>About</NavLink></li>
        <li><NavLink to="/contact" style={handleStyle}>Contact</NavLink></li>
        {/* <li><input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /></li>
        <li><button onClick={handleSearch}>Dy</button></li>
        <li><input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} /></li>
        <li><button onClick={handleQuery}>Qr</button></li> */}

        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/logout">Logout</NavLink></li>
    </ul>
  )
}

export default Header
