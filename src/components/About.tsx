'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { Code, Cpu, Database, Globe, Server, Target } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const expertise = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with modern frameworks like Next.js, React, and Node.js'
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      title: 'AI & Machine Learning',
      description: 'Developing intelligent systems using TensorFlow, PyTorch, and transformer models'
    },
    {
      icon: <Database className="w-6 h-6 text-green-500" />,
      title: 'Data Science',
      description: 'Extracting insights from complex datasets using Python, Pandas, and advanced analytics'
    },
    {
      icon: <Server className="w-6 h-6 text-amber-500" />,
      title: 'Cloud & DevOps',
      description: 'Deploying and managing applications with Docker, AWS, and CI/CD pipelines'
    }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black_70%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <Image
              src="/images/Anmol.webp"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            I'm a <span className="font-semibold text-primary">Full-Stack Developer</span> and <span className="font-semibold text-purple-500">AI/ML Engineer</span> passionate about solving complex problems through technology. 
            With expertise spanning web development, data science, and artificial intelligence, I bridge the gap between data and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.4 }}
              className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center text-foreground">
                <Target className="w-6 h-6 mr-2 text-primary" />
                My Mission
              </h3>
              <p className="text-foreground/90 mb-6 leading-relaxed">
                I specialize in creating data-driven solutions that deliver real business value. 
                My approach combines analytical thinking with technical expertise to build systems 
                that are not just functional, but intelligent and intuitive.
              </p>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="relative pl-6 border-l-2 border-primary/20 py-2"
                  >
                    <div className="absolute left-[-9px] top-3 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.6 }}
              className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center text-foreground">
                <Globe className="w-6 h-6 mr-2 text-primary" />
                Real-World Impact
              </h3>
              <p className="text-foreground/90 mb-6 leading-relaxed">
                I'm passionate about applying my skills to solve meaningful problems. Whether it's:
              </p>
              <ul className="space-y-4">
                {[
                  'Building end-to-end machine learning pipelines for predictive analytics',
                  'Developing responsive web applications with intuitive user interfaces',
                  'Optimizing data workflows for better decision-making',
                  'Creating scalable backend systems with modern architectures'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + (index * 0.1) }}
                    className="relative pl-6"
                  >
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "Technology should work for people, not the other way around. I build solutions that empower users and drive meaningful outcomes."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
