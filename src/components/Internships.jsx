import React from "react";
import "../styles/Internships.css";
import internPe from "../assets/internships/InternpeCerti.png";
import Algotutor from "../assets/internships/MFSD.png";

const internships = [
  {
    company: "InternPe",
    role: "Python Programming Intern",
    description:
      "Worked on Python-based applications and practical assignments that strengthened programming fundamentals, problem-solving skills, debugging techniques, and software development practices.",
    certificate: internPe,
  },

  {
  company: "Better Tomorrow",
  role: "MERN Stack Intern",
  description:
    "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Built REST APIs, integrated databases, and designed responsive user interfaces.",
  certificate: null,
  status: "Project-Based Internship",
},

  {
    company: "AlgoTutor",
    role: "Modern Full Stack Development Intern",
    description:
      "Built modern web applications using Next.js, GraphQL APIs, and NoSQL databases. Gained experience in scalable architecture, authentication, deployment, and API integration.",
    certificate: Algotutor,
  },
];

const Internships = () => {
  return (
    <section id="internships" className="internships">

      <div className="skills-heading">
        <span>Professional Experience</span>
        <h1>Internships</h1>
      </div>

      <div className="timeline">

        {internships.map((item, index) => (
          <div className="timeline-item" key={index}>

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <h2>{item.company}</h2>

              <h3>{item.role}</h3>

              <p>{item.description}</p>

              {item.certificate ? (
  <a
    href={item.certificate}
    target="_blank"
    rel="noreferrer"
  >
    View Certificate
  </a>
) : (
  <span className="internship-badge">
    {item.status}
  </span>
)}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Internships;