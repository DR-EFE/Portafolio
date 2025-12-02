import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { services } from '../data/content';
import { Code, Smartphone, ShieldCheck, Database, Layout } from 'lucide-react';

const IconMap: { [key: string]: any } = {
    'fa-laptop-code': Code,
    'fab fa-android': Smartphone,
    'fa-shield-alt': ShieldCheck,
    'default': Layout
};

const Services = () => {
  return (
    <>
      <div className="mb-12 text-center">
        <p className="text-primary font-mono text-sm tracking-widest mb-2 uppercase">What I Do</p>
        <h2 className="text-4xl font-bold text-white">Services</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => {
            const IconComponent = IconMap[service.icon] || IconMap['default'];

            return (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2"
                >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-primary group-hover:text-black transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                    </h3>
                    
                    <p className="text-muted leading-relaxed text-sm">
                        {service.description}
                    </p>
                </motion.div>
            )
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Services, 'service');
