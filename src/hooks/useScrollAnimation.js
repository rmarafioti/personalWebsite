import { useRef, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";

/**
 *
 * @returns functionality for the scroll animation in navbar which coincidences with the section the user is currently viewing
 */
const useScrollAnimation = (options = { once: false, amount: 0.2 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, options);

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

  return { ref, controls, sectionVariants };
};

export default useScrollAnimation;
