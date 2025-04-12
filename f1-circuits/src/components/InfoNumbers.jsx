import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'framer-motion';

import infobox from '/graphics/infobox.svg';
import './InfoNumbers.css';

gsap.registerPlugin(ScrollTrigger);

export default function InfoNumbers() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });
    const [startCount, setStartCount] = useState(false);

    const stats = [
        { number: 75, label: "Years" },
        { number: 77, label: "Circuits" },
        { number: 1125, label: "Races" },
    ];

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    useEffect(() => {
        if (isInView) {
            setStartCount(true);
        }
    }, [isInView]);

    return (
        <div className='box-container' ref={containerRef}>
            <img src={infobox} alt="information box" className='box-graphic' />
            <section className="stats-container">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <h2 className="stat-number">
                            {startCount && (
                                <CountUp
                                    start={0}
                                    end={stat.number}
                                    duration={2.5}
                                    delay={index * 0.2}
                                />
                            )}
                        </h2>
                        <p className="stat-label">{stat.label}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
