import React, { useState } from "react";

import Carousel from "./Carousel";
import { CarouselContent } from "../CarouselContent";

import "./work.css";

/**
 *
 * @component this file features the Project1 page of this personal site
 * displaying further information, photos and links about the project.
 */

export default function Work() {
  /**
   *
   * @function handleClick
   * @returns the function flips through a series of images via 'browse wireframe' button.
   *
   */

  /**
   *
   * @description currentImageObj declares that if there are a series of images display them in order by index number
   *
   */

  /**
   *
   * @description imageurl declares if there is a currentImageObj use it's key: value image property as the imageurl.
   *
   */

  return (
    <>
      <Carousel data={CarouselContent} />
    </>
  );
}
