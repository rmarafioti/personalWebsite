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
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1713446166/personalWebsite/Untitled_Artwork_3_xm1esg.png"
            alt="main image for homepage"
          />
        </section>
        <section id="pitchSection">
          <h2>WELCOME!</h2>
          <p>
            I’m Rich Marafioti, a Fullstack Developer and Designer living in
            Chicago. With 20 years of independence in art and design, and a
            decade of owning and operating my own small business, I blend
            creativity with functionality.
          </p>
          <h2>MY MISSION?</h2>
          <p>
            To seamlessly integrate design and functionality, alongside
            aesthetics and effective communication, ensuring your digital
            presence is as vibrant and dynamic as your vision.
          </p>
        </section>
      </article>
    </>
  );
}
