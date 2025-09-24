import React from "react";
import "./Hero.css";
import bulbGif from "./assets\bulb-gif.gif";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <img
            src="/assets/abstract rings.png"
            alt="Hero"
            className="hero-img"
          />
        </div>

        <div className="hero-center">
          <h1 className="hero-word start">Start</h1>
          <h1 className="hero-word it">It</h1>
          <h1 className="hero-word up">Up</h1>
        </div>

        <div className="hero-timeline">
          <span>8 weeks idea</span>
          <img
            src="/assets/Right Arrow.png"
            alt="arrow"
            className="timeline-arrow"
          />
          <span>MVP</span>
          <img
            src="/assets/Right Arrow.png"
            alt="arrow"
            className="timeline-arrow"
          />
          <span>Demo day</span>
        </div>

        <div className="hero-actions">
          <button className="know-btn">Know More</button>
          <button className="apply-btn">Apply Now</button>
        </div>

        <div className="hero-image-right">
          <img
            src="/assets/curved arrow.png"
            alt="arrow below apply know"
          />
        </div>

        <div className="hero-lines">
          <img
            src="/assets/promotion lines.png"
            alt="After Start"
            className="promotion-img"
          />
        </div>

        <div className="hero-gif">
          <img src={bulbGif} alt="bulb gif" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
