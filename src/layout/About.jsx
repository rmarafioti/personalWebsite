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
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1713531473/personalWebsite/webShot_in9bq6.png"
            alt="personal headshot for about me page"
          />
          <h4 id="toolkitTitle">TECH TOOLKIT:</h4>
          <p className="aboutContent">
            Git | Node | HTML | CSS | JavaScript | React | Redux | Express |
            Prisma | Postman | Photoshop | Procreate | Figma
          </p>
        </div>
        <article>
          <div id="workTimeline">
            <section id="workTimelineHeader">
              <p id="workTimeLineTag">From Creativity to Code</p>
              <img
                src="https://res.cloudinary.com/dzpne110u/image/upload/v1713534663/personalWebsite/Untitled_Artwork_sxtwpl.png"
                alt="illustration of a rubber duck as an artist with paintbrush and palette"
              />
            </section>
            <h4>RISD Illustration Graduate & Visual Artist: </h4>
            <h6 className="jobTag">
              Bachelor's Degree, Illustration Department: 1999 - 2003
            </h6>
            <p className="aboutContent">
              My professional journey began in the world of visual arts, where I
              further developed my design skills and aesthetic eye.
            </p>
            <h4>Tattoo Artist:</h4>
            <h6 className="jobTag">
              Freelance Tattooer / Graphic Artist: 2005 - 2015
            </h6>
            <p className="aboutContent">
              For 20 years, I've brought stories to life through my work in 2D
              and 3D design, perfecting my technical craft in the art form of
              tattooing and custom personalized designing.
            </p>
            <h4>Business Owner:</h4>
            <h6 className="jobTag">
              Wild Wind Tattoo, Owner / Operator: 2015 - 2024
            </h6>
            <p className="aboutContent">
              Managing my own small business for 10 years taught me the ropes of
              client relations, project management, and strategic planning.
            </p>
            <h4>Fullstack Developer:</h4>
            <h6 className="jobTag">
              Fullstack Academy: 1/24 - 4/24 focused on front / backend
              development, & databases.
            </h6>
            <p className="aboutContent">
              Today, I blend these experiences to build creative digital
              solutions. Whether leading a team, collaborating, or flying solo,
              I thrive on turning thoughtful concepts into functional realities.
            </p>
          </div>

          <section id="funFactsSection">
            <div id="facts">
              <h3 id="funFactsTitle">FUN FACTS:</h3>
              <ul id="list">
                <li className="listItem">
                  <span className="material-symbols-outlined">family_star</span>
                  Toured Europe in a band at the age of 16.
                </li>
                <li className="listItem">
                  <span className="material-symbols-outlined">family_star</span>
                  Clinched 2nd place in a demolition derby with an old car of
                  mine.
                </li>
                <li className="listItem">
                  <span className="material-symbols-outlined">family_star</span>
                  Crossed the finish line at the Chicago Marathon four times.
                </li>
              </ul>
            </div>
          </section>
        </article>
      </section>
    </>
  );
}
