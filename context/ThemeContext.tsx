import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { ThemeTokens } from '../theme/types';
import { lightTheme } from '../theme/lightTheme';
import { darkTheme } from '../theme/darkTheme';

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: ThemeTokens;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default to dark mode
  });

  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const html = document.documentElement;
    
    // Toggle dark class
    if (isDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Dynamically inject the CSS Custom Properties from the central theme configuration
    html.style.setProperty('--background', theme.background.rgb);
    html.style.setProperty('--surface', theme.surface.rgb);
    html.style.setProperty('--card', theme.card.rgb);
    html.style.setProperty('--primary', theme.primary.rgb);
    html.style.setProperty('--secondary', theme.secondary.rgb);
    html.style.setProperty('--text', theme.text.rgb);
    html.style.setProperty('--muted', theme.muted.rgb);
    html.style.setProperty('--border', theme.border.rgb);
  }, [isDarkMode, theme]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
