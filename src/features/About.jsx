import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import resume from "../images/resume.pdf";

import "../styling/about.css";

/**
 *
 * @component this file features the About page of this personal site
 * displaying further information and contact info.
 */

export default function About() {
  const [pdfWindow, setPdfWindow] = useState(null);

  const openPdfInNewTab = () => {
    const newWindow = window.open(resume, "_blank");
    setPdfWindow(newWindow);
  };

  return (
    <article className="about">
      <img
        className="headshot"
        src="https://res.cloudinary.com/dzpne110u/image/upload/v1713531473/personalWebsite/webShot_in9bq6.png"
        alt="personal headshot for about me page"
      />
      <div className="aboutSection">
        <h2 className="title">SKILLS</h2>
        <p className="skills">
          Git | Node | HTML | CSS | JavaScript | React | Redux | Next.js |
          Express | Prisma | Postman | Photoshop | Procreate | Figma
        </p>
        <button className="resumeButton" onClick={openPdfInNewTab}>
          View Resume
        </button>
      </div>
      <section className="aboutSection">
        <p className="title">EXPERIENCE</p>
        <header className="work" id="topWorkTitle">
          RISD Illustration Graduate & Visual Artist:{" "}
        </header>
        <h6 className="jobTag">
          Bachelor's Degree, Illustration Department 1999 - 2003
        </h6>
        <p className="aboutContent">
          My professional journey began in the world of visual arts, where I
          further developed my design skills and aesthetic eye.
        </p>
        <header className="work">Tattoo Artist:</header>
        <h6 className="jobTag">
          Freelance Tattooer / Graphic Artist 2005 - 2015
        </h6>
        <p className="aboutContent">
          For 20 years, I've brought stories to life through my work in 2D and
          3D design, perfecting my technical craft in the art form of tattooing
          and custom personalized designing.
        </p>
        <header className="work">Business Owner:</header>
        <h6 className="jobTag">
          Wild Wind Tattoo, Owner / Operator 2015 - 2024
        </h6>
        <p className="aboutContent">
          Managing my own small business for 10 years taught me the ropes of
          client relations, project management, and strategic planning.
        </p>
        <header className="work">Fullstack Developer:</header>
        <h6 className="jobTag">
          Fullstack Academy 1/24 - 4/24 focused on front / backend development,
          & databases.
        </h6>
        <p className="aboutContent">
          Today, I blend these experiences to build creative digital solutions.
          Whether leading a team, collaborating, or flying solo, I thrive on
          turning thoughtful concepts into functional realities.
        </p>
      </section>
      <div className="aboutSection">
        <h3 className="funFactsTitle">Fun Facts</h3>
        <ul className="list">
          <li className="listItem">
            <IoCheckmark className="checkmark" />
            Toured Europe for a whole summer in a band at the age of 16.
          </li>
          <li className="listItem">
            <IoCheckmark className="checkmark" />
            Clinched 2nd place in a demolition derby with an old car of mine.
          </li>
          <li className="listItem">
            <IoCheckmark className="checkmark" />
            Crossed the finish line at the Chicago Marathon four times.
          </li>
        </ul>
      </div>
    </article>
  );
}
