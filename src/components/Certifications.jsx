import React from "react";
import "../styles/Certifications.css";
import aws from "../assets/certificates/aws.png";
import nptel from "../assets/certificates/nptel.png";
import codeGallata from "../assets/certificates/galata.png";
import udemy from "../assets/certificates/udemy.png";
import infosys from "../assets/certificates/infosys.png";
import iitBombay from "../assets/certificates/js.png";
import awsPDF from "../assets/certificates/awsPDF.pdf";
import nptelPDF from "../assets/certificates/nptelPDF.pdf";
import codeGallataPDF from "../assets/certificates/gallataPDF.pdf";
import udemyPDF from "../assets/certificates/udemyPDF.pdf";
import infosysPDF from "../assets/certificates/infosysPDF.pdf";
import iitBombayPDF from "../assets/certificates/jsPDF.pdf";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    image: aws,
    link: awsPDF,
  },
  {
    title: "NPTEL - Understanding Incubation & Entrepreneurship",
    image: nptel,
    link: nptelPDF,
  },
  {
    title: "Code Gallata Certifications",
    image: codeGallata,
    link: codeGallataPDF,
  },
  {
    title: "Udemy - Mastering Data Structures & Algorithms",
    image: udemy,
    link: udemyPDF,
  },
  {
    title: "Infosys - Python Fundamentals",
    image: infosys,
    link: infosysPDF,
  },
  {
    title: "EduPyramids & IIT Bombay - JavaScript Training",
    image: iitBombay,
    link: iitBombayPDF,
  },
];

const Certifications = () => {
  return (
    <section id="certificates" className="certifications">

      <div className="skills-heading">
        <span>Professional Learning</span>
        <h1>Certifications</h1>
      </div>

      <div className="cert-grid">

        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>

            <div className="cert-image">
              <img src={cert.image} alt={cert.title} />
            </div>

            <h3>{cert.title}</h3>

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Certifications;