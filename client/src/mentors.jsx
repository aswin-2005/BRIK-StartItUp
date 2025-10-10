import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Nav from "./nav";
import Footer from "./footer";

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
      img: "https://media.licdn.com/dms/image/v2/D5603AQEi-3UDopYoWg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1676312558743?e=1762992000&v=beta&t=bpoRoi3BL4cu3h7ldCtie2EBinCW754NKBba18tPbqw",
    },
    {
      name: "Mr. Keval Morabia",
      role: "Gen AI @NVIDIA (Acquired) | Ex - Bloomberg, Amazon, Microsoft Research | UIUC, BITS Pilani Alum | 20k+",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQGdfV3lZuqV5A/profile-displayphoto-shrink_400_400/B4EZZn3SXdH0Ao-/0/1745499269510?e=1762992000&v=beta&t=RSVPAoP-3st2MISxN0UEUborbepEdejME5bR007orss",
    },
    {
      name: "Mr. Ranjith Antony",
      role: "Founder @ Perleybrook Labs Inc (TechStars'24) ",
      img: "https://media.licdn.com/dms/image/v2/D4D03AQHwPUFOTdP8Zw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670261006475?e=1762992000&v=beta&t=nHIG9RaAVENTLG9aRM2_IDuvejGuoWKFQC4jj69DED8",
    },
    {
      name: "Mr. Sanjay Kumar",
      role: "Founder Of NearBook Seen On Shark Tank S04 l JoshTalks",
      img: "https://media.licdn.com/dms/image/v2/D5603AQHxjMOnYOXoeQ/profile-displayphoto-crop_800_800/B56Zmo5YoIG0AI-/0/1759475241264?e=1762992000&v=beta&t=XkRxjhCPAoE0BsEeGD0Mj-tWdLMHeQmk88GnTNxI1r0",
    },
    {
      name: "Mr. Safwan C P",
      role: "Cofounder @ Rail rolls",
      img: "https://media.licdn.com/dms/image/v2/D5603AQFqo2pgC7_-Bw/profile-displayphoto-scale_400_400/B56ZgCgFZcHQAg-/0/1752388623646?e=1762992000&v=beta&t=hNSLSZRMo9_BmEuNPxRrsb3frAyqi7PCGSMpJPeM4ZU",
    },
    {
      name: "Mr. Abid Aboobaker",
      role: "Building Scoop // formerly @ Truecaller, ZestMoney & Chillr",
      img: "https://media.licdn.com/dms/image/v2/D4D03AQGDdHwRolNrhA/profile-displayphoto-scale_400_400/B4DZnERTWyGwAg-/0/1759934504647?e=1762992000&v=beta&t=mLlIWa8hq4MmgWeRY_JqexvmfiM2nLyTmD0OrwB7NbU",
    },
    {
      name: "Ms. Aina Raj",
      role: "Founder & Director UDAN Founder & Senior Career Coach Tmindscoaching.com Leadership Coach | Entrepreneur | CEO Coach | Speaker | Corporate Trainer",
      img: "https://media.licdn.com/dms/image/v2/D5603AQGYXT8aMrjdXw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728913716373?e=1762992000&v=beta&t=S7IowoEr5uoNHYw7rsdwAWJ-sHNUDyTQ6lwEU0hTSAc",
    },
    {
      name: "Mr. Shabas N C",
      role: "Co founder @ fulva",
      img: "https://media.licdn.com/dms/image/v2/D5603AQH2SoJfCZcKYw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713471100914?e=1762992000&v=beta&t=is7uUefWfp1RBo1VvXAmgFYuQjxlr662tzbTh-5_Mjw",
    },
    {
      name: "Mr. Rahul Gudise",
      role: "CEO & Co-Founder Gale YC W25",
      img: "https://media.licdn.com/dms/image/v2/D5603AQEjV03jHAjz8g/profile-displayphoto-scale_400_400/B56ZeE5VbzHQAg-/0/1750281312528?e=1762992000&v=beta&t=7lDpFt6-yNnVAbfQdPpal9IDf1oFyKjzHvt8Vp64hZ4",
    },
    {
      name: "Mr. Salman Faariz",
      role: "Marketing Consultant Wagner High-Quality Lubricants Co-Founder MakeMyPass Chief Executive Officer Salooms Inc Co-Founder The Parent Company ",
      img: "https://media.licdn.com/dms/image/v2/D5603AQEcph8fvNSQEQ/profile-displayphoto-shrink_400_400/B56ZhdFk3IHcAk-/0/1753908401165?e=1762992000&v=beta&t=dfhq8ADl7HdO9d4y5USoHDBowg-Mh1s9SwKJDHxh8t4",
    },
    {
      name: "Mr. Nikesh Jain",
      role: "Co-Founder | CEO Edurigo Technologies Vice President/Head of Engineering, India - Conga",
      img: "https://media.licdn.com/dms/image/v2/C4D03AQG-OT5jqAcKqA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1612893237783?e=1762992000&v=beta&t=iEI1d2FL0Xb7ccRKT9d46dcXMiP2Lj7USfV_vvgW6YE",
    },
    {
      name: "Mr. Suraj Juneja",
      role: "Director Karshin Simulators Pvt. Ltd. (MetaDrive) Founder Freeflow Ventures Pvt Ltd Founder and Chief Ideator Freeflow Venture Builders Founder and Managing Director Exhibit Media Pvt.Ltd Director Elektrogears Pvt.Ltd Founder and Director MasterMentors Founder and Managing Director Level Nine Media Pvt.Ltd",
      img: "https://media.licdn.com/dms/image/v2/D5603AQHB2GaWc1HtYQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695876389184?e=1762992000&v=beta&t=eRUBKHWW9RJIKx9VlR3B7s4mvATgWon1awGPRcSGNzk",
    },
    {
      name: "Mr. Shashank Murali",
      role: "Chief Growth Officer Airlearn CEO Relevel by Unacademy Co-founder & CEO TapChief Co-founder & CEO Edvice",
      img: "https://media.licdn.com/dms/image/v2/C5103AQEAe_2DT098LQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516648227240?e=1762992000&v=beta&t=efzIArIJg5JR-zbqn2rLXrmiIayQWDObAmOUJBGHUhA",
    },
    {
      name: "Mr. Sreerag A R",
      role: "Ceo @ fabus frames",
      img: "https://media.licdn.com/dms/image/v2/D5603AQHgaOCFjCLhJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1687766324454?e=1762992000&v=beta&t=DripLY01gBWKTK7cRx6N9LvsHXR0NNYCfCOdW60EZzg",
    },
    {
      name: "Mr. Midhun A Kunj",
      role: "Founder & CEO Vowels 9M Healthcare Private Limited Founder & CEO Vowels Advanced School of Learning and Research Private Limited Founder & CEO Vowels LifeSciences Private Limited Member TiE Bangalore & Kerala",
      img: "https://media.licdn.com/dms/image/v2/C5603AQEVOLk9_vw9_A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1627736875171?e=1762992000&v=beta&t=slj7yFnwDi4kEChKG-71YfMqzW1r4yNHft5EQYh6n9M",
    },
    {
      name: "Ms. Nikkitha Shanker",
      role: "Co-founder & CEO SuperBryn Co-founder Shoppre.com  Co-Founder & CEO InditrunkMentor Mentor EWA Catalyst Council",
      img: "https://media.licdn.com/dms/image/v2/D5603AQGvYXO048XAQQ/profile-displayphoto-shrink_400_400/B56ZO7NZ_mGsAk-/0/1734012675304?e=1762992000&v=beta&t=9rbqRw_fXtGzZaNAegZhEG4rNNCj-aYRvQxSf12odYw",
    },
    {
      name: "Mr. Ishan Mohammed",
      role: "Founder at Katha - Audible Good News",
      img: "https://media.licdn.com/dms/image/v2/D5603AQEDI8yq6zNzyw/profile-displayphoto-scale_400_400/B56ZjRs0oSG0Ag-/0/1755864846161?e=1762992000&v=beta&t=UbPlFjTBDuJc9zJXlqc_UAorveHq8fm53qFuvn-9rqk",
    },
    {
      name: "Mr. Vaseem Raj",
      role: "Co founder TADA Co-Founder Araigen Innovations",
      img: "https://media.licdn.com/dms/image/v2/D5603AQEhw6ApeWn0_A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721643704576?e=1762992000&v=beta&t=3d6oGcooI95Ry3CkRXAtdldznWzbI2P_t_glFDzPeU0",
    },
    {
      name: "Mr. Shibin K",
      role: "CEO & Co-founder, Rail Rolls",
      img: "https://media.licdn.com/dms/image/v2/D5603AQF8GgEhcxsdIA/profile-displayphoto-scale_400_400/B56Zisgn4CH0Ag-/0/1755240900242?e=1762992000&v=beta&t=Ix1hVpZiyrTJPaXX7ooyisNMYtmtA66VsgDO5v7whxQ",
    },
    {
      name: "Mr. Ramees Ali",
      role: "Founder Stealth AI Edtech Co-Founder Interval Learning Founder Stealth Startup",
      img: "https://media.licdn.com/dms/image/v2/D5603AQGR7LL1ASJGtw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707658547145?e=1762992000&v=beta&t=Cf7KIfClcU53FkjfgukM97Y_0pz2Ehx4P9yKd2fk-NE",
    },
    {
      name: "Mr. Rizwan Ramzan Ahamed",
      role: "Co-founder & CEO HACA Co-Founder Stealth Founder ConnecTree Founder RizMango",
      img: "https://media.licdn.com/dms/image/v2/D5603AQGyl6ak4QXWPw/profile-displayphoto-scale_400_400/B56ZjL5IDLHcAo-/0/1755767407868?e=1762992000&v=beta&t=gEKUdn_E4M5X4bXBgMFucCdVOnkUurlQJuu4668kdDE",
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
      <Nav />

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
