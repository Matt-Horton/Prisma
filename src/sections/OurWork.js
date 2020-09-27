import React from 'react';
import { Container } from 'react-bootstrap';
import '../sections/OurWork.scss';

const OurWork = () => {
  return (
    <div className="work-section">
      <Container>
        <div className="row">
          <div className="col-md-6">
            <img src={require("../images/doctor-banner.jpg")} className="work-image"/>
          </div>
          <div className="col-md-6 work-info-container">
            <div className="work-section-header">
              <h4>Our Work</h4>
              <hr />
            </div>
            <p>Curabitur ultricies leo vitae porttitor facilisis. Nullam a enim ut tellus imperdiet porttitor. Donec semper, felis id pharetra lacinia, ligula diam ultricies nunc, suscipit aliquam urna odio eu orci. Vestibulum et nunc sagittis, bibendum nunc ut, pulvinar diam.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default OurWork;