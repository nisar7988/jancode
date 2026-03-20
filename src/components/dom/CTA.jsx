import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, scaleIn } from '../../utils/animations';

export default function CTA() {
  return (
    <section className="relative w-full py-40 flex items-center justify-center pointer-events-none">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          className="bg-gradient-to-br from-blue-900/40 to-emerald-900/40 backdrop-blur-xl p-16 md:p-24 rounded-[3rem] text-center border border-white/20 relative overflow-hidden pointer-events-auto shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
        >
          {/* subtle glow overlay */}
          <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-0"></div>
          
          <div className="relative z-10 w-full flex flex-col items-center">
            <motion.h2 
              variants={fadeUp}
              className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight"
            >
              Let's build your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-emerald-200">
                next product
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
            >
              Transform your modern business. We are ready to craft digital solutions that deliver real-world impact.
            </motion.p>
            
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255,255,255,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white text-black font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Contact Us
            </motion.button>
          </div>
          
          {/* Decorative background blur */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"></div>
        </motion.div>
      </div>
    </section>
  );
}
