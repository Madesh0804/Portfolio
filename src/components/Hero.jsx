function Hero() {
    return (
        <section id="home" className="hero">

            <div className="hero-content">

                <p className="hero-greeting">
                    👋 HELLO, I'M
                </p>

                <h1>Madesh C</h1>

                <h2>
                    Full-Stack Developer
                    <span> & </span>
                    API Developer
                    
                </h2>

                <p className="hero-description">
                    I build responsive web applications, scalable REST APIs,
                    and database-driven applications using JavaScript, React,
                    Node.js, MongoDB, and MySQL.
                </p>

                <div className="hero-buttons">

                    <a href="#projects" className="primary-button">
                        View My Work
                    </a>

                    <a href="/resume.pdf" className="secondary-button">
                        Download Resume
                    </a>

                </div>

            </div>

            <div className="hero-visual">

                <div className="glow-circle"></div>

                <div className="code-card">

                    <div className="code-header">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="code-content">

                     <p>
                        <span className="purple">
                            const
                        </span>{" "}
                            developer = {"{"}
                    </p>

                    <p>
                        &nbsp;&nbsp;name:{" "}
                        <span className="green">
                            "Madesh C"
                        </span>,
                    </p>

                    <p>
                        &nbsp;&nbsp;role:{" "}
                        <span className="green">
                            "Full-Stack Developer"
                        </span>,
                    </p>

                    <p>
                        &nbsp;&nbsp;frontend:{" "}
                        <span className="green">
                            "React"
                        </span>,
                    </p>

                    <p>
                        &nbsp;&nbsp;backend:{" "}
                        <span className="green">
                            "Node.js"
                        </span>,
                    </p>

                    <p>
                        &nbsp;&nbsp;database:{" "}
                        <span className="green">
                            "MongoDB & MySQL"
                        </span>
                    </p>

                    <p>
                        {"}"};
                    </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;