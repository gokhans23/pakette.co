import React from 'react';
import './Slider.css';
import sampleImage from '../../assets/phone.png'; // Adjust the path accordingly
import { SiGoogleplay } from 'react-icons/si';
import { FaApple } from 'react-icons/fa';

const Slider = () => {
  const handleDownloadClick = () => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.yourapp';
  };

  const handleBusinessSignUpClick = () => {
    window.location.href = '/business-signup';
  };

  return (
    <div style={{background: "#fff"}}>
      <div className="slider">
        <div className="slider-content">
          <h1 className="slider-title">
            <span className="line-one">HER PAKETTE</span>
            <span className="line-two">YENİ BİR FIRSAT!</span>
          </h1>
          <div className="slider-buttons">
            <div className="app-store-buttons">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="download-btn">
                <SiGoogleplay className="btn-icon" />
                Android İçin İndir
              </a>
              <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" className="download-btn">
                <FaApple className="btn-icon" />
                iOS İçin İndir
              </a>
            </div>
          </div>
        </div>
        <div className="slider-image">
          <img src={sampleImage} alt="Slider Example" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
