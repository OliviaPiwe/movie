import { NavLink } from "react-router-dom";
export function Nav() {
  return (
    <nav className="nav-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/search">Search Movies</NavLink>
    </nav>
  );
}
