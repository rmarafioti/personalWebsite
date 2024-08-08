import React, { useState } from "react";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa6";

import { CarouselContent } from "./CarouselContent";
import "../styling/carousel.css";
import "../styling/work.css";

export default function Work() {
  const { ref, controls, sectionVariants } = useScrollAnimation();
  const [activeSlide, setActiveSlide] = useState(0);

  // Function to scroll to the top of the "Work" section
  const scrollToTop = () => {
    scroller.scrollTo("work", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -10,
    });
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % CarouselContent.length);
    scrollToTop();
  };

  /*const handlePrev = () => {
    setActiveSlide(
      (prev) => (prev - 1 + CarouselContent.length) % CarouselContent.length
    );
  };*/

  return (
    <motion.section
      ref={ref}
      className="work"
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      <article id="work">
        <div>{CarouselContent[activeSlide].content()}</div>
        <section id="arrowSection">
          <BsArrowLeftCircleFill className="arrow" onClick={handleNext} />{" "}
          <div className="indicators">
            {CarouselContent.map((item, index) => (
              <FaCircle
                key={index}
                className={`indicator ${index === activeSlide ? "active" : ""}`}
                onClick={() => {
                  setActiveSlide(index);
                  scrollToTop();
                }}
                style={{
                  color:
                    index === activeSlide ? "rgb(162, 106, 105)" : "lightgrey",
                }}
              />
            ))}
          </div>
          <BsArrowRightCircleFill className="arrow" onClick={handleNext} />
        </section>
      </article>
    </motion.section>
  );
}
