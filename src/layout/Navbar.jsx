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
        <img
          id="headerFirstName"
          src="https://res.cloudinary.com/dzpne110u/image/upload/v1713533982/personalWebsite/Untitled_Artwork_4_egrdlw.png"
          alt="image of landing page for project"
        />
        <img
          id="headerLastName"
          src="https://res.cloudinary.com/dzpne110u/image/upload/v1713533993/personalWebsite/Untitled_Artwork_5_oz5h3m.png"
          alt="image of landing page for project"
        />
        <p>fullstack developer / designer</p>
      </div>
      <div id="navLinks">
        <button className="navButton">
          <NavLink className="navLink" to="/">
            HOME
          </NavLink>
        </button>
        <button className="navButtonMiddle">
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
