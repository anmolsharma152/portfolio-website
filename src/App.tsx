import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import GitHubStats from './components/GitHubStats'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import ParticleBackground from './components/ParticleBackground'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      setTheme(savedTheme)
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark')
    // Save theme to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      
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
  )
}

export default App 