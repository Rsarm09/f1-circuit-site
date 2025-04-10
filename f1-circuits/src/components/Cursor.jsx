import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Cursor.css';

export default function Cursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Use springs for buttery smoothness
  const springX = useSpring(cursorX, {
    damping: 18,
    stiffness: 150,
    mass: 0.5,
  });

  const springY = useSpring(cursorY, {
    damping: 18,
    stiffness: 100,
    mass: 0.5,
  });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        translateX: springX,
        translateY: springY,
      }}
    />
  );
}
