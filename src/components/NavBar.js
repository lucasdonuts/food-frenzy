import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const linkStyles = {
  display: "inline-block",
  padding: "12px",
  margin: "0 6px 6px",
  background: "darkslateblue",
  textDecoration: "none",
  color: "white",
  textAlign: "center"
};

const NavBar = () => {
  return (
    <header>
      <nav className="nav-bar">
        <Link
          to="/">
          <h1>Food Frenzy</h1>
        </Link>
        <div className="nav-links">
          <NavLink
            to="/favorites"
            style={ linkStyles }
          >
            Favorites
          </NavLink>
          <NavLink
            to="/categories"
            style={ linkStyles }
          >
            Categories
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;