import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="heroContainer">
      <video src="/videos/stars.mp4" autoPlay loop muted />
      <h1>
        Welcome to
        <br />
        REGARDS OSS WEBSITE
      </h1>
      <h2>A framework and a set of plugins to build scientific archives.</h2>

      <div id="heroArrow">
        <a href="#basics"><span></span><span></span><span></span>Scroll</a>
      </div>
    </div>
  );
}

export default HeroSection;
