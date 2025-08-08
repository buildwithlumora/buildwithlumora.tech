import React from 'react';
import './Process.css';
import { FaRegLightbulb } from "react-icons/fa6";
import { FiSend } from 'react-icons/fi';
import { AiOutlineCheck } from 'react-icons/ai';

function Process() {
  const steps = [
    {
      number: "1",
      icon: <FaRegLightbulb className='step-icon'/>,
      title: "Define Your Vision",
      description: "Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly."
    },
    {
      number: "2",
      icon: <FiSend className="step-icon" />,
      title: "Submit Your Request",
      description: "Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity."
    },
    {
      number: "3",
      icon: <AiOutlineCheck className="step-icon" />,
      title: "Project Delivered",
      description: "As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations."
    }
  ];
  
   const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Adjust this value based on your navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
  setIsMenuOpen(false);
};

  return (
    <div className="process-container">
      <div className="process-content">
        <div className="process-image-container">
          <img
            src="https://i.postimg.cc/L5D4NpT6/process.avif"
            alt="Design Process"
            className="process-image"
          />
        </div>
        
        <div className="process-info">
          <div className="process-header">
            <h2>Process</h2>
            <p className="description">
              Crafting bold visuals that inspire and elevate brands with thought process.
            </p>
            <div className="action-buttons">
               <button
                href="#contact"
                className="action-btn primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact Us
              </button>
              <button className="action-btn secondary">See Projects</button>
            </div>
          </div>

          <div className="process-steps">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-content">
                  <div className="step-header">
                    <div className="step-icon-wrapper">
                      {step.icon}
                    </div>
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;