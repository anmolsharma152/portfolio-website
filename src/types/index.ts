export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

import { LucideIcon } from 'lucide-react';

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  link: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}
