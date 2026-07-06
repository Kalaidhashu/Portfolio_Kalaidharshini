import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Java", "Python"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL"],
    },
    {
      title: "Cloud",
      skills: ["AWS","Google Cloud"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ"],
    },
  ];

  return (
    <section id="skills" className="skills">

      <div className="skills-heading">
        <span>Technical Expertise</span>
        <h1>Skills & Technologies</h1>
      </div>

      <div className="categories-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="category-card">

            <h2>{category.title}</h2>

            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-badge">
                  {skill}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;