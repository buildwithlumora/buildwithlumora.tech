import React from 'react';
import './Contact.css';

const ContactUs = () => {
  const handlePrimaryContact = () => {
    const email = "buildwithlumora@gmail.com";
    const subject = "Let's Build Something Together";
    const body = `Hi Lumora Team,

I’m looking to get a project developed and would love to work with your team. Please let me know how we can get started.

Best,
[Your Name]

`;

    const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(
  gmailLink,
  "gmailWindow",
  "width=500,height=500,left=950,top=200"
);
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
