import React, { useState } from "react";
import { bookBuddyContent } from "./ProjectContent";
import Popup from "./PopUp";
import usePopUp from "./usePopUp";

export default function Project2() {
  const { popUp, popUpContent, openPopUp, closePopUp } = usePopUp();

  return (
    <>
      <article id="projectBodyTwo">
        <div>
          <div id="imageContainer">
            <img
              id="projectImage"
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1713533942/personalWebsite/Untitled_Artwork_3_fxzlcc.png"
              alt="image of landing page for project"
            />
          </div>
        </div>
        <section>
          <section className="projectDescription">
            <h3 className="projectHeader" id="topProject">
              Book Buddy:
            </h3>
            <h5 className="projectContent">
              Front-end developed app using an external API and token
              authentication
            </h5>
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
            <div className="buttonSection">
              <button className="buttonWork">
                <a
                  target="_blank"
                  href="https://main--courageous-pithivier-3563c9.netlify.app/"
                >
                  VISIT BOOK BUDDY
                </a>
              </button>
              <button className="buttonWork">
                <a
                  target="_blank"
                  href="https://github.com/rmarafioti/bookBuddy"
                >
                  BOOK BUDDY GITHUB REPO
                </a>
              </button>
            </div>
            <p className="projectParagraphNote">
              *NOTE: Project may take a minute to load, thanks for your patience
            </p>
            <h4>Created With:</h4>
            <p className="projectContent">
              HTML, CSS, JAVASCRIPT, REACT & REDUX
            </p>
            <div className="devProcessSection">
              <button
                className="devProcessButton"
                onClick={() => openPopUp(bookBuddyContent)}
              >
                VIEW DEVELOPMENT PROCESS
              </button>
            </div>
          </section>
        </section>
      </article>
      <Popup isOpen={popUp} close={closePopUp}>
        {popUpContent}
      </Popup>
    </>
  );
}
