// src/components/JoinUsSection.js
import React from 'react';
import './JoinUs.css';

const JoinUs = () => {
  const brands = ['ALDI', 'MORRISONS', 'GREGGS', 'STARBUCKS', 'YO! SUSHI', 'BURGER KING', 'MCDONALDS', 'TESCO', 'WAITROSE'];

  return (
    <div className="join-us-container">
      <div className="brand-scroller">
        <div className="brand-track">
          {brands.map((brand, index) => (
            <span key={index} className="brand-name">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
