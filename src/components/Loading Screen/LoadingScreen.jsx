import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ isLoading }) => {
  return (
    <div className={`loading-screen ${!isLoading ? 'fade-out' : ''}`}>
      <img 
        src="https://i.postimg.cc/7ZkvR44F/LUMORA.png" 
        alt="Lumora Loading" 
        className="loading-logo"
      />
    </div>
  );
};

export default LoadingScreen;