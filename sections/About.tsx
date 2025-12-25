import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { aboutContent } from '../data/content';
import { ArrowRight, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-32 items-center py-10">
      
      {/* Image Section */}
      <motion.div 
        className="w-full lg:w-1/2 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group border border-border/10">
           <img 
              src={aboutContent.image} 
              alt="Felipe Ramos" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
           
           <div className="absolute bottom-8 left-8 right-8 p-6 bg-surface/40 backdrop-blur-xl rounded-2xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <ShieldCheck className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-bold tracking-wider">Focus</p>
                  <p className="text-text font-bold">Cybersecurity & Cross-platform</p>
                </div>
              </div>
           </div>
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8">
           <h3 className="text-primary font-mono text-sm tracking-widest uppercase mb-4">A Bit About Me</h3>
           <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-8 leading-tight">
             {aboutContent.headline}
           </h2>
           <p className="text-muted text-lg leading-relaxed mb-10 font-light">
             {aboutContent.description}
           </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {aboutContent.highlights.map((item, index) => (
              <div key={index} className="flex flex-col border-l-2 border-border/10 pl-4 hover:border-primary transition-colors py-2">
                  <span className="text-xs text-muted font-bold uppercase tracking-wider mb-1">{item.label}</span>
                  {item.href ? (
                       <a href={item.href} target="_blank" rel="noreferrer" className="text-text font-semibold hover:text-primary transition-colors flex items-center gap-2">
                          {item.value} <ExternalLink className="w-4 h-4 opacity-50" />
                       </a>
                  ) : (
                      <span className="text-text font-semibold">{item.value}</span>
                  )}
              </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-6">
          {aboutContent.cta.map((btn, idx) => (
              <a 
                  key={idx}
                  href={btn.href}
                  className={`
                      px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all text-sm
                      ${idx === 0 
                          ? 'bg-primary text-black shadow-lg shadow-primary/20 hover:shadow-primary/40' 
                          : 'bg-transparent border border-border/20 text-text hover:border-primary hover:text-primary'
                      }
                  `}
              >
                  {btn.label}
                  <ArrowRight className="w-5 h-5" />
              </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
