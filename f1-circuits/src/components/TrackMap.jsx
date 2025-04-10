import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useInView } from 'framer-motion';

import './Stats.css';

const TrackMap = ({
    pathData,
    viewBox = "0 0 1098 579",
    points,
    strokeColor = "#C90603",
    strokeWidth = 13,
    filterId = "track-shadow",
    drszones = []
}) => {
    const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, info: '' });

    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springX = useSpring(cursorX, { stiffness: 100, damping: 10 });
    const springY = useSpring(cursorY, { stiffness: 200, damping: 20 });

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    const handleMouseEnter = (e, info) => {
        updateTooltip(e, info);
    };

    const handleMouseMove = (e) => {
        updateTooltip(e);
    };

    const updateTooltip = (e, info) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        if (!info) return;
        setTooltip({
            show: true,
            info,
        });
    };


    const handleMouseLeave = () => {
        setTooltip({ show: false, x: 0, y: 0, info: '' });
    };

    return (
        <div className="track-map-container" ref={containerRef}>
            <svg
                viewBox={viewBox}
                className="track-svg"
                xmlns="http://www.w3.org/2000/svg"
                style={{ overflow: 'visible' }}
            >

                <defs>
                    <linearGradient id="trackGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#A30015" />
                        <stop offset="100%" stopColor="#FF1E00" />
                    </linearGradient>
                    <linearGradient id="drsLineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#00FF88" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>

                <motion.path
                    d={pathData}
                    stroke="url(#trackGradient)"
                    strokeWidth={strokeWidth}
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isInView ? 1 : 0 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    vectorEffect="non-scaling-stroke"
                    style={{
                        strokeLinecap: 'round',
                        filter: 'drop-shadow(0 0 8px rgba(255, 0, 0, 0.5))',
                    }}
                />

                {drszones.map((zone, i) => {
                    const gradientId = `drsGradient-${i}`;

                    const dx = zone.x2 - zone.x1;
                    const dy = zone.y2 - zone.y1;
                    const length = Math.sqrt(dx * dx + dy * dy);

                    return (
                        <React.Fragment key={`drs-${i}`}>
                            <defs>
                                <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1={zone.x1} y1={zone.y1} x2={zone.x2} y2={zone.y2}>
                                    <stop offset="0%" stopColor="transparent" />
                                    <stop offset="50%" stopColor="#00FF88" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>

                            <motion.line
                                x1={zone.x1}
                                y1={zone.y1}
                                x2={zone.x2}
                                y2={zone.y2}
                                stroke={`url(#${gradientId})`}
                                strokeWidth="4"
                                strokeLinecap="round"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 2.2, duration: 1 }}
                                style={{
                                    filter: 'drop-shadow(0 0 8px #00FF88)',
                                }}
                            />
                        </React.Fragment>
                    );
                })}



                {points.map((point, index) => (
                    <motion.circle
                        key={index}
                        cx={point.x}
                        cy={point.y}
                        r="8"
                        fill="#111"
                        stroke="#fff"
                        strokeWidth="1"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={isInView
                            ? {
                                opacity: 1,
                                scale: [1.3, 1.5, 1.3],
                            }
                            : {}
                        }
                        transition={{
                            delay: 2.4 + index * 0.1,
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                        whileHover={{ scale: 2 }}
                        style={{
                            filter: 'drop-shadow(0 0 8px white)',
                            cursor: 'none',
                        }}
                        onMouseEnter={(e) => handleMouseEnter(e, point.info)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    />
                ))}

            </svg>

            <AnimatePresence>
                {tooltip.show && (
                    <motion.div
                        className="track-tooltip"
                        style={{
                            x: springX,
                            y: springY,
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                        {tooltip.info}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TrackMap;
