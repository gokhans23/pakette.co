import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaTwitter, FaApple } from 'react-icons/fa';
import './Footer.css';
import logo from '../../assets/pakettelogooo.png';
import { SiGoogleplay } from 'react-icons/si';
import SubFooter from './components/SubFooter/SubFooter';

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Pakette Logo" className="logo" />
        </div>

        <div className="footer-center">
          <div className="footer-links">
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Support</a>
          </div>
          <div className="footer-icons">
            <FaLinkedin />
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
            <FaYoutube />
          </div>
          <div className="footer-store">
            <div className="footer-app-store-buttons">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="footer-download-btn">
                <SiGoogleplay className="btn-icon" />
                Android İçin İndir
              </a>
              <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" className="footer-download-btn">
                <FaApple className="btn-icon" />
                iOS İçin İndir
              </a>
            </div>
          </div>
        </div>

        <div className="footer-logo">
          <img src={logo} alt="Pakette Logo" className="logo" />
        </div>
      </footer>
      <SubFooter />
    </>
  );
};

export default Footer;
