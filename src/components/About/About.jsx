import React from 'react';
import './About.css';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Srikar Janjirala ',
    role: 'Founder & COO',
    linkedIn: 'https://www.linkedin.com/in/srikar-janjirala/'
  },
  {
    name: 'Ashish Lukka',
    role: 'Co-Founder & CEO',
    linkedIn: 'https://www.linkedin.com/in/ashish-lukka/'
  },
  {
    name: 'Swaroop Mallidi',
    role: 'Co-Founder & CFO',
    linkedIn: 'https://www.linkedin.com/in/swaroop-mallidi/'
  },
  {
    name: 'Shaik Afzal Elahi',
    role: 'Co-Founder & CTO',
    linkedIn: 'https://www.linkedin.com/in/shaik-afzal-elahi/'
  }
];

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-left">
          <div className="about-text">
            <span className="subtitle">Who we are</span>
            <h2>About</h2>
            <p className="description">
              Lumora is a collective of four friends who believe in the power of craft, code, and collaboration. 
              We build thoughtful, custom digital experiences for people and products we believe in.
            </p>
          </div>

          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div key={index} className="member-row">
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
                <a 
                  href={member.linkedIn} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="linkedin-btn"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <FaLinkedin />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="about-right">
          <div className="about-image-container">
            <img 
              src="https://i.postimg.cc/7ZkvR44F/LUMORA.png" 
              alt="About Lumora" 
              className="about-image" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;