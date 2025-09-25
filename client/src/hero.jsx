import React from "react";
import "./Hero.css";
import bulbGif from "./assets/bulb gif.png";
import abstractRings from "./assets/abstract rings.png";
import rightArrow from "./assets/Right Arrow.png";
import curvedArrow from "./assets/curved arrow.png";
import promotionLines from "./assets/promotion lines.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <img
            src={abstractRings}
            alt="Hero"
            className="hero-img"
          />
        </div>

        <div className="hero-center">
          <h1 className="hero-word start">Start</h1>
          <div className="hero-subpart">
          <h1 className="hero-word it">It</h1>
          <h1 className="hero-word up">Up</h1>
          </div>
        </div>

        <div className="hero-timeline">
          <span>8 weeks idea</span>
          <img
            src={rightArrow}
            alt="arrow"
            className="timeline-arrow"
          />
          <span>MVP</span>
          <img
            src={rightArrow}
            alt="arrow"
            className="timeline-arrow"
          />
          <span>Demo day</span>
        </div>

        <div className="hero-actions">
          <button className="know-btn">Know More</button>
          <button onClick={() => window.location.href = "https://app.makemypass.com/event/start-it-up"} className="apply-btn">Apply Now</button>
        </div>

        <div className="hero-image-right">
          <img
            src={curvedArrow}
            alt="arrow below apply know"
          />
        </div>

        <div className="hero-lines">
          <img
            src={promotionLines}
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