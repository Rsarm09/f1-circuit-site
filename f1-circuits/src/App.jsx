import React, { useState, useEffect } from 'react';

import { ReactLenis, useLenis } from 'lenis/react';

import LoadingScreen from './components/LoadingScreen';


import Home from './pages/Home';
import './global.css';
import Cursor from './components/Cursor';


function App() {
const [isLoading, setIsLoading] = useState(true);
const [cursorHidden, setCursorHidden] = useState(false);

  useEffect(() => {
      setTimeout
      (() => {
        setIsLoading(false);
      }, 3000);
  }, [])

  if(isLoading) {
    return <LoadingScreen />
  }

  return (
    <ReactLenis 
    root
    options={{
      duration: 1.5, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,  
      smoothTouch: false,  
    }}
    
    >
      <Cursor hidden={cursorHidden}/>
      <Home setCursorHidden={setCursorHidden}/>
    </ReactLenis>
  )
}

export default App
