import React from 'react';
import './JumbotronBanner.scss';
import { Container } from 'react-bootstrap';

const JumbotronBanner = () => {
  return (
    <div className="headerBanner">
      <Container>
        <div className="content-container">
          <h2>Improving diagnosis & prognosis for heart health with an interpretable <span className="highlighted">AI-driven</span> assistant</h2>
          <p>Creating an imaging based AI tool, with clearly traceable decision making. Currently on NXNW's Lean Launch Program, actively looking for collaborators & interested parties.</p>
          <div className="btn-container">
            <a href="#about">
              <div className="banner-btn">
                <p>Learn More</p>
              </div>
            </a>
            <a href="#partner">
              <div className="banner-btn-contact">
                <p>Get In Touch</p>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default JumbotronBanner;