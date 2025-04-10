import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import bgvid from '/bgvid-f1site.mp4';
import '../global.css';
import '../components/Hero.css';

export default function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const subtitleDescRef = useRef(null);
  const mainContentRef = useRef(null);


  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
    // Set visibility on .main-container, not .container
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
      </div>
    </div>
  );
}
