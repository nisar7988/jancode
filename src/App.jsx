import React, { useState, useEffect } from 'react';
import SmoothScroll from './components/layout/SmoothScroll';
import Scene from './components/canvas/Scene';
import Hero from './components/dom/Hero';
import Services from './components/dom/Services';
import About from './components/dom/About';
import Projects from './components/dom/Projects';
import Process from './components/dom/Process';
import Contact from './components/dom/Contact';
import Footer from './components/dom/Footer';
import SectionDivider from './components/layout/SectionDivider';
import LoadingScreen from './components/ui/LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';

import { useScroll } from './components/layout/SmoothScroll';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const lenis = useScroll();

  useEffect(() => {
    if (!isLoaded && lenis) {
      lenis.stop();
    } else if (isLoaded && lenis) {
      lenis.start();
    }
  }, [isLoaded, lenis]);

  return (
    <>
      <LoadingScreen onFinished={() => setIsLoaded(true)} />
      
      <div className="relative w-full selection:bg-blue-500/30">
        {/* 3D Canvas Background */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full h-[100dvh] -z-10 bg-[#0A0C0F]"
        >
          <Scene isStarted={isLoaded} />
        </motion.div>

        {/* DOM Content - Scrollable over the fixed canvas */}
        <AnimatePresence>
          {isLoaded && (
            <motion.main 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex flex-col w-full"
            >
            {[1].map((i) => (
              <React.Fragment key={i}>
                <Hero />
                <SectionDivider />
                <Services />
                <SectionDivider />
                <About />
                <SectionDivider />
                <Projects />
                <SectionDivider />
                <Process />
                <SectionDivider />
                <Contact />
                <Footer />
              </React.Fragment>
            ))}
          </motion.main>
        )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
