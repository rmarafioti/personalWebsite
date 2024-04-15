import { Link } from "react-router-dom";

/**
 *
 * @component this file features the Work page of this personal site
 * displaying routes to personal protfolio projects.
 */

export default function Work() {
  return (
    <>
      <h1 class="work">WORK</h1>
      <section id="workIntro">
        <p>
          <h1>LARGE TEXT</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incclassclassunt ut labore et dolore magna aliqua.
          Pretium aenean pharetra magna ac. Neque convallis a cras semper.
          Scelerisque fermentum dui faucibus in ornare. Amet porttitor eget
          dolor morbi. Nunc sed augue lacus viverra vitae congue. Sit amet massa
          vitae tortor condimentum. Tristique senectus et netus et malesuada
          fames ac turpis. Tellus mauris a diam maecenas sed. Tellus rutrum
          tellus pellentesque eu tincclassunt. Scelerisque purus semper eget
          duis at tellus at. Vehicula ipsum a arcu cursus vitae congue mauris
          rhoncus. Non odio euismod lacinia at quis risus sed vulputate.
          Fermentum posuere urna nec tincclassunt praesent semper feugiat nibh.
        </p>
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          id="workImage"
          alt="main image for portfolio page"
        />
      </section>
      <article class="projectThumbnails">
        <div>
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="image displaying portfolio web app project"
          />
          <p>Some text about the project</p>
          <Link to="/work/project1">Project 1</Link>
        </div>
        <div>
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="image displaying portfolio web app project"
          />
          <p>Some text about the project</p>
          <Link to="/work/project2">Project 2</Link>
        </div>
        <div>
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="image displaying portfolio web app project"
          />
          <p>Some text about the project</p>
          <Link to="/work/project3">Project 3</Link>
        </div>
      </article>
    </>
  );
}
