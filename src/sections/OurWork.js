import React from 'react';
import { Container } from 'react-bootstrap';
import '../sections/OurWork.scss';

const OurWork = () => {
  return (
    <section id="work" className="work-section">
      <Container>
        <div className="row">
          <div className="col-md-6 work-image-container">
            <img src={require("../images/our-work.png")} className="work-image"/>
          </div>
          <div className="col-md-6 work-info-container">
            <div className="work-section-header">
              <h4>Our Technology</h4>
              <hr />
            </div>
            <p>
            We are creating an interpretable AI for CVD diagnosis/prognosis, which we have successfully demonstrated on PH. Clinicians are presented with an image pinpointing exactly where the features of diagnostic interest are. This makes it easy for the clinician to audit the AI's decision, and potentially uncover new insights on the disease.
            <br/>
            <br/>
            We focus directly on patient outcomes instead of quantitative measures, reaching high diagnostic accuracy without needing to calculate metrics through intermediary tasks like segmentation. Our solution reaches comparable diagnostic/prognostic performance to the standard manual methods, while taking a fraction of the time.
            <br/>
            <br/>
            Our technology is applicable to other diseases and image modalities, which we are beginning to explore (with your help!). As well as a clinical tool, our AI can be used to provide endpoints in clinical trials for treatment evaluation.
            <br/>
            <br/>
            We have a patent filed for our method. You can read more about our technology in our publications in the <a href="https://academic.oup.com/ehjcimaging/advance-article/doi/10.1093/ehjci/jeaa001/5717931">European Heart Journal - Cardiovascular Imaging</a> and <a href="https://link.springer.com/chapter/10.1007/978-3-030-59713-9_25">MICCAI 2020</a>.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OurWork;