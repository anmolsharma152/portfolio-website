import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAPAnimations = () => {
  useEffect(() => {
    // Hero section animations
    gsap.from('.hero-title', {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: 'power3.out'
    })

    gsap.from('.hero-subtitle', {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.3,
      ease: 'power3.out'
    })

    // Section animations
    ScrollTrigger.batch('.section-animate', {
      start: 'top 80%',
      onEnter: (elements) => {
        gsap.from(elements, {
          duration: 0.8,
          y: 50,
          opacity: 0,
          stagger: 0.2,
          ease: 'power3.out'
        })
      }
    })

    // Skill bar animations
    ScrollTrigger.batch('.skill-bar', {
      start: 'top 80%',
      onEnter: (elements) => {
        gsap.from(elements, {
          duration: 1,
          width: 0,
          ease: 'power2.out',
          stagger: 0.1
        })
      }
    })

    // Project card animations
    ScrollTrigger.batch('.project-card', {
      start: 'top 85%',
      onEnter: (elements) => {
        gsap.from(elements, {
          duration: 0.6,
          y: 30,
          opacity: 0,
          stagger: 0.1,
          ease: 'power2.out'
        })
      }
    })

    return () => {
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
}

export default useGSAPAnimations 