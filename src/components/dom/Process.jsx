import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../utils/animations';

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    { num: "1", title: "Discovery", desc: "Understanding your business goals, target audience, and technical constraints." },
    { num: "2", title: "Design", desc: "Crafting wireframes, UI/UX flows, and high-fidelity interactive prototypes." },
    { num: "3", title: "Development", desc: "Writing clean, scalable code with robust architecture and API integrations." },
    { num: "4", title: "Launch", desc: "Testing, optimization, deployment, and ongoing post-launch scaling." }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-32 pointer-events-none overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Our Process
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto"
          >
            A proven methodology to take your product from concept to production sequentially and successfully.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          className="relative"
        >
          {/* Subtle horizontal timeline line connecting steps (hidden on mobile) */}
          <div className="hidden lg:block absolute top-[5rem] left-[10%] right-[10%] h-[1px] bg-white/10 z-0">
            <motion.div 
              style={{ scaleX, originX: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative bg-[#111318]/60 backdrop-blur-md border border-white/5 hover:border-blue-500/40 p-10 rounded-3xl transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] pointer-events-auto flex flex-col items-center text-center overflow-hidden"
              >
                {/* Large faded background number */}
                <div className="absolute -right-4 -top-8 text-9xl font-black text-white/5 select-none transition-all duration-700 group-hover:scale-110 group-hover:text-blue-500/10 group-hover:translate-x-2 group-hover:-translate-y-2 z-0">
                  {step.num}
                </div>

                {/* Subtle top glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/80 transition-all duration-700 z-10"></div>

                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 shadow-xl relative z-10 group-hover:bg-blue-500/20 transition-colors duration-500"
                >
                  <span className="text-xl font-bold text-white">
                    0{step.num}
                  </span>
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
