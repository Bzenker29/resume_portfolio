import { NavLink } from "react-router-dom";
import "/src/App.css";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      {["/", "/experience", "/projects", "/resume"].map((path, index) => {
        const labels = ["Home", "Experience", "Projects", "Resume"];
        return (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {labels[index]}
          </NavLink>
        );
      })}
    </nav>
  );
}
