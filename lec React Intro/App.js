
function Header(){
    const Header = <div>
    <h1>Header</h1>
</div>

return Header;
}

function Content(){
    const Content = <div>
    <h2>Content</h2>
</div>

return Content;
}

function Footer(){
    const Footer = <div>
    <h3>Footer</h3>
</div>

return Footer;
}

function App(){
    return (
        <>
        <Header/>
        <Content/>
        <Footer/>
        </>
    )
}