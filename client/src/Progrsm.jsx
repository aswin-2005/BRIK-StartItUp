import React from "react";
import "./Program.css";

export default function Program() {
  return (
    <div className="program-root">
      <section className="program-hero">
        <h1>
          Turn your idea into a real product in 8 weeks.
          <br />
          Start-It-Up is a student-first accelerator. No
          <br />
          lectures. No theory. Just building. By the end of 8
          <br />
          weeks, you’ll have a working MVP, feedback from
          <br />
          mentors, and a pitch-ready product.
        </h1>
      </section>

      <section className="why-root">
        <h2 className="why-title">
          <span className="title-word why">Why</span>{" "}
          <span className="title-word start">Start</span>
          <br />
          <span className="title-word it">It</span>{" "}
          <span className="title-word up">Up ?</span>
        </h2>
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
