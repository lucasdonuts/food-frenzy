import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link
        to="/"
        exact
      >
        <h1>Food Frenzy</h1>
      </Link>
      <div className="nav-links">
        <NavLink to="/favorites">
          Favorites
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar;