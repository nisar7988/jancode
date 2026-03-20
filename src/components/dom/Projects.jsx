import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const projects = [
    {
      title: "Fintech Dashboard Pro",
      desc: "A high-performance real-time data visualization dashboard for crypto and institutional trading analytics.",
      tech: ["React", "Three.js", "WebSocket"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Elevate eCommerce",
      desc: "Headless eCommerce storefront handling 10k+ concurrent users with sub-second page loads worldwide.",
      tech: ["Next.js", "Shopify", "Motion"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Nexus OS Admin",
      desc: "A sprawling internal tool platform consolidating 5 legacy CRM systems into one modern, unified interface.",
      tech: ["Vue 3", "Node.js", "Docker"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
      color: "from-rose-600 to-orange-600"
    },
    {
      title: "Quantum Analytics",
      desc: "Enterprise-grade AI analytics platform providing predictive insights for supply chain optimization.",
      tech: ["Python", "TensorFlow", "React"],
      image: "https://images.unsplash.com/photo-1518186239717-2e9b1367ea9b?auto=format&fit=crop&q=80&w=1200",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Aura Smart Home",
      desc: "Unified IoT management system for luxury residential complexes with biometric security integration.",
      tech: ["React Native", "AWS", "MQTT"],
      image: "https://images.unsplash.com/photo-1558002038-103792e07927?auto=format&fit=crop&q=80&w=1200",
      color: "from-amber-500 to-orange-600"
    }
  ];

  useEffect(() => {
    let mm = gsap.matchMedia();

    // Horizontal scroll for desktop
    mm.add("(min-width: 768px)", () => {
      const horizontalLength = sectionRef.current.scrollWidth - window.innerWidth;
      
      const pin = gsap.to(sectionRef.current, {
        x: -horizontalLength,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${horizontalLength}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / (projects.length),
            duration: { min: 0.1, max: 0.3 },
            delay: 0,
            ease: "power1.inOut"
          }
        }
      });
      return () => pin.kill();
    });

    return () => mm.revert();
  }, [projects.length]);

  return (
    <div className="relative overflow-hidden bg-[#0A0C0F]">
      {/* Scroll Tracker Outer Container */}
      <div ref={triggerRef}>
        {/* Sticky viewport height section (Desktop) / Normal Section (Mobile) */}
        <section className="relative h-screen md:h-screen flex items-start md:items-center overflow-hidden md:overflow-visible">
          {/* Progress Indicator (Desktop only) */}
          <div className="absolute bottom-10 left-[10vw] right-[10vw] h-1 bg-white/10 rounded-full z-30 overflow-hidden hidden md:block">
            <motion.div 
              className="h-full bg-blue-500 rounded-full origin-left"
              style={{ 
                scaleX: useScroll({ 
                  target: triggerRef, 
                  offset: ["start start", "end end"] 
                }).scrollYProgress 
              }}
            />
          </div>

          {/* Background Text Decor */}
          <div className="absolute top-10 left-10 opacity-[0.03] select-none pointer-events-none hidden md:block">
            <h2 className="text-[20vw] font-black leading-none uppercase">Projects</h2>
          </div>

          <div className="container mx-auto px-6 mb-12 absolute top-[10%] md:top-[15%] left-0 z-20">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
             >
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-[1px] bg-blue-500"></span>
                  <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Portfolio</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
                  Selected Works
                </h2>
                <p className="text-white/40 text-sm md:text-base max-w-md hidden md:block">
                  A curated collection of digital experiences built with precision and passion.
                </p>
             </motion.div>
          </div>

          {/* Scrolling Container: Horizontal on Desktop, Vertical on Mobile */}
          <div 
            ref={sectionRef} 
            className="flex flex-col md:flex-row h-auto md:h-[70vh] items-start md:items-center gap-20 md:gap-12 px-6 md:px-[20vw] pt-[40vh] md:pt-0 relative z-10 will-change-transform"
          >
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}

            {/* End of section call to action */}
            <div className="flex-shrink-0 w-full md:w-[600px] h-auto md:h-full flex flex-col justify-center px-0 md:px-12 pb-32 md:pb-0">
               <h3 className="text-3xl md:text-6xl font-black text-white/20 mb-8 italic">
                 Your next big idea starts here.
               </h3>
               <motion.button
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-xl md:text-2xl font-bold text-blue-400 group"
               >
                  Let's Collaborate <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
               </motion.button>
            </div>
          </div>
        </section>
      </div>

      {/* Manual Snap Dots (Optional UX enhancement) */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30 pointer-events-none md:hidden">
        {projects.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-white/20"></div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="flex-shrink-0 w-full md:w-[550px] h-[50vh] md:h-full group perspective-1000"
    >
      <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 glass transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden">
        {/* Project Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0F] via-[#0A0C0F]/40 to-transparent opacity-90"></div>
          {/* Color Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-end">
          <div className="mb-4">
            <div className="flex gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white/80 border border-white/5">
                  {t}
                </span>
              ))}
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              {project.title}
            </h3>
            <p className="text-white/60 text-sm md:text-base mb-8 max-w-[90%] line-clamp-3 md:line-clamp-none">
              {project.desc}
            </p>
          </div>

          <motion.div 
            className="flex items-center gap-4 text-white font-bold group/btn"
            whileHover={{ x: 5 }}
          >
            <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md group-hover/btn:bg-blue-500 group-hover/btn:scale-110 transition-all duration-300">
              <ExternalLink className="w-5 h-5" />
            </span>
            <span className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
              View Case Study
            </span>
          </motion.div>
        </div>

        {/* Glossy Overlay Effect */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
    </motion.div>
  );
}
