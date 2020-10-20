import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer-row">
          <p>Copyright &#169; Prisma. All rights reserved</p>
          <p>Page created by <a href="https://matt-horton.github.io/Portfolio/">Matt Horton</a></p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;