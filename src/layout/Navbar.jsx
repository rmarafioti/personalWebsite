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
        <NavLink to="/">
          <img
            id="navImg"
            src="https://res.cloudinary.com/dzpne110u/image/upload/t_switch/v1713534663/personalWebsite/Untitled_Artwork_sxtwpl.png"
            alt="illustration of a rubber duck as an artist with paintbrush and palette"
          />
        </NavLink>
      </div>
      <div id="navLinks">
        <button className="navButton">
          <NavLink className="navLink" to="/work">
            WORK
          </NavLink>
        </button>
        <button className="navButton">
          <NavLink className="navLink" to="/about">
            ABOUT
          </NavLink>
        </button>
      </div>
    </nav>
  );
}
