function Projects() {

    const projects = [
        {
            year: "2026",
            title: "Sending Mail OTP Verification using MERN",
            category: "Full-Stack Web Application",
            description:
                "A user authentication and profile management application with registration, login, profile management, image upload, password change, and email OTP verification.",
            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "MySQL",
                "REST API"
            ]
        },
        {
            year: "2025",
            title: "Movie Ticket Booking using MERN",
            category: "Full-Stack Web Application",
            description:
                "A movie ticket booking web application with user authentication, movie browsing, showtime selection, seat booking, and an admin dashboard for managing movies, theaters, schedules, pricing, and bookings.",
            technologies: [
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js"
            ]
        },
        {
            year: "2024",
            title: "Bus Ticket Booking using DBMS",
            category: "Database Application",
            description:
                "A bus ticket booking application that allows users to search buses, check seat availability, and book tickets, while administrators manage routes, schedules, buses, and fares.",
            technologies: [
                "Java",
                "DBMS",
                "NetBeans"
            ]
        },
    ];

    return (
        <section id="projects" className="projects-section">

            <div className="projects-heading">

                <p className="section-label">
                    MY WORK
                </p>

                <h2>
                    Featured <span>Projects</span>
                </h2>

                <p>
                    A selection of applications and systems
                    I have built while developing my skills.
                </p>

            </div>

            <div className="projects-grid">

                {projects.map((project) => (

                    <div
                        className="project-card"
                        key={project.title}
                    >

                        <div className="project-top">

                            <span className="project-year">
                                {project.year}
                            </span>

                            <span className="project-number">
                                0{projects.indexOf(project) + 1}
                            </span>

                        </div>

                        <p className="project-category">
                            {project.category}
                        </p>

                        <h3>
                            {project.title}
                        </h3>

                        <p className="project-description">
                            {project.description}
                        </p>

                        <div className="project-technologies">

                            {project.technologies.map(
                                (technology) => (
                                    <span
                                        key={technology}
                                    >
                                        {technology}
                                    </span>
                                )
                            )}

                        </div>

                        <div className="project-footer">

                            <span>
                                Project
                            </span>

                            <span className="project-arrow">
                                ↗
                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Projects;