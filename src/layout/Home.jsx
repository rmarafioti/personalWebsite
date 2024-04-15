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
          Rich Marafioti is a Fullstack Developer 🔹 Designer based in Chicago.
          With over 20 years experience working independently in art & design
          and 10 years of experience as a small business owner. My mission is
          deliver a healthy marriage of design and functionality, aesthetics and
          communication.
        </p>
      </article>
    </>
  );
}
