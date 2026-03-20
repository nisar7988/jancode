import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fadeLeft, fadeUp, staggerContainer } from '../../utils/animations';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth parallax for the main content card
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const points = [
    "Performance-first architecture",
    "Tailored digital strategies",
    "Seamless 3D & UI integration",
    "Scalable cloud infrastructure"
  ];

  return (
    <section ref={containerRef} className="relative w-full py-32 pointer-events-none overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          style={{ y }}
          className="bg-[#111318]/40 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[3rem] relative z-10 pointer-events-auto shadow-[0_50px_100px_rgba(0,0,0,0.3)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-50px" }}
                className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight"
              >
                Why work with <br/>
                <span className="text-blue-500">Jancode?</span>
              </motion.h2>
              <motion.p 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-50px" }}
                className="text-white/60 text-lg md:text-xl mb-10 leading-relaxed"
              >
                We bridge the gap between imagination and technical reality. Our team specializes in high-end web experiences that don't just look good but perform under pressure.
              </motion.p>
              
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-10"></div>
            </div>

            <motion.div 
              variants={staggerContainer(0.2, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
              className="flex flex-col gap-6"
            >
              {points.map((point, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeLeft}
                  className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-colors group"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-white/80 font-medium text-lg">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative background glass shape */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-0"></div>
    </section>
  );
}
