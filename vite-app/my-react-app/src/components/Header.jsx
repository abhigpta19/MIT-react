import "./header.css"

function Header(){
    return (
        <div className="navbar">
            <h1 className='logo'>RC</h1>
            <ul className="nav-box">
                <li className="list-item">Home</li>
                <li className="list-item">About</li>
                <li className="list-item">Contact</li>
            </ul>
        </div>
    );
}

export default Header;