// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="nav-center">
        <img src="/pakettelogo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </div>
      <div className="nav-left">
        <a href="#why-pakette">Neden Pakette?</a>
        <a href="#business-solutions">İş Çözümleri</a>
        <a href="#">Gıda İsrafı</a>
      </div>
      <div className="nav-right">
        <a href="#" className="bordered-link">
          Uygulamayı İndir
        </a>
        <a href="#" className="bordered-link">
          İşletme Girişi
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
