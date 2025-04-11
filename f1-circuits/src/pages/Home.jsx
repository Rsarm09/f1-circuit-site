import React from 'react';
import '../global.css';
import './Home.css';

import Hero from '../components/Hero';
import InfoNumbers from '../components/InfoNumbers';
import Paragraph from '../components/Paragraph';
import Gallery from '../components/Gallery';
import TitleCardComponent from '../components/TitleCard';
import Stats from '../components/Stats';
import ParallaxImage from '../components/ParallaxImage';

import Monza from '/images/Monza.jpg';
import Circuit from '../components/Circuit';
import ParallaxGallery from '../components/ParallaxGallery';
import Champions from '../components/Champions';

const monzaPath = `M8.50007 44C31.9035 20.5965 140.5 3.76367 155.835 3.76367C171.17 3.76367 233.424 141.296 255.962 169.148C278.5 197 500.944 387.963 509.076 396.105C526 405 539.5 374.5 564.5 386.5C590.398 402.5 568.5 418.5 590.398 419.004C612.296 419.508 1013.5 419.004 1013.5 419.004C1039.93 419.004 1071.5 406 1076.8 453.608C1082.1 501.216 1021 522 975.151 525.359C929.302 528.718 420.004 532.991 389 534.009C357.996 535.026 389.5 516.5 386.5 504C383.5 491.5 351.5 515 338.5 523C332.401 530.634 282.549 553.598 218 548C153.451 542.403 138.218 498 135 468.5C132 441 100.435 268.458 100.435 245.479C100.435 222.5 59.0001 246.5 65.5001 215C72 183.5 -14.9034 67.4036 8.50007 44Z`;


const monzaPoints = [
    {
      x: 440,
      y: 530,
      info: (
        <div>
          <strong>Turn 1 – Speed Trap</strong><br />
          Trap Speed: <span style={{ color: "#FF4C4C" }}>354 KM/H</span><br />
          Heaviest braking zone
        </div>
      ),
    },
    {
      x: 120,
      y: 10,
      info: (
        <div>
          <strong>Turn 7 – DRS Zone</strong><br />
          DRS Active: <span style={{ color: "#00E676" }}>Yes</span><br />
          High-speed chicane
        </div>
      ),
    },
    {
      x: 970,
      y: 525,
      info: (
        <div>
          <strong>Turn 11 – DRS Zone</strong><br />
          DRS Active: <span style={{ color: "#00E676" }}>Yes</span><br />
          Into the final turn
        </div>
      ),
    },
  ];


  const drszones = [
  { x1: 255, y1: 170, x2: 500, y2: 390 }, 
  { x1: 400, y1: 532, x2: 900, y2: 525 } 
];
  
const images = [
    {imageSrc: '/images/Monza.jpg', videoSrc: '/bgvid-f1site.mp4' },
    {imageSrc: '/images/Monza.jpg', videoSrc: '/bgvid-f1site.mp4' },
    {imageSrc: '/images/Monza.jpg', videoSrc: '/bgvid-f1site.mp4' },
    {imageSrc: '/images/Monza.jpg', videoSrc: '/bgvid-f1site.mp4' },

  ];
  

export default function Home({setCursorHidden}) {
  return (
    <div className='container'>
      <Hero />
      <InfoNumbers />
      <Paragraph />
      <Gallery />
      <div className='title-card'>
        <TitleCardComponent name='monza' location='Autodromo Nazionale di Monza' year='1921' flag='it' />
      </div>
      <ParallaxImage image={Monza} title="monza" />
      <Stats
        title="The Temple of Speed"
        desc='Built in 1921, Monza is one of the oldest and most iconic circuits in Formula 1 history. Known as the "Temple of Speed," its legendary high-speed straights and thrilling corners have been the stage for unforgettable moments, fierce rivalries, and historic victories.'
        progressData={[
          { label: 'Fast Corners', value: 80 },
          { label: 'High Speed', value: 75 },
          { label: 'Iconic Circuit', value: 90 },
        ]}
        telemetryData={{
          circular: [
            { value: '320', subValue: 'KM/H', label: 'TOP SPEED' },
            { value: '200', subValue: 'KM/H', label: 'AVG. SPEED' },
            { value: '1m', subValue: '19.813s', label: 'LAP RECORD', note: 'Charles Leclerc, 2020' }
          ]
        }}
        
      />

      <Circuit
        title="The Circuit"
        desc='Monza the Temple of Speed. Home to Formula 1’s fastest straights and fiercest fans. With minimal downforce and legendary corners like Ascari and Parabolica, it’s a track that rewards precision, bravery, and flat-out racing. A true icon of motorsport history.'
        pathData={monzaPath}
        viewBox="0 0 1078 559"
        points={monzaPoints}
        drszones={drszones}
        setCursorHidden={setCursorHidden}
      />

      <ParallaxGallery images={images}/>
      
      <Champions desc={'Monza’s most iconic champions, Michael Schumacher and Lewis Hamilton, have each left an indelible mark on the Temple of Speed. With a combined 10 victories, they’ve defined eras of dominance through unmatched precision, relentless pace, and pure racing excellence on one of Formula 1’s fastest and most historic circuits.'}/>

      <div className='footer'>
        <div role='button' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <p className='footer-arrow'>↑</p>
          <p>Race to the Top</p>
        </div>
      </div>
    </div>
  );
}
