import "./homebody.css";

function HomeBody() {
    return (
        <div className="home">

            <section className="hero">
                <h1 className="hero-title">
                    Welcome to React World 🚀
                </h1>

                <p className="hero-text">
                    Learn modern web development using React, JavaScript,
                    and powerful frontend tools.
                </p>

                <div className="hero-buttons">
                    <button className="btn-primary">Get Started</button>
                    <button className="btn-secondary">Learn More</button>
                </div>
            </section>

        </div>
    );
}

export default HomeBody;
