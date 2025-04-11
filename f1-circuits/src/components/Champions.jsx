import { useRef } from 'react';
import './Champions.css';
import { motion, useInView } from 'framer-motion';


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
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? [0, 0.2, 0.05, 0.7, 0.3, 1] : 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            Michael<br />Schumacher
          </motion.h4>

        </div>
        <div className="crt-wrapper">
          <div className="crt-image">
            <motion.img
              src="/images/MichaelSchumacher.png"
              alt="Michael Schumacher"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? [0, 0.2, 0.05, 0.6, 0.1, 1] : 0 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
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
    </div>

  );
}
