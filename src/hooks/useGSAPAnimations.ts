import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type GSAPElement = Element | Element[] | NodeListOf<Element> | HTMLCollection | null;

export const useGSAPAnimations = (): void => {
  useEffect(() => {
    // Hero section animations
    gsap.from('.hero-title', {
      duration: 0.5,
      y: 60,
      opacity: 0,
      ease: 'power2.out',
    });

    gsap.from('.hero-subtitle', {
      duration: 0.5,
      y: 30,
      opacity: 0,
      delay: 0.15,
      ease: 'power2.out',
    });

    // Section animations
    ScrollTrigger.batch('.section-animate', {
      start: 'top 80%',
      onEnter: (elements: GSAPElement) => {
        if (!elements) return;
        gsap.from(elements, {
          duration: 0.4,
          y: 30,
          opacity: 0,
          stagger: 0.1,
          ease: 'power2.out',
        });
      },
    });

    // Skill bar animations
    ScrollTrigger.batch('.skill-bar', {
      start: 'top 80%',
      onEnter: (elements: GSAPElement) => {
        if (!elements) return;
        gsap.from(elements, {
          duration: 0.5,
          width: 0,
          ease: 'power1.out',
          stagger: 0.05,
        });
      },
    });

    // Project card animations
    ScrollTrigger.batch('.project-card', {
      start: 'top 85%',
      onEnter: (elements: GSAPElement) => {
        if (!elements) return;
        gsap.from(elements, {
          duration: 0.3,
          y: 15,
          opacity: 0,
          stagger: 0.05,
          ease: 'power1.out',
        });
      },
    });

    return () => {
      // Cleanup ScrollTrigger instances
      if (typeof window !== 'undefined') {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger) {
            trigger.kill();
          }
        });
      }
    };
  }, []);
};

export default useGSAPAnimations;
