// src/components/HowToUse.js
import React, { useState } from 'react';
import './HowToUse.css';
import Step1BigImage from '../../assets/step1_big.png';
import Step1SmallImage from '../../assets/step1_small.png';

const HowToUse = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setStep(1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      setStep(totalSteps);
    }
  };

  return (
    <div
      className="how-to-use-container"
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') handleNextStep();
        if (e.key === 'ArrowLeft') handlePrevStep();
      }}
    >
      <div className="how-to-use-content">
        <div className="text-content">
          <h2 className="how-to-use-title">Uygulama Nasıl Kullanılır</h2>
          <h3 className="step-title">{`Adım ${step}`}</h3>
          {step === 1 && <p>Adım 1: Size en yakın mağaza ve restoranlardaki Sürpriz Paketleri keşfedin.</p>}
          {step === 2 && <p>Adım 2: Sürpriz Paketleri rezerve edin ve zamanında alın.</p>}
          {step === 3 && <p>Adım 3: Paketlerinizi alın ve harika fırsatların tadını çıkarın!</p>}
          <div className="step-navigation">
            <button onClick={handlePrevStep} aria-label="Önceki Adım">
              &#8592;
            </button>
            <span className="dots">
              <span className={step === 1 ? 'active-dot' : 'dot'}></span>
              <span className={step === 2 ? 'active-dot' : 'dot'}></span>
              <span className={step === 3 ? 'active-dot' : 'dot'}></span>
            </span>
            <button onClick={handleNextStep} aria-label="Sonraki Adım">
              &#8594;
            </button>
          </div>
        </div>
        <div className="image-content">
          {step === 1 && (
            <div className="image-wrapper">
              <img className="big-image" src={Step1BigImage} alt="Adım 1 - Büyük Resim" />
              <img className="small-image" src={Step1SmallImage} alt="Adım 1 - Küçük Resim" />
            </div>
          )}
          {step === 2 && (
            <div className="image-wrapper">
              <img className="big-image" src={Step1BigImage} alt="Adım 2 - Büyük Resim" />
              <img className="small-image" src={Step1SmallImage} alt="Adım 2 - Küçük Resim" />
            </div>
          )}
          {step === 3 && (
            <div className="image-wrapper">
              <img className="big-image" src={Step1BigImage} alt="Adım 3 - Büyük Resim" />
              <img className="small-image" src={Step1SmallImage} alt="Adım 3 - Küçük Resim" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
