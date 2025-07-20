'use client';

import { useEffect } from 'react';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Remove any existing theme classes
    document.documentElement.classList.remove('light', 'dark');
    // Add current theme class
    document.documentElement.classList.add(theme);
  }, [theme]);
  
  return <>{children}</>;
}
