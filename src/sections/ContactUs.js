import React from 'react';
import { Container } from 'react-bootstrap';
import './ContactUs.scss';

const ContactUs = () => {
  return (
    <section id="partner" className="contact-us-section">
      <Container>
        <div className="contact-row">
          <h5>Interested in partnering with us?</h5>
          <hr />
          <p className="section-info">We are currently participating in NorthByNorthwest's LLP course, exploring the market for the potential commercilisation of our technology.
          We are actively looking for partners, both academic and in industry. Please reach out if you are interested in our technology or wish to collaborate with us. </p>
        </div>
        <div>
          <form className="contact-form">
            <div className="contact-form-row">
              <input type="text" id="name" name="name" placeholder="Name"/>
              <input type="text" id="email" name="email" placeholder="Email"/>
            </div>
            <textarea id="message" name="message" rows="4" cols="50" placeholder="Your message..."/>
            <button className="contact-submit-btn">Submit</button>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default ContactUs;