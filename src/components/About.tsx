'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ElementRef } from 'react';
import { User, Award, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Projects Completed', value: '20+' },
    { icon: User, label: 'Technologies', value: '15+' },
    { icon: GraduationCap, label: 'Certifications', value: '5' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const statVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: index * 0.05,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="gradient-text">About Me</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I am a passionate Data Scientist and AI Specialist with a strong background in building
            intelligent systems, data-driven solutions, and modern web applications. I enjoy solving
            complex problems and transforming data into actionable insights.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left Column - Image/Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Image Placeholder */}
            <motion.div
              className="relative"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img 
                  src="/images/profile.jpg" 
                  alt="Anmol Sharma" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"><text x="50%" y="55%" font-size="40" fill="white" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-weight="bold">AS</text></svg>';
                  }}
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <span className="text-white font-bold">AI</span>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  custom={index}
                  variants={statVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { 
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1] 
                    },
                  }}
                  className="text-center p-4 glass rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ 
                      rotate: 360,
                      transition: { 
                        duration: 0.6,
                        ease: [0.4, 0, 0.2, 1] 
                      } 
                    }}
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  </motion.div>
                  <motion.div
                    className="text-2xl font-bold gradient-text"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ 
                      delay: 0.3 + index * 0.05, 
                      duration: 0.25,
                      ease: [0.4, 0, 0.2, 1] 
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div 
              whileHover={{ 
                x: 10,
                transition: { 
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1] 
                } 
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am a passionate Data Scientist and AI Specialist with expertise in machine
                learning, deep learning, and data analysis. With a strong foundation in mathematics
                and computer science, I specialize in developing cutting-edge AI solutions that solve
                complex real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey in AI/ML has been driven by curiosity and a desire to push the boundaries
                of what's possible. I have hands-on experience with state-of-the-art techniques in
                natural language processing, computer vision, and deep learning, and I'm constantly
                exploring new research and technologies in the field.
              </p>
            </motion.div>

            <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <div className="space-y-3">
                {[
                  'Develop and deploy state-of-the-art machine learning models for real-world applications',
                  'Design and implement scalable data pipelines and ETL processes',
                  'Create interactive dashboards and data visualizations to communicate insights',
                  'Build and optimize deep learning models for computer vision and NLP tasks',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      delay: 0.6 + index * 0.1, 
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1] 
                    }}
                    whileHover={{ 
                      x: 5,
                      transition: { 
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1] 
                      } 
                    }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <p className="text-muted-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
              <h3 className="text-2xl font-bold mb-4">My Approach</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I believe in a research-driven approach to problem-solving, combining cutting-edge
                techniques with practical implementation. My methodology focuses on:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Understanding the problem domain deeply before proposing solutions</li>
                <li>Iterative development with continuous feedback and improvement</li>
                <li>Writing clean, maintainable, and well-documented code</li>
                <li>Staying updated with the latest advancements in AI and machine learning</li>
                <li>Focusing on creating scalable and efficient solutions</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
