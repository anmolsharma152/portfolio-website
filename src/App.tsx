import { useState, useEffect } from 'react';

import About from './components/About';
import Contact from './components/Contact';
import GitHubStats from './components/GitHubStats';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    // Save theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Theme toggle function is available through the ThemeContext

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Full Viewport */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Resume Section */}
      <Resume />

      {/* GitHub Stats Section */}
      <GitHubStats />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;
