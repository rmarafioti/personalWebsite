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
              src=""
              alt="image of landing page for project"
            />
          </div>
        </div>
        <section className="projectDescription">
          <h1 className="projectHeader">Wild Wind Tattoo: business website</h1>
          <p className="projectContent">
            Front-end developed app using an external Stripe API and token
            authentication
          </p>
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
          {/*<p className="projectParagraphNote">
            *NOTE: Project may take a minute to load, thanks for your patience
          </p>*/}
        </section>
      </article>
      <Popup isOpen={popUp} close={closePopUp}>
        {popUpContent}
      </Popup>
    </>
  );
}
