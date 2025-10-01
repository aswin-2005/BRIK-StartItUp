import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Handshake from './assets/Handshake.png'
import Rocket from './assets/Rocket.png'
import Mic from './assets/Mic.png'

const Section = styled.section`
  background-color: #2076f6ff;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 80px 20px;
  text-align: center;
  overflow-x: hidden; 

  @media (max-width: 768px) {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 60px 16px;
  }

  @media (max-width: 480px) {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 40px 12px;
  }
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

const fanOut = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(50px);
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

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  flex-wrap: nowrap;
  gap: 0px;
  max-width: 100%;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 24px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

const CardRotateWrapper = styled.div`
  transform: rotate(${props => props.rotate}deg);
  transition: transform 0.3s ease;
`;

const CardOuter = styled.div`
  opacity: 0;
  transform-origin: center;
  animation: ${props => props.visible ? fanOut : 'none'} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay || 0}s;
  position: relative;
  z-index: ${props => props.z};
  margin-left: ${props => props.index !== 0 ? '-10px' : '0'};
  width: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, z-index 0s;

  /* Desktop hover */
  ${props =>
    !props.isMobile &&
    `
    &:hover {
      z-index: 100;
      transform: rotate(${props.rotate}deg) translateY(-10px) scale(1.03);
    }
  `}

  /* Mobile tap / visible effect */
  ${props =>
    props.isMobile &&
    props.tapped &&
    `
    z-index: 100;
    transform: rotate(${props.rotate}deg) translateY(-10px) scale(1.03);
  `}

  @media (max-width: 768px) {
    width: 240px;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`;

const CardInner = styled.div`
  background: white;
  padding: 5px 30px 30px;
  border-radius: 16px;
  border: 3px solid black;
  box-shadow: 0 16px 0 black;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;

  ${({ isMobile, visible, tapped }) => 
    (isMobile && (visible || tapped))
      ? `
        transform: translateY(-10px) scale(1.03);
        box-shadow: 0 20px 0 black;
      `
      : !isMobile
      ? `&:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 0 black;
        }`
      : ''
  }

  @media (max-width: 768px) {
    border-radius: 12px;
    padding: 5px 16px 20px;
  }

  @media (max-width: 480px) {
    border-radius: 10px;
  }
`;

const CardTitle = styled.h3`
  font-size: 42px;
  font-family: 'Futura Extra Bold', sans-serif;
  font-weight: bold;
  margin-bottom: 40px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 24px auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const CardText = styled.p`
  font-size: 17px;
  margin-top: 40px;
  color: #333;
  font-family: sans-serif;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-top: 24px;
  }
`;

const Paragraph = styled.p`
    font-size: 36px;
    font-family: 'Helvetica', sans-serif;
    font-weight: bold;
    color: #2165caff;
    text-align: center;
    padding: 80px 80px;

    @media (max-width: 768px) {
        font-size: 24px;
        padding: 30px 40px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
        padding: 20px 20px;
    }
`;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile;
};

const WhatAwaits = () => {
    const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
    const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const [tappedCard, setTappedCard] = useState(null);

  return (
    <>
    <Section ref={sectionRef} id='about'>
      <Title>
        <div style={{ display: 'flex', gap: '12px' }}>
            <TiltWord rotate={-2}>What</TiltWord>
            <TiltWord rotate={5}>Awaits</TiltWord>
        </div>
        <TiltWord rotate={-4}>You?</TiltWord>
      </Title>
      <CardWrapper>
        <CardOuter
            z={1}
            index={0}
            visible={visible}
            delay={0}
            isMobile={isMobile}
            tapped={tappedCard === 0}
            onClick={() => isMobile && setTappedCard(tappedCard === 0 ? null : 0)}
          >
            <CardRotateWrapper rotate={-6}>
            <CardInner visible={visible} isMobile={isMobile} tapped={tappedCard === 0}>
          <CardTitle>Ignite</CardTitle>
          <IconWrapper>
            <img src={Rocket} alt="Rocket Icon" />
          </IconWrapper>
          <CardText>
            Turn your vision into a working prototype in just 8 weeks with guided sprints, mentorship, and hands-on learning.
          </CardText>
          </CardInner>
          </CardRotateWrapper>
        </CardOuter>

        <CardOuter z={2} index={1} visible={visible} delay={0.2} isMobile={isMobile}>
            <CardRotateWrapper rotate={-1}>
            <CardInner visible={visible} isMobile={isMobile}>
          <CardTitle>Connect</CardTitle>
          <IconWrapper>
            <img src={Handshake} alt="Handshake Icon" />
          </IconWrapper>
          <CardText>
            Gain direct access to mentors, investors, and incubators who can shape your startup journey beyond the campus.
          </CardText>
          </CardInner>
          </CardRotateWrapper>
        </CardOuter>

        <CardOuter z={3} index={2} visible={visible} delay={0.4} isMobile={isMobile}>
            <CardRotateWrapper rotate={6}>
            <CardInner visible={visible} isMobile={isMobile}>
          <CardTitle>Showcase</CardTitle>
          <IconWrapper>
            <img src={Mic} alt="Mic Icon" />
          </IconWrapper>
          <CardText>
            Pitch your startup on a statewide stage, impress industry leaders, and unlock new opportunities for growth.
          </CardText>
          </CardInner>
          </CardRotateWrapper>
        </CardOuter>
      </CardWrapper>
    </Section>
    <Paragraph>
        A statewide startup challenge accelerator that takes student teams from idea to MVP to Demo Day in 8 weeks, with local IEDCs running cohorts and BRIK providing curriculum, mentors, and statewide coordination.
    </Paragraph>
    </>
  );
};

export default WhatAwaits;
