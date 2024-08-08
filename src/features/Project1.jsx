import React, { useState } from "react";
import { brainFlexContent } from "./ProjectContent";
import Popup from "../hooks/PopUp";
import usePopUp from "../hooks/usePopUp";

export default function Project1() {
  const { popUp, popUpContent, openPopUp, closePopUp } = usePopUp();

  return (
    <>
      <article id="projectBody">
        <div>
          <div id="imageContainer">
            <img
              id="projectImage"
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1713533928/personalWebsite/Untitled_Artwork_2_sm0puv.png"
              alt="image of landing page for project"
            />
          </div>
        </div>
        <section className="projectDescription">
          <h1 className="projectHeader">BrainFLEX:</h1>
          <p className="projectContent">
            A fully functional CRUD app with an internally built database &
            token authentication
          </p>
          <p className="projectParagraph">
            Dive into daily quizzes that blend learning with fun! Choose from a
            variety of topics to test your knowledge or learn something new. Our
            unique format reveals pictures and unveils words as you answer
            correctly, enhancing memory and adding a touch of mystery. Our daily
            quizzes enrich your knowledge with fun facts while you compete with
            others for the highest score.
          </p>
          <p>Created With:</p>
          <p className="projectContent">
            HTML, CSS, JAVASCRIPT, REACT, REDUX, EXPRESS, POSTMAN & PRISMA ORM
          </p>
          <button
            className="buttonWork"
            onClick={() => openPopUp(brainFlexContent)}
          >
            DEVELOPMENT PROCESS
          </button>
          <button className="buttonWork">
            <a target="_blank" href="https://github.com/Portals-Team/Game">
              BRAINFLEX GITHUB REPO
            </a>
          </button>
          <button className="buttonWork">
            <a target="_blank" href="https://brainflex.onrender.com/">
              VISIT BRAINFLEX
            </a>
          </button>
          <p className="projectParagraphNote">
            *NOTE: Project may take a minute to load, thanks for your patience
          </p>
        </section>
      </article>
      <Popup isOpen={popUp} close={closePopUp}>
        {popUpContent}
      </Popup>
    </>
  );
}
