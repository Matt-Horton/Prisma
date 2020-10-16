import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer-row">
          <p>Copyright &#169; Prisma. All rights reserved</p>
          <p>Page created by Matt Horton</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;