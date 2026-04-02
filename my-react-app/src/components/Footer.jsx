import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h2 className="footer-logo">RC</h2>
                    <p className="footer-text">
                        Building modern web experiences with React.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +91 9876543210</p>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 RC. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;