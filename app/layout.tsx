import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const BASE_URL = 'https://nexusai-platform.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'NexusAI — AI-Driven Data Automation Platform',
    template: '%s | NexusAI',
  },
  description:
    'NexusAI transforms raw data into autonomous workflows using adaptive machine learning. Ship 10x faster with intelligent pipeline automation, real-time analytics, and enterprise-grade security.',
  keywords: [
    'AI automation',
    'data pipelines',
    'machine learning platform',
    'workflow automation',
    'enterprise AI',
    'data automation',
    'MLOps',
    'AI infrastructure',
  ],
  authors: [{ name: 'NexusAI Team' }],
  creator: 'NexusAI',
  publisher: 'NexusAI Inc.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'NexusAI',
    title: 'NexusAI — AI-Driven Data Automation Platform',
    description:
      'Automate intelligence. Accelerate everything. Transform raw data into autonomous workflows with NexusAI.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NexusAI — AI-Driven Data Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexusAI — AI-Driven Data Automation Platform',
    description:
      'Automate intelligence. Accelerate everything. NexusAI transforms raw data into autonomous workflows.',
    images: ['/og-image.png'],
    creator: '@nexusai',
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#172B36',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
