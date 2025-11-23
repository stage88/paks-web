import type { Metadata } from 'next'

import Footer from '@/components/footer'
import Header from '@/components/header'
import { siteMetadata } from '@/config/site'

import '../sass/style.scss'
import Head from '@/components/head'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    type: 'website',
  },
}

const vendorCss = [
  '/css/bootstrap.min.css',
  '/css/animate.css',
  '/css/themify-icons.css',
  '/css/flaticon.css',
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Head />
        {vendorCss.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>
        <Header title={siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
