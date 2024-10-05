import React from 'react';
import { HowToUse, Navbar, Slider, ScrollingBar, WhyUse, BusinessSolutions, JoinUs, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <WhyUse />
      <ScrollingBar />
      <HowToUse />
      <BusinessSolutions />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
