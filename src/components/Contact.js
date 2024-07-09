import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  const [confirmationMessage, setConfirmationMessage] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const sentMessage = { name, email, message };
    console.log(sentMessage);

    setConfirmationMessage(true);
    setTimeout(() => {
      setConfirmationMessage(false);
    }, 3000);
  };

  return (
    <div id="contactFormContainer">
      <h2 className="text-center md-4">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" id="message" name="message" required></textarea>
            </div>
            <button id="submit" type="submit" className="btn btn-primary">Send Message</button>
          </form>
          {confirmationMessage && <p id="confirmationMessage" className="text-success">Message sent successfully!</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;