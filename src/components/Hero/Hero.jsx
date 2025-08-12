import { useEffect, useState } from "react";
import "./Hero.css";

const NAV_ITEMS = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

function Hero({ navbarOnly }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 0; 
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
  setIsMenuOpen(false);
};

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > window.innerHeight); // >100vh
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`website-header-container-top ${scrolled ? "scrolled" : ""}`}>
        <div className="website-header-logo-container">
          <span className="logo-flex" onClick={scrollToTop}style={{ cursor: 'pointer' }}>
            <svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" className="lumora-svg">
              <path
                d="m218.70042 236.26062c-11.61545 7.63194-25.81211 10.17593-37.42758 10.17593-36.13697 0-68.40217-29.25577-68.40217-67.41546 0-35.6157 28.39344-67.41544 68.40217-67.41544 21.9403 0 43.88062 10.17592 58.0773 33.07173 11.61548 19.07984 9.03425 31.79974 12.90607 50.87958 6.45304 33.07174 25.81212 40.70366 42.59004 40.70366 42.59 0 51.62426-49.60746 46.46184-82.67917-11.61547-78.863351-80.02337-135.32848-160.03533-136.27174-95.607528-1.127121-163.97501 77.84354-163.97501 159.16766 0 102.0878 80.187984 166.22488 163.97501 166.22488 29.68395 0 62.84377-8.42738 90.37837-27.00575"
                fill="none"
                stroke="#ffffffd4"
                strokeMiterlimit="23"
                strokeWidth="33"
              />
            </svg>
            <span className="lumora" style={{ fontFamily: '"MuseoModerno", sans-serif' }}>
              LUMORA
            </span>
          </span>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {!navbarOnly && (
        <section className="hero-section" id="home">
          <div className="hero-content">
            <h1>
              Building that you<br />
              need Indeed
            </h1>
            <p>
              Elevate your brand with custom website and package design. Showcase your<br />
              story through bold visuals and strategic design solutions.
            </p>
            <div className="hero-buttons">
              <a
                href="#contact"
                className="hero-btn"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Get Started
              </a>
              {/* <a
                href="#projects"
                className="hero-btn"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                See Projects
              </a> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Hero;
