import { Link } from "react-router-dom";
import "/src/App.css";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <h3 className="navbar">
        <Link className="navbar-text" to="/">
          Home
        </Link>
      </h3>
      <h3 className="navbar">
        <Link className="navbar-text" to="/experience">
          Experience
        </Link>
      </h3>
      <h3 className="navbar">
        <Link className="navbar-text" to="/projects">
          Projects
        </Link>
      </h3>
      <h3 className="navbar">
        <Link className="navbar-text" to="/resume">
          Resume
        </Link>
      </h3>
    </nav>
  );
}
