import React, { useState } from "react";

/**
 *
 * @component this file features the Home page of this personal
 *  site displaying introductory information.
 */

export default function Home() {
  return (
    <>
      <section id="headers">
        <h1 id="name">Rich Marafioti</h1>
        <h1 id="role"> Fullstack Developer</h1>
      </section>
      <article id="home">
        <section id="homePhotoContainer">
          <img
            id="homePhoto"
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1713550153/personalWebsite/Untitled_Artwork_9_aszsfu.png"
            alt="main image for homepage"
          />
        </section>
        <section id="pitchSection">
          <header id="welcomeLine">Welcome!</header>
          <p className="homeContent">
            I’m Rich Marafioti, a Fullstack Developer and Designer living in
            Chicago. With 20 years of independence in art and design, and a
            decade of owning and operating my own small business, I blend
            creativity with functionality.
          </p>
          <header id="missionLine">My mission</header>
          <p className="homeContent">
            To seamlessly integrate design and functionality, alongside
            aesthetics and effective communication, ensuring your digital
            presence is as vibrant and dynamic as your vision.
          </p>
        </section>
      </article>
    </>
  );
}
