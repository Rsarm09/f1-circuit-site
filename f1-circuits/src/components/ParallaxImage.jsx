import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

import './ParallaxImage.css';

export default function ParallaxImage({ image, title }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <div>
      <div className="image-frame" ref={containerRef}>
        <motion.img
          src={image}
          alt={title}
          style={{ scale }}
          className="parallax-img"
        />
        <h3 className="image-title">{title}</h3>
      </div>
    </div>
  );
}

