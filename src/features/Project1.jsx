import React, { useState } from "react";
import { brainFlexContent } from "./ProjectContent";
import Popup from "../hooks/PopUp";
import usePopUp from "../hooks/usePopUp";
import { TbPointFilled } from "react-icons/tb";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

import "../styling/project3.css";

/**
 *
 * @component features Project 1 displaying information, images, features and links for a user to learn about the project
 */
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
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1728997805/personalWebsite/screencapture-brainflex-f6df41499e88-herokuapp-2024-10-15-08_08_12-edit_wtyxwa.png"
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
          </section>
        </section>
        <button className="buttonWork">
          <a target="_blank" href="https://github.com/rmarafioti/brainFlex">
            BRAINFLEX GITHUB REPO
          </a>
        </button>
        <button className="buttonWork">
          <a
            target="_blank"
            href="https://brainflex-f6df41499e88.herokuapp.com/"
          >
            VISIT BRAINFLEX
          </a>
        </button>
      </article>
      <Popup isOpen={popUp} close={closePopUp}>
        {popUpContent}
      </Popup>
    </>
  );
}
