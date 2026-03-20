import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex flex-col items-center justify-center pointer-events-none">
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 opacity-0 animate-[fade-in-up_1s_ease-out_forwards]">
          BEYOND <span className="text-gradient">REALITY</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 opacity-0 animate-[fade-in-up_1s_ease-out_0.3s_forwards]">
          Explore the next dimension of web experiences with immersive 3D technology and physics-based interactions.
        </p>
        <button className="pointer-events-auto group relative px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full font-medium text-white transition-all duration-300 overflow-hidden opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]">
          <span className="relative z-10">Discover More</span>
          <div className="absolute inset-0 h-full w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left object-cover bg-gradient-to-r from-blue-500/40 to-emerald-500/40 z-0"></div>
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce pointer-events-none">
        <span className="text-xs uppercase tracking-widest text-white">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}
