// src/components/BusinessSolutions.js
import React from 'react';
import './BusinessSolutions.css';
import solutionImage from '../../assets/step1_big.png'; // Import your image here

const BusinessSolutions = () => {
  const solutions = [
    {
      title: 'Surprise Bags',
      description:
        'Unlock revenue from surplus food: Sell your unsold food in Surprise Bags through our app for customers to collect in-store at a pre-determined time.',
      linkText: 'Food Retail, Food Service, Catering',
      linkUrl: '#'
    },
    {
      title: 'Too Good To Go Platform',
      description:
        'Our end-to-end surplus food management solution helps retailers seamlessly track, manage, and redistribute surplus food.',
      linkText: 'Grocery Retail',
      linkUrl: '#'
    },
    {
      title: 'Date Labelling Initiative',
      description: 'Reduce waste in households with our bespoke Look-Smell-Taste label printed on billions of Best Before products.',
      linkText: 'FMCGs, Wholesale, Retail',
      linkUrl: '#'
    }
  ];

  return (
    <div id='business-solutions' className="business-solutions-container">
      <h2 className="section-title">Our Business Solutions</h2>
      <p className="section-description">
        We offer a range of solutions to empower the world’s leading food distributors to avoid good food from going to waste.
      </p>
      <div className="solutions-layout">
        <div className="image-section">
          <img src={solutionImage} alt="Business Solutions" className="solution-image" />
        </div>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <a href={solution.linkUrl} className="solution-link">
                {solution.linkText} &#8594;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutions;
