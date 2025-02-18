import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

import "../styling/intro.css";

/**
 *
 *@component features the Into section of this personal site
 * displaying a hero section with copy.
 */
export default function Intro() {
  const { ref, controls, sectionVariants } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      className="home"
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      <article id="home">
        <div className="heroSection">
          <section id="homePhotoContainerTop">
            <img
              id="homePhotoTop"
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1713550153/personalWebsite/Untitled_Artwork_9_aszsfu.png"
              alt="main image for homepage"
            />
          </section>
          <section id="pitchSection">
            <div className="pitchSectionParagraphOne">
              <header id="welcomeLine">Welcome!</header>
              <p className="homeContentOne">
                I’m <em>Rich Marafioti</em>, a Fullstack Developer and Designer
                living in Chicago. With 20 years of independence in art and
                design, and a decade of owning and operating my own small
                business, I blend creativity with functionality.
              </p>
            </div>
            <div className="pitchSectionParagraph">
              <p className="homeContentTwo">
                <em>My mission?</em> To seamlessly integrate design and
                functionality, alongside aesthetics and effective communication,
                ensuring your digital presence is as vibrant and dynamic as your
                vision.
              </p>
            </div>
          </section>
          <section id="homePhotoContainer">
            <img
              id="homePhoto"
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1713550153/personalWebsite/Untitled_Artwork_9_aszsfu.png"
              alt="main image for homepage"
            />
          </section>
        </div>
        <p className="underConstruction">
          This site is currently getting a revamp! Please check the links below
          to see what I've been up to or to get in contact with me!
        </p>
      </article>
    </motion.section>
  );
}
