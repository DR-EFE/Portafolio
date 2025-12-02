import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float } from '@react-three/drei';

interface IntroOverlayProps {
  onComplete: () => void;
}

// 3D Object for the loader
const LoaderCore = () => {
  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={1}>
      <Icosahedron args={[1, 0]} scale={1.8}>
        <MeshDistortMaterial
          color="#00f3ff"
          wireframe
          transparent
          opacity={0.8}
          distort={0.3}
          speed={4}
        />
      </Icosahedron>
    </Float>
  );
};

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING...');

  useEffect(() => {
    // Progress bar simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment for "hacker" feel
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 100);

    // Text timeline
    const timeouts = [
      setTimeout(() => setStatusText('LOADING MODULES...'), 1000),
      setTimeout(() => setStatusText('ESTABLISHING CONNECTION...'), 2000),
      setTimeout(() => setStatusText('DECRYPTING DATA...'), 3000),
      setTimeout(() => setStatusText('ACCESS GRANTED'), 3800),
    ];

    return () => {
      clearInterval(interval);
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Small delay at 100% before closing
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* 3D Scene */}
      <div className="w-full h-[300px] mb-8">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <LoaderCore />
        </Canvas>
      </div>

      {/* Progress Container */}
      <div className="w-[300px] md:w-[400px] relative">
        <div className="flex justify-between items-end mb-2">
          <motion.span
            key={statusText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-mono text-sm tracking-widest uppercase animate-pulse"
          >
            {statusText}
          </motion.span>
          <span className="text-white font-mono text-xl font-bold">
            {Math.min(progress, 100)}%
          </span>
        </div>

        {/* Bar Background */}
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          {/* Bar Fill */}
          <motion.div
            className="h-full bg-primary shadow-[0_0_15px_rgba(0,243,255,0.8)]"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Decorative elements */}
        <div className="mt-2 flex justify-between text-[10px] text-muted font-mono opacity-50">
          <span>SYS_CHK: OK</span>
          <span>MEM: 64TB</span>
          <span>V.2.0.4</span>
        </div>
      </div>

      {/* Background Grids/Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.03]" />
      <div className="absolute bottom-10 text-white/20 font-mono text-xs tracking-[0.5em] animate-pulse">
        WAITING FOR USER INPUT
      </div>
    </motion.div>
  );
};

export default IntroOverlay;
