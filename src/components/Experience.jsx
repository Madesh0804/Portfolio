function Experience() {
    return (
        <section
            id="experience"
            className="experience-section"
        >

            <div className="experience-heading">

                <p className="section-label">
                    MY JOURNEY
                </p>

                <h2>
                    Experience <span>&</span> Education
                </h2>

                <p>
                    My professional experience and academic
                    journey in computer science and web development.
                </p>

            </div>

            <div className="timeline">

                {/* EXPERIENCE */}

                <div className="timeline-item">

                    <div className="timeline-dot"></div>

                    <div className="timeline-content">

                        <div className="timeline-top">

                            <span className="timeline-date">
                                Dec 2025 – Present
                            </span>

                            <span className="timeline-type">
                                EXPERIENCE
                            </span>

                        </div>

                        <h3>
                            MERN Stack Trainee
                        </h3>

                        <h4>
                            KST Infotech · Palavanthangal, Chennai
                        </h4>

                        <p>
                            Working as a MERN Stack Trainee,
                            developing full-stack web applications
                            using React.js, Node.js, Express.js,
                            and MySQL.
                        </p>

                        <p>
                            Currently contributing to the development of the
                            company's website by designing and building its
                            user interface using React.js, with a focus on
                            creating responsive, user-friendly, and modern
                            web experiences.
                        </p>

                        <div className="experience-tags">

                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MySQL</span>
                            <span>REST API</span>

                        </div>

                    </div>

                </div>


                {/* EDUCATION */}

                <div className="timeline-item">

                    <div className="timeline-dot"></div>

                    <div className="timeline-content">

                        <div className="timeline-top">

                            <span className="timeline-date">
                                2022 – 2026
                            </span>

                            <span className="timeline-type">
                                EDUCATION
                            </span>

                        </div>

                        <h3>
                            B.E. Computer Science Engineering
                        </h3>

                        <h4>
                            MEPCO Schlenk Engineering College,
                            Sivakasi
                        </h4>

                        <p>
                            Pursuing a Bachelor of Engineering
                            in Computer Science Engineering with
                            a CGPA of 6.77.
                        </p>

                        <div className="education-highlight">
                            <span>CGPA</span>

                            <strong>
                                6.77
                            </strong>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Experience;