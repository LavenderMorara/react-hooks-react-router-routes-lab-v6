// NavBar.jsx
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar" style={{ display: "flex", gap: "1rem", padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/directors">Directors</NavLink>
    </nav>
  );
}

export default NavBar;
