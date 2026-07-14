
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Image as ThreeImage } from '@react-three/drei';
import { Play, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import * as THREE from 'three';

// Removed broken JSX namespace augmentation which was shadowing standard HTML elements.
// Standard Three.js elements are automatically provided by @react-three/fiber when used inside <Canvas>.

interface HeroProps {
  onPlayVideo: (src: string) => void;
}

const Typewriter = ({ texts, delay = 100, pause = 2000 }: { texts: string[]; delay?: number; pause?: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [arrayIndex, setArrayIndex] = useState(0); 
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

// Use React.FC to ensure proper typing of component with standard props like 'key'
const FloatingToolIcon: React.FC<{ url: string, position: [number, number, number], speed: number }> = ({ url, position, speed }) => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      // Rotación suave individual
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5 * speed) * 0.2;
      // Pequeño movimiento orbital adicional
      ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * speed) * 0.1;
    }
  });

  return (
    <group ref={ref} position={position}>
      <Float speed={2 * speed} rotationIntensity={0.5} floatIntensity={1}>
        <ThreeImage 
          url={url} 
          transparent 
          opacity={0.7}
          scale={0.5}
        />
      </Float>
    </group>
  );
};

// Use React.FC for better JSX typing
const FloatingLogos: React.FC = () => {
  const tools = useMemo(() => [
    { name: 'VS Code', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Kotlin', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Android', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
  ], []);

  return (
    <group>
      {tools.map((tool, i) => {
        const angle = (i / tools.length) * Math.PI * 2;
        const radius = 2.8; // Radio alrededor de la esfera
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius * 0.5; // Elipse achatada para estética
        const z = Math.sin(angle) * radius;
        
        return (
          <FloatingToolIcon 
            key={tool.name} 
            url={tool.url} 
            position={[x, y, z]} 
            speed={0.5 + Math.random() * 0.5} 
          />
        );
      })}
    </group>
  );
};

// Use React.FC for better JSX typing
const TechSphere: React.FC = () => {
  const meshRef = useRef<any>(null);
  const computerGroupRef = useRef<any>(null);
  const screenRef = useRef<any>(null);
  const dataRingRef = useRef<any>(null);
  const { theme, isDarkMode } = useTheme();

  // Create a ref to store our lerping state (0 = light mode / computer, 1 = dark mode / tech sphere)
  const transitionRef = useRef<number>(isDarkMode ? 1 : 0);

  // We also create refs for parent groups to set scale directly for ultimate performance
  const darkGroupRef = useRef<any>(null);
  const lightGroupRef = useRef<any>(null);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    const target = isDarkMode ? 1 : 0;
    
    // Smooth transition/lerp factor (interpolating transitionRef.current towards target)
    transitionRef.current += (target - transitionRef.current) * 0.08;
    const t = transitionRef.current;

    // Apply scales and visibilities dynamically
    if (darkGroupRef.current) {
      darkGroupRef.current.scale.setScalar(t);
      darkGroupRef.current.visible = t > 0.005;
    }
    if (lightGroupRef.current) {
      lightGroupRef.current.scale.setScalar(1 - t);
      lightGroupRef.current.visible = (1 - t) > 0.005;
    }

    // Standard rotation/floating animation for Dark Mode Sphere
    if (meshRef.current && t > 0.005) {
      meshRef.current.rotation.x = elapsed * 0.2;
      meshRef.current.rotation.y = elapsed * 0.3;
    }

    // Standard rotation/floating animation for Light Mode Computer
    if (lightGroupRef.current && (1 - t) > 0.005) {
      // Slow float up and down
      lightGroupRef.current.position.y = -0.2 + Math.sin(elapsed * 1.5) * 0.15;
      
      if (computerGroupRef.current) {
        computerGroupRef.current.rotation.y = elapsed * 0.25;
      }
      if (dataRingRef.current) {
        dataRingRef.current.rotation.x = elapsed * 0.2;
        dataRingRef.current.rotation.y = elapsed * -0.4;
      }
    }
  });

  return (
    <group>
      {/* Dark Mode: Tech Sphere */}
      <group ref={darkGroupRef}>
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere args={[1, 100, 200]} scale={2} ref={meshRef}>
                <MeshDistortMaterial
                    color={theme.three.sphereColor}
                    attach="material"
                    distort={theme.three.distort}
                    speed={theme.three.speed}
                    roughness={theme.three.roughness}
                    metalness={theme.three.metalness}
                    wireframe
                />
            </Sphere>
        </Float>
      </group>

      {/* Light Mode: Cyber Retro Computer */}
      <group ref={lightGroupRef}>
        <group ref={computerGroupRef}>
          {/* Cyber Retro Computer Shell / Monitor Case */}
          <mesh position={[0, 0.4, 0]}>
            <boxGeometry args={[1.6, 1.2, 0.9]} />
            <meshStandardMaterial 
              color="#e9d5ff" // Purple 200 (warm, clean, high visibility)
              roughness={0.2}
              metalness={0.4}
            />
          </mesh>

          {/* Emissive Screen (with high-contrast, glowing neon violet/purple look) */}
          <mesh position={[0, 0.4, 0.46]} ref={screenRef}>
            <boxGeometry args={[1.4, 1.0, 0.02]} />
            <meshStandardMaterial 
              color="#c084fc" // Purple 400
              emissive="#7e22ce" // Purple 700
              emissiveIntensity={1.2}
              roughness={0.1}
            />
          </mesh>

          {/* Code/Grid pattern mock lines inside the screen (Retro Hacker Terminals) */}
          <group position={[0, 0.4, 0.48]}>
            {/* Terminal Top Bar */}
            <mesh position={[0, 0.35, 0]}>
              <boxGeometry args={[1.1, 0.05, 0.01]} />
              <meshBasicMaterial color="#fdf4ff" />
            </mesh>
            {/* Binary Code Block 1 */}
            <mesh position={[-0.3, 0.1, 0]}>
              <boxGeometry args={[0.5, 0.04, 0.01]} />
              <meshBasicMaterial color="#f3e8ff" />
            </mesh>
            {/* Binary Code Block 2 */}
            <mesh position={[0.2, 0.1, 0]}>
              <boxGeometry args={[0.4, 0.04, 0.01]} />
              <meshBasicMaterial color="#ebd5ff" />
            </mesh>
            {/* Cybersecurity Firewall Shield / Lock visual */}
            <mesh position={[0, -0.15, 0]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.25, 0.25, 0.01]} />
              <meshBasicMaterial color="#fdf4ff" />
            </mesh>
          </group>

          {/* Neck / Stand */}
          <mesh position={[0, -0.3, 0]}>
            <cylinderGeometry args={[0.15, 0.2, 0.4, 16]} />
            <meshStandardMaterial 
              color="#d8b4fe" // Purple 300
              roughness={0.3}
              metalness={0.5}
            />
          </mesh>

          {/* Slanted Keyboard & Computer Base */}
          <mesh position={[0, -0.55, 0.2]} rotation={[-0.15, 0, 0]}>
            <boxGeometry args={[1.8, 0.15, 1.2]} />
            <meshStandardMaterial 
              color="#e9d5ff" // Purple 200
              roughness={0.2}
              metalness={0.4}
            />
          </mesh>

          {/* Keybed details */}
          <mesh position={[0, -0.51, 0.3]} rotation={[-0.15, 0, 0]}>
            <boxGeometry args={[1.5, 0.04, 0.6]} />
            <meshStandardMaterial 
              color="#c084fc" // Purple 400
              roughness={0.4}
              metalness={0.2}
            />
          </mesh>

          {/* High-Tech Security Orbital Data Rings around the Retro Computer */}
          <group ref={dataRingRef} position={[0, 0.3, 0]}>
            {/* Horizontal Security Orbit */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[2.0, 0.02, 8, 64]} />
              <meshStandardMaterial color="#c084fc" emissive="#a855f7" emissiveIntensity={0.5} />
            </mesh>
            {/* Slanted Network Node Orbit */}
            <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
              <torusGeometry args={[2.3, 0.015, 8, 64]} />
              <meshStandardMaterial color="#a78bfa" emissive="#818cf8" emissiveIntensity={0.3} />
            </mesh>
          </group>
        </group>
      </group>

      <FloatingLogos />
    </group>
  );
};

