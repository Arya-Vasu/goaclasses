import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header class="globalHeader">
      <Link to="/">
        <img
          id="home-logo"
          src="https://i.pinimg.com/originals/63/42/fd/6342fd517f75a0afdc0875e3f6772deb.jpg"
          alt="home" />
      </Link>
      <ul className="headerList">
        <li>
          <Link className="list-item" to="/about">About Us</Link>
        </li>
        <li>
          <Link className="list-item" to="/contactUs">Contact Us</Link>
        </li>
        <li>
          <Link className="list-item" to="/courses">Courses</Link>
        </li>
      </ul>
    </header>
  );
}
