
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

// Define a common interface for tech icons to avoid type mismatches in different pos objects
interface TechIcon {
  name: string;
  url: string;
  pos: React.CSSProperties;
  delay: number;
}

const techIcons: TechIcon[] = [
  { name: 'Kotlin', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', pos: { top: '10%', left: '-10%' }, delay: 0 },
  { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', pos: { top: '60%', left: '-15%' }, delay: 1 },
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', pos: { top: '5%', right: '-10%' }, delay: 0.5 },
  { name: 'Android', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', pos: { top: '40%', right: '-18%' }, delay: 1.5 },
  { name: 'VS Code', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', pos: { bottom: '5%', right: '5%' }, delay: 2 },
  { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', pos: { bottom: '15%', left: '5%' }, delay: 0.8 },
];

// Use React.FC to correctly handle standard props and ensure type compatibility
const FloatingIcon: React.FC<{ icon: TechIcon, index: number }> = ({ icon, index }) => (
  <motion.div
    style={icon.pos}
    className="absolute z-20 w-12 h-12 md:w-16 md:h-16 p-3 bg-surface/40 backdrop-blur-md rounded-2xl border border-border/20 shadow-xl flex items-center justify-center group"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    animate={{
      y: [0, -15, 0],
      x: [0, 10, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{
      duration: 4 + index,
      repeat: Infinity,
      ease: "easeInOut",
      delay: icon.delay
    }}
  >
    <img 
      src={icon.url} 
      alt={icon.name} 
      referrerPolicy="no-referrer"
      className="w-full h-full object-contain filter drop-shadow-md transition-transform group-hover:scale-120" 
    />
    <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-primary font-bold uppercase tracking-widest bg-background/80 px-2 py-1 rounded border border-primary/20">
      {icon.name}
    </div>
  </motion.div>
);

const About = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-32 items-center py-10">
      
      {/* Image Section */}
      <motion.div 
        className="w-full lg:w-1/2 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl group border border-border/10">
           
           {/* Logos Flotantes */}
           {techIcons.map((icon, idx) => (
             <FloatingIcon key={icon.name} icon={icon} index={idx} />
           ))}

           {/* Main Image Container */}
           <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl z-10">
              <img 
                 src={t.aboutContent.image} 
                 alt="Felipe Ramos" 
                 referrerPolicy="no-referrer"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-surface/40 backdrop-blur-xl rounded-2xl border border-border/20 z-20">
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
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8">
           <h3 className="text-primary font-mono text-sm tracking-widest uppercase mb-4">{t.ui.aboutMe}</h3>
           <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-8 leading-tight">
             {t.aboutContent.headline}
           </h2>
           <p className="text-muted text-lg leading-relaxed mb-10 font-light">
             {t.aboutContent.description}
           </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {t.aboutContent.highlights.map((item, index) => (
              <div key={index} className="flex flex-col border-l-2 border-border/10 pl-4 hover:border-primary transition-colors py-2">
                  <span className="text-xs text-muted font-bold uppercase tracking-wider mb-1">{item.label}</span>
                  {item.href ? (
                       <a href={item.href} target="_blank" rel="noreferrer" className="text-text font-semibold hover:text-primary transition-colors flex items-center gap-2">
                          {item.value} <ExternalLink className="w-4 h-4 opacity-50" />
                       </a>
                  ) : (
                      <span className="text-text font-semibold">{item.value}</span>
                  )}
              </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-6">
          {t.aboutContent.cta.map((btn, idx) => (
              <a 
                  key={idx}
                  href={btn.href}
                  className={`
                      px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all text-sm
                      ${idx === 0 
                          ? 'bg-primary dark:text-black text-white shadow-lg shadow-primary/20 hover:shadow-primary/40' 
                          : 'bg-transparent border border-border/20 text-text hover:border-primary hover:text-primary'
                      }
                  `}
              >
                  {btn.label}
                  <ArrowRight className="w-5 h-5" />
              </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
