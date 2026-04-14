import React from 'react'
import { useNavigate, NavLink, useSearchParams } from 'react-router-dom';

console.log("header file loaded");

function Header() {
  console.log("header rendered");
  const [searchValue, setSearchValue] = React.useState("");
  const [nameValue, setNameValue] = React.useState("");
  const [ _ , setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/contact/${searchValue}`);
  }



  function activeStyle({ isActive }) {
    return {
      color: isActive ? "red" : "black"
    }
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <div>
      <ul style={{display : "flex", listStyle : "none", gap : "20px", border : "1px solid black", padding : "10px"}}>
        <li><button onClick={handleBack}>Back</button></li>
        <li><NavLink to="/" style={activeStyle}>Home</NavLink></li>
        <li><NavLink to="/about" style={activeStyle}>About</NavLink></li>
        <li><NavLink to="/contact" style={activeStyle}>Contact</NavLink></li>
        <li><input type="text" name="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} /></li>
        <button onClick={handleSearch}>Search</button>
        <li><input type="text" name="name" value={nameValue} onChange={(e) => setNameValue(e.target.value)}  /></li>
        <button onClick={() => setSearchParams({name: nameValue})}>Set Name</button>
      </ul>
    </div>
  )
}

export default Header
