import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa6";

import { CarouselContent } from "./CarouselContent";
import "../styling/carousel.css";
import "../styling/work.css";

export default function Work() {
  const [activeSlide, setActiveSlide] = useState(0);
  const controls = useAnimation();
  // Set up intersection observer to trigger animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % CarouselContent.length);
  };

  const handlePrev = () => {
    setActiveSlide(
      (prev) => (prev - 1 + CarouselContent.length) % CarouselContent.length
    );
  };

  return (
    <motion.section
      ref={ref}
      className="work"
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      <article id="work">
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
      </article>
    </motion.section>
  );
}
