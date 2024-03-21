import React, { useState } from "react";
import { Link } from "react-router-dom";
import { galleryPics } from "../images";

/**
 *
 * @component this file features the Project3 page of this personal site
 * displaying further information, photos and links about the project.
 */

export default function Project3() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <>
      <h1 id="work">PROJECT3</h1>
      <section id="projectSketches">
        <div>
          <img src={imageurl} />
          <p>IMAGES OF UI SKETCHES</p>
          <button onClick={handleClick}>CLICK THROUGH IMAGES</button>
        </div>
        <div>
          <img src="https://picsum.photos/seed/picsum/200/300" />
          <p>IMAGE OF PROJECT WIREFRAME</p>
        </div>
      </section>
      <article id="projectBody">
        <div>
          <img src="https://picsum.photos/seed/picsum/200/300" />
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
    </>
  );
}
