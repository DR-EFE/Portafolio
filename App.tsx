import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import VideoModal from './components/VideoModal';
import ScrollIndicator from './components/ScrollIndicator';
import BackToTopButton from './components/BackToTopButton';
import IntroOverlay from './components/IntroOverlay';
import Hero from './sections/Hero';
import About from './sections/About';
import Qualification from './sections/Qualification';
import Certificates from './sections/Certificates';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Technologies from './sections/Technologies';
import Contact from './sections/Contact';
import { useScrollSpy } from './hooks/useScrollSpy';
import { navLinks } from './data/content';
import { Blog, Footer } from './sections/Placeholders';

const App = () => {
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds);
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; src: string }>({ isOpen: false, src: '' });
  const [showIntro, setShowIntro] = useState(true);
  
  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return true; // Default to dark
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Optional: Prevent scrolling while intro is visible
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showIntro]);

  const handlePlayVideo = (url: string) => {
    setVideoModal({ isOpen: true, src: url });
  };

  const handleCloseVideo = () => {
    setVideoModal({ isOpen: false, src: '' });
  };

  return (
    <div className="bg-background text-text selection:bg-primary/30 selection:text-white transition-colors duration-300">
      <AnimatePresence mode="wait">
        {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <Navbar activeSection={activeSection} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <VideoModal isOpen={videoModal.isOpen} videoSrc={videoModal.src} onClose={handleCloseVideo} />
      
      <main>
        <Hero onPlayVideo={handlePlayVideo} />
        <About />
        <Qualification />
        <Certificates />
        <Skills />
        <Services />
        <Portfolio />
        <Blog />
        <Technologies />
        <Contact />
      </main>
      
      <Footer />
      <ScrollIndicator />
      <BackToTopButton />
    </div>
  );
};

export default App;