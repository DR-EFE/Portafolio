import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { aboutContent } from '../data/content';
import { ArrowRight, User, Terminal } from 'lucide-react';

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left Side - Image Container */}
        <motion.div 
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 group">
                {/* Tech overlay */}
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                
                {/* Decorative borders */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary z-20" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-secondary z-20" />

                <img 
                    src={aboutContent.image} 
                    alt="Profile" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
             <Terminal className="text-primary w-5 h-5" />
             <span className="text-primary font-mono text-sm tracking-widest uppercase">About Me</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {aboutContent.headline}
          </h2>

          <p className="text-muted text-lg leading-relaxed mb-8">
            {aboutContent.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {aboutContent.highlights.map((item, index) => (
                <div key={index} className="flex flex-col p-3 bg-white/5 border border-white/5 rounded-lg hover:border-primary/30 transition-colors">
                    <span className="text-xs text-muted font-mono mb-1 uppercase">{item.label}</span>
                    {item.href ? (
                         <a href={item.href} target="_blank" rel="noreferrer" className="text-white font-medium hover:text-primary transition-colors truncate">
                            {item.value}
                         </a>
                    ) : (
                        <span className="text-white font-medium truncate">{item.value}</span>
                    )}
                </div>
            ))}
          </div>

          <div className="flex gap-4">
            {aboutContent.cta.map((btn, idx) => (
                <a 
                    key={idx}
                    href={btn.href}
                    className={`
                        px-6 py-3 rounded-md font-mono flex items-center gap-2 transition-all
                        ${idx === 0 
                            ? 'bg-primary text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]' 
                            : 'bg-transparent border border-white/20 text-white hover:border-white hover:bg-white/5'
                        }
                    `}
                >
                    {btn.label}
                    {idx === 0 && <ArrowRight className="w-4 h-4" />}
                </a>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
