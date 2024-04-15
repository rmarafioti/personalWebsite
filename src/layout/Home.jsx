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
        <img id="homePhoto" src="https://picsum.photos/seed/picsum/200/300" />
      </section>
      <article>
        <h1>LARGE TEXT</h1>
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
    </>
  );
}
