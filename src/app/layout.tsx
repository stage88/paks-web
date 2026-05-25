import type { Metadata, Viewport } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'

import Footer from '@/components/footer'
import Header from '@/components/header'
import JsonLd from '@/components/json-ld'
import { siteMetadata } from '@/config/site'

import './globals.css'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const display = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['600', '700', '800', '900'],
})

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
}

export const viewport: Viewport = {
  themeColor: '#0c2e60',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  )
}
