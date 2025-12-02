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
import { useScrollSpy } from './hooks/useScrollSpy';
import { navLinks } from './data/content';
import { Blog, Contact, Footer } from './sections/Placeholders';

const App = () => {
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds);
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; src: string }>({ isOpen: false, src: '' });
  const [showIntro, setShowIntro] = useState(true);

  // Optional: Prevent scrolling while intro is visible
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showIntro]);

  const handleOpenVideo = (src: string) => {
    setVideoModal({ isOpen: true, src });
  };

  const handleCloseVideo = () => {
    setVideoModal({ isOpen: false, src: '' });
  };

  return (
    <div className="bg-background text-text selection:bg-primary/30 selection:text-white">
      <AnimatePresence mode="wait">
        {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <Navbar activeSection={activeSection} />
      <VideoModal isOpen={videoModal.isOpen} videoSrc={videoModal.src} onClose={handleCloseVideo} />
      
      <main>
        <Hero onPlayVideo={handleOpenVideo} />
        <About />
        <Qualification />
        <Certificates />
        <Skills />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
      <ScrollIndicator />
      <BackToTopButton />
    </div>
  );
};

export default App;
