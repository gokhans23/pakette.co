import React from "react";
import {
  HowToUse,
  Navbar,
  Slider,
  ScrollingBar,
  WhyUse,
  BusinessSolutions,
  JoinUs,
  Footer,
  Help,
} from "./components";

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
      <Help />
      <Footer />
    </div>
  );
}

export default App;
