import React from "react";
import "./HeroSection.css";

import Translate, {translate} from '@docusaurus/Translate';

function HeroSection() {
  return (
    <div className="heroContainer">
      <video src="/videos/stars.mp4" autoPlay loop muted />
      <h1><Translate id="homepage.title1">Welcome to</Translate>
       <br /> <Translate id="homepage.title2">REGARDS OSS Website</Translate></h1>
      <h2><Translate id="homepage.tagline">A framework and a set of plugins to build scientific archives.</Translate></h2>
      <div id="heroArrow">
        <a href="#basics"><span></span><span></span><span></span>Scroll</a>
      </div>
    </div>
  );
}

export default HeroSection;
