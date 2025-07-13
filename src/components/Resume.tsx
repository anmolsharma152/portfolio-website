'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Download,
  Calendar,
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
} from 'lucide-react';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications'>(
    'experience'
  );

  const experience = [
    {
      title: 'Senior Data Scientist',
      company: 'AI Research Lab',
      period: '2021 - Present',
      location: 'Remote',
      description: 'Leading a team of data scientists in developing cutting-edge AI solutions. Specializing in natural language processing, computer vision, and deep learning. Published research papers and contributed to open-source AI projects.',
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'Transformers', 'NLP', 'Computer Vision', 'AWS', 'Docker']
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Tech Innovations Inc.',
      period: '2019 - 2021',
      location: 'San Francisco, CA',
      description: 'Developed and deployed machine learning models for various applications. Built scalable data pipelines and worked on model optimization. Collaborated with product teams to integrate AI features into existing products.',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Kubernetes', 'GCP', 'BigQuery']
    }
  ];

  const education = [
    {
      degree: 'M.S. in Artificial Intelligence',
      institution: 'Stanford University',
      period: '2018 - 2020',
      gpa: '3.9/4.0',
      description: 'Specialized in Machine Learning, Deep Learning, and Natural Language Processing. Thesis on "Advancements in Transformer Architectures for NLP"'
    },
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Indian Institute of Technology (IIT)',
      period: '2014 - 2018',
      gpa: '9.2/10',
      description: 'Focus on Algorithms, Data Structures, and Machine Learning. Graduated with Honors.'
    }
  ];

  const certifications = [
    {
      name: 'Deep Learning Specialization',
      issuer: 'deeplearning.ai',
      date: '2022',
      credential: 'View Credential',
      credentialUrl: '#'
    },
    {
      name: 'Machine Learning',
      issuer: 'Stanford University (Coursera)',
      date: '2021',
      credential: 'View Credential',
      credentialUrl: '#'
    },
    {
      name: 'Data Science Professional Certificate',
      issuer: 'IBM',
      date: '2020',
      credential: 'View Credential',
      credentialUrl: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Anmol_Sharma_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 relative z-10">
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
            <span className="gradient-text">Resume & Experience</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            My professional journey, education, and certifications in data science and AI.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 glass rounded-lg p-1">
            {[
              { id: 'experience', label: 'Experience', icon: Briefcase },
              { id: 'education', label: 'Education', icon: GraduationCap },
              { id: 'certifications', label: 'Certifications', icon: Award },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon size={16} />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary opacity-30" />

          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.2, duration: 0.8 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-6 top-4 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                  <motion.div
                    className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                        <p className="text-lg font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0">
                        <Calendar size={14} />
                        {exp.period}
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies &&
                        exp.technologies.map((tech: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.2, duration: 0.8 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-6 top-4 w-4 h-4 bg-secondary rounded-full border-4 border-background" />

                  <motion.div
                    className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-secondary">{edu.degree}</h3>
                        <p className="text-lg font-semibold">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0">
                        <Calendar size={14} />
                        {edu.period}
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.2, duration: 0.8 }}
                  className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{cert.name}</h3>
                      <p className="text-lg font-semibold">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                      <Calendar size={14} />
                      {cert.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
