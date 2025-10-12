import React, { useState } from "react";
import "./Nav.css";
import startItUpLogo from "./assets/start-it-up logo-2.png";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="nav">
      <div className="nav-container">
        {/* Left links */}
        <nav className="nav-links left">
          <a href="/">Home</a>
          <a href="https://www.brikcommunity.com/">About</a>
          <a href="/program">Program</a>
        </nav>

        {/* Center logo */}
        <div className="nav-logo">
          <img src={startItUpLogo} alt="Main Logo" className="logo" />

          <a
            href="https://www.brikcommunity.com/"
            className="subtext"
          >
            By <span>BRIK</span>
          </a>
        </div>

        {/* Right links */}
        <nav className="nav-links right">
          <a href="/mentors">Mentors</a>
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
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="https://www.brikcommunity.com/" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/program" onClick={() => setMenuOpen(false)}>Program</a>
          <a href="/mentors" onClick={() => setMenuOpen(false)}>Mentors</a>
          <button className="apply-btn" onClick={() => setMenuOpen(false)}>Apply Now</button>
        </div>
      </div>
    </header>
  );
}
