import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { educationTimeline, experienceTimeline } from '../data/content';
import { GraduationCap, Briefcase } from 'lucide-react';
import { TimelineItem } from '../types';

const TimelineBlock = ({ title, icon: Icon, items }: { title: string, icon: any, items: TimelineItem[] }) => (
    <div className="flex-1">
        <div className="flex items-center gap-3 mb-8">
            <Icon className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        
        <div className="relative border-l border-white/10 ml-3 pl-8 py-2 space-y-12">
            {items.map((item, index) => (
                <motion.div 
                    key={index} 
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    {/* Dot */}
                    <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(0,243,255,0.2)]" />
                    
                    <span className="text-sm font-mono text-primary mb-1 block">{item.period}</span>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    <span className="text-sm text-muted/80 block mb-3 font-semibold">{item.place}</span>
                    <p className="text-muted leading-relaxed text-sm">
                        {item.description}
                    </p>
                </motion.div>
            ))}
        </div>
    </div>
);

const Qualification = () => {
  return (
    <>
      <div className="mb-12 text-center">
        <p className="text-primary font-mono text-sm tracking-widest mb-2 uppercase">My Journey</p>
        <h2 className="text-4xl font-bold text-white">Qualification</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-16 md:gap-8">
        <TimelineBlock title="Education" icon={GraduationCap} items={educationTimeline} />
        <TimelineBlock title="Experience" icon={Briefcase} items={experienceTimeline} />
      </div>
    </>
  );
};

export default SectionWrapper(Qualification, 'qualification');
