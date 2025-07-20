'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      category: 'Web Development',
      items: [
        { name: 'React/Next.js', level: 85 },
        { name: 'Node.js/Express', level: 80 },
        { name: 'TypeScript/JavaScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'MongoDB/PostgreSQL', level: 80 },
      ],
    },
    {
      category: 'AI/ML',
      items: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Transformers', level: 80 },
        { name: 'OpenCV', level: 75 },
        { name: 'NLTK/spaCy', level: 85 },
      ],
    },
    {
      category: 'Data Science',
      items: [
        { name: 'Python', level: 90 },
        { name: 'Pandas/NumPy', level: 90 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'Data Visualization', level: 80 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      category: 'Tools & Frameworks',
      items: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'Linux/Unix', level: 90 },
        { name: 'AWS/GCP', level: 75 },
        { name: 'Neovim/Tmux', level: 85 },
      ],
    },
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

  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.05,
        duration: 0.5,
      },
    }),
  };

  const progressVariants: Variants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.3,
      },
    }),
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="gradient-text">Skills & Expertise</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise in data science, machine
            learning, and AI.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              variants={categoryVariants}
              custom={index}
              whileHover={{
                scale: 1.02,
                transition: {
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                },
              }}
              className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <motion.h3
                className="text-2xl font-bold mb-6 text-center"
                whileHover={{
                  color: 'var(--primary)',
                  transition: {
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
              >
                {category.category}
              </motion.h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    custom={skillIndex}
                    whileHover={{
                      x: 5,
                      transition: {
                        duration: 0.2,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <motion.span
                        className="text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 + skillIndex * 0.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                      <motion.div
                        custom={skill.level}
                        variants={progressVariants}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full relative"
                      >
                        <motion.div
                          className="absolute inset-0 bg-white opacity-20"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: [0.4, 0, 0.6, 1],
                            delay: 1 + skillIndex * 0.1,
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="mt-12 glass p-8 rounded-lg hover:shadow-lg transition-all duration-300"
        >
          <motion.h3
            className="text-2xl font-bold mb-6 text-center"
            whileHover={{ color: 'var(--primary)' }}
            transition={{ duration: 0.3 }}
          >
            Additional Expertise
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Statistical Analysis',
                description:
                  'Hypothesis testing, regression analysis, experimental design, and statistical modeling',
              },
              {
                title: 'Deep Learning',
                description:
                  'Neural networks, CNN, RNN, transformers, and computer vision applications',
              },
              {
                title: 'Big Data',
                description:
                  'Spark, Hadoop, distributed computing, and large-scale data processing',
              },
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                className="text-center p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <h4 className="font-semibold mb-3">{expertise.title}</h4>
                <p className="text-muted-foreground text-sm">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
