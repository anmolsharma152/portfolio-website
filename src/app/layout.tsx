'use client';

import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import { Toaster } from '@/components/ui/Toaster';
import Navigation from '@/components/Navigation';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './globals.css';

// Load Inter font with specific subsets
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className="flex items-center justify-center min-h-screen bg-background">
          <div className="w-12 h-12 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <Head>
        <title>Anmol Sharma | Portfolio</title>
        <meta name="description" content="Portfolio of Anmol Sharma, Data Scientist and Machine Learning Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
      </Head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <AnimatePresence mode="wait">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Toaster />
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
