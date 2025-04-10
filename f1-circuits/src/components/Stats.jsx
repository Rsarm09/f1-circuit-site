import React, { useRef, useMemo } from 'react';
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';
import './Stats.css';
import SemiCircleMeter from './SemiCircleMeter';

export default function Stats({ title, desc, progressData, telemetryData }) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const averageValue = useMemo(() => {
        const total = progressData.reduce((sum, data) => sum + data.value, 0);
        return total / progressData.length || 0;
    }, [progressData]);

    const rawAmplitude = useMotionValue(0);
    const animatedAmplitude = useSpring(rawAmplitude, {
        damping: 15,
        stiffness: 120,
    });

    if (isInView) {
        rawAmplitude.set(5 + (averageValue / 90) * 35);
    }

    const wavePath = useTransform(animatedAmplitude, (amplitude) => {
        const wavelength = 50;
        const width = 600;
        let path = 'M0 30';
        let seed = Math.floor(Math.random() * 1000);

        for (let x = 0; x <= width; x += wavelength) {
            const cx = x + wavelength / 2;

            const variance = (Math.sin((x + seed) * 0.03) + Math.random() * 0.5) * 1.5;
            const cy = 30 + (amplitude + variance) * (x / wavelength % 2 === 0 ? -1 : 1);

            const nx = x + wavelength;
            path += ` Q ${cx} ${cy}, ${nx} 30`;
        }

        return path;
    });


    return (
        <div className="desc-container" ref={containerRef}>
            <div className="desc">
                <p className="topic-number">1</p>
                <h3>{title}</h3>
                <p className="information">{desc}</p>
                <div className="telemetry-meters">
                    {telemetryData?.circular?.map((meter, index) => (
                        <SemiCircleMeter
                            key={index}
                            value={parseFloat(meter.value.replace(/[^0-9.]/g, ''))} // get numeric value
                            label={meter.label}
                            subValue={meter.subValue}
                            note={meter.note}
                        />
                    ))}
                </div>
            </div>

            <div className="progress-bars">
                {progressData.map((data, index) => (
                    <div className="progress-bar" key={index}>
                        <label>{data.label}</label>
                        <div className="progress">
                            <motion.div
                                className="filler"
                                initial={{ width: 0 }}
                                animate={{ width: isInView ? `${data.value}%` : 0 }}
                                transition={{ duration: 1, delay: index * 0.6 }}
                            />
                        </div>
                    </div>
                ))}

                <div className="wave-container">
                    <svg viewBox="0 0 600 60" className="wave-svg" preserveAspectRatio="none">
                        <motion.path
                            stroke="#fff"
                            fill="transparent"
                            strokeWidth="2"
                            d={wavePath}
                            animate={{
                                x: [0, -200], // scrolls left
                            }}
                            transition={{
                                duration: 3,
                                ease: 'linear',
                                repeat: Infinity,
                            }}
                        />
                    </svg>
                </div>
            </div>





        </div>
    );
}
