import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import styled from "styled-components";
import keyframes from "styled-components";
import bulbGif from "./assets/bulb gif.gif";
import abstractRings from "./assets/abstract rings.png";
import rightArrow from "./assets/Right Arrow.png";
import curvedArrow from "./assets/curved arrow(1).png";
import promotionLines from "./assets/promotion lines.png";

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const Title = styled.h2`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%); /* centers it perfectly */
  
  font-size: 150px;
  font-family: 'Futura Extra Bold', sans-serif;
  color: black;
  line-height: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${popIn} 0.8s ease-out both;

  @media (max-width: 768px) {
    top: 42%;
    left: 46%;
  }

  @media (max-width: 480px) {
    font-size: 65px;
    top: 23%;
    left: 45%;
  }
`;

const TiltWord = styled.span`
  display: inline-block;
  transform: rotate(${props => props.rotate}deg);
`;

const WordRow = styled.div`
  display: flex;
  gap: 40px;
  position: relative;
  left: 190px;

  @media (max-width: 768px) {
    gap: 20px;
    left: 130px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    left: 80px;
  }
`;

function Hero() {
  const [titleVisible, setTitleVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect(); // stop observing after animation triggers
        }
      },
      { threshold: 0.3 } // 30% of section visible
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

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

        <Title>
          <TiltWord rotate={-3.8}>Start</TiltWord>
          <WordRow>
            <TiltWord rotate={7.6}>It</TiltWord>
            <TiltWord rotate={-6.84}>Up</TiltWord>
          </WordRow>
        </Title>

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
          <a href="/program"><button className="know-btn">Know More</button></a>
          <button onClick={() => window.location.href = "https://app.makemypass.com/event/start-it-up"} className="apply-butn">Apply Now</button>
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

        <div className="hero-gif-wrapper">
          <img src={bulbGif} alt="bulb gif" className="hero-gif" />
        </div>
      </div>
    </section>
  );
}

export default Hero;