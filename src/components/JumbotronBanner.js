import React from 'react';
import './JumbotronBanner.scss';
import { Container } from 'react-bootstrap';

const JumbotronBanner = () => {
  return (
    <div className="headerBanner">
      <Container>
        <div className="content-container">
          <h2>An interpretable <span className="highlighted">AI-driven</span> assistant for disease diagnosis / prognosis</h2>
          <p>Creating an imaging based AI tool, with clearly traceable decision making. Currently on NNW's Lean Launch Program, actively looking for collaborators & interested parties.</p>
          <a href="#about">
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