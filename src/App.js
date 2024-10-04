import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Whyuse from "./components/Whyuse";
import ScrollingBar from "./components/ScrollingBar";
import HowToUse from "./components/HowToUse";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Whyuse />
      <ScrollingBar />
      <HowToUse />
    </div>
  );
}

export default App;
