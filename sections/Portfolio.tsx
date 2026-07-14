import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Github, Code, Lock, Smartphone } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

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
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

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
    y.set(0); // Keeping Y movement for simplified tilt
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const { language } = useLanguage();
  const isEs = language === 'es';
  const privateLabel = isEs ? 'Proyecto Privado' : 'Private Project';
  const appLabel = isEs ? 'Página de App' : 'App Page';

  return (
    <motion.div
      variants={itemVariants}
      className="relative w-full h-full perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: 'preserve-3d', transform }}
        className="relative bg-card rounded-xl overflow-hidden border border-border/10 hover:border-primary/50 transition-colors group h-full flex flex-col shadow-xl dark:shadow-none"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />

        {/* Image */}
        <div className="relative h-[220px] overflow-hidden w-full">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5">
                {project.isPrivate && (
                    <span className="flex items-center gap-1 text-[10px] font-mono uppercase bg-amber-500/95 text-black font-extrabold px-2 py-0.5 rounded border border-amber-400 shadow-md">
                        <Lock className="w-3 h-3" />
                        {privateLabel}
                    </span>
                )}
                {project.isAppDownload && (
                    <span className="flex items-center gap-1 text-[10px] font-mono uppercase bg-purple-500/95 text-white font-extrabold px-2 py-0.5 rounded border border-purple-400 shadow-md">
                        <Smartphone className="w-3 h-3" />
                        {appLabel}
                    </span>
                )}
            </div>

            {/* Overlay Links */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/80 backdrop-blur-sm p-4 text-center">
                {project.isPrivate ? (
                    <div className="flex flex-col items-center gap-1 text-white">
                        <div className="p-2 bg-white/10 rounded-full border border-white/20 mb-1">
                            <Lock className="w-5 h-5 text-amber-400" />
                        </div>
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-300">
                            {isEs ? 'Código y Demo Privados' : 'Code & Demo Private'}
                        </span>
                        <p className="text-[10px] text-white/70 max-w-[200px]">
                            {isEs ? 'Propiedad intelectual protegida y resguardada por el cliente.' : 'Protected intellectual property and codebase restricted by client.'}
                        </p>
                    </div>
                ) : (
                    <div className="flex items-center gap-4">
                        {project.github && project.github !== '#' && (
                            <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-3 bg-surface rounded-full hover:bg-primary dark:hover:text-black hover:text-white text-text transition-all transform hover:scale-110 flex items-center justify-center"
                                title={isEs ? 'Ver Código' : 'View Code'}
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        {project.link && project.link !== '#' && (
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-3 bg-surface rounded-full hover:bg-primary dark:hover:text-black hover:text-white text-text transition-all transform hover:scale-110 flex items-center justify-center"
                                title={project.isAppDownload ? (isEs ? 'Ver Página / Descarga' : 'View App Landing') : (isEs ? 'Ver Demo en Vivo' : 'View Live Demo')}
                            >
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>

        {/* Content */}
        <div className="p-6 relative z-10 bg-gradient-to-b from-transparent to-surface/90 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-text mb-2 font-mono flex items-center gap-2">
                {project.title}
            </h3>
            <p className="text-muted text-sm mb-4 leading-relaxed line-clamp-4 flex-1">
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
  const { t } = useLanguage();
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-12"
      >
        <p className="text-primary font-mono text-sm tracking-widest mb-2 uppercase">{t.ui.my} {t.ui.portfolio}</p>
        <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">Projects.</h2>
        <p className="text-muted max-w-2xl text-[17px] leading-[30px]">
          {t.ui.portfolioSubtitle}
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {t.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Portfolio, 'portfolio');