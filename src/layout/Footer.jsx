import "./footer.css";

/**
 *
 * @component features the Footer for the site which is displayed on every page of our site by importing it in the return of our Root file.
 *
 */

export default function Footer() {
  return (
    <section id="footer">
      <a target="_blank" href="https://www.linkedin.com/in/richmarafioti/">
        <img src="https://res.cloudinary.com/dzpne110u/image/upload/v1713204026/personalWebsite/linkedIn_kfa4tf.png" />
      </a>
      <a target="_blank" href="https://github.com/rmarafioti">
        <img src="https://res.cloudinary.com/dzpne110u/image/upload/v1713384067/personalWebsite/github-mark_s7lfjs.png" />
      </a>
      <a href="mailto:richmarafioti@gmail.com">
        <span className="material-symbols-outlined">mail</span>
      </a>
    </section>
  );
}
