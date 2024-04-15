import React, { useState } from "react";
import { Link } from "react-router-dom";
import { galleryPics } from "../images";

import "./projectPages.css";

/**
 *
 * @component this file features the Project1 page of this personal site
 * displaying further information, photos and links about the project.
 */

export default function Project2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState("");

  /**
   *
   * @function handleClick
   * @returns the function flips through a series of images via 'CLICK THROUGH IMAGES' button.
   *
   */

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryPics.length);
  };

  /**
   *
   * @description currentImageObj declares that if there are a series of images display them in order by index number
   *
   */

  const currentImageObj =
    galleryPics.length > 0 ? galleryPics[currentIndex] : null;

  /**
   *
   * @description imageurl declares if there is a currentImageObj use it's key: value image property as the imageurl.
   *
   */

  const imageurl = currentImageObj
    ? new URL(currentImageObj.image, import.meta.url).href
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
      <h1 id="work">PROJECT2</h1>
      <section id="projectSketches">
        <div id="sketchContainer">
          <img
            src={imageurl}
            id="sketchImage"
            alt="wireframe images for website project"
          />
          <p>IMAGES OF UI SKETCHES</p>
          <button onClick={handleClick}>CLICK THROUGH IMAGES</button>
        </div>
        <div>
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
          <p>IMAGE OF PROJECT WIREFRAME</p>
        </div>
      </section>
      <article id="projectBody">
        <div>
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="image of landing page for project"
          />
          <button>
            <a target="_blank" href="https://github.com/rmarafioti">
              LINK TO PROJECT GITHUB
            </a>
          </button>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
          aenean pharetra magna ac. Neque convallis a cras semper. Scelerisque
          fermentum dui faucibus in ornare. Amet porttitor eget dolor morbi.
          Nunc sed augue lacus viverra vitae congue. Sit amet massa vitae tortor
          condimentum. Tristique senectus et netus et malesuada fames ac turpis.
          Tellus mauris a diam maecenas sed. Tellus rutrum tellus pellentesque
          eu tincidunt. Scelerisque purus semper eget duis at tellus at.
          Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Non odio
          euismod lacinia at quis risus sed vulputate. Fermentum posuere urna
          nec tincidunt praesent semper feugiat nibh.
        </p>
      </article>
      <Link to="/work">BACK TO PORTFOLIO</Link>

      {popUp && (
        <div id="graphModal" onClick={() => setPopUp(false)}>
          <img src={enlargedImage} alt="Expanded view" />
        </div>
      )}
    </>
  );
}
