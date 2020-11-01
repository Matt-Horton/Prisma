import React, { useState, useEffect } from 'react';
import './JumbotronBanner.scss';
import { Container, Carousel } from 'react-bootstrap';

const JumbotronBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 992);
    }, false);
  });

  const renderPartners = () => {
    if (isMobile) {
      return (
        <Carousel interval={6000} indicators={false}>
          <Carousel.Item>
            <img src={require("../images/uos.png")} alt="The University of Sheffield" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../images/epsrc.png")} alt="Engineering and Physical Sciences Research Council" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../images/nihr.png")} className="partner-image-lg mobile" alt="National Institute for Health Research" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../images/sheffield-teaching-hospital.png")} alt="Sheffield Teaching Hospital" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../images/wellcome-trust.png")} alt="The Wellcome Trust" />
          </Carousel.Item>
        </Carousel>
      )
    } else {
      return (
        <>
          <img src={require("../images/uos.png")} alt="The University of Sheffield" />
          <img src={require("../images/epsrc.png")} alt="Engineering and Physical Sciences Research Council" />
          <img src={require("../images/nihr.png")} className="partner-image-lg" alt="National Institute for Health Research" />
          <img src={require("../images/sheffield-teaching-hospital.png")} alt="Sheffield Teaching Hospital" />
          <img src={require("../images/wellcome-trust.png")} alt="The Wellcome Trust" />
        </>
      )
    }
  }

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
      <div className="partner-banner">
        <Container>
          {renderPartners()}
        </Container>
      </div>
    </div>
  )
}

export default JumbotronBanner;