import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/content';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, toggleTheme, isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number]
      }
    }
  };

  const linkVariants = {
    closed: { x: -30, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const
      }
    })
  };

  return (
    <>
      <nav
        className={`w-full flex items-center py-5 fixed top-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/10 shadow-sm dark:shadow-none' : 'bg-transparent'
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group z-50 relative"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsOpen(false);
            }}
          >
            <div className="p-2 rounded-lg bg-surface/50 border border-border/20 group-hover:border-primary/50 transition-colors">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <p className="text-text text-[18px] font-bold cursor-pointer flex font-mono tracking-tighter">
              DEV <span className="text-primary hidden sm:block mx-2">|</span> PORTFOLIO
            </p>
          </a>

          {/* Right Actions */}
          <div className="flex items-center gap-4 z-50">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-surface/20 transition-colors text-text border border-transparent hover:border-border/20"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text focus:outline-none p-2 rounded-full hover:bg-surface/20 transition-colors group flex items-center gap-3 border border-transparent hover:border-border/20"
            >
              <span className="hidden md:block font-mono text-xs tracking-widest uppercase text-muted group-hover:text-text transition-colors">
                {isOpen ? 'Close' : 'Menu'}
              </span>
              <div className={`relative w-8 h-8 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-30 flex flex-col justify-center items-center text-center"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            <ul className="list-none flex flex-col gap-6 md:gap-8 items-center justify-center relative z-10 w-full">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  custom={index}
                  variants={linkVariants}
                  className="overflow-hidden"
                >
                  <a
                    href={`#${link.id}`}
                    className={`relative text-3xl md:text-5xl font-bold font-mono tracking-tighter hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 group ${
                      activeSection === link.id ? 'text-primary' : 'text-text'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-sm md:text-lg absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 text-muted opacity-0 group-hover:opacity-100 transition-opacity font-normal">
                      0{index + 1}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Menu Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 flex flex-col items-center gap-4"
            >
               <div className="h-10 w-[1px] bg-border/20" />
               <div className="flex gap-6 text-muted">
                  <a href="#" className="hover:text-primary transition-colors text-sm">GitHub</a>
                  <a href="#" className="hover:text-primary transition-colors text-sm">LinkedIn</a>
                  <a href="#" className="hover:text-primary transition-colors text-sm">Email</a>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;