function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            description: "Building responsive and user-friendly interfaces",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "React.js"
            ]
        },
        {
            title: "Backend",
            description: "Developing APIs and server-side applications",
            skills: [
                "Node.js",
                "Express.js",
                "REST APIs"
            ]
        },
        {
            title: "Database",
            description: "Working with relational and NoSQL databases",
            skills: [
                "MySQL",
                "MongoDB"
            ]
        },
        {
            title: "Programming",
            description: "Programming languages and problem solving",
            skills: [
                "C",
                "C++",
                "Java",
                "Python"
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section">

            <div className="skills-heading">

                <p className="section-label">
                    WHAT I WORK WITH
                </p>

                <h2>
                    My <span>Skills</span>
                </h2>

                <p>
                    Technologies and tools I use to build
                    web applications and software solutions.
                </p>

            </div>

            <div className="skills-grid">

                {skillCategories.map((category) => (

                    <div
                        className="skill-card"
                        key={category.title}
                    >

                        <div className="skill-card-icon">
                            &lt;/&gt;
                        </div>

                        <h3>
                            {category.title}
                        </h3>

                        <p>
                            {category.description}
                        </p>

                        <div className="skill-list">

                            {category.skills.map((skill) => (

                                <span
                                    className="skill-tag"
                                    key={skill}
                                >
                                    {skill}
                                </span>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

            <div className="learning-card">

                <div>
                    <span className="learning-label">
                        CURRENTLY EXPLORING
                    </span>

                    <h3>
                        Gen AI
                    </h3>
                </div>

                <span className="learning-arrow">
                    →
                </span>

            </div>

        </section>
    );
}

export default Skills;