import type { Metadata } from 'next'

import { siteMetadata } from '@/config/site'

export const metadata: Metadata = {
  title: `Contact | ${siteMetadata.title}`,
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
