import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <div className="w-full h-24 flex items-center justify-center overflow-hidden pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 1200 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <motion.path
          d="M0 50C150 50 300 10 450 10C600 10 750 90 900 90C1050 90 1200 50 1300 50"
          stroke="url(#gradient-line)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient-line" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
