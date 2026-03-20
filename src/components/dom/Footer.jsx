import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black/50 backdrop-blur-lg border-t border-white/10 py-12 mt-20 relative z-20 pointer-events-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-500 shrink-0"></div>
          <span className="font-bold text-white tracking-widest uppercase">Nexus</span>
        </div>
        
        <div className="text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Nexus Studio. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-white/50 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-white/50 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-white/50 hover:text-white transition-colors">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}
