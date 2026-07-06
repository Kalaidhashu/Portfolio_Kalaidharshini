import React from "react";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import "../styles/CodingProfiles.css";

const CodingProfiles = () => {

  const profiles = [
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      stats: "200+ Problems Solved",
      link: "https://leetcode.com/u/kalaidharshini/",
    },
    {
      name: "CodeChef",
      icon: <SiCodechef />,
      stats: "1★ Rating | 400+ Problems Solved",
      link: "https://www.codechef.com/users/kalaidharshini",
    },
    {
      name: "Skillrack",
      icon: "💻",
      stats: "600+ Problems Solved",
      link: "http://www.skillrack.com/profile/484040/938101cf4c5919b6d1edfcd30180336d55b5007e",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      stats: "Projects & Open Source Work",
      link: "https://github.com/Kalaidhashu",
    },
  ];

  return (
    <section id="profiles" className="profiles">

      <div className="skills-heading">
        <span>Coding Journey</span>
        <h1>Coding Profiles</h1>
      </div>

      <div className="profiles-grid">

        {profiles.map((profile, index) => (
          <div className="profile-card" key={index}>

            <div className="profile-icon">
              {profile.icon}
            </div>

            <h2>{profile.name}</h2>

            <p>{profile.stats}</p>

            <a
              href={profile.link}
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>

          </div>
        ))}

      </div>

    </section>
  );
};

export default CodingProfiles;