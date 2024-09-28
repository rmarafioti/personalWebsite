import React, { useState } from "react";
import { bookBuddyContent } from "./ProjectContent";
import Popup from "../hooks/PopUp";
import usePopUp from "../hooks/usePopUp";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

export default function Project2() {
  const { popUp, popUpContent, openPopUp, closePopUp } = usePopUp();

  return (
    <>
      <article id="projectBody">
        <h1 className="projectHeader" id="contentHeader">
          Book Buddy:
        </h1>
        <p className="projectContent" id="contentTag">
          Front-end developed app using an external API and token authentication
        </p>
        <section className="contentSection">
          <div id="imageContainer">
            <img
              id="projectImage"
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1713533942/personalWebsite/Untitled_Artwork_3_fxzlcc.png"
              alt="image of landing page for project"
            />
          </div>
          <section className="projectDescription">
            <p className="projectParagraph">
              Welcome to BookBuddy, an online public library service that offers
              a seamless browsing experience. This platform allows users to
              navigate effortlessly through a collection of books from an
              external database. BookBuddy enables searches by author or title
              and in real-time keeps track of books that are available for
              checkout. Additionally, each user’s account maintains a record of
              their checked-out books and provides functionalities to return
              them, ensuring a comprehensive and user-friendly service.
            </p>
            <p>Created With:</p>
            <p className="projectContent">
              HTML, CSS, JAVASCRIPT, REACT & REDUX
            </p>
            <div
              className="devProcess"
              onClick={() => openPopUp(bookBuddyContent)}
            >
              VIEW DEVELOPMENT PROCESS
              <HiMagnifyingGlassPlus className="magnify" />
            </div>
          </section>
        </section>
        <button className="buttonWork">
          <a target="_blank" href="https://github.com/rmarafioti/bookBuddy">
            BOOK BUDDY GITHUB REPO
          </a>
        </button>
        <button className="buttonWork">
          <a
            target="_blank"
            href="https://main--courageous-pithivier-3563c9.netlify.app/"
          >
            VISIT BOOK BUDDY
          </a>
        </button>
        <p className="projectParagraphNote">
          *NOTE: Project may take a minute to load, thanks for your patience
        </p>
      </article>
      <Popup isOpen={popUp} close={closePopUp}>
        {popUpContent}
      </Popup>
    </>
  );
}
