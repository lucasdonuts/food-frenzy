import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

const NavBar = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark" id="nav-bar">
        <Nav>
          <Nav.Item>
            <LinkContainer id="logo" exact to="/">
              <Nav.Link>
                <Navbar.Brand>Food Frenzy</Navbar.Brand>
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer exact to="/">
              <Nav.Link>
                <strong>Home</strong>
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/favorites">
              <Nav.Link>
                <strong>Favorites</strong>
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/addrecipe">
              <Nav.Link>
                <strong>Add Recipe</strong>
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  )
}

export default NavBar;