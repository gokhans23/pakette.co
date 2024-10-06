// src/components/ScrollingBar.js
import React from 'react';
import './ScrollingBar.css';

const ScrollingBar = () => {
  const messages = ['Save Money', 'Reduce Waste', 'Support Local Businesses', 'Discover New Foods', 'Join Pakette Today!'];
  const repeatedMessages = Array(12).fill(messages).flat();

  return (
    <div className="scrolling-bar">
      <div className="scrolling-content">
        {repeatedMessages.map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBar;
