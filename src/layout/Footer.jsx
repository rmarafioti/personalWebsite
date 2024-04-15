/**
 *
 * @component this file features the Navbar for the site which is displayed on every page of our site by importing it in the return of our Root file.
 *
 */

export default function Footer() {
  return (
    <ul id="footer">
      <li>
        <h1>FOOTER</h1>
      </li>
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/richmarafioti/">
          <img src="https://res.cloudinary.com/dzpne110u/image/upload/v1713204026/personalWebsite/linkedIn_kfa4tf.png" />
        </a>
      </li>
      <li>
        <a href="mailto:richmarafioti@gmail.com">
          <span class="material-symbols-outlined">mail</span>
        </a>
      </li>
    </ul>
  );
}
