function About() {
    return (
        <section id="about" className="about-section">

            <div className="about-heading">

                <p className="section-label">
                    GET TO KNOW ME
                </p>

                <h2>
                    About <span>Me</span>
                </h2>

            </div>

            <div className="about-container">

                <div className="about-content">

                    <h3>
                        I'm a Full-Stack Developer
                    </h3>

                    <p>
                        I am a Computer Science Engineering student
                        with a strong interest in full-stack web
                        development and software application development.
                    </p>

                    <p>
                        I have hands-on experience building web
                        applications using React.js, Node.js,
                        Express.js, MySQL, and MongoDB, along with
                        developing REST APIs and implementing
                        authentication features.
                    </p>

                    <p>
                        Currently, I am working as a MERN Stack Trainee,
                        where I contribute to developing responsive and
                        user-friendly web experiences.
                    </p>

                    <a
                        href="#contact"
                        className="about-button"
                    >
                        Let's Connect →
                    </a>

                </div>

                <div className="about-highlights">

                    <div className="highlight-card">

                        <span className="highlight-number">
                            MERN
                        </span>

                        <p>
                            Full-Stack Development
                        </p>

                    </div>

                    <div className="highlight-card">

                        <span className="highlight-number">
                            REST
                        </span>

                        <p>
                            API Development
                        </p>

                    </div>

                    <div className="highlight-card">

                        <span className="highlight-number">
                            MySQL
                        </span>

                        <p>
                            Database Management
                        </p>

                    </div>

                    <div className="highlight-card">

                        <span className="highlight-number">
                            2026
                        </span>

                        <p>
                            Engineering Graduate
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;