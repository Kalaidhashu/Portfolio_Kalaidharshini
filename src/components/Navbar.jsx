import React from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Kalaidharshini</div>

      <ul className="nav-links">
        <li><Link to="home" smooth duration={500}>Home</Link></li>
        <li><Link to="about" smooth duration={500}>About</Link></li>
        <li><Link to="skills" smooth duration={500}>Skills</Link></li>
        <li><Link to="profiles" smooth duration={500}>Profiles</Link></li>
        <li><Link to="projects" smooth duration={500}>Projects</Link></li>
        <li><Link to="internships" smooth duration={500}>Internships</Link></li>
        <li><Link to="certifications" smooth duration={500}>Certificates</Link></li>
        <li><Link to="achievements" smooth duration={500}>Achievements</Link></li>
        <li><Link to="contact" smooth duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;