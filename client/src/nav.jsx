import React, { useState } from "react";
import "./Nav.css";
import startItUpLogo from "./assets/start-it-up logo-2.png";
import byBRIK from "./assets/by.png";
import brikLogo from "./assets/BRIK white.png";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="nav">
      <div className="nav-container">
        {/* Left links */}
        <nav className="nav-links left">
          <a href="#about">About</a>
          <a href="#program">Program</a>
          <a href="#partners">Partners</a>
        </nav>

        {/* Center logo */}
        <div className="nav-logo">
          <img src={startItUpLogo} alt="Main Logo" className="logo" />
          <img src={byBRIK} alt="logo subtext" className="subtext" />
        </div>

        {/* Right links */}
        <nav className="nav-links right">
          <a href="#">Contact</a>
          <a 
            href="https://app.makemypass.com/event/start-it-up" 
            id="apply" 
            className="apply-btn"
          >
            Apply Now
          </a>
        </nav>

        {/* Hamburger icon for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#program" onClick={() => setMenuOpen(false)}>Program</a>
          <a href="#partners" onClick={() => setMenuOpen(false)}>Partners</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
          <button className="apply-btn" onClick={() => setMenuOpen(false)}>Apply Now</button>
        </div>
      </div>
    </header>
  );
}
