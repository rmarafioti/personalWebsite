import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./carousel.css";

export default function Carousel({ data }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : data.length - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrev}
      />
      <div className="slides-container">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`slide ${index === activeSlide ? "active" : ""}`}
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {item.content()}
          </div>
        ))}
      </div>
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
    </div>
  );
}
