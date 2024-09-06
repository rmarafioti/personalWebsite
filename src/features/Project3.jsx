import React, { useState } from "react";
import { wildWindContent } from "./ProjectContent";
import Popup from "../hooks/PopUp";
import usePopUp from "../hooks/usePopUp";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

export default function Project2() {
  const { popUp, popUpContent, openPopUp, closePopUp } = usePopUp();

  return (
    <>
      <article id="projectBody">
        <div>
          <div id="imageContainer">
            <img
              id="projectImage"
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1725586812/personalWebsite/wildWindLandingPage2_j1b9b8.png"
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
          <p>Features:</p>
          <ul>
            <li>
              <p>Email.js Integration</p>
              <p className="projectContent">
                A custom contact form streamlines communication and appointment
                booking.
              </p>
            </li>
            <li>
              <p>Stripe API</p>
              <p className="projectContent">
                Enables easy purchase of gift certificates, with potential for
                future online store expansion.
              </p>
            </li>
            <li>
              <p>DocuSign Integration</p>
              <p className="projectContent">
                Electronic waivers reduce paper waste and improve the client
                experience.
              </p>
            </li>
            <li>
              <p>Accessibility & Performance</p>
              <p className="projectContent">
                Achieved perfect scores for SEO and Accessibility with
                Lighthouse, and zero accessibility issues with Axe DevTools.
              </p>
            </li>
          </ul>
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
