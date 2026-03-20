import React from 'react';
import { Code, Cuboid, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Interactive WebGL",
      desc: "Creating immersive 3D experiences directly in the browser that captivate and engage users like never before.",
      icon: <Cuboid className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Performant Systems",
      desc: "Optimized render loops and asset delivery to ensure a buttery smooth 60fps across all devices.",
      icon: <Zap className="w-8 h-8 text-emerald-400" />
    },
    {
      title: "Modern Stacks",
      desc: "Built with the latest modular tools including React, Vite, and Tailwind for maximum velocity and maintainability.",
      icon: <Code className="w-8 h-8 text-purple-400" />
    }
  ];

  return (
    <section className="relative w-full min-h-[100vh] py-24 pointer-events-none">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">Our <span className="text-gradient">Capabilities</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            We deliver sophisticated technical solutions paired with visionary aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <div key={i} className="glass p-8 rounded-3xl group border border-white/5 hover:border-blue-500/50 transition-colors duration-500 pointer-events-auto">
              <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {svc.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{svc.title}</h3>
              <p className="text-white/60 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
