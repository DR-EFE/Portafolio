import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

// Remaining placeholders
const PlaceholderContent = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[30vh] text-center">
    <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
    <p className="text-muted max-w-lg">
      This section is coming soon.
    </p>
  </div>
);

export const Blog = SectionWrapper(() => <PlaceholderContent title="Latest Articles" />, "blog");

export const Contact = SectionWrapper(() => (
    <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
         <p className="text-primary font-mono text-sm tracking-widest mb-2 uppercase">Get In Touch</p>
         <h2 className="text-4xl font-bold text-white mb-6">Contact Me</h2>
         <p className="text-muted max-w-lg mb-8">
            Currently available for freelance work and open to new opportunities. 
            If you have a question or just want to say hi, I'll try my best to get back to you!
         </p>
         <a href="mailto:felipe100rv@gmail.com" className="px-8 py-3 rounded-md bg-transparent border border-primary text-primary hover:bg-primary hover:text-black transition-all font-mono">
            Say Hello
         </a>
    </div>
), "contact");

export const Footer = () => (
    <footer className="w-full py-6 bg-black border-t border-white/10 text-center">
        <p className="text-muted font-mono text-sm">© {new Date().getFullYear()} Felipe Ramos. Crafted with React & Tailwind.</p>
    </footer>
);
