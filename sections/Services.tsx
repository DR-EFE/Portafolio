import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { useLanguage } from '../context/LanguageContext';
import { Code, Smartphone, ShieldCheck, Database, Layout } from 'lucide-react';

const IconMap: { [key: string]: any } = {
    'fa-laptop-code': Code,
    'fab fa-android': Smartphone,
    'fa-shield-alt': ShieldCheck,
    'default': Layout
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Services = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="mb-12 text-center">
        <p className="text-primary font-mono text-sm tracking-widest mb-2 uppercase">{t.ui.my}</p>
        <h2 className="text-4xl font-bold text-text">{t.ui.services}</h2>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {t.services.map((service, index) => {
            const IconComponent = IconMap[service.icon] || IconMap['default'];

            return (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 shadow-lg dark:shadow-none"
                >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-primary dark:group-hover:text-black group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-text mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                    </h3>
                    
                    <p className="text-muted leading-relaxed text-sm">
                        {service.description}
                    </p>
                </motion.div>
            )
        })}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Services, 'service');