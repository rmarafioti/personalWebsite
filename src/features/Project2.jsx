import React, { useState } from "react";
import { wildWindContent } from "./ProjectContent";
import Popup from "../hooks/PopUp";
import usePopUp from "../hooks/usePopUp";
import { TbPointFilled } from "react-icons/tb";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

import "../styling/project3.css";

/**
 *
 * @component features Project 2 displaying information, images, features and links for a user to learn about the project
 */
export default function Project2() {
  const { popUp, popUpContent, openPopUp, closePopUp } = usePopUp();

  return (
    <>
      <article id="projectBody">
        <h1 className="projectHeader" id="contentHeader">
          Wild Wind Tattoo Website
        </h1>
        <p className="projectContent" id="contentTag">
          Fully responsive custom website built using Next.js, the site features
          SEO customization, ensuring optimal search engine performance.
        </p>
        <section className="contentSection">
          <div id="imageContainer">
            <img
              id="projectImageWWT"
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1728997813/personalWebsite/screencapture-wildwindtattoo-2024-10-15-08_06_31-edit_lym9n0.png"
              alt="image of landing page for project"
            />
          </div>

          <section className="projectDescription">
            <h2 id="features">Features:</h2>
            <section className="featureContent">
              <p className="featureHeaders">
                <TbPointFilled />
                Email.js Messaging
              </p>
              <p className="projectContent">
                A custom contact form streamlines communication and appointment
                booking.
              </p>
              <p className="featureHeaders">
                <TbPointFilled />
                Stripe API
              </p>
              <p className="projectContent">
                Enables easy purchase of gift certificates, with potential for
                future online store expansion.
              </p>
              <p className="featureHeaders">
                <TbPointFilled />
                Custom Release Form
              </p>
              <p className="projectContent">
                Electronic waivers reduce paper waste and improve the client
                experience.
              </p>
              <p className="featureHeaders">
                <TbPointFilled />
                Accessibility & Performance
              </p>
              <p className="projectContent">
                Achieved perfect scores for SEO and Accessibility with
                Lighthouse, and zero accessibility issues with Axe DevTools.
              </p>
            </section>
            <p>Created With:</p>
            <p className="projectContent">HTML, CSS, JAVASCRIPT, NEXT.JS</p>
            <div
              className="devProcess"
              onClick={() => openPopUp(wildWindContent)}
            >
              VIEW DEVELOPMENT PROCESS
              <HiMagnifyingGlassPlus className="magnify" />
            </div>
          </section>
        </section>
        <button className="buttonWork">
          <a target="_blank" href="https://github.com/rmarafioti/wildWindNext">
            GITHUB REPO
          </a>
        </button>
        <button className="buttonWork">
          <a target="_blank" href="https://wildwindtattoo.com">
            VISIT WEBSITE
          </a>
        </button>
      </article>
      <Popup isOpen={popUp} close={closePopUp}>
        {popUpContent}
      </Popup>
    </>
  );
}
