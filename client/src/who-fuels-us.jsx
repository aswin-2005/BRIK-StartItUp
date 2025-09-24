import React from 'react';
import './WhoFuelsUs.css';
import LogoLoop from './LogoLoop';
import notionLogo from './assets/notion.png';
import hubspotLogo from './assets/hubspot.png';

// Import IEDC logos
import blackWhiteLogo from './assets/College IEDCs/Black White Bold Modern Studio Logo.png';
import ideasphereLogo from './assets/College IEDCs/ideasphere logo.jpg';
import iedcColouredLogo from './assets/College IEDCs/IEDC COLOURED.png';
import iedcLogo from './assets/College IEDCs/Iedc Logo.jpg';
import imgLogo from './assets/College IEDCs/IMG-20250921-WA0049.jpg';
import mbitsLogo from './assets/College IEDCs/mbits.png';
import mecLogo from './assets/College IEDCs/mec logo.png';
import novaLogo from './assets/College IEDCs/nova logo.jpg';
import officialLogo from './assets/College IEDCs/Official logo.png';
import tdfggchLogo from './assets/College IEDCs/tdfggch.png';

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
    <section className="who-fuels-us">
      <div className="who-fuels-us-container">
        {/* Main Title */}
        <div className="main-title">
          <span className="title-word who">Who</span>
          <span className="title-word fuels">Fuels</span>
          <span className="title-word us">Us?</span>
        </div>

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
