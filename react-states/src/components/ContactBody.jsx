
import "./contactbody.css";

function ContactBody() {
    return (
        <div className="contact">

            <div className="contact-container">

                <h1 className="contact-title">Contact Us</h1>

                <p className="contact-text">
                    Have questions or want to work with us? Send us a message!
                </p>

                <form className="contact-form">

                    <input 
                        type="text" 
                        placeholder="Your Name"
                        className="contact-input"
                    />

                    <input 
                        type="email" 
                        placeholder="Your Email"
                        className="contact-input"
                    />

                    <textarea 
                        placeholder="Your Message"
                        className="contact-textarea"
                    ></textarea>

                    <button className="contact-button">
                        Send Message
                    </button>

                </form>

            </div>

        </div>
    );
}

export default ContactBody;
