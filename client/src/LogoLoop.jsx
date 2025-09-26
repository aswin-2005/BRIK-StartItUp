import React, { useRef, useEffect, useState } from 'react';
import './LogoLoop.css';

const LogoLoop = ({
  logos = [],
  speed = 80,            // pixels per second
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

  // animation refs to persist between frames
  const animationRef = useRef(null);
  const lastTimeRef = useRef(null);
  const currentPositionRef = useRef(0);
  const totalWidthRef = useRef(0);
  const imgsLoadListenersRef = useRef([]);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container || logos.length === 0) return;

    // expose gap to CSS
    container.style.setProperty('--logo-gap', `${gap}px`);
    container.style.setProperty('--logo-height', `${logoHeight}px`);

    // ensure container hides any overspill
    container.style.overflowX = 'hidden';
    container.style.position = 'relative';

    // measure actual width (wait for images to load)
    const measure = () => {
      // track.scrollWidth includes both sets (we duplicated logos),
      // so half of scrollWidth is width of one set
      const scrollW = track.scrollWidth || track.getBoundingClientRect().width;
      totalWidthRef.current = Math.round(scrollW / 2) || 0;
      // set explicit width so transform math matches DOM
      track.style.width = `${totalWidthRef.current * 2}px`;
    };

    // animation function using timestamps (frame-rate independent)
    const animate = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isPaused && !isHovered) {
        const dirFactor = direction === 'left' ? -1 : 1;
        // speed is px/sec, delta is ms
        currentPositionRef.current += dirFactor * speed * (delta / 1000);

        // wrap/reset when one full set has moved
        if (direction === 'left' && currentPositionRef.current <= -totalWidthRef.current) {
          currentPositionRef.current += totalWidthRef.current;
        } else if (direction === 'right' && currentPositionRef.current >= totalWidthRef.current) {
          currentPositionRef.current -= totalWidthRef.current;
        }

        track.style.transform = `translate3d(${currentPositionRef.current}px, 0, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Wait for images in the track to load before measuring
    const imgs = Array.from(track.querySelectorAll('img'));
    const unloaded = imgs.filter(img => !img.complete);
    if (unloaded.length > 0) {
      let loadedCount = 0;
      unloaded.forEach(img => {
        const onLoad = () => {
          loadedCount += 1;
          if (loadedCount === unloaded.length) {
            measure();
            // start anim
            cancelAnimationFrame(animationRef.current);
            lastTimeRef.current = null;
            animationRef.current = requestAnimationFrame(animate);
          }
        };
        img.addEventListener('load', onLoad, { once: true });
        imgsLoadListenersRef.current.push({ img, onLoad });
      });
    } else {
      // already loaded
      measure();
      cancelAnimationFrame(animationRef.current);
      lastTimeRef.current = null;
      animationRef.current = requestAnimationFrame(animate);
    }

    // handle resize -> re-measure (important at 480px breakpoint)
    const handleResize = () => {
      // preserve relative position proportionally
      const prevTotal = totalWidthRef.current || 1;
      measure();
      // adjust currentPosition to remain consistent
      if (prevTotal !== 0) {
        currentPositionRef.current = (currentPositionRef.current / prevTotal) * totalWidthRef.current;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      // cleanup
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      lastTimeRef.current = null;
      imgsLoadListenersRef.current.forEach(({ img, onLoad }) => {
        img.removeEventListener('load', onLoad);
      });
      imgsLoadListenersRef.current = [];
    };
    // we intentionally include isHovered/isPaused because that toggles pausing
  }, [logos, speed, direction, logoHeight, gap, isPaused, isHovered]);

  const handleMouseEnter = () => { if (pauseOnHover) setIsHovered(true); };
  const handleMouseLeave = () => { if (pauseOnHover) setIsHovered(false); };

  const renderLogo = (logo, index) => {
    if (logo.src) {
      return (
        <div className="logo-item" key={index} style={{ height: `${logoHeight}px` }}>
          <img
            src={logo.src}
            alt={logo.alt || logo.title || `Logo ${index + 1}`}
            title={logo.title}
            className={`logo-img ${logo.className || ''}`}
            style={{ height: '100%', width: 'auto' }}
          />
        </div>
      );
    }

    if (logo.node) {
      return (
        <div
          key={index}
          className={`logo-item ${logo.className || ''}`}
          style={{ height: `${logoHeight}px` }}
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
        '--fade-color': fadeOut ? fadeOutColor : 'transparent',
        '--logo-height': `${logoHeight}px`,
        '--logo-gap': `${gap}px`
      }}
    >
      <div className="logo-track" ref={trackRef}>
        {logos.map((logo, index) => renderLogo(logo, index))}
        {logos.map((logo, index) => renderLogo(logo, `duplicate-${index}`))}
      </div>
    </div>
  );
};

export default LogoLoop;
