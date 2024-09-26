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
        <h1 className="projectHeader" id="contentHeader">
          BrainFLEX:
        </h1>
        <p className="projectContent" id="contentTag">
          A fully functional CRUD app with an internally built database & token
          authentication
        </p>
        <section className="contentSection">
          <div id="imageContainer">
            <img
              id="projectImageWWT"
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1727273494/personalWebsite/screencapture-brain-flex-vercel-app-2024-09-25-09_10_38-edit_dw7wnu.png"
              alt="image of landing page for project"
            />
          </div>
          <section className="projectDescription">
            <h2 id="features">Features:</h2>
            <section className="featureContent">
              <p className="featureHeaders">
                <TbPointFilled />
                Interactive Quiz Experience
              </p>
              <p className="projectContent">
                As users answer questions correctly, a blurred image and
                corresponding answer word are incrementally revealed.
              </p>

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

              <p className="featureHeaders">
                <TbPointFilled />
                Dynamic Quiz Generation
              </p>
              <p className="projectContent">
                A robust database structure links images, quiz questions, and
                answer words to randomly generate a daily quiz based on the
                user’s chosen topic.
              </p>

              <p className="featureHeaders">
                <TbPointFilled />
                Knowledge Enrichment and Competition
              </p>
              <p className="projectContent">
                Daily quizzes come with fun facts and interactive elements to
                enrich learning while users compete for the highest score.
              </p>
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
        </section>
      </article>
      <Popup isOpen={popUp} close={closePopUp}>
        {popUpContent}
      </Popup>
    </>
  );
}
