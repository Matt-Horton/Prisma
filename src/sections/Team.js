import React from 'react';
import { Container } from 'react-bootstrap';
import './About.scss';

const Team = () => {
  return (
    <div>
      <Container>
        <div className="about-container">
          <div className="about-row">
            <h4 className="section-header">Meet The Team</h4>
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
              </div>
              <h5>Lawrence Schobs</h5>
              <p>Phd Student</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-item">
              <div className="icon-container">
              </div>
              <h5>Lawrence Schobs</h5>
              <p>Phd Student</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-item">
              <div className="icon-container">
              </div>
              <h5>Lawrence Schobs</h5>
              <p>Phd Student</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Team;