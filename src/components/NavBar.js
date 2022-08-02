import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
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
                Home
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer
              to="/categories"
            >
              <Nav.Link
                // className={ ( { isActive } ) => isActive ? 'active' : undefined }
              >
                Categories
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/favorites">
              <Nav.Link
                // className={ ( { isActive } ) => isActive ? 'active' : undefined }
              >
                Favorites
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  )
}

export default NavBar;

{/* <Navbar bg="dark" variant="dark" id="nav-bar">
        <Nav>
          <Nav.Item>
            <LinkContainer exact to="/">
              <Nav.Link>
                <Navbar.Brand>Food Frenzy</Navbar.Brand>
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer
              to="/categories"
            >
              <Nav.Link
              >
                Categories
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/favorites">
              <Nav.Link>Favorites</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Navbar>
    </> */}