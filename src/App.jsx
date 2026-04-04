import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import ExperienceStack from './components/ExperienceStack';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useSmoothScroll();

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Only allow scrolling/clicking on main content if not loading, or just let it render behind */}
      <main
        className="w-full min-h-screen bg-darkBg text-zinc-300 relative selection:bg-brandRed selection:text-white"
        style={{ height: isLoading ? '100vh' : 'auto', overflow: isLoading ? 'hidden' : 'visible' }}
      >
        {/* Dynamic Noise Background: optimized by removing expensive mix-blend-overlay */}
        <div className="fixed inset-0 pointer-events-none bg-noise opacity-40 z-50"></div>

        <Hero />
        <About />
        <Achievements />
        <Projects />
        <ExperienceStack />
        <Contact />
      </main>
    </>
  );
}

export default App;
