import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa6";

import { CarouselContent } from "../CarouselContent";
import "./carousel.css";
import "./work.css";

export default function Work() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % CarouselContent.length);
  };

  const handlePrev = () => {
    setActiveSlide(
      (prev) => (prev - 1 + CarouselContent.length) % CarouselContent.length
    );
  };

  return (
    <>
      <div id="slide">{CarouselContent[activeSlide].content()}</div>
      <section id="arrowSection">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={handleNext}
        />{" "}
        <div className="indicators">
          {CarouselContent.map((item, index) => (
            <FaCircle
              key={index}
              className={`indicator ${index === activeSlide ? "active" : ""}`}
              onClick={() => setActiveSlide(index)}
              style={{
                color:
                  index === activeSlide ? "rgb(162, 106, 105)" : "lightgrey",
              }}
            />
          ))}
        </div>
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={handleNext}
        />
      </section>
    </>
  );
}
