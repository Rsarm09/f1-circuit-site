import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './SemiCircleMeter.css';

export default function SemiCircleMeter({ value, label, subValue, note }) {
    const containerRef = useRef(null);
    const pathRef = useRef(null);
    const [pathLength, setPathLength] = useState(0);
    const controls = useAnimation();
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    const percentage = Math.min(100);

    useEffect(() => {
        if (isInView && pathRef.current) {
            const length = pathRef.current.getTotalLength();
            setPathLength(length);
            controls.start({
                strokeDashoffset: length * ((100 - percentage) / 100),
                strokeDasharray: length,
            });
        }
    }, [isInView, percentage, controls]);
    

    return (
        <div className="semi-circle-container" ref={containerRef}>
            <svg width="225" height="100" viewBox="0 0 225 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17 145.5C17 145.5 -5.02941 15 111.438 15C227.905 15 208 145.5 208 145.5"
                    stroke="#333"
                    strokeWidth={30}
                    
                />
                <motion.path
                    ref={pathRef}
                    d="M17 145.5C17 145.5 -5.02941 15 111.438 15C227.905 15 208 145.5 208 145.5"
                    stroke="white"
                    strokeWidth={30}
                    initial={{ strokeDashoffset: pathLength, strokeDasharray: pathLength }}
                    animate={controls}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                />

            </svg>

            <div className="semi-circle-labels">
                <p className="main-value">{value}</p>
                <p className="sub-value">{subValue}</p>
                <p className="meter-label">{label}</p>
                {note && <small className="meter-note">{note}</small>}
            </div>
        </div>
    );
}
