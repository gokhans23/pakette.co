import React from "react";
import "../styles/Whyuse.css";
import appStoreLogo from "../assets/app-store-logo.png";
import googlePlayLogo from "../assets/google-play-logo.png";

const Whyuse = () => {
  return (
    <div className="why-use-container">
      {/* Başlık kısmı */}
      <h2 className="why-use-title">
        <span className="red-text">WHY USE</span>{" "}
        <span className="black-text">PAKETTE</span>
      </h2>

      {/* Açıklama kısmı */}
      <div className="why-use-description">
        <p>
          Pakette, herkese gıda israfıyla birlikte mücadele etmeleri konusunda
          ilham verme ve onları güçlendirme misyonuna sahip bir sosyal etki
          şirketidir. Uygulamamız, gıda fazlası için dünyanın en büyük pazar
          yeridir. Yerel mağazalarda, kafelerde ve restoranlarda paranızın tam
          karşılığını sunarak kullanıcıların iyi yiyecekleri israftan
          kurtarmalarına yardımcı oluyoruz.
        </p>
      </div>

      <div className="app-store-buttons">
        <a href="https://apps.apple.com/" target="_blank" rel="noreferrer">
          <img
            src={appStoreLogo}
            alt="Download on the App Store"
            className="store-logo"
          />
        </a>
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={googlePlayLogo}
            alt="Get it on Google Play"
            className="store-logo"
          />
        </a>
      </div>

      <div className="why-use-content">
        <div className="why-use-info left-info">
          <p>ENJOY GOOD FOOD AT 1/2 PRICE OR LESS</p>
          <p>HELP THE ENVIRONMENT BY REDUCING FOOD WASTE</p>
        </div>

        <div className="why-use-image">
          <img src="pakettelogooo.png" alt="Why Use Pakettee" />
        </div>

        <div className="why-use-info right-info">
          <p>RESCUE FOOD NEAR YOU</p>
          <p>TRY SOMETHING NEW FROM LOCAL CAFES, BAKERIES OR RESTAURANTS</p>
        </div>
      </div>
    </div>
  );
};

export default Whyuse;
