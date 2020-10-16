import React from 'react';
import { Container } from 'react-bootstrap';
import './About.scss';

const Team = () => {
  return (
    <section id="team" className="team-section">
      <Container>
        <div className="about-container">
          <div className="about-row">
            <h4 className="section-header">Meet The Team</h4>
            <hr />
          </div>
          <div className="about-row">
            <p className="section-info">We have a crack team of young researchers from a technical background, fully supported by University of Sheffield.
             We are also working closely with the Sheffield Teaching Hospital, giving us the medical insight we need.  </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="about-item">
              <div className="icon-container">
              </div>
              <h5>Lawrence Schobs</h5>
              <p>PhD Student. Lawrence completed his Computer Science BSc at the University of Sheffield, working on our technology as part of his degree. 
              He is currently taking the lead on the commercialisation of the project.</p>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="about-item">
              <div className="icon-container">
              </div>
              <h5>Dr Haiping Lu</h5>
              <p>Senior Lecturer & Researcher. Dr Lu is well established in the field of machine learning, currently working at Sheffield.
               He created the core of the technology and currently supervises the researchers in our team. </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-item">
              <div className="icon-container">
              </div>
              <h5>Dr Johanna Uthoff</h5>
              <p>Postdoc. Dr Uthoff completed her PhD at the University of Iowa, focusing on machine learning with medical imaging. She has a postdoc position at Sheffield, working on our AI.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-item">
              <div className="icon-container">
              </div>
              <h5>Dr Andrew Swift</h5>
              <p>Radiologist and Research Fellow. Dr Swift is an experienced radiologist at Sheffield, specializing in PH. 
              He has numerous publications on the subject, providing our team with expert clinical insights for our technology.  </p>
            </div>
          </div>
        </div>
        
        
      </Container>
    </section>
  )
}

export default Team;