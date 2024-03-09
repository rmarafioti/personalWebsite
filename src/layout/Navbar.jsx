import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">HOME </NavLink>
      <NavLink to="/work">WORK</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
    </nav>
  );
}
