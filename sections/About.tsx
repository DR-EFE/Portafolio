import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { aboutContent } from '../data/content';
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import ShinyText from '../components/ShinyTextProps';

const About = () => {
  // 1. Definimos las variantes para los contenedores
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } // Un pequeño delay para el texto
    }
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-32 items-center py-10 overflow-hidden">
      
      {/* Image Section */}
      <motion.div 
        className="w-full lg:w-1/2 relative"
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Se activa cuando el 30% es visible
      >
        <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group border border-border/10">
           <img 
              src={aboutContent.image} 
              alt="Felipe Ramos" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
           
           <div className="absolute bottom-8 left-8 right-8 p-6 bg-surface/40 backdrop-blur-xl rounded-2xl border border-border/20 shadow-premium">
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
        
        {/* Decorative Circles con animación de pulso extra */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" 
        />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="w-full lg:w-1/2"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
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
              <motion.div 
                key={index} 
                whileHover={{ x: 5 }}
                className="flex flex-col border-l-2 border-border/20 pl-4 hover:border-primary transition-colors py-2"
              >
                  <span className="text-xs text-muted font-bold uppercase tracking-wider mb-1">{item.label}</span>
                  {item.href ? (
                       <a href={item.href} target="_blank" rel="noreferrer" className="text-text font-semibold hover:text-primary transition-colors flex items-center gap-2">
                          {item.value} <ExternalLink className="w-4 h-4 opacity-50" />
                       </a>
                  ) : (
                      <span className="text-text font-semibold">{item.value}</span>
                  )}
              </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-6">
          {aboutContent.cta.map((btn, idx) => (
              <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={idx}
                  href={btn.href}
                  className={`
                      px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all text-sm
                      ${idx === 0 
                          ? 'bg-primary text-white shadow-premium hover:shadow-premium-hover' 
                          : 'bg-transparent border border-border text-text hover:border-primary hover:text-primary'
                      }
                  `}
              >
                  {btn.label}
                  <ArrowRight className="w-5 h-5" />
              </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, 'about');