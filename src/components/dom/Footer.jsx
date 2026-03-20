import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="w-full bg-[#0A0C0F] relative z-20 pointer-events-auto border-t border-white/10 pt-20 pb-10 overflow-hidden">
      {/* Subtle top glowing line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16"
        >
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-400 shrink-0"
              ></motion.div>
              <span className="text-2xl font-black text-white tracking-widest uppercase">Jancode</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              We engineer scalable digital products bridging the gap between world-class aesthetics and rigorous software architecture.
            </p>
          </motion.div>
          
          {/* Services Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2 lg:col-start-7 flex flex-col">
            <h4 className="text-white font-bold mb-6 tracking-wide">Services</h4>
            <div className="flex flex-col gap-4">
              {["Web Development", "eCommerce", "CMS & Admin", "Mobile Apps"].map((link, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ x: 5, color: "#60a5fa" }}
                  className="text-white/50 text-sm transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Company Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col">
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <div className="flex flex-col gap-4">
              {["About Us", "Our Work", "Process", "Contact"].map((link, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ x: 5, color: "#ffffff" }}
                  className="text-white/50 text-sm transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Call to action Mini */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col items-start lg:items-end">
            <h4 className="text-white font-bold mb-6 tracking-wide lg:text-right">Ready to start?</h4>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Start a Project
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Jancode Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
      
      {/* Background glow decorator */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    </footer>
  );
}
