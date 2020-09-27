import React from 'react';
import './JumbotronBanner.scss';
import { Container } from 'react-bootstrap';

const JumbotronBanner = () => {
  return (
    <div className="headerBanner">
      <Container>
        <div className="content-container">
          <h2>An interpretable <span className="highlighted">AI-driven</span> assistant for disease diagnosis / prognosis</h2>
          <p>Vestibulum bibendum blandit pharetra. Integer commodo dui in sollicitudin porta. Duis laoreet eget odio facilisis scelerisque. Proin porttitor at ex in varius.</p>
          <a href="#">
            <div className="banner-btn">
              <p>Learn More</p>
            </div>
          </a>
        </div>
      </Container>
    </div>
  )
}

export default JumbotronBanner;