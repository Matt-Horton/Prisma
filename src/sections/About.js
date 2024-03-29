import React from 'react';
import { Container } from 'react-bootstrap';
import './About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about">
      <Container>
        <div className="about-container">
          <div className="about-row">
            <h4 className="section-header">About Us</h4>
            <hr />
          </div>
          <div className="about-row">
            <p className="section-info">
              At the University of Sheffield we are developing an interpretable AI system that analyses medical scans to produce an interpretable diagnosis/prognosis for cardiovascular diseases (CVDs). We have successfully demonstrated our technology using cardiac MRIs to diagnose/prognose Pulmonary Hypertension (PH). We are exploring options to commercialise this system, looking for partners to expand the scope of our technology to other diseases & image modalities.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="about-item">
              <div className="icon-container">
                <FontAwesomeIcon icon={faLock} size="2x" color="#34e89e" />
              </div>
              <h5>The Problem</h5>
              <p>Current diagnosis methods for CVDs are manual and slow, varying with the experience of the radiologist. Most current AI-based solutions are a ‘blackbox’, asking the clinician to blindly trust the decision.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-item">
              <div className="icon-container">
                <FontAwesomeIcon icon={faKey} size="2x" color="#34e89e"/>
              </div>
              <h5>Our Solution</h5>
              <p>An interpretable, no variance AI-driven second opinion, with clearly traceable decision making.
              Rather than replace healthcare providers, we want to empower them with a high performing, and more importantly,
              trustable tool.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-item">
              <div className="icon-container">
                <FontAwesomeIcon icon={faCheck} size="2x" color="#34e89e" />
              </div>
              <h5>The Value</h5>
              <p>We can reduce the analysis time from 15 minutes to mere seconds, freeing up clinician's valuable time. We generate an interpretable annotated image, either confirming known disease indicators or potentially flagging up new ones.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About;