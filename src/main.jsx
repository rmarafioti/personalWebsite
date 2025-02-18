import React from "react";
import Navbar from "./layout/Navbar";
import Intro from "./features/Intro";
import Work from "./features/Work";
import About from "./features/About";
import Footer from "./layout/Footer";

export default function main() {
  return (
    <>
      <Navbar />
      <Intro />
      {/*<Work />
      <About />*/}
      <Footer />
    </>
  );
}
