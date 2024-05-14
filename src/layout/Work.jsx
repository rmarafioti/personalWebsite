import React, { useState } from "react";

import Carousel from "./Carousel";
import { CarouselContent } from "../CarouselContent";

import "./work.css";

export default function Work() {
  return (
    <>
      <Carousel data={CarouselContent} />
    </>
  );
}
