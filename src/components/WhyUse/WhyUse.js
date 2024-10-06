// src/components/WhyUse.js
import React from 'react';
import './WhyUse.css';
import { FaApple } from 'react-icons/fa';
import { SiGoogleplay } from 'react-icons/si';
import PaketteLogo from '../../assets/paketteWEBP.webp';

const WhyUse = () => {
  return (
    <div id="why-pakette" className="why-use-container">
      {/* Title */}
      <h2 className="why-use-title">
        <span className="black-text">NEDEN</span> <span className="red-text">PAKETTE?</span>
      </h2>

      {/* Description */}
      <div className="why-use-description">
        <p>
          Pakette, herkese gıda israfıyla birlikte mücadele etmeleri konusunda ilham verme ve onları güçlendirme misyonuna sahip bir sosyal
          etki şirketidir. Uygulamamız, gıda fazlası için dünyanın en büyük pazar yeridir. Yerel mağazalarda, kafelerde ve restoranlarda
          paranızın tam karşılığını sunarak kullanıcıların iyi yiyecekleri israftan kurtarmalarına yardımcı oluyoruz.
        </p>
      </div>

      {/* Content */}
      <div className="why-use-content">
        <div className="why-use-info left-info">
          <p>İYİ YİYECEĞİN TADINI ÇIKAR</p>
          <p>GIDA İSRAFINI AZALTARAK ÇEVREYE YARDIMCI OL</p>
        </div>

        <div className="why-use-image">
          <img src={PaketteLogo} alt="Pakette Logo" />
        </div>

        <div className="why-use-info right-info">
          <p>SANA YAKIN YİYECEKLERİ KURTAR</p>
          <p>YEREL KAFE VE RESTORANLARDAN YENİ ŞEYLER DENE</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUse;
