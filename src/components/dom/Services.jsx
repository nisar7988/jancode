import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, ShoppingCart, LayoutTemplate, Smartphone } from 'lucide-react';
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from '../../utils/animations';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "High-performance, tailored web applications built for speed, scalability, and seamless user experiences.",
      icon: <Laptop className="w-8 h-8 text-blue-400" />
    },
    {
      title: "eCommerce Solutions",
      desc: "Robust, conversion-optimized online storefronts designed to grow your digital revenue and streamline operations.",
      icon: <ShoppingCart className="w-8 h-8 text-emerald-400" />
    },
    {
      title: "CMS & Admin Panels",
      desc: "Custom content management systems and admin dashboards tailored strictly for your complex business requirements.",
      icon: <LayoutTemplate className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Mobile Apps",
      desc: "Native-feeling mobile applications built with cutting-edge cross-platform technologies to capture your mobile audience.",
      icon: <Smartphone className="w-8 h-8 text-rose-400" />
    }
  ];

  return (
    <section className="relative w-full min-h-[100vh] py-32 pointer-events-none">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24 md:w-1/2">
          <motion.h2 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Capabilities
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            className="text-white/60 text-lg md:text-xl md:pr-10"
          >
            We don't just build websites. We engineer end-to-end digital solutions that power modern businesses and elevate brands.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
        >
          {services.map((svc, i) => (
            <motion.div 
              key={i} 
              variants={i % 2 === 0 ? fadeLeft : fadeRight}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-[#111318]/80 backdrop-blur-md p-10 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] group pointer-events-auto relative overflow-hidden"
            >
              {/* Subtle card glow */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500"></div>
              
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:bg-blue-500/10 transition-all duration-500 relative z-10"
              >
                {svc.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors relative z-10">
                {svc.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-lg relative z-10">{svc.desc}</p>
              
              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-emerald-500 w-0 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
