import React, { useState } from "react";
import Intro from "./Intro";
import Work from "./Work";
import About from "./About";

export default function Home() {
  return (
    <>
      <Intro />
      <Work />
      <About />
    </>
  );
}
