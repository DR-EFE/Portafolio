import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface IntroOverlayProps {
  onComplete: () => void;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('SYSTEM BOOT...');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 120);

    const timeouts = [
      setTimeout(() => setStatusText('FETCHING ASSETS...'), 1200),
      setTimeout(() => setStatusText('ESTABLISHING SECURE CONNECTION...'), 2400),
      setTimeout(() => setStatusText('READY'), 3600),
    ];

    return () => {
      clearInterval(interval);
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative flex flex-col items-center gap-12 w-full max-w-sm px-10">
        
        {/* Simple Professional Loader */}
        <div className="relative w-24 h-24 flex items-center justify-center">
            <motion.div 
                className="absolute inset-0 border-4 border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
                className="absolute inset-0 border-4 border-t-primary rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <div className="text-xl font-bold font-mono text-primary">
                {Math.min(progress, 100)}%
            </div>
        </div>

        <div className="w-full">
            <div className="flex justify-between items-end mb-4">
              <motion.span
                key={statusText}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary font-mono text-xs tracking-[0.3em] uppercase font-bold"
              >
                {statusText}
              </motion.span>
            </div>

            <div className="h-1 w-full bg-border/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
        </div>

        <div className="absolute -bottom-32 text-muted font-mono text-[10px] tracking-[0.5em] opacity-40 uppercase">
          Felipe Ramos // Portfolio v1.0
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
    </motion.div>
  );
};

export default IntroOverlay;
