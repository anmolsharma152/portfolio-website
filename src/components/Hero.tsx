'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [titles] = useState([
    'Data Scientist',
    'AI Specialist',
    'ML Engineer',
    'Web Developer',
    'Software Engineer',
    'Data Analyst',
  ]);

  const typingSpeed = 50;
  const deletingSpeed = 25;
  const pauseTime = 1000; // Time to pause when full text is shown

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
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, isTyping, currentTitleIndex, titles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navHeight = 80; // Approximate navigation height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative z-10 bg-background"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Content */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="gradient-text">Anmol Sharma</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl mb-8 h-8 font-medium"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="gradient-text">
              {text}
              <motion.span
                className={`inline-block w-0.5 h-6 ml-1 bg-gradient-to-b from-blue-500 to-purple-600 ${isTyping ? 'animate-pulse' : ''}`}
                animate={{ opacity: isTyping ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              />
            </span>
          </motion.div>

          <motion.p
            className="text-lg max-w-2xl mx-auto mb-12 text-muted"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Transforming data into actionable insights through advanced machine learning and
            artificial intelligence solutions.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
            onClick={() => scrollToSection('#contact')}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              📧
            </motion.span>
            Get In Touch
          </motion.button>

          <motion.button
            className="px-8 py-3 glass text-foreground rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-opacity-20 transition-all duration-300"
            onClick={() => scrollToSection('#projects')}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              📚
            </motion.span>
            View Projects
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-20"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full opacity-20"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-500 rounded-full opacity-20"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-500 rounded-full opacity-30"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-yellow-500 rounded-full opacity-20"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.75 }}
      />
    </section>
  );
};

export default Hero;
