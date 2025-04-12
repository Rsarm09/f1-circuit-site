import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ParallaxGallery.css';
import './Champions.css'
import './Stats.css';

const ParallaxGallery = ({ images, title, desc }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const getTransform = (index) => {
    const strength = (index % 2 === 0 ? 1 : -1) * (0.1 + index * 0.05);
    return useTransform(scrollYProgress, [0, 1], [0, strength * 1000]);
  };

  const getPositionClass = (index) => {
    const positionClasses = ['image-left', 'image-center', 'image-right', 'image-left'];
    return positionClasses[index % positionClasses.length];
  };

  return (
    <div className="parallaxgallery-container" ref={containerRef}>

      {images.map((item, i) => (
        <motion.div
          key={i}
          className={`image-wrapper ${getPositionClass(i)}`}
          style={{ y: getTransform(i) }}
          onMouseEnter={() => {
            const video = document.getElementById(`video-${i}`);
            if (video) video.play();
            video.muted();
          }}
          onMouseLeave={() => {
            const video = document.getElementById(`video-${i}`);
            if (video) {
              video.pause();
              video.currentTime = 0;
            }
          }}
        >
          {/* Dark overlay + icon */}
          <div className="image-hover-overlay">
            <motion.div
              className="eye-icon"
              initial={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <svg width="25" height="25" viewBox="0 0 57 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.4585 1.5C19.2383 1.5 9.78037 6.98212 2.33465 17.9464C2.12213 18.2628 2.00566 18.6368 1.99997 19.0212C1.99429 19.4055 2.09964 19.783 2.30271 20.1059C8.02363 29.3056 17.355 36.5 28.4585 36.5C39.4414 36.5 48.9644 29.2837 54.696 20.0634C54.8943 19.7468 54.9998 19.3783 54.9998 19.0018C54.9998 18.6254 54.8943 18.2568 54.696 17.9403C48.9514 8.82569 39.3586 1.5 28.4585 1.5Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.4998 28.5C33.7465 28.5 37.9998 24.2467 37.9998 19C37.9998 13.7533 33.7465 9.5 28.4998 9.5C23.2531 9.5 18.9998 13.7533 18.9998 19C18.9998 24.2467 23.2531 28.5 28.4998 28.5Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" />
              </svg>
            </motion.div>
          </div>

          <img src={item.imageSrc} alt={item.alt} className="preview-img" />
          <video
            id={`video-${i}`}
            src={item.videoSrc}
            className="preview-video"
            muted
            loop
            playsInline
          />
          <div className="info-overlay">
            <div className="overlay"></div>
            <div className="scanline"></div>
            {item.description}
          </div>
        </motion.div>


      ))}
    </div>
  );
};

export default ParallaxGallery;
