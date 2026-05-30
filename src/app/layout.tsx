import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';
import JsonLd from '@/components/json-ld';
import { ThemeProvider } from '@/components/theme-provider';
import { siteMetadata } from '@/config/site';

import './globals.css';

// Runs before first paint to set the theme class on <html>, preventing a flash
// of the wrong theme. Mirrors ThemeProvider: stored 'dark'/'light' wins, 'system'
// follows the OS, and the default (no stored preference) is dark.
const themeInitScript = `(function(){try{var k='paks-ui-theme';var t=localStorage.getItem(k);var c=t==='light'||t==='dark'?t:t==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):'dark';document.documentElement.classList.add(c);}catch(e){}})();`;

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    type: 'website',
    locale: 'en_AU',
    images: [siteMetadata.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
  icons: {
    icon: siteMetadata.siteImage,
    apple: siteMetadata.siteImage,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0c2e60' },
    { media: '(prefers-color-scheme: dark)', color: '#0a1326' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en-AU' className={`${sans.variable} ${display.variable}`} suppressHydrationWarning>
      <body className='min-h-screen bg-surface text-foreground antialiased'>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <JsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}
