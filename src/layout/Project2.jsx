import { Link } from "react-router-dom";

export default function Project2() {
  return (
    <>
      <h1 id="work">PROJECT2</h1>
      <section>
        <img src="https://picsum.photos/seed/picsum/200/300" />
        <p>IMAGES OF UI SKETCHES</p>
        <button>CLICK THROUGH IMAGES</button>
      </section>
      <section>
        <img src="https://picsum.photos/seed/picsum/200/300" />
        <p>IMAGE OF PROJECT WIREFRAME</p>
      </section>
      <section>
        <img src="https://picsum.photos/seed/picsum/200/300" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
          aenean pharetra magna ac. Neque convallis a cras semper. Scelerisque
          fermentum dui faucibus in ornare. Amet porttitor eget dolor morbi.
          Nunc sed augue lacus viverra vitae congue. Sit amet massa vitae tortor
          condimentum. Tristique senectus et netus et malesuada fames ac turpis.
          Tellus mauris a diam maecenas sed. Tellus rutrum tellus pellentesque
          eu tincidunt. Scelerisque purus semper eget duis at tellus at.
          Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Non odio
          euismod lacinia at quis risus sed vulputate. Fermentum posuere urna
          nec tincidunt praesent semper feugiat nibh.
        </p>
        <button>LINK TO PROJECT GITHUB</button>
      </section>
      <Link to="/work">BACK TO PORTFOLIO</Link>
    </>
  );
}
