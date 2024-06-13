// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background-color: rgba(0, 0, 0, 0.8) !important;
  padding: 1rem;
  .navbar-brand {
    color: white !important;
    &:hover {
      color: #f39c12 !important;
    }
  }
  .navbar-toggler {
    border-color: rgba(255, 255, 255, 0.5) !important;
  }
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }
  .nav-link {
    color: white !important;
    &:hover {
      color: #f39c12 !important;
      cursor:pointer;
    }
  }
  .navbar-collapse {
    justify-content: flex-end;
  }
`;

const NavBar = () => {
    return (
        <StyledNavbar expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#">MyPortfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="hero" smooth={true}>Home</Nav.Link>
                        <Nav.Link as={Link} to="about" smooth={true}>About</Nav.Link>
                        <Nav.Link as={Link} to="skills" smooth={true}>Skills</Nav.Link>
                        <Nav.Link as={Link} to="projects" smooth={true}>Projects</Nav.Link>
                        <Nav.Link as={Link} to="contact" smooth={true}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    );
};

export default NavBar;
