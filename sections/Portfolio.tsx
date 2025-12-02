import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data/content';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // 3D Tilt Logic
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = (mouseY / height - 0.5) * 20 * -1; // Reverse for natural tilt
    const rY = (mouseX / width - 0.5) * 20;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full h-full perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: 'preserve-3d', transform }}
        className="relative bg-card rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors group h-full flex flex-col"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />

        {/* Image */}
        <div className="relative h-[220px] overflow-hidden w-full">
            <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay Links */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/60 backdrop-blur-sm">
                <a href={project.github} className="p-3 bg-surface rounded-full hover:bg-primary hover:text-black text-white transition-all transform hover:scale-110">
                    <Github className="w-5 h-5" />
                </a>
                <a href={project.link} className="p-3 bg-surface rounded-full hover:bg-primary hover:text-black text-white transition-all transform hover:scale-110">
                    <ExternalLink className="w-5 h-5" />
                </a>
            </div>
        </div>

        {/* Content */}
        <div className="p-6 relative z-10 bg-gradient-to-b from-transparent to-surface/90 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2 font-mono flex items-center gap-2">
                {project.title}
            </h3>
            <p className="text-muted text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
                {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-sm border border-primary/20">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-12"
      >
        <p className="text-primary font-mono text-sm tracking-widest mb-2 uppercase">My Work</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects.</h2>
        <p className="text-muted max-w-2xl text-[17px] leading-[30px]">
          Following projects showcases my skills and experience through real-world examples of my work. 
          Each project is briefly described with links to code repositories and live demos.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Portfolio, 'portfolio');