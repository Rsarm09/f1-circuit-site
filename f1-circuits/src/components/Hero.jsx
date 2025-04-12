import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import bgvid from '/bgvid-f1site.mp4';
import '../global.css';
import '../components/Hero.css';
import './Champions.css'


export default function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const subtitleDescRef = useRef(null);
  const mainContentRef = useRef(null);


  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.set(mainContentRef.current, { visibility: 'visible' })
      .fromTo(videoRef.current, { opacity: 0 }, { opacity: 1, duration: 2 })
      .fromTo(
        containerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=1.5'
      )
      .fromTo(titleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.8')
      .fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.7')
      .fromTo(subtitleDescRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.6');
  }, []);



  return (
    <div className="container" ref={containerRef}>
      <div className='overlay'></div>
      <video
        ref={videoRef}
        src={bgvid}
        loop
        autoPlay
        muted
        type="video/mp4"
        className="video"
        preload="auto"
      />
      <div className="main-container" ref={mainContentRef}>
        <h1 className="main-title" ref={titleRef}>Formula 1</h1>
        <div className="subtitle-container">
          <h2 className="subtitle" ref={subtitleRef}>Iconic circuits</h2>
          <h3 className="subtitle-desc" ref={subtitleDescRef}>Unsung heroes of F1 History</h3>
        </div>
        <div className='button-container'>
          <div role='button' className="scroll-down-btn">
            <svg
              className="chevron-scroll"
              viewBox="0 0 1288 2389"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path className="chevron chevron-1" d="M643.86 924.14L0.36 408.75V0.65L643.86 516.04L1287.4 0.64V408.74L643.86 924.14Z" fill="white" />
              <path className="chevron chevron-2" d="M643.86 1656.27L0.36 1140.88V732.78L643.86 1248.17L1287.4 732.77V1140.86L643.86 1656.27Z" fill="white" />
              <path className="chevron chevron-3" d="M643.86 2388.4L0.36 1873V1464.91L643.86 1980.3L1287.4 1464.89V1872.99L643.86 2388.4Z" fill="white" />
            </svg>

          </div>
        </div>
      </div>
      <div className='scanline'></div>
    </div>
  );
}
