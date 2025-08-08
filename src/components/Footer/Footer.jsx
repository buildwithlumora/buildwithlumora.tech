import React from 'react';
import './Footer.css';
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <span className="logo-flex">
            <svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" className="lumora-svg">
              <path
                d="m218.70042 236.26062c-11.61545 7.63194-25.81211 10.17593-37.42758 10.17593-36.13697 0-68.40217-29.25577-68.40217-67.41546 0-35.6157 28.39344-67.41544 68.40217-67.41544 21.9403 0 43.88062 10.17592 58.0773 33.07173 11.61548 19.07984 9.03425 31.79974 12.90607 50.87958 6.45304 33.07174 25.81212 40.70366 42.59004 40.70366 42.59 0 51.62426-49.60746 46.46184-82.67917-11.61547-78.863351-80.02337-135.32848-160.03533-136.27174-95.607528-1.127121-163.97501 77.84354-163.97501 159.16766 0 102.0878 80.187984 166.22488 163.97501 166.22488 29.68395 0 62.84377-8.42738 90.37837-27.00575"
                fill="none"
                stroke="#ffffffd4"
                strokeMiterlimit="23"
                strokeWidth="33"
              />
            </svg>
            <span className="lumora">LUMORA</span>
          </span>
        </div>

        <div className="footer-right">
          <a 
            href="https://www.linkedin.com/company/buildwithlumora/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-link"
          >
            <span>LinkedIn</span>
            <MdArrowOutward className='arrow-icon'/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
