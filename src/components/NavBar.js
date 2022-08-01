import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
    <header>
      <Nav className="justify-content-start nav-bar">
        <Link
          to="/">
          <h1>Food Frenzy</h1>
        </Link>
        {/* <div className="nav-links"> */}
        <NavLink
          to="/favorites"
        >
          <Button>
            Favorites
          </Button>
        </NavLink>
        <NavLink
          to="/categories"
        >
          <Button>
            Categories
          </Button>
        </NavLink>
        {/* </div> */}
      </Nav>
    </header>
  )
}

export default NavBar;