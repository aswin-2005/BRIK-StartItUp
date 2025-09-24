import React from 'react';
import './Footer.css';
import startItUpLogo from './assets/start-it-up logo.png';

const Footer = () => {
  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Partners", href: "#partners" },
    { label: "Apply Now", href: "#apply" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - START IT UP Logo and Quick Links */}
        <div className="footer-left">
          <div className="logo-section">
            <img src={startItUpLogo} alt="Start It Up Logo" className="main-logo" />
          </div>
          <div className="quick-links-section">
            <h3 className="section-title">Quick Links</h3>
            <nav className="footer-nav">
              {footerLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Section - BRIK Initiative and Contact */}
        <div className="footer-right">
          <div className="brik-section">
            <div className="initiative-text">An Initiative By</div>
            <div className="brik-text">BRIK</div>
          </div>
          <div className="contact-section">
            <h3 className="section-title">Contact</h3>
            <div className="contact-details">
              <div className="contact-item">BRIK COMMUNITY</div>
              <div className="contact-item">Kerala, India</div>
              <div className="contact-item">Email: brikcommunity@gmail.com</div>
              <div className="contact-item">Phone/WhatsApp: +91-9961020050</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
