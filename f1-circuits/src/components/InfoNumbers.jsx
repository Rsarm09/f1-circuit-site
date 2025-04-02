import infobox from '/graphics/infobox.svg';
import './InfoNumbers.css';
import CountUp from 'react-countup';
import { useState } from 'react';

export default function InfoNumbers() {
    const stats = [
        { number: 75, label: "Years" },
        { number: 77, label: "Circuits" },
        { number: 1125, label: "Races" },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='box-container'>
            <img src={infobox} alt="" className='box-graphic' />
            <section className="stats-container">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <h2 className="stat-number">
                            <CountUp 
                                start={0} 
                                end={stat.number} 
                                duration={3} 
                                delay={index === 0 ? 0 : 0.5} 
                                onStart={() => index === activeIndex && setActiveIndex(index + 1)}
                            />
                        </h2>
                        <p className="stat-label">{stat.label}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
