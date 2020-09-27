import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './StaticNavbar.scss';

const StaticNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id="mainNav" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Prisma</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#work">Our Work</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#partner">Partner</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default StaticNavbar;