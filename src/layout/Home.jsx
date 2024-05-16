import React, { useState } from "react";

/**
 *
 * @component this file features the Home page of this personal
 *  site displaying introductory information.
 */

export default function Home() {
  return (
    <>
      <article id="home">
        <section id="homePhotoContainer">
          <img
            id="homePhoto"
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
      </article>
    </>
  );
}
