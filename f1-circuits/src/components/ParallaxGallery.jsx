import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ParallaxGallery.css';

const ParallaxGallery = ({ images }) => {
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
          }}
          onMouseLeave={() => {
            const video = document.getElementById(`video-${i}`);
            if (video) {
              video.pause();
              video.currentTime = 0;
            }
          }}
        >
          <img src={item.imageSrc} alt={`Preview ${i}`} className="preview-img" />
          <video
            id={`video-${i}`}
            src={item.videoSrc}
            className="preview-video"
            muted
            loop
            playsInline
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ParallaxGallery;
