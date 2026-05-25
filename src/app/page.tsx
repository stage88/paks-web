import type { Metadata } from 'next'

import CtaBand from '@/components/cta-band'
import Hero from '@/components/hero'
import Services from '@/components/services'
import WhyUs from '@/components/why-us'
import { siteMetadata } from '@/config/site'

export const metadata: Metadata = {
  title: {
    absolute: 'PA & KS Contractors — Refurbishments & Maintenance, Canberra',
  },
  description: siteMetadata.description,
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <CtaBand />
    </>
  )
}
