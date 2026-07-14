import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { useLanguage } from '../context/LanguageContext';

// Remaining placeholders
const PlaceholderContent = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[30vh] text-center">
    <h2 className="text-3xl font-bold text-text mb-4">{title}</h2>
    <p className="text-muted max-w-lg">
      This section is coming soon.
    </p>
  </div>
);

export const Blog = SectionWrapper(() => <PlaceholderContent title="Latest Articles" />, "blog");

export const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="w-full py-6 bg-surface border-t border-border/10 text-center">
            <p className="text-muted font-mono text-sm">© {new Date().getFullYear()} Felipe Ramos. {t.ui.rights}</p>
        </footer>
    );
};
