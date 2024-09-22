import React, { useState } from "react";
import { brainFlexContent } from "./ProjectContent";
import Popup from "../hooks/PopUp";
import usePopUp from "../hooks/usePopUp";
import { TbPointFilled } from "react-icons/tb";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

import "../styling/project3.css";

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
          <h2 id="features">Features:</h2>
          <section>
            <div>
              <p className="featureHeaders">
                <TbPointFilled />
                Interactive Quiz Experience
              </p>
              <p className="projectContent">
                As users answer questions correctly, a blurred image and
                corresponding answer word are incrementally revealed.
              </p>
            </div>
            <div>
              <p className="featureHeaders">
                <TbPointFilled />
                Token-Based Authentication
              </p>
              <p className="projectContent">
                Secure user login ensures personalized quiz experiences,
                tracking quiz progress, and scores. Users can resume a quiz
                where they left off or track if they’ve already played the daily
                quiz.
              </p>
            </div>
            <div>
              <p className="featureHeaders">
                <TbPointFilled />
                Dynamic Quiz Generation
              </p>
              <p className="projectContent">
                A robust database structure links images, quiz questions, and
                answer words to randomly generate a daily quiz based on the
                user’s chosen topic.
              </p>
            </div>
            <div>
              <p className="featureHeaders">
                <TbPointFilled />
                Knowledge Enrichment and Competition
              </p>
              <p className="projectContent">
                Daily quizzes come with fun facts and interactive elements to
                enrich learning while users compete for the highest score.
              </p>
            </div>
          </section>
          <p>Created With:</p>
          <p className="projectContent">
            HTML, CSS, JAVASCRIPT, REACT, REDUX, EXPRESS, POSTMAN & PRISMA ORM
          </p>
          <div
            className="devProcess"
            onClick={() => openPopUp(brainFlexContent)}
          >
            VIEW DEVELOPMENT PROCESS
            <HiMagnifyingGlassPlus className="magnify" />
          </div>
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
