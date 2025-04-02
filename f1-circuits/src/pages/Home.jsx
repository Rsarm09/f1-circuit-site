import React from 'react';
import '../global.css';

import Hero from '../components/Hero';
import InfoNumbers from '../components/InfoNumbers';
import Paragraph from '../components/Paragraph';


export default function Home() {
    return (
        <div className='container'>
            <Hero />
            <InfoNumbers />
            <Paragraph />
        </div>
    )
}
