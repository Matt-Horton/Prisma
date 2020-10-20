import React from 'react';
import { Container } from 'react-bootstrap';
import './About.scss';
import './Team.scss';

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
            <p className="section-info"> We have a crack team of young researchers from diverse backgrounds, fully supported by University of Sheffield. We are also working closely with the Sheffield Teaching Hospital, giving us the medical insight we need.</p>
          </div>
        </div>
        <div className="row">

          <a href="https://www.sheffield.ac.uk/medicine/people/iicd/andrew-swift" className="col-md-6 team-item">
            <div className="about-item">
              <div>
                <img src={require("../images/andrew.png")} className="profile-image" />
              </div>
              <h5>Dr Andrew Swift</h5>
              <h6>Senior Clinical Research Fellow and Chest Radiologist</h6>
              <p>Dr Swift is an experienced radiologist at Sheffield specializing in PH,  providing our team with expert clinical insights. He has achieved multiple awards including the <a href="https://www.nihr.ac.uk/documents/ai-in-health-and-care-awards-funded-projects-2020/25625">NIHR AI in Healthcare award</a> and the <a href="https://wellcome.org/grant-funding/people-and-projects/grants-awarded/stratification-phenotyping-pulmonary-vascular-disease">Wellcome Trust Innovator Award</a>.</p>
            </div>
          </a>

          <a href="https://www.sheffield.ac.uk/dcs/people/academic/haiping-lu" className="col-md-6 team-item">
            <div className="about-item">
              <div>
                <img src={require("../images/haiping.jpg")} className="profile-image" />
              </div>
              <h5>Dr Haiping Lu</h5>
              <h6>Senior Lecturer & Researcher</h6>
              <p>Dr Lu is well established in the field of machine learning, securing multiple international awards from <a href="https://cis.ieee.org/getting-involved/awards/past-recipients#OutstandingPhDDissertationAward">IEEE</a>, <a href="https://www.aaai.org/Awards/conference.php">AAAI</a> and <a href="https://www.amazon.science/research-awards/recipients?f0=2018&p=5">Amazon</a>. He created the core of the technology and currently supervises the researchers in our team.</p>
            </div>
          </a>

          <a href="https://www.sheffield.ac.uk/dcs/people/research-staff/johanna-uthoff" className="col-md-6 team-item">
            <div className="about-item">
              <div>
                <img src={require("../images/johanna.png")} className="profile-image" />
              </div>
              <h5>Dr Johanna Uthoff</h5>
              <h6>Postdoc</h6>
              <p>Dr Uthoff completed her PhD at the University of Iowa, focusing on machine learning with medical imaging. She has a postdoc position at Sheffield, working on our AI.</p>
            </div>
          </a>

          <a href="https://uk.linkedin.com/in/lawrence-schobs-2497a619b" className="col-md-6 team-item">
            <div className="about-item">
              <div>
                <img src={require("../images/lawrence.png")} className="profile-image" />
              </div>
              <h5>Lawrence Schobs</h5>
              <h6>PhD Student</h6>
              <p>Lawrence completed his Computer Science BSc at the University of Sheffield, working on our technology as part of his degree.
              He is currently taking the lead on the commercialisation of the project.</p>
            </div>
          </a>
        </div>


      </Container>
    </section>
  )
}

export default Team;