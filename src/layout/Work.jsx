import React, { useState } from "react";
import Popup from "./PopUp";
import { brainFlexPics } from "../images";
import { galleryPics } from "../images";

import "./work.css";

/**
 *
 * @component this file features the Project1 page of this personal site
 * displaying further information, photos and links about the project.
 */

export default function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState(null);

  const openPopUp = (content) => {
    setPopUpContent(content);
    setPopUp(true);
  };

  const closePopUp = () => {
    setPopUp(false);
    setPopUpContent(null);
  };

  /**
   *
   * @function handleClick
   * @returns the function flips through a series of images via 'browse wireframe' button.
   *
   */

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % brainFlexPics.length);
  };

  const handleClick2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex + 1) % galleryPics.length);
  };

  /**
   *
   * @description currentImageObj declares that if there are a series of images display them in order by index number
   *
   */

  const currentImageObj =
    brainFlexPics.length > 0 ? brainFlexPics[currentIndex] : null;

  const currentImageObj2 =
    galleryPics.length > 0 ? galleryPics[currentIndex2] : null;

  /**
   *
   * @description imageurl declares if there is a currentImageObj use it's key: value image property as the imageurl.
   *
   */

  const imageurl = currentImageObj
    ? new URL(currentImageObj.image, import.meta.url).href
    : "";

  const imageurl2 = currentImageObj2
    ? new URL(currentImageObj2.image, import.meta.url).href
    : "";

  const bookBuddyContent = (
    <section id="projectSketches">
      <div id="thumbnailContainer">
        <img
          src="https://res.cloudinary.com/dzpne110u/image/upload/v1713200554/personalWebsite/bookBuddyWireframe_ewlioy.jpg"
          alt="website blueprint"
        />
      </div>
      <div id="sketchContainer">
        <img
          src={imageurl2}
          id="sketchImage"
          alt="wireframe images for website project"
        />

        <button id="wireFrameButton" onClick={handleClick2}>
          browse wireframe
        </button>
      </div>
    </section>
  );

  const brainFlexContent = (
    <section id="projectSketches">
      <div id="thumbnailContainer">
        <img
          className="webBluePrint"
          src="https://res.cloudinary.com/dzpne110u/image/upload/v1713198523/personalWebsite/brainFlexWireframe_d5ebvb.jpg"
          alt="website blueprint"
        />
      </div>
      <div id="sketchContainerBottom">
        <img
          src={imageurl}
          id="sketchImage"
          alt="wireframe images for website project"
        />
        <button id="wireFrameButton" onClick={handleClick}>
          browse wireframe
        </button>
      </div>
    </section>
  );

  return (
    <>
      <article id="projectBody">
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
            <h3 className="projectContent" id="topProject">
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
            <button>
              <a
                target="_blank"
                href="https://main--courageous-pithivier-3563c9.netlify.app/"
              >
                VISIT BOOK BUDDY
              </a>
            </button>
            <button>
              <a target="_blank" href="https://github.com/rmarafioti/bookBuddy">
                BOOK BUDDY GITHUB REPO
              </a>
            </button>
            <h4 className="projectContent">Created With:</h4>
            <p className="projectContent">
              HTML, CSS, JAVASCRIPT, REACT & REDUX
            </p>
            <p className="projectParagraphNote">
              *NOTE: Project may take a minute to connect to API, thanks for
              your patience
            </p>
            <button
              className="devProcessButton"
              onClick={() => openPopUp(bookBuddyContent)}
            >
              VIEW DEVELOPMENT PROCESS
            </button>
          </section>
        </section>
      </article>
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
        <section>
          <section className="projectDescription">
            <h3 className="projectContent" id="topProject">
              BrainFLEX:
            </h3>
            <h5 className="projectContent">
              A fully functional CRUD app with an internally built database &
              token authentication
            </h5>
            <p className="projectParagraph">
              Dive into daily quizzes that blend learning with fun! Choose from
              a variety of topics to test your knowledge or learn something new.
              Our unique format reveals pictures and unveils words as you answer
              correctly, enhancing memory and adding a touch of mystery. Our
              daily quizzes enrich your knowledge with fun facts while you
              compete with others for the highest score.
            </p>
            <button>
              <a target="_blank" href="https://brainflex.onrender.com/">
                VISIT BRAINFLEX
              </a>
            </button>
            <button>
              <a target="_blank" href="https://github.com/Portals-Team/Game">
                BRAINFLEX GITHUB REPO
              </a>
            </button>
            <h4 className="projectContent">Created With:</h4>
            <p className="projectContent">
              HTML, CSS, JAVASCRIPT, REACT, REDUX, EXPRESS, POSTMAN & PRISMA ORM
            </p>
            <p className="projectParagraphNote">
              *NOTE: Project may take a minute to load, thanks for your patience
            </p>
            <button
              className="devProcessButton"
              onClick={() => openPopUp(brainFlexContent)}
            >
              VIEW DEVELOPMENT PROCESS
            </button>
          </section>
        </section>
      </article>
      <Popup isOpen={popUp} close={closePopUp}>
        {popUpContent}
      </Popup>
    </>
  );
}
