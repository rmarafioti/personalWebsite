import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

/**
 *
 * @component this file features the Navbar for the site which is displayed on every page of our site by importing it in the return of our Root file.
 *
 */

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
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
        <RxHamburgerMenu />
        <menu className={`menu ${menuOpen ? "active" : ""}`}>
          <li className="navItem">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/work">WORK</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/about">ABOUT</NavLink>
          </li>
        </menu>
        <div className={`overlay ${menuOpen ? "active" : ""}`}></div>
      </div>
    </nav>
  );
}
