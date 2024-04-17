import { NavLink } from "react-router-dom";

/**
 *
 * @component this file features the Navbar for the site which is displayed on every page of our site by importing it in the return of our Root file.
 *
 */

export default function Navbar() {
  return (
    <nav>
      <div id="navHeader">
        <h1>Rich Marafioti</h1>
        <p>fullstack developer / designer</p>
      </div>
      <div id="navLinks">
        <NavLink to="/">HOME </NavLink>
        <NavLink to="/work">WORK</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </div>
    </nav>
  );
}
