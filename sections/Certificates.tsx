import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { certificateList } from '../data/content';
import { Shield, Award, Laptop, Code2, Smartphone, Network } from 'lucide-react';

// Simple mapping for string icons to Lucide components
const IconMap: { [key: string]: any } = {
  'fa-certificate': Award,
  'fa-laptop-code': Laptop,
  'fa-shield-alt': Shield,
  'fab fa-android': Smartphone,
  'fa-network-wired': Network,
  'default': Code2
};

const Certificates = () => {
  return (
    <>
      <div className="mb-12">
        <p className="text-primary font-mono text-sm tracking-widest mb-2 uppercase">Achievements</p>
        <h2 className="text-4xl font-bold text-text">Certifications.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificateList.map((cert, index) => {
          const IconComponent = IconMap[cert.icon] || IconMap['default'];
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-card border border-border/10 hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_5px_20px_rgba(var(--primary),0.1)] h-full flex flex-col shadow-md dark:shadow-none"
            >
              <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center mb-4 border border-border/10 group-hover:border-primary transition-colors shrink-0">
                 <IconComponent className="w-6 h-6 text-text group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-lg font-bold text-text mb-2 leading-tight group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-xs font-mono text-secondary mb-3">
                {cert.issuer}
              </p>
              
              <p className="text-muted text-sm leading-relaxed flex-1">
                {cert.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, 'certificate');