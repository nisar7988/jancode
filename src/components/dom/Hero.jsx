import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp, scaleIn, staggerContainer } from '../../utils/animations';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax remains as it adds premium depth
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const y3 = useTransform(scrollY, [0, 500], [0, -30]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative w-full min-h-[100vh] flex items-center pointer-events-none overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <motion.div 
          variants={staggerContainer(0.15, 0.2)}
          initial="hidden"
          animate="visible"
          className="w-full md:w-3/5 lg:w-1/2 flex flex-col items-start pt-20"
        >
          <motion.h1 
            style={{ y: y1 }}
            variants={fadeUp}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-2"
          >
            Jancode
          </motion.h1>
          
          <motion.h2 
            style={{ y: y2 }}
            variants={fadeUp}
            className="text-2xl md:text-4xl font-bold text-white/90 mb-6 leading-tight"
          >
            We build scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">digital products</span>
          </motion.h2>
          
          <motion.p 
            style={{ y: y3 }}
            variants={fadeUp}
            className="text-lg md:text-xl text-white/70 max-w-lg mb-10 leading-relaxed drop-shadow-lg"
          >
            Web apps, eCommerce platforms, CMS systems, and mobile apps for modern businesses.
          </motion.p>
          
          <motion.div 
            variants={scaleIn}
            className="flex flex-wrap gap-5 pointer-events-auto"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-full font-bold transition-colors"
            >
              Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-full font-bold transition-colors"
            >
              View Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-2 animate-bounce pointer-events-none"
      >
        <span className="text-xs uppercase tracking-widest text-white">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
}
