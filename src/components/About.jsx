import React from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaLaptopCode, FaAws } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">

      <h1 className="section-title">About Me</h1>

      <div className="about-container">

        <div className="about-left">
          <p>
I am <span>Kalaidharshini K,</span> a Computer and Communication Engineering
student at <span>Sri Eshwar College of Engineering.</span>
Passionate about <span>Full Stack Development, Artificial Intelligence, Cloud Computing and Problem Solving.</span>
</p>
   <div className="education-card">
   <h3>B.E Computer & Communication Engineering</h3>
   <p>Sri Eshwar College of Engineering</p>
   <span>2023 - 2027</span>
   </div>

          <p>
            I continuously enhance my technical expertise through projects,
            internships, certifications, and coding challenges. My goal is to
            build scalable solutions that create meaningful real-world impact
            while exploring emerging technologies.
          </p>
        </div>

        <div className="about-right">

          <div className="info-card">
            <FaGraduationCap />
            <span>Sri Eshwar College of Engineering</span>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <span>Coimbatore, Tamil Nadu</span>
          </div>

          <div className="info-card">
            <FaLaptopCode />
            <span>Full Stack Developer</span>
          </div>
          <div className="info-card">
            <FaAws />
            <span>AWS Certified Cloud Practitioner</span>
          </div>

          <div className="info-card">
            <BsRobot />
            <span>AI Enthusiast</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;