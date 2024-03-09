import { Link } from "react-router-dom";

export default function Work() {
  return (
    <>
      <h1 id="work">WORK</h1>
      <Link to="/work/project1">Project 1</Link>
      <Link to="/work/project2">Project 2</Link>
      <Link to="/work/project3">Project 3</Link>
    </>
  );
}
