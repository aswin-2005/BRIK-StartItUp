import React from "react";
import "./Nav.css";

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
          <img src={require("./assets/start-it-up logo.png")} alt="Main Logo" className="logo" />
          <div className="subtext">
            by <img src={require("./assets/BRIK logo.png")} alt="Brik Logo" className="brik-logo" />
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
