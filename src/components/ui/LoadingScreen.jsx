import { useProgress } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onFinished }) => {
  const { progress } = useProgress();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 500); // Wait a bit after 100% before starting fade out
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          onAnimationComplete={(definition) => {
            if (definition === "exit" || (typeof definition === "object" && definition.opacity === 0)) {
              if (onFinished) onFinished();
            }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0C0F] select-none pointer-events-none"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px]" />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Unique Animated Loader Shape */}
            <div className="relative mb-12">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-32 h-32 border-2 border-blue-500/20 rounded-full relative"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full blur-[4px] shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-emerald-500/10 rounded-full border-dashed"
              >
                <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full blur-[2px]" />
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-4xl font-bold tracking-tighter text-gradient"
                >
                  J
                </motion.span>
              </div>
            </div>

            {/* Progress Text */}
            <div className="flex flex-col items-center gap-2">
              <motion.div 
                className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                System Initializing
              </motion.div>
              
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-light tracking-tight text-white/90 tabular-nums">
                  {Math.round(progress)}
                </span>
                <span className="text-xl font-light text-white/20">%</span>
              </div>
            </div>

            {/* Progress Bar Container */}
            <div className="mt-12 w-64 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-emerald-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              />
            </div>
            
            <div className="mt-4 text-[10px] text-white/10 uppercase tracking-[0.2em]">
              Establishing 3D Neural Environment
            </div>
          </div>

          {/* Bottom attribution */}
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center opacity-20 transition-opacity hover:opacity-100">
             <div className="text-[10px] tracking-widest uppercase">Pioneering Digital Solutions</div>
             <div className="w-12 h-[1px] bg-white/30" />
             <div className="text-[10px] tracking-widest uppercase">Jancode © 2026</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
