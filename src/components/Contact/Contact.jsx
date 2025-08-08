import React from 'react';
import './Contact.css';

const ContactUs = () => {
  const handlePrimaryContact = () => {
    // Add your contact logic here
    console.log('Primary contact button clicked');
  };

  const handleScheduleCall = () => {
    // Add your scheduling logic here
    console.log('Schedule call button clicked');
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Let's Connect</h2>
        <div className="contact-underline"></div>
        
        <p className="contact-subtitle">
          Ready to bring your vision to life? We'd love to hear from you. 
          Let's discuss how we can help you achieve your goals and create something extraordinary together.
        </p>

        
        <div className="contact-button-wrapper">
          <button className="contact-button" onClick={handlePrimaryContact}>
            Start a Conversation
          </button>
    
        </div>
      </div>
    </section>
  );
};

export default ContactUs;