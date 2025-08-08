import React, { useState, useEffect } from "react";
import Silk from "./utils/Silk.jsx";
import './App.css';
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import Process from "./components/Process/Process.jsx";
import AboutSection from "./components/About/About.jsx";
import ContactUs from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoadingScreen from "./components/Loading Screen/LoadingScreen.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [silkReady, setSilkReady] = useState(false);

  useEffect(() => {
    // Ensure dark background during initial load
    // document.documentElement.style.backgroundColor = "#090909";
    // document.body.style.backgroundColor = "#090909";

    // Initialize Silk with a slight delay to prevent white flash
    const silkTimer = setTimeout(() => {
      setSilkReady(true);
    }, 100);

    // Function to check if all assets are loaded
    const checkAssetsLoaded = async () => {
      // Wait for images
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', resolve);
        });
      });

      // Wait for Silk to be ready
      const silkPromise = new Promise(resolve => {
        if (silkReady) resolve();
        const checkSilk = setInterval(() => {
          if (silkReady) {
            clearInterval(checkSilk);
            resolve();
          }
        }, 100);
      });

      // Wait for all assets to be ready
      await Promise.all([...imagePromises, silkPromise]);

      // Add a delay for smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    // Check assets on mount and window load
    checkAssetsLoaded();
    window.addEventListener('load', checkAssetsLoaded);

    return () => {
      window.removeEventListener('load', checkAssetsLoaded);
      clearTimeout(silkTimer);
      // Reset background colors
      document.documentElement.style.backgroundColor = "";
      document.body.style.backgroundColor = "";
    };
  }, [silkReady]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      <div className="app-container">
        <div className="hero-section1">
          <div className={`background-layer ${silkReady ? 'silk-ready' : ''}`}>
            {silkReady && (
              <Silk
                speed={5}
                scale={0.4}
                color="#575757"
                noiseIntensity={1.5}
                rotation={0}
              />
            )}
          </div>
          <div className="content-layer">
            <Hero />
          </div>
        </div>

        <main>
          <section id="services">
            <Services />
          </section>
          <section id="process">
            <Process />
          </section>
          <section id="about">
            <AboutSection />
          </section>
          <section id="contact">
            <ContactUs />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;