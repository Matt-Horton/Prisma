import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './StaticNavbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const StaticNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 992);
    }, false);
  });

  const toggleDropdown = () => {
    if (isMobile) {
      setCollapsed(!collapsed);
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" id="mainNav">
      <Container>
        <Navbar.Brand href="#home">
          <img src={require("../images/prisma-logo.png")} style={{width: 100, height: 30}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleDropdown}>
          {collapsed ? <FontAwesomeIcon icon={faTimes} size="lg" color="#0f3443" /> : <FontAwesomeIcon icon={faBars} size="lg" color="#0f3443" />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link onSelect={toggleDropdown} href="#about" eventKey={1}>About</Nav.Link>
            <Nav.Link onSelect={toggleDropdown} href="#work" eventKey={2}>Our Work</Nav.Link>
            <Nav.Link onSelect={toggleDropdown} href="#team" eventKey={3}>Team</Nav.Link>
            <Nav.Link onSelect={toggleDropdown} href="#partner" className={isMobile ? "" : "rounded-link"} eventKey={4}>Partner</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default StaticNavbar;