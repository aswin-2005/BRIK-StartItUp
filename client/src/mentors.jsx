import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Nav from "./nav";
import Footer from "./footer";

import AbidAboobaker from "./assets/mentors/Abid Aboobaker.png";
import AinaRaj from "./assets/mentors/Aina Raj.png";
import CyriacTMeppuram from "./assets/mentors/Cyriac T Meppuram.png";
import IshanMohammed from "./assets/mentors/Ishan Mohammed.png";
import KevalMorabia from "./assets/mentors/Keval Morabia.png";
import MidhunAKunj from "./assets/mentors/Midhun A Kunj.png";
import NikkithaShanker from "./assets/mentors/Nikkitha Shanker.png";
import NikeshJain from "./assets/mentors/Nikesh Jain.png";
import NiyasMuhammed from "./assets/mentors/Niyas Muhammed.png";
import RameesAli from "./assets/mentors/Ramees Ali.png";
import RahulGudise from "./assets/mentors/Rahul Gudise.png";
import RanjithAntony from "./assets/mentors/Ranjith Antony.png";
import RizwanRamzanAhamed from "./assets/mentors/Rizwan Ramzan Ahamed.png";
import SafawanCP from "./assets/mentors/Safwan C P.png";
import SalmanFaariz from "./assets/mentors/Salman Faariz.png";
import SanjayKumar from "./assets/mentors/Sanjay Kumar.png";
import SanjeevJain from "./assets/mentors/Sanjeev Jain.png";
import ShabasNC from "./assets/mentors/Shabas N C.png";
import ShashankMurali from "./assets/mentors/Shashank Murali.png";
import ShibinK from "./assets/mentors/Shibin K.png";
import SreeragAR from "./assets/mentors/Sreerag A R.png";
import SurajJuneja from "./assets/mentors/Suraj Juneja.png";
import VaseemRaj from "./assets/mentors/Vaseem Raj.png";

// Animations
const floatUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled Components
const PageWrapper = styled.div`
  background: #ffffffff;
  color: #111;
  font-family: "Helvetica", sans-serif;
  min-height: 100vh;
`;

const Hero = styled.section`
  text-align: center;
  padding: 4rem 2rem 3rem;

  h1 {
    margin-top:2rem;
    font-size: 4rem;
    color: #000;
    font-weight: 700;
    margin-bottom: 1rem;
    animation: ${floatUp} 0.8s ease-out forwards;
  }

  span {
    color: #2165ca;
  }

  p {
    color: #444;
    font-size: 1.1rem;
    line-height: 1.6;
    animation: ${floatUp} 1s ease-out forwards;
    animation-delay: 0.3s;
    opacity: 0;
    max-width: 70%;
    margin: 0 auto; /* centers paragraph nicely on desktop */
  }

  .desktop-only {
    display: inline;

    @media (max-width: 480px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 2rem;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1rem 1.5rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.75rem;
      max-width: 100%;
    }
  }
`;

const MentorsGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Desktop default */
  gap: 2rem;
  padding: 3rem 6rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* Slightly smaller desktops */
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr); /* Tablets */
    padding: 2.5rem 3rem;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Mobiles too — exactly 2 cards */
    padding: 2rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); /* Keep 2 cards even on very small screens */
    padding: 1.5rem;
    gap: 1rem;
  }
`;

const MentorCard = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  animation: ${floatUp} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay}s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 30px rgba(0,0,0,0.15);
  }

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  h2 {
    font-size: 1.3rem;
    margin: 1rem 0 0.3rem;
    color: #000000ff;
  }

  p {
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

const LoadMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 2rem auto 4rem;
  padding: 0.8rem 2rem;
  background: ${props => (props.loading ? "#3b7ded" : "#2165ca")};
  color: white;
  border: none;
  border-radius: 999px;
  font-size: 1rem;
  cursor: ${props => (props.loading ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => (props.loading ? "#3b7ded" : "#174b9a")};
    transform: ${props => (props.loading ? "none" : "scale(1.03)")};
  }

  position: relative;
`;

