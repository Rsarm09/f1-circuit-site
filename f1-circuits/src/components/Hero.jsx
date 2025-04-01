import React from 'react'
import bgvid from '/bgvid-f1site.mp4';
import '../components/Hero.css';
import '../global.css';

export default function Hero() {
  return (
    <div className='container'>
      <video src={bgvid} loop autoPlay muted type='video/mp4' />
      <div className='main-container'>
        <div className='square'></div>
        <h1 className='main-title'>Formula 1</h1>
        <h2 className='subtitle'>Iconic circuits</h2>
        <h3 className='subtitle-desc'>Unsung heroes of F1 History</h3>
      </div>
    </div>
  )
}
