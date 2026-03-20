import React from 'react';

export default function Showcase() {
  return (
    <section className="relative w-full min-h-[80vh] py-24 flex items-center pointer-events-none">
      <div className="container mx-auto px-6">
        <div className="glass p-12 md:p-24 rounded-[3rem] text-center border border-white/10 relative overflow-hidden pointer-events-auto">
          {/* subtle glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-emerald-500/10 z-0"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight">
              Ready to <br /><span>Explore?</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              The boundaries of web design are expanding. Join us in building the next generation of digital experiences.
            </p>
            <button className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
