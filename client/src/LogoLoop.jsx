import React, { useRef, useEffect, useState } from 'react';
import './LogoLoop.css';

const LogoLoop = ({ 
  logos = [], 
  speed = 80, 
  direction = 'left',
  logoHeight = 120,
  gap = 40,
  pauseOnHover = true,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Partner logos',
  className = ''
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!trackRef.current || logos.length === 0) return;

    const track = trackRef.current;
    const container = containerRef.current;
    
    if (!container) return;

    // Calculate total width needed
    const logoWidth = logoHeight * 1.5; // Approximate width based on height
    const totalWidth = (logoWidth + gap) * logos.length;
    
    // Set track width
    track.style.width = `${totalWidth * 2}px`; // Double for seamless loop
    
    // Animation variables
    let animationId;
    let currentPosition = 0;
    const moveSpeed = direction === 'left' ? -speed : speed;
    
    const animate = () => {
      if (!isPaused && !isHovered) {
        currentPosition += moveSpeed * 0.016; // 60fps
        if (currentPosition <= -totalWidth) {
          currentPosition = 0;
        }
        track.style.transform = `translateX(${currentPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [logos, speed, direction, logoHeight, gap, isPaused, isHovered]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsHovered(false);
    }
  };

  const renderLogo = (logo, index) => {
    if (logo.src) {
      return (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt || logo.title || `Logo ${index + 1}`}
          title={logo.title}
          className={`logo-item ${logo.className || ''}`}
          style={{
            height: `${logoHeight}px`,
            width: 'auto',
            marginRight: `${gap}px`
          }}
        />
      );
    }
    
    if (logo.node) {
      return (
        <div
          key={index}
          className={`logo-item ${logo.className || ''}`}
          style={{
            height: `${logoHeight}px`,
            marginRight: `${gap}px`
          }}
        >
          {logo.node}
        </div>
      );
    }
    
    return null;
  };

  return (
    <div
      ref={containerRef}
      className={`logo-loop ${className} ${fadeOut ? 'fade-out' : ''} ${scaleOnHover ? 'scale-hover' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label={ariaLabel}
      style={{
        '--fade-color': fadeOutColor,
        '--logo-height': `${logoHeight}px`
      }}
    >
      <div className="logo-track" ref={trackRef}>
        {/* First set of logos */}
        {logos.map((logo, index) => renderLogo(logo, index))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => renderLogo(logo, `duplicate-${index}`))}
      </div>
    </div>
  );
};

export default LogoLoop;