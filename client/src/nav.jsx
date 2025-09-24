import React from "react";
import "./Nav.css";
import startItUpLogo from "./assets/start-it-up logo.png";
import brikLogo from "./assets/BRIK white.png";

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-container">
        {/* Left links */}
        <nav className="nav-links left">
          <a href="#">About</a>
          <a href="#">Program</a>
          <a href="#">Partners</a>
        </nav>

        {/* Center logo + subtext */}
        <div className="nav-logo">
          <img src={startItUpLogo} alt="Main Logo" className="logo" />
          <div className="subtext">
            by <img src={brikLogo} alt="Brik Logo" className="brik-logo" />
          </div>
        </div>

        {/* Right links */}
        <nav className="nav-links right">
          <a href="#">Contact</a>
          <button className="apply-btn">Apply Now</button>
        </nav>
      </div>
    </header>
  );
}