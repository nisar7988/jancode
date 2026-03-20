import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      targetPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    let frameId;
    const update = () => {
      mousePos.current.x += (targetPos.current.x - mousePos.current.x) * 0.15;
      mousePos.current.y += (targetPos.current.y - mousePos.current.y) * 0.15;

      container.style.setProperty("--mouse-x", `${mousePos.current.x}px`);
      container.style.setProperty("--mouse-y", `${mousePos.current.y}px`);

      frameId = requestAnimationFrame(update);
    };

    update();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer
      ref={containerRef}
      className="w-full bg-[#0A0C0F]/95 relative pt-24 pb-10 overflow-hidden"
    >
      {/* ================= BIG TEXT (SEPARATE SECTION) ================= */}
      <div className="w-full mb-20 select-none pointer-events-none relative">
        <h2
          className={`text-[18vw] font-black leading-none text-center uppercase transition-opacity duration-1000 ${
            isHovering ? "opacity-100" : "opacity-30"
          }`}
          style={{
            fontFamily: "'Outfit', sans-serif",
            WebkitTextStroke: "1px rgba(255,255,255,0.08)",
            color: "transparent",
            backgroundImage: `radial-gradient(circle 150px at var(--mouse-x) var(--mouse-y),
              #3b82f6 0%,
              #0114a3ff 30%,
              transparent 100%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          JANCODE
        </h2>
      </div>

      {/* ================= FOOTER CONTENT ================= */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
              <span className="text-2xl font-black text-white uppercase tracking-widest">
                Jancode
              </span>
            </div>
            <p className="text-white/50 text-sm max-w-sm">
              Architecting high-performance digital solutions with a focus on
              aesthetic precision and technical excellence.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 lg:col-start-7"
          >
            <h4 className="text-white/40 text-sm uppercase mb-6">Services</h4>
            <div className="flex flex-col gap-4">
              {["Custom Software", "Cloud", "Design", "AI"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white/40 hover:text-white text-sm transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-white/40 text-sm uppercase mb-6">Company</h4>
            <div className="flex flex-col gap-4">
              {["Projects", "Mission", "Careers", "Contact"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white/40 hover:text-white text-sm transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-white/40 text-sm uppercase mb-6">Contact</h4>
            <a
              href="mailto:hello@jancode.dev"
              className="text-white text-lg border-b border-white/20 hover:border-white"
            >
              hello@jancode.dev
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs uppercase tracking-widest">
          <span>© {new Date().getFullYear()} Jancode</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
