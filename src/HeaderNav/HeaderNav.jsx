import "./HeaderNav.css";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <div className="header-nav">
      <Link to="/">
        <button id="home-button">Home</button>
      </Link>
    </div>
  );
}
