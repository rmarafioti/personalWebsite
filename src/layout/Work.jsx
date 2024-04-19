import React, { useState } from "react";
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
  const [enlargedImage, setEnlargedImage] = useState("");

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

  /**
   *
   * @function openOverlay declares if there is a currentImageObj use it's key: value image property as the imageurl.
   * @param {string} imageSrc - path of the image file to be set in the pop up.
   * @returns the enlarged image in the pop up.
   */

  const openPopUp = (imageSrc) => {
    setEnlargedImage(imageSrc);
    setPopUp(true);
  };

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
            <h4 className="projectContent">Created With:</h4>
            <p className="projectContent">
              HTML, CSS, JAVASCRIPT, REACT & REDUX
            </p>
            <div>
              <button>
                <a href="https://main--courageous-pithivier-3563c9.netlify.app/">
                  VISIT BOOK BUDDY
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/rmarafioti/2401.BookBuddy"
                >
                  BOOK BUDDY GITHUB REPO
                </a>
              </button>
            </div>
          </section>
          <section id="projectSketches">
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
            <div id="thumbnailContainer">
              <img
                id="thumbnail"
                src="https://res.cloudinary.com/dzpne110u/image/upload/v1713202360/personalWebsite/thumbnailBookBuddy_rgdgua.png"
                onClick={() =>
                  openPopUp(
                    "https://res.cloudinary.com/dzpne110u/image/upload/v1713200554/personalWebsite/bookBuddyWireframe_ewlioy.jpg"
                  )
                }
                alt="thumbnail of website blueprint which enlarges to full view when clicked"
              />
            </div>
          </section>
        </section>
      </article>

      {popUp && (
        <div id="graphModal" onClick={() => setPopUp(false)}>
          <img src={enlargedImage} alt="Expanded view" />
        </div>
      )}
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
            <h4 className="projectContent">Created With:</h4>
            <p className="projectContent">
              HTML, CSS, JAVASCRIPT, REACT, REDUX, EXPRESS, POSTMAN & PRISMA ORM
            </p>
            <button>
              <a target="_blank" href="">
                VISIT BRAINFLEX
              </a>
            </button>
            <button>
              <a target="_blank" href="https://github.com/Portals-Team/Game">
                BRAINFLEX GITHUB REPO
              </a>
            </button>
          </section>
          <section id="projectSketches">
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
            <div id="thumbnailContainer">
              <img
                id="thumbnail"
                src="https://res.cloudinary.com/dzpne110u/image/upload/v1713202371/personalWebsite/thumbnailBrainFlex_mqtpl7.png"
                onClick={() =>
                  openPopUp(
                    "https://res.cloudinary.com/dzpne110u/image/upload/v1713198523/personalWebsite/brainFlexWireframe_d5ebvb.jpg"
                  )
                }
                alt="thumbnail of website blueprint which enlarges to full view when clicked"
              />
            </div>
          </section>
        </section>
      </article>
      {popUp && (
        <div id="graphModal" onClick={() => setPopUp(false)}>
          <img src={enlargedImage} alt="Expanded view" />
        </div>
      )}
    </>
  );
}
