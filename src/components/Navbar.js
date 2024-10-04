import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#">
          Business Solutions <span className="dropdown-icon">▼</span>
        </a>
        <a href="#">
          About Us <span className="dropdown-icon">▼</span>
        </a>
        <a href="#">
          About Food Waste <span className="dropdown-icon">▼</span>
        </a>
      </div>
      <div className="nav-center">
        <img src="/pakettelogo.png" alt="Logo" className="logo" />
      </div>
      <div className="nav-right">
        <a href="#" className="bordered-link">
          Download the App <span className="dropdown-icon">▼</span>
        </a>
        <a href="#" className="bordered-link">
          Business Sign-up <span className="dropdown-icon">▼</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
