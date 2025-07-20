'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ThreeDCard from './3DCard';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  const titles = [
    'Creative Technologist',
    'ML & NLP Practitioner',
    'Linux Enthusiast',
    'Open Source Contributor',
    'AI/ML Developer',
    'Data Analyst',
    'Data Engineer',
    'Data Scientist'
  ];

  const typingSpeed = 50;
  const deletingSpeed = 25;
  const pauseTime = 1000;

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (isTyping) {
      if (currentIndex < currentTitle.length) {
        const timeout = setTimeout(() => {
          setText(currentTitle.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentIndex > 0) {
        const timeout = setTimeout(() => {
          setText(currentTitle.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, isTyping, currentTitleIndex, titles]);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isTyping) {
      if (currentIndex < currentTitle.length) {
        const timeout = setTimeout(() => {
          setText(currentTitle.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentIndex > 0) {
        const timeout = setTimeout(() => {
          setText(currentTitle.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, isTyping, currentTitleIndex, titles]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-x-hidden bg-background py-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black_70%)]" />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 xl:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="overflow-x-visible">
                <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 whitespace-nowrap">
                  Hi, I'm Anmol Sharma
                </h1>
              </div>
              
              <div className="h-16 flex items-center justify-center lg:justify-start mb-6">
                <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                  {text}
                  <span className={`inline-block w-1 h-8 ml-2 bg-primary ${isTyping ? 'animate-pulse' : ''}`} />
                </h2>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                Building human-centered technology with a liberal arts perspective
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-blue-500/20"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border border-muted-foreground/30 text-foreground rounded-md font-medium hover:bg-muted/50 transition-colors"
                >
                  View My Work
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-[400px] max-w-2xl mx-auto w-full"
          >
            <ThreeDCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
