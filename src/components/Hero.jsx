import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile/profile3.png";
import resume from "../assets/resume/Kalaidharshini_Resume.pdf";
import { FiDownload } from "react-icons/fi";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Kalaidharshini K
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Full Stack Developer | Cloud Enthusiast
        </motion.h2>

        <p>
          AWS Certified Cloud Practitioner passionate about building scalable
          web applications, AI-powered solutions, and cloud-based systems.
          I enjoy solving real-world problems through innovative technology
          and continuous learning.
        </p>

<div className="hero-buttons">

  {/* View Resume */}
  <a
    href={resume}
    target="_blank"
    rel="noreferrer"
    className="resume-btn"
  >
    Resume
  </a>

  {/* Download Resume */}
  <a
    href={resume}
    download="Kalaidharshini_Resume.pdf"
    className="download-btn"
    title="Download Resume"
  >
    <FiDownload />
  </a>

  <a href="#projects" className="project-btn">
    View Projects
  </a>

</div>

      </div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={profile} alt="Kalaidharshini" />
      </motion.div>

    </section>
  );
};

export default Hero;