const Spinner = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #fff;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: ${rotate} 1s linear infinite;
`;

const Mentors = () => {
  const mentors = [
    {
      name: "Mr. Sanjeev Jain",
      role: "Founder & CEO Prorata SHARK TANK INDIA S3 Founder OZOPROP Technologies Pvt. Ltd. Founder IPX Consultants Ltd.",
      img: SanjeevJain,
    },
    {
      name: "Mr. Keval Morabia",
      role: "Gen AI @NVIDIA (Acquired) | Ex - Bloomberg, Amazon, Microsoft Research | UIUC, BITS Pilani Alum | 20k+",
      img: KevalMorabia,
    },
    {
      name: "Mr. Ranjith Antony",
      role: "Founder @ Perleybrook Labs Inc (TechStars'24) ",
      img: RanjithAntony,
    },
    {
      name: "Mr. Sanjay Kumar",
      role: "Founder Of NearBook Seen On Shark Tank S04 l JoshTalks",
      img: SanjayKumar,
    },
    {
      name: "Mr. Safwan C P",
      role: "Cofounder @ Rail rolls",
      img: SafawanCP,
    },
    {
      name: "Mr. Abid Aboobaker",
      role: "Building Scoop // formerly @ Truecaller, ZestMoney & Chillr",
      img: AbidAboobaker,
    },
    {
      name: "Ms. Aina Raj",
      role: "Founder & Director UDAN Founder & Senior Career Coach Tmindscoaching.com Leadership Coach | Entrepreneur | CEO Coach | Speaker | Corporate Trainer",
      img: AinaRaj,
    },
    {
      name: "Mr. Shabas N C",
      role: "Co founder @ fulva",
      img: ShabasNC,
    },
    {
      name: "Mr. Rahul Gudise",
      role: "CEO & Co-Founder Gale YC W25",
      img: RahulGudise,
    },
    {
      name: "Mr. Salman Faariz",
      role: "Marketing Consultant Wagner High-Quality Lubricants Co-Founder MakeMyPass Chief Executive Officer Salooms Inc Co-Founder The Parent Company ",
      img: SalmanFaariz,
    },
    {
      name: "Mr. Nikesh Jain",
      role: "Co-Founder | CEO Edurigo Technologies Vice President/Head of Engineering, India - Conga",
      img: NikeshJain,
    },
    {
      name: "Mr. Suraj Juneja",
      role: "Director Karshin Simulators Pvt. Ltd. (MetaDrive) Founder Freeflow Ventures Pvt Ltd Founder and Chief Ideator Freeflow Venture Builders Founder and Managing Director Exhibit Media Pvt.Ltd Director Elektrogears Pvt.Ltd Founder and Director MasterMentors Founder and Managing Director Level Nine Media Pvt.Ltd",
      img: SurajJuneja,
    },
    {
      name: "Mr. Shashank Murali",
      role: "Chief Growth Officer Airlearn CEO Relevel by Unacademy Co-founder & CEO TapChief Co-founder & CEO Edvice",
      img: ShashankMurali,
    },
    {
      name: "Mr. Sreerag A R",
      role: "Ceo @ fabus frames",
      img: SreeragAR,
    },
    {
      name: "Mr. Midhun A Kunj",
      role: "Founder & CEO Vowels 9M Healthcare Private Limited Founder & CEO Vowels Advanced School of Learning and Research Private Limited Founder & CEO Vowels LifeSciences Private Limited Member TiE Bangalore & Kerala",
      img: MidhunAKunj,
    },
    {
      name: "Ms. Nikkitha Shanker",
      role: "Co-founder & CEO SuperBryn Co-founder Shoppre.com  Co-Founder & CEO InditrunkMentor Mentor EWA Catalyst Council",
      img: NikkithaShanker,
    },
    {
      name: "Mr. Ishan Mohammed",
      role: "Founder at Katha - Audible Good News",
      img: IshanMohammed,
    },
    {
      name: "Mr. Vaseem Raj",
      role: "Co founder TADA Co-Founder Araigen Innovations",
      img: VaseemRaj,
    },
    {
      name: "Mr. Shibin K",
      role: "CEO & Co-founder, Rail Rolls",
      img: ShibinK,
    },
    {
      name: "Mr. Ramees Ali",
      role: "Founder Stealth AI Edtech Co-Founder Interval Learning Founder Stealth Startup",
      img: RameesAli,
    },
    {
      name: "Mr. Rizwan Ramzan Ahamed",
      role: "Co-founder & CEO HACA Co-Founder Stealth Founder ConnecTree Founder RizMango",
      img: RizwanRamzanAhamed,
    },
    {
      name: "Mr. Cyriac T Meppuram",
      role: "Serial Entrepreneur | Founder, The Wellness Junxion",
      img: CyriacTMeppuram,
    },
    {
      name: "Mr. Niyas Muhammed",
      role: "General Manager at Innerspace Coworking",
      img: NiyasMuhammed,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => { // simulate smooth loading
      setVisibleCount(prev => prev + 8);
      setLoading(false);
    }, 800);
  };

  return (
    <PageWrapper>
      <Nav page="mentors"/>

      <Hero>
        <h1>Meet <span>the mentors</span></h1>
        <p>
          Meet the visionaries fueling the next wave of innovation! Our mentors are startup <br className="desktop-only"/>
          founders, investors, and changemakers dedicated to helping Start It Up participants <br classname = "desktop-only"/>
          shape their ideas, refine their pitches, and launch impactful ventures.
        </p>
      </Hero>

      <MentorsGrid>
        {mentors.slice(0, visibleCount).map((mentor, index) => (
          <MentorCard key={index} delay={index * 0.1}>
            <img src={mentor.img} alt={mentor.name} />
            <h2>{mentor.name}</h2>
            <p>{mentor.role}</p>
          </MentorCard>
        ))}
      </MentorsGrid>

      {visibleCount < mentors.length && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LoadMoreButton onClick={handleLoadMore} loading={loading}>
            {loading && <Spinner />}
            {loading ? "Loading..." : "Load More"}
          </LoadMoreButton>
        </div>
      )}

      <Footer />
    </PageWrapper>
  );
};

export default Mentors;
