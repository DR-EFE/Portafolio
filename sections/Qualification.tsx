import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { educationTimeline, experienceTimeline } from '../data/content';
import { GraduationCap, Briefcase } from 'lucide-react';
import { TimelineItem } from '../types';

const TimelineBlock = ({ title, icon: Icon, items }: { title: string, icon: any, items: TimelineItem[] }) => (
    <div className="flex-1">
        <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-text uppercase tracking-tight">{title}</h3>
        </div>
        
        <div className="relative border-l border-border/30 ml-6 pl-10 py-2 space-y-16">
            {items.map((item, index) => (
                <motion.div 
                    key={index} 
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    {/* Indicador visual circular */}
                    <div className="absolute -left-[51px] top-1.5 w-5 h-5 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-all duration-300 shadow-sm" />
                    
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-primary mb-2 block uppercase tracking-widest">{item.period}</span>
                        <h4 className="text-xl font-bold text-text mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                        <span className="text-sm text-muted font-semibold mb-4">{item.place}</span>
                        <p className="text-muted/90 leading-relaxed text-sm max-w-md border-l-2 border-transparent group-hover:border-primary/20 pl-4 transition-all">
                            {item.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

const Qualification = () => {
  return (
    <>
      <div className="mb-20 text-center">
        <p className="text-primary font-mono text-xs tracking-[0.5em] mb-4 uppercase">Timeline</p>
        <h2 className="text-4xl md:text-5xl font-bold text-text tracking-tight">Experience & Education</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-20 lg:gap-12">
        <TimelineBlock title="Academic" icon={GraduationCap} items={educationTimeline} />
        <TimelineBlock title="Professional" icon={Briefcase} items={experienceTimeline} />
      </div>
    </>
  );
};

export default SectionWrapper(Qualification, 'qualification');