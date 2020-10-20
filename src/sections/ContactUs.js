import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import './ContactUs.scss';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const submitToAPI = () => {

    let formData = {
      name: name,
      email: email,
      message: message
    };

    var headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8',
    });

    fetch("https://6cnnjj7bi8.execute-api.eu-west-2.amazonaws.com/test/contact-us", {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(formData),
    });

    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  }

  const changeName = (e) => {
    setName(e.target.value);
  }

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changeMessage = (e) => {
    setMessage(e.target.value);
  }

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
          <div className="contact-form">
            <div className="contact-form-row">
              <input type="text" id="name" name="name" placeholder="Name" value={name} onChange={changeName} />
              <input type="text" id="email" name="email" placeholder="Email" value={email} onChange={changeEmail} />
            </div>
            <textarea id="message" name="message" rows="4" cols="50" placeholder="Your message..." value={message} onChange={changeMessage} />
            <button onClick={submitToAPI} className="contact-submit-btn">Submit</button>
            {submitted ? <h3 className="submission-text">Thank you for your submission!</h3> : null}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactUs;