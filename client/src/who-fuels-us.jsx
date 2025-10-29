import React, { useEffect, useRef, useState } from 'react';
import './WhoFuelsUs.css';
import styled from 'styled-components';
import { keyframes, css } from 'styled-components';
import LogoLoop from './LogoLoop';
import notionLogo from './assets/notion.png';
import hubspotLogo from './assets/hubspot.png';
import AWS from './assets/AWS.png';
import Lenient from './assets/lenientTree.png';
import Eco from './assets/Eco.png';

// Import IEDC logos
import blackWhiteLogo from './assets/College IEDCs/Black White Bold Modern Studio Logo.png';
import ideasphereLogo from './assets/College IEDCs/ideasphere logo.jpg';
import iedcColouredLogo from './assets/College IEDCs/IEDC_BOOTCAMP.png';
import iedcLogo from './assets/College IEDCs/Iedc Logo.jpg';
import imgLogo from './assets/College IEDCs/IMG-20250921-WA0049.jpg';
import mbitsLogo from './assets/College IEDCs/mbitss.png';
import mecLogo from './assets/College IEDCs/mec logo.png';
import novaLogo from './assets/College IEDCs/nova logo.jpg';
import officialLogo from './assets/College IEDCs/helios.png';
import tdfggchLogo from './assets/College IEDCs/cec.png';
import saintgitsLogo from './assets/College IEDCs/saintgits.png';

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

const fadeUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Title = styled.h2`
  font-size: 70px;
  font-family: 'Futura Extra Bold', sans-serif;
  color: #2165caff;
  margin-bottom: 70px;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${({ visible }) =>
    visible &&
    css`
      animation: ${popIn} 0.8s ease-out forwards;
    `}

  @media (max-width: 768px) {
    font-size: 70px;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

const TiltWord = styled.span`
  display: inline-block;
  transform: rotate(${props => props.rotate}deg);
`;


const PartnerCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  opacity: 0;  // start hidden
  ${({ visible, delay }) =>
    visible &&
    css`
      animation: ${fadeUp} 0.6s ease-out forwards;
      animation-delay: ${delay}s;
    `}
`;

const WhoFuelsUs = () => {
  const [visible, setVisible] = useState(false);
  const [partnersVisible, setPartnersVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    },
    { threshold: 0.3 }
  );

  const partnerObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setPartnersVisible(true);
    },
    { threshold: 0.3 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current.querySelector('h2')); // main title
    partnerObserver.observe(sectionRef.current.querySelector('.partner-categories'));
  }

  return () => {
    observer.disconnect();
    partnerObserver.disconnect();
  };
}, []);
  
  const partnerLogos = [
    {
      src: notionLogo,
      alt: "Notion",
      title: "Productivity Platform Partner",
      className: "notion-logo"
    },
    {
      src: hubspotLogo,
      alt: "HubSpot",
      title: "CRM & Growth Partner",
      className: "hubspot-logo"
    },
    {
      src: AWS,
      alt: "AWS U G Kochi",
      title: "Community Partners",
      className: "aws-logo"
    },
    {
      src: Lenient,
      alt: "Lenient Tree",
      title: "Community Partners",
      className: "Lenient-logo"
    },
    {
      src: Eco,
      alt: "AICIIITK",
      title: "Ecosystem Partner",
      className: "eco-logo"
    },
    // --- NEW PARTNERS ADDED HERE ---
    {
      src: "https://mulearn.org/assets/logo.png", // Use the imported logo variable
      alt: "MuLearn",
      title: "Strategic Partner", // The new category
      className: "mulearn-logo"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBXtQzWRgxfeI-BBFNefYHuRkWPXtb2Z8bA&s", // Use the imported logo variable
      alt: "Make My Pass",
      title: "Ticketing Partner", // The new category
      className: "makemypass-logo"
    }
    // -------------------------------
  ];

  const collegeIEDCs = [
    {
      src: blackWhiteLogo,
      alt: "Black White Bold Modern Studio Logo",
      title: "Black White Bold Modern Studio",
      className: "black-white-logo"
    },
    {
      src: ideasphereLogo,
      alt: "Ideasphere Logo",
      title: "IDEASPIRE - Innovation & Entrepreneurship Development Cell",
      className: "ideasphere-logo"
    },
    {
      src: iedcColouredLogo,
      alt: "IEDC Coloured Logo",
      title: "IEDC - Innovation & Entrepreneurship Development Cell",
      className: "iedc-coloured-logo"
    },
    {
      src: iedcLogo,
      alt: "IEDC Logo",
      title: "IEDC - Innovation & Entrepreneurship Development Cell",
      className: "iedc-logo"
    },
    {
      src: imgLogo,
      alt: "College IEDC Logo",
      title: "College IEDC Partner",
      className: "img-logo"
    },
    {
      src: mbitsLogo,
      alt: "MBITS Logo",
      title: "MBITS - Technology & Innovation",
      className: "mbits-logo"
    },
    {
      src: mecLogo,
      alt: "MEC Logo",
      title: "MEC - Model Engineering College",
      className: "mec-logo"
    },
    {
      src: novaLogo,
      alt: "Nova Logo",
      title: "NOVA - Innovation & Technology Hub",
      className: "nova-logo"
    },
    {
      src: officialLogo,
      alt: "Official Logo",
      title: "Official IEDC Partner",
      className: "official-logo"
    },
    {
      src: tdfggchLogo,
      alt: "TDFGGCH Logo",
      title: "TDFGGCH - Technology Development Foundation",
      className: "tdfggch-logo"
    },
     {
      src: saintgitsLogo,
      alt: "Saintgits IEDC Logo",
      title: "Saintgits IEDC",
      className: "saintgits-logo"
    }
  ];

  return (
    <section className="who-fuels-us" id='partners' ref={sectionRef}>
      <div className="who-fuels-us-container">
        {/* Main Title */}
        <Title visible={visible}>
        <div style={{ display: 'flex', gap: '12px' }}>
            <TiltWord rotate={-2}>Who</TiltWord>
            <TiltWord rotate={5}>Fuels</TiltWord>
        </div>
        <TiltWord rotate={-4}>Us?</TiltWord>
      </Title>

        {/* Partner Categories */}
        <div className="partner-categories">
          {Object.entries(
            partnerLogos.reduce((acc, partner) => {
              if (!acc[partner.title]) acc[partner.title] = [];
              acc[partner.title].push(partner);
              return acc;
            }, {})
          ).map(([title, partners], i) => (
            <PartnerCategory key={i} visible={partnersVisible} delay={i * 0.2}>
              <h3 className="category-title">{title}</h3>
              <div
                className={`partner-logo-group ${
                  title === "Community Partners" ? "community-group" : ""
                }`}
              >
                {partners.map((partner, j) => (
                  <div key={j} className="partner-logo-container">
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className={`partner-logo ${partner.className}`}
                    />
                    <span className="partner-name">{partner.alt}</span>
                  </div>
                ))}
              </div>
            </PartnerCategory>
          ))}
        </div>

        {/* College IEDCs */}
        <div className="college-iedcs">
          <h3 className="category-title">College IEDCs</h3>
          <div className="iedc-scroll-container">
            <LogoLoop
              logos={collegeIEDCs}
              speed={80}
              direction="left"
              logoHeight={120}
              gap={40}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#ffffff"
              ariaLabel="College IEDC partners"
              className="iedc-logo-loop"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoFuelsUs;
