import React from "react";
import "./Services.css";
import { BiPalette, BiStore } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";

function Services() {
  const tagsRow1 = [
    "Responsive Design",
    "SEO-Ready Code",
    "Mobile Optimization",
    "Performance Audits",
    "Cross-Browser Support",
    "Accessibility Compliance",
    "Web App Development",
    "E-commerce Solutions",
    "Custom Dashboard UI",
    "Landing Pages",
    "CMS Integration",
    "API Integration",
  ];

  const tagsRow2 = [
    "User Authentication",
    "Admin Portals",
    "Payment Gateway Setup",
    "Analytics Integration",
    "Content Management",
    "Multilingual Support",
    "Email Notifications",
    "Form Handling",
    "Cloud Deployment",
    "Third-party APIs",
    "Security Best Practices",
    "Version Control (Git)",
  ];

  const serviceButtons = [
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "SEO Optimization",
    "Custom Web Apps",
    "Brand Websites",
  ];

  const serviceCards = [
    {
      icon: <BiPalette />,
      title: "Web Design & UX",
      description:
        "Designing intuitive, user-friendly interfaces that engage your audience and reflect your brand's personality — making every click count.",
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "From responsive business websites to complex dashboards — we build fast, scalable, and secure web apps using modern tech stacks.",
    },
    {
      icon: <BiStore />,
      title: "E-Commerce Solutions",
      description:
        "Launch your online store with seamless UI, secure checkout flows, and powerful integrations — everything you need to sell smarter.",
    },
    {
      icon: <AiOutlineBarChart />,
      title: "SEO & Performance",
      description:
        "Optimize your website to load faster, rank higher, and convert better. We handle both on-page and technical SEO.",
    },
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
    <div className="services-container">
      <div className="services-header">
        <div className="services-text">
          <h2>Services</h2>
          <p className="description">
            Crafting high-impact websites and web applications that drive
            results — from idea to launch, we turn your vision into digital
            reality.
          </p>
          <div className="service-tags">
            <div className="tags-container">
              {serviceButtons.map((btn, index) => (
                <button key={index} className="service-btn">
                  {btn}
                </button>
              ))}
            </div>
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
              {/* <button className="action-btn secondary">See Projects</button> */}
            </div>
          </div>
            </div>
        <div className="services-image-container">
  <video
    src="https://files.catbox.moe/y7rxy4.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="rounded-image"
  />
</div>

      </div>

      <div className="services-grid">
        {serviceCards.map((card, index) => (
          <div key={index} className="service-card">
            <div className="card-header">
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
            </div>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="infinite-scroll-container">
        <div className="scroll-track track1">
          {[...tagsRow1, ...tagsRow1].map((tag, index) => (
            <span key={`row1-${index}`} className="scroll-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="scroll-track track2">
          {[...tagsRow2, ...tagsRow2].map((tag, index) => (
            <span key={`row2-${index}`} className="scroll-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
