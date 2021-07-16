import React from "react";
import { Route, Link } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>
                <img className='logo' src='images/logo4.png' alt='logo' />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <LinkContainer to='/services'>
                  <Nav.Link>
                    <i className='fas fa-briefcase'></i> Services
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/about'>
                  <Nav.Link> Contact</Nav.Link>
                </LinkContainer>
                {/* <LinkContainer to='/contact'>
                  <Nav.Link>How to get started?</Nav.Link>
                </LinkContainer> */}
                <LinkContainer to='/login'>
                  <Nav.Link>Sign IN</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/sign-in'>
                  <Nav.Link>Join</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
