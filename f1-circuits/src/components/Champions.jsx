import { useRef } from 'react';
import './Champions.css';
import { motion, useInView } from 'framer-motion';

import MichaelSchumacherPic from '/images/MichaelSchumacher.png';
import LewisHamiltonPic from '/images/LewisHamilton.png';

export default function Champions({ desc }) {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <div>
      <div className='champion-desc'>
        <p className="topic-number">3</p>
        <h3>Monza Champions</h3>
        <p className='information'>{desc}</p>
      </div>
      <div className="champions-container" ref={containerRef}>
        <div className="overlay-text">
          <h4>
            Michael<br />Schumacher
          </h4>

        </div>
        <div className="crt-wrapper">
          <div className="crt-image">
            <motion.img
              src={MichaelSchumacherPic}
              alt="Michael Schumacher"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? [0, 0.2, 0.1, 1] : 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />

            <div className="terminal-panel">
              <div className='overlay'></div>
              <div className="scanline"></div>
              <p>{`>`} --track monza --driver michael_schumacher</p>
              <p>{`>`} loading... </p>
              <p>{`>`} Appearances: 19</p>
              <p>{`>`} Monza Wins: 5 (1996, 1998, 2000, 2003, 2006)</p>
              <p>{`>`} Podiums: 8 </p>
              <p>{`>`} Legacy: The Red Baron<span className="blink">_</span></p>
            </div>

            <div className="scanline"></div>
            <div className="crt-overlay"></div>
          </div>
        </div>

      </div>
      <div className="champions-container" ref={containerRef}>
        <div className="champions-container">
          <div className="crt-wrapper-2">
            <div className="crt-image-2">
            <motion.img
              src={LewisHamiltonPic}
              alt="Lewis Hamilton"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? [0, 0.2, 0.1, 1] : 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />

              <div className="terminal-panel">
                <div className="overlay"></div>
                <div className="scanline"></div>
                <p>{`>`} --track monza --driver lewis_hamilton</p>
                <p>{`>`} loading... </p>
                <p>{`>`} Appearances: 17</p>
                <p>{`>`} Monza Wins: 5 (2012, 2014, 2015, 2017, 2018)</p>
                <p>{`>`} Podiums: 8</p>
                <p>{`>`} Legacy: Billion Dollar Man <span className="blink">_</span></p>
              </div>

              <div className="scanline"></div>
              <div className="crt-overlay"></div>
            </div>
          </div>

          <div className="overlay-text-2">
          <h4>
            Lewis<br />Hamilton
          </h4>
          </div>
        </div>


      </div>
    </div>

  );
}
