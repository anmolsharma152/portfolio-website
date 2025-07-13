import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import { Toaster } from '@/components/ui/Toaster';
import Navigation from '@/components/Navigation';
import './globals.css';
import type { Metadata } from 'next';

// Load Inter font with specific subsets
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Anmol Sharma | Portfolio',
  description: 'Portfolio of Anmol Sharma, Data Scientist and Machine Learning Engineer',
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#3b82f6',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3b82f6' },
    ],
  },
  other: {
    'msapplication-TileColor': '#3b82f6',
    'msapplication-config': '/browserconfig.xml',
  },
  metadataBase: new URL('https://anmolsharma.tech'),
  openGraph: {
    title: 'Anmol Sharma | Portfolio',
    description: 'Portfolio of Anmol Sharma, Data Scientist and Machine Learning Engineer',
    url: 'https://anmolsharma.tech',
    siteName: 'Anmol Sharma',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anmol Sharma | Portfolio',
    description: 'Portfolio of Anmol Sharma, Data Scientist and Machine Learning Engineer',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