const Hero: React.FC<HeroProps> = ({ onPlayVideo }) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const handleDownloadCV = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/cv/cv.pdf');
      if (!response.ok) throw new Error('Network response was not ok');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Felipe_Ramos_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CV:', error);
      window.open('/cv/cv.pdf', '_blank');
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-background" id="home">
      
      {/* 3D Background/Sidebar */}
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-100">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
          <ambientLight intensity={theme.three.ambientLightIntensity} />
          <pointLight position={[10, 10, 10]} intensity={theme.three.pointLightIntensity} color={theme.three.pointLightColor} />
          <directionalLight position={[2, 2, 5]} intensity={theme.three.directionalLightIntensity} />
          <group position={[1.8, 0, 0]}> {/* Offset to right on desktop */}
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
                
                <h1 className="text-5xl md:text-7xl font-bold text-text mb-6 leading-tight">
                    I am <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      {t.heroContent.name}
                    </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted mt-5 max-w-lg font-light h-[60px]">
                    <span className="text-primary mr-2">const role =</span>
                    <span className="font-mono text-text">
                         "<Typewriter texts={t.heroContent.typedRoles} />"
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
                    className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 px-8 py-3 rounded-sm font-mono transition-all duration-300 hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] uppercase"
                >
                    {t.ui.portfolio}
                </a>
                
                <a 
                    href="/cv/cv.pdf" 
                    onClick={handleDownloadCV}
                    className="bg-transparent hover:bg-text/5 text-text border border-text/20 px-8 py-3 rounded-sm font-mono transition-all duration-300 hover:border-text/50 uppercase flex items-center gap-2"
                >
                    <Download className="w-4 h-4" />
                    {t.ui.downloadCV}
                </a>

                {t.heroContent.video.url && (
                  <button 
                      onClick={() => onPlayVideo(t.heroContent.video.url)} 
                      className="flex items-center gap-4 group"
                  >
                      <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-text/20 group-hover:border-primary transition-colors">
                          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-100" />
                          <Play className="w-4 h-4 text-text group-hover:text-primary fill-current ml-1" />
                      </div>
                      <span className="text-muted group-hover:text-text transition-colors text-sm font-mono tracking-wider">
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
          <div className="w-[30px] h-[55px] rounded-3xl border-2 border-text/20 flex justify-center items-start p-2">
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
