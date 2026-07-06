import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone
} from "react-icons/fa";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">

      <div className="skills-heading">
        <span>Get In Touch</span>
        <h1>Contact Me</h1>
      </div>

      <div className="contact-grid">

        <a
          href="mailto:kalaidharshu.k06@gmail.com"
          className="contact-card"
        >
          <FaEnvelope />
          <h3>Email</h3>
          <h4>kalaidharshu.k06@gmail.com</h4>
          <p>Send a Message</p>
        </a>

        <a
          href="https://www.linkedin.com/in/kalaidharshini-k-381868291"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaLinkedin />
          <h3>LinkedIn</h3>
          <p>Visit Profile</p>
        </a>

        <a
          href="https://github.com/Kalaidhashu"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub />
          <h3>GitHub</h3>
          <p>View Projects</p>
        </a>

        <a
          href="tel:+919042406930"
          className="contact-card"
        >
          <FaPhone />
          <h3>Phone</h3>
          <h4>+91 9042406930</h4>
          <p>Contact Me</p>
        </a>

      </div>

    </section>
  );
};

export default Contact;