import React from 'react';
import { Container } from 'react-bootstrap';
import './About.scss';

const About = () => {
  return (
    <div>
      <Container>
        <div className="about-container">
          <div className="about-row">
            <h4 className="section-header">About Us</h4>
            <hr />
          </div>
          <div className="about-row">
            <p className="section-info">Maecenas mollis varius sodales. Maecenas sit amet magna est. Cras ac nunc justo. Curabitur semper dui urna, sed accumsan risus feugiat a.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="about-item">
              <div className="icon-container">
                <i className="material-icons">check_circle_outline</i>
              </div>
              <h5>The Problem</h5>
              <p>Estibulum eget sagittis ipsum, mattis ornare quam. Mauris eu tristique ipsum, ac tempor ante.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-item">
              <div className="icon-container">
                <i className="material-icons">check_circle_outline</i>
              </div>
              <h5>Our Vision</h5>
              <p>Estibulum eget sagittis ipsum, mattis ornare quam. Mauris eu tristique ipsum, ac tempor ante.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-item">
              <div className="icon-container">
                <i className="material-icons">check_circle_outline</i>
              </div>
              <h5>The Solution</h5>
              <p>Estibulum eget sagittis ipsum, mattis ornare quam. Mauris eu tristique ipsum, ac tempor ante.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About;