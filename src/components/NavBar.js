import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link
          to="/">
          <h1>Food Frenzy</h1>
        </Link>
        <div className="nav-links">
          <NavLink to="/favorites">
            Favorites
          </NavLink>
          <NavLink to="/categories">
            Categories
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;