import React from 'react';

export default function About() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="pointer-events-none">
            {/* The 3D object will appear here based on viewport or scroll */}
          </div>
          
          <div className="glass p-10 md:p-14 border border-white/10 rounded-3xl pointer-events-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Shaping the <br/><span className="text-gradient">Digital Frontier</span>
            </h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              We merge cutting-edge WebGL technology with refined design principles to create interfaces that don't just display information—they tell a living, breathing story.
            </p>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Our approach leverages smooth scrolling and physical animations to build spatial awareness within the browser. Everything is interconnected.
            </p>
            
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white mb-2">3D</span>
                <span className="text-sm text-white/50 uppercase tracking-wider">Spatial Design</span>
              </div>
              <div className="w-[1px] bg-white/20 mx-4"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white mb-2">60</span>
                <span className="text-sm text-white/50 uppercase tracking-wider">FPS Motion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
