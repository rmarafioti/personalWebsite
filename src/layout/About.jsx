/**
 *
 * @component this file features the About page of this personal site
 * displaying further information and contact info.
 */

export default function About() {
  return (
    <>
      <h1 id="about">ABOUT</h1>
      <section id="aboutIntro">
        <div id="aboutImageContainer">
          <img
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1713198396/personalWebsite/Headshot0406_c3lwlt.jpg"
            alt="personal headshot for about me page"
          />
        </div>
        <div>
          <p>
            RISD Illustration grad and visual artist =&gt; Tattoo artist of 20
            years =&gt; Business owner of 8 years =&gt; Fullstack developer
          </p>
          <p>
            Whether I'm leading a team, part of a collaboration or working
            independently I love to help visualize, create and curate ideas into
            reality and functionality...
          </p>
          <p>🔹 FUN FACTS 🔹</p>
          <ul>
            <li>-I toured Europe in a band when I was 16.</li>
            <li>
              -Ran an old car of mine in a demolition derby and got 2nd place.
            </li>
            <li>-4 time Chicago Marathon finisher</li>
          </ul>
          <p>
            Proficient: git | node | html | css | javascript | react | redux |
            express | prisma | postman | photoshop | procreate | figma |
          </p>
          <p>Knowledgeable: python | illustrator |</p>
        </div>
      </section>
    </>
  );
}
