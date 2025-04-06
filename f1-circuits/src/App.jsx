import React, { useState, useEffect } from 'react';

import { ReactLenis, useLenis } from 'lenis/react';

import LoadingScreen from './components/LoadingScreen';



import Home from './pages/Home';
import './global.css';


function App() {
const [isLoading, setIsLoading] = useState(true);

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
    <ReactLenis root>
      <Home />
    </ReactLenis>
  )
}

export default App
