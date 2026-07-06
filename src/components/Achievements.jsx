import React from "react";
import "../styles/Achievements.css";

import lunara1 from "../assets/achievements/lunara1.jpg";
import lunara2 from "../assets/achievements/lunara2.jpg";

import insomnia1 from "../assets/achievements/insomnia1.jpg";
import insomnia2 from "../assets/achievements/insomnia2.jpg";

import codelee1 from "../assets/achievements/codelee1.jpg";
import codelee2 from "../assets/achievements/codelee2.jpg";

const achievements = [
  {
    title:
      "Special Mention Award - Lunara 2K25 Product Expo",

    description:
      "Our team CareConnect received a Special Mention Certificate for the innovative project 'IoT-Based Elderly Assistance and Care System' at Lunara 2K25 Product Expo organized by Bannari Amman Institute of Technology.",

    images: [lunara1, lunara2],
  },

  {
    title:
      "3rd Place - Code Insomnia 24-Hour Coding Marathon",

    description:
      "Secured 3rd Place as Team NUMERO UNO in the Code Insomnia 24-hour coding marathon. Competed in coding challenges, debugging, technical quizzes, jumbled code rounds, peer challenges, and project development.",

    images: [insomnia1, insomnia2],
  },

  {
    title:
      "2nd Prize - Codelee Function",

    description:
      "Won 2nd Prize in the Codelee Function competition for solving programming challenges on the Skillrack platform and demonstrating strong problem-solving abilities.",

    images: [codelee1, codelee2],
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">

      <div className="skills-heading">
        <span>Recognition & Success</span>
        <h1>Achievements</h1>
      </div>

      <div className="achievement-container">

        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>

            <div className="achievement-content">

              <h2>{item.title}</h2>

              <p>{item.description}</p>

            </div>

            <div className="achievement-images">

              <img
                src={item.images[0]}
                alt="achievement"
              />

              <img
                src={item.images[1]}
                alt="achievement"
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Achievements;