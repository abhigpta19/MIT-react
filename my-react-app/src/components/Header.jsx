import "./header.css"

function Header({setPage}){
    return (
        <div className="navbar">
            <h1 className='logo'>RC</h1>
            <ul className="nav-box">
                <li className="list-item" onClick={()=>setPage("home")}>Home</li>
                <li className="list-item" onClick={()=>setPage("about")}>About</li>
                <li className="list-item" onClick={()=>setPage("contact")}>Contact</li>
            </ul>
        </div>
    );
}

export default Header;