import React from 'react';
import '../global.css';
import './Home.css';

import Hero from '../components/Hero';
import InfoNumbers from '../components/InfoNumbers';
import Paragraph from '../components/Paragraph';
import Gallery from '../components/Gallery';
import TitleCardComponent from '../components/TitleCard';

import "/node_modules/flag-icons/css/flag-icons.min.css";
import ParallaxImage from '../components/ParallaxImage';

import Monza from '/images/Monza.jpg';


export default function Home() {
    return (
        <div className='container'>
            <Hero />
            <InfoNumbers />
            <Paragraph />
            <Gallery />
            <div className='title-card'>
                <TitleCardComponent name='monza' location='Autodromo Nazionale di Monza' year='1921' flag='it'/>
            </div>
            <ParallaxImage image={Monza} title="monza"/>
        </div>
    )
}
