import React, { useState } from "react";
import "../styles/HowToUse.css";

const HowToUse = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="how-to-use-container">
      <div className="how-to-use-content">
        <div className="text-content">
          <h2 className="how-to-use-title">Uygulama Nasıl Kullanılır</h2>
          <h3 className="step-title">{`Adım ${step}`}</h3>
          {step === 1 && (
            <p>
              Adım 1: Size en yakın mağaza ve restoranlardaki Sürpriz Paketleri
              keşfedin.
            </p>
          )}
          {step === 2 && (
            <p>Adım 2: Sürpriz Paketleri rezerve edin ve zamanında alın.</p>
          )}
          {step === 3 && (
            <p>
              Adım 3: Paketlerinizi alın ve harika fırsatların tadını çıkarın!
            </p>
          )}
          <div className="step-navigation">
            <button onClick={handlePrevStep} disabled={step === 1}>
              &#8592;
            </button>
            <span className="dots">
              <span className={step === 1 ? "active-dot" : "dot"}></span>
              <span className={step === 2 ? "active-dot" : "dot"}></span>
              <span className={step === 3 ? "active-dot" : "dot"}></span>{" "}
              {/* 3. Nokta Eklendi */}
            </span>
            <button onClick={handleNextStep} disabled={step === 3}>
              &#8594;
            </button>
          </div>
        </div>
        <div className="image-content">
          {step === 1 && (
            <>
              <div className="image-wrapper">
                <img
                  className="big-image"
                  src="imagebig1.png"
                  alt="Step 1 - Image 1"
                />
                <img
                  className="small-image"
                  src="imagesmall1.png"
                  alt="Step 1 - Image 2"
                />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="image-wrapper">
                <img
                  className="big-image"
                  src="https://via.placeholder.com/400x250"
                  alt="Step 2 - Image 1"
                />
                <img
                  className="small-image"
                  src="https://via.placeholder.com/200x150"
                  alt="Step 2 - Image 2"
                />
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <div className="image-wrapper">
                <img
                  className="big-image"
                  src="https://via.placeholder.com/400x250"
                  alt="Step 3 - Image 1"
                />
                <img
                  className="small-image"
                  src="https://via.placeholder.com/200x150"
                  alt="Step 3 - Image 2"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
