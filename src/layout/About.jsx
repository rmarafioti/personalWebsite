/**
 *
 * @component this file features the About page of this personal site
 * displaying further information and contact info.
 */

export default function About() {
  return (
    <>
      <section id="aboutIntro">
        <div id="aboutImageContainer">
          <img
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1713198396/personalWebsite/Headshot0406_c3lwlt.jpg"
            alt="personal headshot for about me page"
          />
        </div>
        <section>
          <div id="workTimeline">
            <h1 id="headline">From Creativity to Code:</h1>
            <h4>RISD Illustration Graduate & Visual Artist: </h4>
            <p className="aboutContent">
              My professional journey began in the world of visual arts, where I
              further developed my design skills and aesthetic eye.
            </p>
            <h4>Tattoo Artist:</h4>
            <p className="aboutContent">
              For 20 years, I've brought stories to life through my work in 2D
              and 3D design, perfecting my technical craft in the art form of
              tattooing and custom personalized designing.
            </p>
            <h4>Business Owner:</h4>
            <p className="aboutContent">
              Managing my own small business for 10 years taught me the ropes of
              client relations, project management, and strategic planning.
            </p>
            <h4>Fullstack Developer:</h4>
            <p className="aboutContent">
              Today, I blend these experiences to build creative digital
              solutions. Whether leading a team, collaborating, or flying solo,
              I thrive on turning thoughtful concepts into functional realities.
            </p>
          </div>
        </section>
      </section>
      <section id="funFactsSection">
        <div id="facts">
          <h4 id="funFactsTitle">Fun Facts About Me:</h4>
          <ul id="list">
            <li className="listItem">
              <span class="material-symbols-outlined">family_star</span>Toured
              Europe in a band at the age of 16.
            </li>
            <li className="listItem">
              <span class="material-symbols-outlined">family_star</span>
              Clinched 2nd place in a demolition derby with an old car of mine.
            </li>
            <li className="listItem">
              <span class="material-symbols-outlined">family_star</span>
              Crossed the finish line at the Chicago Marathon four times.
            </li>
          </ul>
        </div>
        <section id="techSection">
          <h4 id="toolkitTitle">Tech Toolkit:</h4>
          <h4 className="subTitle">Proficient In: </h4>
          <p className="aboutContent">
            Git | Node | HTML | CSS | JavaScript | React | Redux | Express |
            Prisma | Postman | Photoshop | Procreate | Figma
          </p>
          <h4 className="subTitle">Knowledgeable In: </h4>
          <p className="aboutContent">Python | Illustrator </p>
        </section>
      </section>
    </>
  );
}
