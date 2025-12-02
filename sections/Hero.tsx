import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Play } from 'lucide-react';
import { heroContent } from '../data/content';

// Augment JSX namespace for Three.js elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      directionalLight: any;
      group: any;
    }
  }
}

interface HeroProps {
  onPlayVideo: (src: string) => void;
}

const Typewriter = ({ texts, delay = 100, pause = 2000 }: { texts: string[]; delay?: number; pause?: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0); // Char index
  const [arrayIndex, setArrayIndex] = useState(0); // Word index
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = texts[arrayIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setArrayIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(currentFullText.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), pause);
          return;
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? delay / 2 : delay);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, arrayIndex, currentIndex, texts, delay, pause]);

  return <span>{currentText}<span className="animate-pulse">_</span></span>;
};

// 3D Component
const TechSphere = () => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
            <MeshDistortMaterial
                color="#00f3ff"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
                wireframe
            />
        </Sphere>
    </Float>
  );
};

const Hero: React.FC<HeroProps> = ({ onPlayVideo }) => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-background" id="home">
      
      {/* 3D Background/Sidebar */}
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-100">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <group position={[1.5, 0, 0]}> {/* Offset to right on desktop */}
             <TechSphere />
          </group>
        </Canvas>
      </div>

      <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto flex flex-col justify-center items-start px-6 z-10 pointer-events-none">
        
        {/* Content Container */}
        <div className="pointer-events-auto max-w-2xl">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-primary font-mono mb-4 tracking-wider text-lg">
                   &lt;Hello_World /&gt;
                </h2>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    I am <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      {heroContent.name}
                    </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted mt-5 max-w-lg font-light h-[60px]">
                    <span className="text-primary mr-2">const role =</span>
                    <span className="font-mono text-white">
                         "<Typewriter texts={heroContent.typedRoles} />"
                    </span>
                </p>
            </motion.div>

            <motion.div 
                className="mt-10 flex flex-wrap gap-6 items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <a 
                    href="#portfolio"
                    className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 px-8 py-3 rounded-sm font-mono transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                >
                    VIEW WORK
                </a>

                {heroContent.video.url && (
                  <button 
                      onClick={() => onPlayVideo(heroContent.video.url)} 
                      className="flex items-center gap-4 group"
                  >
                      <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 group-hover:border-primary transition-colors">
                          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-100" />
                          <Play className="w-4 h-4 text-white group-hover:text-primary fill-current ml-1" />
                      </div>
                      <span className="text-muted group-hover:text-white transition-colors text-sm font-mono tracking-wider">
                          INTRO_VIDEO
                      </span>
                  </button>
                )}
            </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[30px] h-[55px] rounded-3xl border-2 border-white/20 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-2 h-2 rounded-full bg-primary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;