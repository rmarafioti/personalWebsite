import React, { useState } from "react";
import { wildWindContent } from "./ProjectContent";
import Popup from "../hooks/PopUp";
import usePopUp from "../hooks/usePopUp";
import { TbPointFilled } from "react-icons/tb";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

import "../styling/project3.css";

export default function Project2() {
  const { popUp, popUpContent, openPopUp, closePopUp } = usePopUp();

  return (
    <>
      <article id="projectBody">
        <div>
          <div id="imageContainer">
            <img
              id="projectImageWWT"
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1726971932/wildWindSite/screencapture-wildwindtattoo-2024-09-21-21_23_34-edit_wttdum.png"
              alt="image of landing page for project"
            />
          </div>
        </div>
        <section className="projectDescription">
          <h1 className="projectHeader">Wild Wind Tattoo Website</h1>
          <p className="projectContent">
            Fully responsive custom website built using the Next.js, the site
            features SEO customization, ensuring optimal search engine
            performance.
          </p>
          <h2 id="features">Features:</h2>
          <section>
            <div>
              <p className="featureHeaders">
                <TbPointFilled />
                Email.js Integration
              </p>
              <p className="projectContent">
                A custom contact form streamlines communication and appointment
                booking.
              </p>
            </div>
            <div>
              <p className="featureHeaders">
                <TbPointFilled />
                Stripe API
              </p>
              <p className="projectContent">
                Enables easy purchase of gift certificates, with potential for
                future online store expansion.
              </p>
            </div>
            <div>
              <p className="featureHeaders">
                <TbPointFilled />
                DocuSign Integration
              </p>
              <p className="projectContent">
                Electronic waivers reduce paper waste and improve the client
                experience.
              </p>
            </div>
            <div>
              <p className="featureHeaders">
                <TbPointFilled />
                Accessibility & Performance
              </p>
              <p className="projectContent">
                Achieved perfect scores for SEO and Accessibility with
                Lighthouse, and zero accessibility issues with Axe DevTools.
              </p>
            </div>
          </section>
          <p className="projectParagraph"></p>
          <p>Created With:</p>
          <p className="projectContent">HTML, CSS, JAVASCRIPT, NEXT.JS</p>
          <div
            className="devProcess"
            onClick={() => openPopUp(wildWindContent)}
          >
            VIEW DEVELOPMENT PROCESS
            <HiMagnifyingGlassPlus className="magnify" />
          </div>
          <button className="buttonWork">
            <a
              target="_blank"
              href="https://github.com/rmarafioti/wildWindNext"
            >
              GITHUB REPO
            </a>
          </button>
          <button className="buttonWork">
            <a target="_blank" href="https://wildwindtattoo.com">
              VISIT WEBSITE
            </a>
          </button>
        </section>
      </article>
      <Popup isOpen={popUp} close={closePopUp}>
        {popUpContent}
      </Popup>
    </>
  );
}
