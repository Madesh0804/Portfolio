function Navbar() {
    return (
        <nav className="navbar">

            <a href="#home" className="logo">
                <span></span>Madesh C<span></span>
            </a>

            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
            </div>

            <a href="#contact" className="nav-button">
                Let's Talk
            </a>

        </nav>
    );
}

export default Navbar;