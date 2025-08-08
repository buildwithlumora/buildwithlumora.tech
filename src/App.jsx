import React from "react";
import Silk from "./utils/Silk.jsx";
import './App.css';
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import Process from "./components/Process/Process.jsx";
import AboutSection from "./components/About/About.jsx";
import ContactUs from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div className="app-container">
      <div className="hero-section1">
        <div className="background-layer">
          <Silk
            speed={5}
            scale={0.4}
            color="#575757"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        <div className="content-layer">
          <Hero />
        </div>
      </div>

      <div id="services">
        <Services />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <div className="foote">
        <Footer />
      </div>
    </div>
  );
}
export default App;
