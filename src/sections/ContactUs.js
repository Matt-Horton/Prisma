import React from 'react';
import { Container } from 'react-bootstrap';
import './ContactUs.scss';

const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <Container>
        <div className="contact-row">
          <h5>Interested in partnering with us?</h5>
          <hr />
          <p className="section-info">Maecenas mollis varius sodales. Maecenas sit amet magna est. Cras ac nunc justo. Curabitur semper dui urna, sed accumsan risus feugiat a.</p>
        </div>
        <div>
          <form className="contact-form">
            <div className="contact-form-row">
              <input type="text" id="name" name="name" />
              <input type="text" id="email" name="email" />
            </div>
            <textarea id="message" name="message" rows="4" cols="50" />
            <button>Submit</button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default ContactUs;