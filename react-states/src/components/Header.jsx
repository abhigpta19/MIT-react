import "./header.css"

function Header({pageChangeFn}){
    return (
        <div className="navbar">
            <h1 className='logo'>RC</h1>
            <ul className="nav-box">
                <li className="list-item" onClick={() => pageChangeFn("home")}>Home</li>
                <li className="list-item" onClick={() => pageChangeFn("about")}>About</li>
                <li className="list-item" onClick={() => pageChangeFn("contact")}>Contact</li>
            </ul>
        </div>
    );
}

export default Header;