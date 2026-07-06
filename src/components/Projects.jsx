import React from "react";
import "../styles/Projects.css";

import aiBlog from "../assets/projects/AIBlog.png";
import skillCertify from "../assets/projects/skill-certify.png";
import elderlyCare from "../assets/projects/elderly-care.png";
import careconectdemo from "../assets/projects/careconnectdemo.mp4";

const Projects = () => {

  const projects = [
    {
      title: "AI Content Creation & Blogging Platform",

      description:
        "A full-stack AI-powered blogging platform that enables users to generate, create, edit, and publish blog content efficiently. The platform integrates AI-assisted content generation, secure authentication, role-based access, and responsive design to deliver a seamless content creation experience.",

      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "AI API"
      ],

      image: aiBlog,

      github: "https://github.com/Kalaidhashu/aiblog-frontend.git",
      demo: "https://aiblog-frontend-beta.vercel.app",
      demoText: "Live Demo",
    },

    {
      title: "Skill Certify",

      description:
        "An online learning platform focused on Artificial Intelligence and Data Science. It provides structured courses, certifications, and learning resources that help students and professionals enhance their technical skills and career growth.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
      ],

      image: skillCertify,

      github: "https://github.com/Kalaidhashu/SkillCertify.git",
    },

{
  title: "IoT Smart Elderly Care System",

  description:
    "An intelligent healthcare monitoring system designed for elderly individuals. The project includes heart-rate monitoring, fall detection, real-time IoT data tracking through ThingSpeak, and emergency notifications using Twilio to improve safety and healthcare assistance.",

  tech: [
    "Arduino",
    "NodeMCU",
    "ThingSpeak",
    "Twilio",
    "IoT"
  ],

  image: elderlyCare,

  demo: careconectdemo,
  demoText: "Watch Demo",
},
  ];

  return (
    <section id="projects" className="projects">

      <div className="skills-heading">
        <span>Featured Work</span>
        <h1>Projects</h1>
      </div>

      {projects.map((project, index) => (
        <div
          className={`project-card ${
            index % 2 !== 0 ? "reverse" : ""
          }`}
          key={index}
        >

          <div className="project-image">
            <img
              src={project.image}
              alt={project.title}
            />
          </div>

          <div className="project-content">

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="tech-stack">

              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}

            </div>

<div className="project-buttons">

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
  )}

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer"
    >
      {project.demoText || "Live Demo"}
    </a>
  )}

</div>

          </div>

        </div>
      ))}

    </section>
  );
};

export default Projects;