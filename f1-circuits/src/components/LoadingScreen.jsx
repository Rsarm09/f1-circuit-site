// LoadingScreen.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

export default function LoadingScreen() {
    const [slideUp, setSlideUp] = useState(false);
    const [randomPath, setRandomPath] = useState('');

    //Circuits array
    const circuitSVGS = [
        // Italy Monza
        `M4.09653 52.0179C-8.50833 -5.38296 90.6703 -0.735248 141.835 8.76371C158.608 11.4298 231.289 155.828 241.962 174.148C252.636 192.467 486.944 392.963 495.076 401.105C503.208 409.247 529.638 402.632 540.82 401.105C549.765 399.884 568.266 415.862 576.398 424.004H1022.14C1048.57 424.004 1057.72 420.442 1062.8 458.608C1067.89 496.773 972.841 530.359 961.151 530.359C949.461 530.359 430.527 529.341 399.523 530.359C368.519 531.376 373.094 530.359 364.962 508.986C356.829 487.613 316.168 531.376 310.069 539.009C303.97 546.643 271.95 544.607 207.401 539.009C142.852 533.412 135.736 487.104 125.062 469.294C114.389 451.483 86.4347 266.254 86.4347 250.479C86.4347 234.703 72.2034 233.686 62.5464 230.124C52.8895 226.561 19.8526 123.769 4.09653 52.0179Z`,

        // Australia Albert Park
        `M75.7507 340.577L3 269.733V237.184C3 204.634 13.8488 207.825 15.7633 186.125C17.6778 164.425 61.0729 88.4761 62.9874 68.0527L63.0157 67.7502C64.9034 47.5978 65.1993 44.4382 124.889 44.4382C225.081 -57.6786 306.128 57.2028 323.996 88.4761C341.865 119.749 435.037 253.139 474.603 282.498C514.169 311.857 616.275 300.368 629.039 300.368C641.802 300.368 640.574 294.7 692.855 253.139C717.743 233.354 844.738 233.354 851.12 233.354C861.968 233.354 1030.44 313.133 1042.57 331.642C1054.69 350.15 986.41 427.376 964.713 452.905C943.015 478.434 852.396 427.376 841.547 427.376C830.698 427.376 843.462 452.905 841.547 484.179C840.016 509.197 827.72 513.75 821.764 512.899C682.006 515.239 400.959 518.515 394.833 512.899C387.175 505.878 385.898 452.905 336.76 452.905C242.311 478.434 75.7507 436.95 50.2241 427.376C24.6976 417.803 54.0531 396.741 75.7507 373.127C93.1087 354.235 82.9832 343.555 75.7507 340.577Z`
    ];

    useEffect(() => {
        // random svg
        const randomIndex = Math.floor(Math.random() * circuitSVGS.length);
        setRandomPath(circuitSVGS[randomIndex]);

        const timer = setTimeout(() => {
            setSlideUp(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            className="loading-screen"
            initial={{ y: 0 }}
            animate={{ y: slideUp ? '-100%' : 0 }}
            transition={{
                type: 'tween',
                duration: 1.2,
                ease: [0.6, 0.01, -0.05, 0.95]
            }}
        >
            <div className="loading-content">
                <svg
                    width="1066"
                    height="547"
                    viewBox="0 0 1066 547"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="loading-svg"
                >
                    <motion.path
                        d={randomPath}
                        stroke="white"
                        strokeWidth="5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 2,
                            ease: 'easeInOut'
                        }}
                    />
                </svg>
                <p className="loading-text">On your marks...</p>
            </div>
        </motion.div>
    );
}
