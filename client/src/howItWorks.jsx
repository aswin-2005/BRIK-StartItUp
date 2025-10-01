// HowItWorks.js
import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes, css } from "styled-components";

// Fade-in + slide-up for each step
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;


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

const growLineDesktop = keyframes`
  from { height: 0; }
  to { height: 130px; }
`;

const growLineTablet = keyframes`
  from { height: 0; }
  to { height: 128px; }
`;

const growLineMobile = keyframes`
  from { height: 0; }
  to { height: 118px; }
`;

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  font-family: "Arial", sans-serif;
  padding: 40px 20px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 6vw, 6rem);
  font-family: 'Futura Extra Bold', sans-serif;
  color: #2165caff;
  margin-top: 40px;
  margin-bottom: 70px;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ visible }) =>
    visible &&
    css`
      animation: ${popIn} 0.8s ease-out both;
    `}

  @media (max-width: 768px) {
    font-size: 80px;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    font-size: 62px;
    margin-bottom: 40px;
  }
`;

const TiltWord = styled.span`
  display: inline-block;
  transform: rotate(${props => props.rotate}deg);
`;

const Timeline = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 35px 1fr;
  align-items: center;
  margin-bottom: 60px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Dot = styled.div`
  width: 16px;
  height: 16px;
  background: #2966eb;
  border-radius: 50%;
  margin: 0 auto;
  z-index: 2;
  position: relative;
`;

const LineSegment = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 16px; /* just below the dot */
  width: 2px;
  background: #2966eb;
  z-index: 1;
  height: 0;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${growLineDesktop} 0.8s ease forwards;

      @media (max-width: 768px) {
        animation: ${growLineTablet} 0.8s ease forwards;
      }

      @media (max-width: 480px) {
        animation: ${growLineMobile} 0.8s ease forwards;
      }
    `}
`;

const LeftContent = styled.div`
  text-align: right;
  padding-right: 40px;

  h4 {
    font-size: 28px;
    margin: 0;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    padding-right: 20px;

    h4 {
      font-size: 18px;
      margin: 0;
      font-weight: bold;
    }
  }
`;

const RightContent = styled.div`
  text-align: left;
  padding-left: 40px;
  align-self: flex-start;  /* aligns top */
  transform: translateY(30px);  /* push it down */

  p {
    font-size: 46px;
    margin: 0;
    color: #333;
  }

  @media (max-width: 480px) {
    padding-left: 20px;

    p {
      font-size: 12px;
      margin: 0;
      font-weight: bold;
    }
  }
`;

const StepContent = styled.div`
  opacity: 0;

  ${({ visible }) =>
    visible &&
    css`
      animation: ${fadeInUp} 0.8s ease forwards;
    `}
`;

const StepTextDesktop = styled.div`
  display: block;
  font-size: 20px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const StepTextMobile = styled.div`
  display: none;
  font-size: 14px;

  @media (max-width: 480px) {
    display: block;
  }
`;

const FooterText = styled.p`
  font-size: 36px;
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
  color: #2165caff;
  text-align: center;
  padding: 100px 80px;
  opacity: 0; /* start hidden */

  ${({ visible }) =>
    visible &&
    css`
      animation: ${slideInLeft} 1s ease-out forwards;
    `}

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 40px 40px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 40px 20px 0px;
  }
`;

const HowItWorks = () => {
  const steps = [
    { title: "Weeks 1-2", 
      text: <>Validate the problem. Talk <br/>to users. Know if it’s worth <br/>building.</>,
      textMobile: <>Validate the problem. Talk to users. Know if it’s worth building.</>
    },
    { title: "Weeks 3-5", 
      text: <>Build your MVP. Code, <br/>design, test. Ship fast.</>,
      textMobile: <>Build your MVP. Code, design, test. Ship fast.</>
    },
    { title: "Weeks 6-7", 
      text: <>Brand, tell your story, prep <br/>your pitch.</>,
      textMobile: <>Build your MVP. Code, design, test. Ship fast.</>
    },
    { title: <>Week 8<br/>Demo Day</>, 
      text: <>Show your product to <br/>investors, mentors, and peers.</>,
      textMobile: <>Show your product to investors, mentors, and peers.</>
    },
  ];

  const [visibleSteps, setVisibleSteps] = useState([]);
  const [lines, setLines] = useState([]);
  const [started, setStarted] = useState(false);
  const containerRef = useRef(null);
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef(null);

  // Observe scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [started]);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setFooterVisible(true);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.3 }
  );

  if (footerRef.current) observer.observe(footerRef.current);

  return () => observer.disconnect();
}, []);

  // Run animations only once when visible
  useEffect(() => {
    if (started) {
      steps.forEach((_, i) => {
        setTimeout(() => {
          setVisibleSteps((prev) => [...prev, i]);
          if (i < steps.length - 1) {
            setTimeout(() => {
              setLines((prev) => [...prev, i]);
            }, 600);
          }
        }, i * 1400);
      });
    }
  }, [started]);

  return (
    <Container ref={containerRef}>
      <Title visible={started}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <TiltWord rotate={-2}>How</TiltWord>
          <TiltWord rotate={5}>It</TiltWord>
        </div>
        <TiltWord rotate={-4}>Works?</TiltWord>
      </Title>
      <Timeline>
        {steps.map((step, i) => (
          <StepWrapper key={i}>
            <LeftContent>
              <StepContent visible={visibleSteps.includes(i)}>
                <h4>{step.title}</h4>
              </StepContent>
            </LeftContent>

            <div style={{ position: "relative" }}>
              <Dot />
              {i < steps.length - 1 && (
                <LineSegment animate={lines.includes(i)} />
              )}
            </div>

            <RightContent>
              <StepContent visible={visibleSteps.includes(i)}>
                <StepTextDesktop>{step.text}</StepTextDesktop>
                <StepTextMobile>{step.textMobile}</StepTextMobile>
              </StepContent>
            </RightContent>
          </StepWrapper>
        ))}
      </Timeline>
      <FooterText ref={footerRef} visible={footerVisible}>
        No idea is too small. No experience required.
        If you want to build something real as a student, this is the program
        for you. Learn by doing, connect with peers, and turn your ideas into reality.
      </FooterText>
    </Container>
  );
};

export default HowItWorks;
