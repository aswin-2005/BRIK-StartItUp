import React from 'react';
import './WhoFuelsUs.css';
import styled from 'styled-components';
import keyframes from 'styled-components';
import LogoLoop from './LogoLoop';
import notionLogo from './assets/notion.png';
import hubspotLogo from './assets/hubspot.png';

// Import IEDC logos
import blackWhiteLogo from './assets/College IEDCs/Black White Bold Modern Studio Logo.png';
import ideasphereLogo from './assets/College IEDCs/ideasphere logo.jpg';
import iedcColouredLogo from './assets/College IEDCs/IEDC COLOURED.png';
import iedcLogo from './assets/College IEDCs/Iedc Logo.jpg';
import imgLogo from './assets/College IEDCs/IMG-20250921-WA0049.jpg';
import mbitsLogo from './assets/College IEDCs/mbitss.png';
import mecLogo from './assets/College IEDCs/mec logo.png';
import novaLogo from './assets/College IEDCs/nova logo.jpg';
import officialLogo from './assets/College IEDCs/helios.png';
import tdfggchLogo from './assets/College IEDCs/cec.png';

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

const Title = styled.h2`
  font-size: 62px;
  font-family: 'Futura Extra Bold', sans-serif;
  color: white;
  margin-bottom: 70px;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2165caff;
  animation: ${popIn} 0.8s ease-out both;

  @media (max-width: 768px) {
    font-size: 48px;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

const TiltWord = styled.span`
  display: inline-block;
  transform: rotate(${props => props.rotate}deg);
`;

const WhoFuelsUs = () => {
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
    }
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
    }
  ];

  return (
    <section className="who-fuels-us" id='partners'>
      <div className="who-fuels-us-container">
        {/* Main Title */}
        <Title>
        <div style={{ display: 'flex', gap: '12px' }}>
            <TiltWord rotate={-2}>Who</TiltWord>
            <TiltWord rotate={5}>Fuels</TiltWord>
        </div>
        <TiltWord rotate={-4}>Us?</TiltWord>
      </Title>

        {/* Partner Categories */}
        <div className="partner-categories">
          {/* Productivity Platform Partner */}
          <div className="partner-category">
            <h3 className="category-title">Productivity Platform Partner</h3>
            <div className="partner-logo-container">
              <img 
                src={partnerLogos[0].src} 
                alt={partnerLogos[0].alt} 
                className={`partner-logo ${partnerLogos[0].className}`}
              />
              <span className="partner-name">Notion</span>
            </div>
          </div>

          {/* CRM & Growth Partner */}
          <div className="partner-category">
            <h3 className="category-title">CRM & Growth Partner</h3>
            <div className="partner-logo-container">
              <img 
                src={partnerLogos[1].src} 
                alt={partnerLogos[1].alt} 
                className={`partner-logo ${partnerLogos[1].className}`}
              />
              <span className="partner-name">HubSpot</span>
            </div>
          </div>
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
