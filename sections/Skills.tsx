import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { skills } from '../data/content';
import { 
  Database, 
  GitBranch, 
  Smartphone, 
  Code2, 
  Atom, 
  Coffee, 
  Layers, 
  Cpu
} from 'lucide-react';
import { Skill } from '../types';

// --- HELPER FUNCTIONS FOR SKILLS ---

const getSkillIcon = (label: string) => {
  const lowerLabel = label.toLowerCase();
  if (lowerLabel.includes('java') && !lowerLabel.includes('script')) return Coffee;
  if (lowerLabel.includes('kotlin') || lowerLabel.includes('android')) return Smartphone;
  if (lowerLabel.includes('git')) return GitBranch;
  if (lowerLabel.includes('html') || lowerLabel.includes('css')) return Layers;
  if (lowerLabel.includes('react') || lowerLabel.includes('php')) return Atom;
  if (lowerLabel.includes('database') || lowerLabel.includes('sql')) return Database;
  return Code2; // Default
};

const getColorHex = (twClass: string) => {
  if (twClass.includes('blue')) return '#3b82f6';
  if (twClass.includes('yellow')) return '#eab308';
  if (twClass.includes('gray')) return '#374151'; 
  if (twClass.includes('red')) return '#ef4444';
  if (twClass.includes('cyan')) return '#06b6d4';
  if (twClass.includes('green')) return '#22c55e';
  if (twClass.includes('primary')) return '#00f3ff';
  return '#00f3ff'; 
};

// --- DATA FOR TOOLS CAROUSEL ---

const tools = [
  { name: 'VS Code', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Android Studio', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
  { name: 'Supabase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'Firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Postman', src: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'IntelliJ', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
  { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
];

// --- COMPONENTS ---

const SkillHUD: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const Icon = getSkillIcon(skill.label);
  const color = getColorHex(skill.color);
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center justify-center group"
    >
      <div className="relative w-32 h-32 flex items-center justify-center mb-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-dashed border-black/10 dark:border-white/10 w-full h-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto rounded-full border-2 border-t-transparent border-b-transparent border-black/5 dark:border-white/5 w-[85%] h-[85%]"
        />
        <svg 
            className="absolute inset-0 w-full h-full transform -rotate-90 drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
            viewBox="0 0 128 128"
        >
          <circle cx="64" cy="64" r={radius} fill="transparent" stroke="rgba(128,128,128,0.1)" strokeWidth="6" />
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - (skill.value / 100) * circumference }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="drop-shadow-[0_0_4px_rgba(0,0,0,1)]"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className={`p-3 rounded-full bg-surface/50 backdrop-blur-sm border border-border/10 group-hover:border-${skill.color.split('-')[1]}-500/50 transition-colors duration-300 shadow-sm dark:shadow-none`}>
             <Icon className="w-6 h-6 text-text group-hover:text-primary transition-colors duration-300" />
          </div>
        </div>
        <div className="absolute -bottom-2 bg-surface border border-border/10 px-2 py-0.5 rounded text-[10px] font-mono text-primary shadow-lg z-20">
          {skill.value}%
        </div>
      </div>
      <h3 className="text-text font-medium text-center tracking-wide group-hover:text-primary transition-colors duration-300">
        {skill.label}
      </h3>
    </motion.div>
  );
};

const ToolsCarousel = () => {
  return (
    <div className="mt-24 w-full">
      <div className="text-center mb-10">
         <p className="text-muted text-sm font-mono tracking-widest uppercase mb-2">My Environment</p>
         <h3 className="text-2xl font-bold text-text">Tools & Technologies</h3>
      </div>

      {/* Inline styles for animation to ensure it works without tailwind config changes */}
      <style>
        {`
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 40s linear infinite;
          }
        `}
      </style>

      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] bg-black/5 dark:bg-white/5 border-y border-border/10 py-8">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {tools.map((tool, index) => (
            <li key={index} className="mx-8 group relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <img 
                src={tool.src} 
                alt={tool.name} 
                title={tool.name}
                className="relative h-14 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" 
              />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
          {tools.map((tool, index) => (
            <li key={`duplicate-${index}`} className="mx-8 group relative">
               <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
               <img 
                src={tool.src} 
                alt={tool.name} 
                title={tool.name}
                className="relative h-14 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" 
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <p className="text-primary font-mono text-sm tracking-widest mb-2 uppercase">My Arsenal</p>
        <h2 className="text-4xl font-bold text-text mb-6">Technical Skills</h2>
        <p className="text-muted">
            Proficiency in modern technologies and tools required for scalable application development.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center">
        {skills.map((skill, index) => (
          <SkillHUD key={index} skill={skill} index={index} />
        ))}
      </div>

      <ToolsCarousel />
    </>
  );
};

export default SectionWrapper(Skills, 'skill');