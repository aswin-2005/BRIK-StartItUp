import React from "react";
import styled, { keyframes } from "styled-components";
import "./Program.css";

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

const WhyTitle = styled.h1`
  font-family: "Futura Extra Bold", sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 6vw, 6rem);
  line-height: 1.05;
  color: #2165ca;
  animation: ${popIn} 0.8s ease-out both;

  @media (max-width: 768px) {
    font-size: 80px;
  }

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

const TitleWord = styled.span`
  display: inline-block;
  font-family: "Futura Extra Bold", sans-serif;
  color: #2165ca;

  &.why {
    transform: rotate(-2deg);
  }
  &.start {
    transform: rotate(3deg);
  }
  &.it {
    transform: rotate(-4deg);
  }
  &.up {
    transform: rotate(2deg);
  }
`;

export default function Program() {
  return (
    <div className="program-root">
      <section className="program-hero">
        <p>
          Turn your idea into a real product in 8 weeks.
          Start-It-Up is a student-first accelerator. No
          lectures. No theory. Just building. By the end of 8
          weeks, you’ll have a working MVP, feedback from
          mentors, and a pitch-ready product.
        </p>
      </section>

      <section className="why-root">
        <WhyTitle>
          <TitleWord className="why">Why</TitleWord>{" "}
          <TitleWord className="start">Start</TitleWord>
          <br />
          <TitleWord className="it">It</TitleWord>{" "}
          <TitleWord className="up">Up?</TitleWord>
        </WhyTitle>
      </section>

      <section className="cards-root">
        <div className="cards-container">
          <div className="program-card">
            <h3>Build Fast</h3>
            <p>
              Ship, don’t just plan. Take your idea forward by moving quickly
              from concept to prototype and then to MVP. You’ll learn by doing,
              with momentum and peer accountability replacing traditional
              classrooms.
            </p>
          </div>

          <div className="program-card">
            <h3>Go Public</h3>
            <p>
              Take your work beyond the drawing board. Pitch your ideas to real
              people — investors, founders, and ecosystem experts. Build a
              portfolio that not only tells your story but showcases your
              ability to stand out.
            </p>
          </div>

          <div className="program-card">
            <h3>Grow Team</h3>
            <p>
              Be part of something bigger. Join a network of 50+ student teams
              across Kerala who are building together. Collaborate, share
              resources, and grow as a strong, supportive community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
