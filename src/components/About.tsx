'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { User, Award, Briefcase, GraduationCap } from 'lucide-react';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate developer with expertise in building modern web applications using the
            latest technologies and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <div className="relative w-full h-full">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                    <span className="text-white text-4xl font-bold">AS</span>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
              >
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  <span>3+ Years Experience</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <User className="w-6 h-6 mr-2 text-blue-500" />
                Who Am I?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I&apos;m a full-stack developer with a passion for creating beautiful and functional
                web applications. I love turning ideas into reality through clean, efficient code
                and intuitive user experiences.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.8 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-blue-500" />
                Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                With over 3 years of professional experience, I&apos;ve had the opportunity to work
                on a variety of projects, from small business websites to large-scale enterprise
                applications.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-500" />
                Education
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I hold a degree in Computer Science and am constantly learning new technologies and
                methodologies to stay current with industry trends.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
