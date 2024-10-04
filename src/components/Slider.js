import React from "react";
import "../styles/Slider.css";

const Slider = () => {
  return (
    <div className="slider">
      <h1 className="slider-title">
        <span className="line-one">HER PAKETTE</span>
        <br />
        <span className="line-two">YENİ BİR FIRSAT!</span>
      </h1>
      <div className="slider-buttons">
        <button className="slider-btn">Download the App</button>
        <button className="slider-btn">Business Sign-up</button>
      </div>
    </div>
  );
};

export default Slider;
