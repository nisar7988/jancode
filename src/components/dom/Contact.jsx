import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, scaleIn, staggerContainer } from '../../utils/animations';
import { Send, CheckCircle2, User, Mail, MessageSquare } from 'lucide-react';

const ContactInput = ({ label, icon: Icon, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full group">
      <div className="flex items-center gap-3 mb-2 px-1">
        <Icon className={`w-4 h-4 transition-colors duration-300 ${isFocused ? 'text-blue-400' : 'text-white/30'}`} />
        <span className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${isFocused ? 'text-blue-400' : 'text-white/50'}`}>
          {label}
        </span>
      </div>
      <div className="relative">
        {props.type === 'textarea' ? (
          <textarea
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300 min-h-[150px] resize-none"
          />
        ) : (
          <input
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
          />
        )}
        {/* Glow effect on focus */}
        <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 transition-opacity duration-300 -z-10 blur-[2px] ${isFocused ? 'opacity-30' : 'group-hover:opacity-10'}`} />
      </div>
    </div>
  );
};

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="relative w-full py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-20 text-balance">
            <motion.h2 
              variants={fadeUp}
              className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
            >
              Let's craft your <br/>
              <span className="text-gradient">digital legacy</span>
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto"
            >
              Have a visionary project in mind? We're ready to bring it to life through cutting-edge technology and design excellence.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Contact Info Sidebar */}
            <motion.div 
              variants={fadeUp}
              className="lg:col-span-2 space-y-8 h-full"
            >
              <div className="glass p-8 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] group-hover:bg-blue-500/20 transition-colors" />
                <h3 className="text-2xl font-bold text-white mb-8">Contact Info</h3>
                
                <div className="space-y-6">
                  {[
                    { label: 'Email us at', value: 'hello@jancode.com', icon: Mail },
                    { label: 'Call us', value: '+1 (555) 000-0000', icon: Send },
                    { label: 'Our Studio', value: 'Creative District, NY', icon: CheckCircle2 }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                        <item.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-white/10">
                  <p className="text-sm text-white/40 leading-relaxed">
                    Based in New York, serving clients globally. We typically respond within 24 hours.
                  </p>
                </div>
              </div>

              {/* Decorative Card */}
              <div className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden group min-h-[200px] flex items-end">
                 <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">
                    <p className="text-white font-bold text-lg mb-2">Join the revolution.</p>
                    <p className="text-white/60 text-sm">Follow our journey on social media.</p>
                 </div>
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-700" />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              variants={fadeUp}
              className="lg:col-span-3"
            >
              <div className="glass p-8 md:p-12 rounded-[2.5rem] relative">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      className="flex flex-col items-center justify-center py-20 text-center"
                    >
                      <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mb-8 border border-emerald-500/30">
                        <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                      <p className="text-white/50 max-w-sm">
                        Thank you for reaching out. A member of our team will contact you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ContactInput 
                          label="Your Name" 
                          icon={User} 
                          type="text" 
                          placeholder="John Doe" 
                          required 
                        />
                        <ContactInput 
                          label="Email Address" 
                          icon={Mail} 
                          type="email" 
                          placeholder="john@example.com" 
                          required 
                        />
                      </div>
                      
                      <ContactInput 
                        label="Subject" 
                        icon={Send} 
                        type="text" 
                        placeholder="Inquiry about new project" 
                        required 
                      />

                      <ContactInput 
                        label="Message" 
                        icon={MessageSquare} 
                        type="textarea" 
                        placeholder="Tell us about your project..." 
                        required 
                      />

                      <motion.button
                        disabled={status === 'sending'}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-6 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden ${
                          status === 'sending' ? 'bg-white/10 text-white/50 cursor-not-allowed' : 'bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]'
                        }`}
                      >
                        {status === 'sending' ? (
                          <div className="flex items-center gap-3">
                            <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            <span>Dispatching...</span>
                          </div>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
