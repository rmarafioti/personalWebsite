import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";

import "./navbar.css";
/**
 *
 * @component this file features the Navbar for the site which is displayed on every page of our site by importing it in the return of our Root file.
 *
 */

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuButton, setMenuButton] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav>
      <section id="headers">
        <h1 id="name">Rich Marafioti</h1>
        <h1 id="role"> Fullstack Developer</h1>
      </section>
      <div id="hamMenu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`menuButtonBurger ${menuOpen ? "open" : ""}`}></div>
        <menu className={`menu ${menuOpen ? "active" : ""}`}>
          <li className="navItem">
            <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
              HOME
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="/work"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              WORK
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="/about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              ABOUT
            </Link>
          </li>
        </menu>
        <div className={`overlay ${menuOpen ? "active" : ""}`}></div>
      </div>
    </nav>
  );
}
