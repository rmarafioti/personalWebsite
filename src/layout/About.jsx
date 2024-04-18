/**
 *
 * @component this file features the About page of this personal site
 * displaying further information and contact info.
 */

export default function About() {
  return (
    <>
      <section id="aboutIntro">
        <section>
          <div id="aboutImageContainer">
            <img
              src="https://res.cloudinary.com/dzpne110u/image/upload/v1713198396/personalWebsite/Headshot0406_c3lwlt.jpg"
              alt="personal headshot for about me page"
            />
          </div>
          <section id="facts">
            <h4>Fun Facts About Me:</h4>
            <ul>
              <li>Toured Europe in a band at the age of 16.</li>
              <li>
                Clinched 2nd place in a demolition derby with an old car of
                mine.
              </li>
              <li>
                Crossed the finish line at the Chicago Marathon four times.
              </li>
            </ul>
            <h4>Tech Toolkit:</h4>
            <h4>Proficient In: </h4>
            <p>
              Git, Node, HTML, CSS, JavaScript, React, Redux, Express, Prisma,
              Postman, Photoshop, Procreate, Figma.
            </p>
            <h4>Knowledgeable In: </h4>
            <p>Python, Illustrator.</p>
          </section>
        </section>
        <section>
          <div id="workTimeline">
            <h1 id="headline">From Creativity to Code:</h1>
            <h3>RISD Illustration Graduate & Visual Artist: </h3>
            <p className="aboutContent">
              My professional journey began in the world of visual arts, where I
              further developed my design skills and aesthetic eye.
            </p>
            <h3>Tattoo Artist:</h3>
            <p className="aboutContent">
              For 20 years, I've brought stories to life through my work in 2D
              and 3D design, perfecting my technical craft in the art form of
              tattooing and custom personalized designing.
            </p>
            <h3>Business Owner:</h3>
            <p className="aboutContent">
              Managing my own small business for 10 years taught me the ropes of
              client relations, project management, and strategic planning.
            </p>
            <h3>Fullstack Developer:</h3>
            <p className="aboutContent">
              Today, I blend these experiences to build creative digital
              solutions. Whether leading a team, collaborating, or flying solo,
              I thrive on turning thoughtful concepts into functional realities.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
