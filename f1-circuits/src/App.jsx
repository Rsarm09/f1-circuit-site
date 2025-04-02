import React, { useEffect, useRef } from 'react';

import { ReactLenis, useLenis } from 'lenis/react'

import Home from './pages/Home';
import './global.css';


function App() {

  return (
    <ReactLenis root>
      <Home />
    </ReactLenis>
  )
}

export default App
