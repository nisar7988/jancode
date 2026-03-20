import React, { Suspense } from 'react';
import SmoothScroll from './components/layout/SmoothScroll';
import Scene from './components/canvas/Scene';
import Hero from './components/dom/Hero';
import About from './components/dom/About';
import Services from './components/dom/Services';
import Showcase from './components/dom/Showcase';
import Footer from './components/dom/Footer';

function App() {
  return (
    <SmoothScroll>
      <div className="relative w-full selection:bg-blue-500/30">
        {/* 3D Canvas Background */}
        <div className="fixed top-0 left-0 w-full h-[100dvh] -z-10 bg-gradient-to-b from-[#0f1115] to-[#0A0C0F]">
          <Scene />
        </div>

        {/* DOM Content - Scrollable over the fixed canvas */}
        <main className="relative z-10 flex flex-col w-full">
          <Hero />
          <About />
          <Services />
          <Showcase />
          <Footer />
        </main>
      </div>
    </SmoothScroll>
  );
}

export default App;
