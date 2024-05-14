import React, { useState } from "react";
import { brainFlexPics } from "../images";
import { galleryPics } from "../images";
import Popup from "./PopUp";

export default function Project1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState(null);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % brainFlexPics.length);
  };

  const handleClick2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex + 1) % galleryPics.length);
  };

  const currentImageObj =
    brainFlexPics.length > 0 ? brainFlexPics[currentIndex] : null;

  const currentImageObj2 =
    galleryPics.length > 0 ? galleryPics[currentIndex2] : null;

  const imageurl = currentImageObj
    ? new URL(currentImageObj.image, import.meta.url).href
    : "";

  const openPopUp = (content) => {
    setPopUpContent(content);
    setPopUp(true);
  };

  const closePopUp = () => {
    setPopUp(false);
    setPopUpContent(null);
  };

  const brainFlexContent = (
    <section id="projectSketches">
      <h3 className="popUpHeader">App Outline</h3>
      <div id="thumbnailContainer">
        <img
          className="webBluePrint"
          src="https://res.cloudinary.com/dzpne110u/image/upload/v1713198523/personalWebsite/brainFlexWireframe_d5ebvb.jpg"
          alt="website blueprint"
        />
      </div>
      <h3 className="popUpHeader">Database Schema</h3>
      <div id="thumbnailContainer">
        <img
          className="webBluePrint"
          src="src/images/brainFLEX_schema.jpg"
          alt="database schema for brainflex project"
        />
      </div>
      <h3 className="popUpHeader">Wireframe</h3>
      <div id="sketchContainerBottom">
        <img
          src={imageurl}
          id="sketchImage"
          alt="wireframe images for website project"
        />
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
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1713533928/personalWebsite/Untitled_Artwork_2_sm0puv.png"
              alt="image of landing page for project"
            />
          </div>
        </div>
        <section>
          <section className="projectDescription">
            <h3 className="projectHeader" id="topProject">
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
            <div className="buttonSection">
              <button className="buttonWork">
                <a target="_blank" href="https://brainflex.onrender.com/">
                  VISIT BRAINFLEX
                </a>
              </button>
              <button className="buttonWork">
                <a target="_blank" href="https://github.com/Portals-Team/Game">
                  BRAINFLEX GITHUB REPO
                </a>
              </button>
            </div>
            <p className="projectParagraphNote">
              *NOTE: Project may take a minute to load, thanks for your patience
            </p>
            <h4>Created With:</h4>
            <p className="projectContent">
              HTML, CSS, JAVASCRIPT, REACT, REDUX, EXPRESS, POSTMAN & PRISMA ORM
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
