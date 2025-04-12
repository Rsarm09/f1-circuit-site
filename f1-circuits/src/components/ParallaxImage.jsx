import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ParallaxImage.css';
import './Champions.css'


export default function ParallaxImage({ image, title }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'], // Trigger scroll as it enters/leaves viewport
  });

  // Animate the FRAME
  const frameHeight = useTransform(scrollYProgress, [0, 1], ['90vh', '90vh']);
  const frameWidth = useTransform(scrollYProgress, [0, 1], ['90vw', '90vw']);

  // Animate the IMAGE
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  // Animate the TITLE
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);

  return (
    <motion.div
      className="image-frame"
      ref={containerRef}
      style={{
        height: frameHeight,
        width: frameWidth,
      }}
    >
      <motion.img
        src={image}
        alt={title}
        className="parallax-img"
        style={{ scale }}
      />
      <motion.h3
        className="image-title"
        style={{
          y: titleY,
        }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
}
