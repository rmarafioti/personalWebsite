import React, { useState } from "react";

/**
 *
 * @component this file features the Home page of this personal
 *  site displaying introductory information.
 */

export default function Home() {
  return (
    <>
      <h1 id="home">HOME</h1>
      <section>
        <img
          id="homePhoto"
          src="https://picsum.photos/seed/picsum/200/300"
          alt="main image for homepage"
        />
      </section>
      <article>
        <h1>WELCOME!</h1>
        <p>
          I’m Rich Marafioti, a Fullstack Developer and Designer living in
          Chicago. With 20 years of independence in art and design, and a decade
          of owning and operating my own small business, I blend creativity with
          functionality.
        </p>
        <h2>MY MISSION?</h2>
        <p>
          To seamlessly integrate design and functionality, alongside aesthetics
          and effective communication, ensuring your digital presence is as
          vibrant and dynamic as your vision.
        </p>
      </article>
    </>
  );
}
