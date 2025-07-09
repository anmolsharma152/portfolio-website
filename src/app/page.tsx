import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });
const Resume = dynamic(() => import('@/components/Resume'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
};

export default Home;
