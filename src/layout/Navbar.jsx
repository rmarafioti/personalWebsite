import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import "./navbar.css";

/**
 *
 * @component this file features the Navbar for the site which is displayed on every page of our site by importing it in the return of our Root file.
 *
 */

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        id="headers"
      >
        <h1 id="name">Rich Marafioti</h1>
        <h2 id="role"> Fullstack Developer</h2>
      </Link>
      <section id="hamMenu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`menuButtonBurger ${menuOpen ? "open" : ""}`}></div>
        <menu className={`menu ${menuOpen ? "active" : ""}`}>
          <li className="navItem">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setMenuOpen(!menuOpen)}
              className={activeSection === "home" ? "active" : ""}
              onSetActive={() => setActiveSection("home")}
            >
              HOME
              {activeSection === "home" ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="work"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => setMenuOpen(!menuOpen)}
              className={activeSection === "work" ? "active" : ""}
              onSetActive={() => setActiveSection("work")}
            >
              WORK
              {activeSection === "work" ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => setMenuOpen(!menuOpen)}
              className={activeSection === "about" ? "active" : ""}
              onSetActive={() => setActiveSection("about")}
            >
              ABOUT
              {activeSection === "about" ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </Link>
          </li>
        </menu>
        <div className={`overlay ${menuOpen ? "active" : ""}`}></div>
      </section>
    </nav>
  );
}
