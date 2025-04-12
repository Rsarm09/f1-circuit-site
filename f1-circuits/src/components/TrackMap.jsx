import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useInView } from 'framer-motion';

import './Stats.css';

const TrackMap = ({
    pathData,
    viewBox = "0 0 1098 579",
    points,
    strokeWidth = 13,
    drszones = [],
    setCursorHidden
}) => {
    const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, info: '' });

    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springX = useSpring(cursorX, { stiffness: 100, damping: 10 });
    const springY = useSpring(cursorY, { stiffness: 200, damping: 20 });

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    const handleMouseEnter = (e, info) => {
        const rect = containerRef.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        setCursorHidden(true);

        setTooltip({
            show: true,
            info,
            x: offsetX,
            y: offsetY - 20,
        });
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
        setCursorHidden(false);

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

                    const midX = (zone.x1 + zone.x2) / 2;
                    const midY = (zone.y1 + zone.y2) / 2;

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
                                className="drs-zone"
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

                            <motion.text
                                x={midX}
                                y={midY - 10} 
                                textAnchor="middle"
                                fill="#00FF88"
                                fontSize="14"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 2.4 + i * 0.1, duration: 0.5 }}
                                style={{
                                    pointerEvents: 'none',
                                    filter: 'drop-shadow(0 0 2px #00FF88)',
                                }}
                            >
                                {zone.label || 'DRS ZONE'}
                            </motion.text>
                        </React.Fragment>
                    );
                })}



                {points.map((point, index) => (
                    <motion.circle
                        key={index}
                        cx={point.x}
                        cy={point.y}
                        r="10"
                        fill="#111"
                        stroke="#FF1E00"
                        strokeWidth="1"
                        initial={{ opacity: 1, scale: 0.7 }}
                        animate={isInView
                            ? {
                                opacity: 1,
                                scale: [1.3, 1.5, 1.3],
                            }
                            : undefined
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
                            cursor: 'crosshair'
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
                            position: 'absolute',
                            left: tooltip.x,
                            top: tooltip.y,
                        }}
                        initial={{ opacity: 0 }}
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
