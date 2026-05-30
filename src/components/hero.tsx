'use client';

import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

import { siteMetadata } from '@/config/site';

const phoneHref = `tel:${siteMetadata.phone.replace(/\s/g, '')}`;

export default function Hero() {
  return (
    <section className='relative isolate overflow-hidden bg-navy-900 text-white'>
      <div
        className="absolute inset-0 -z-10 bg-[url('/paks-images/PAKS-Front.jpeg')] bg-cover bg-position-[50%_30%]"
        aria-hidden
      />
      <div
        className='absolute inset-0 -z-10 bg-linear-to-br from-navy-900/95 via-navy-800/80 to-navy-900/40 lg:from-navy-900/95 lg:via-navy-900/70 lg:to-transparent'
        aria-hidden
      />
      <div
        className='absolute inset-y-0 right-0 -z-10 hidden w-1/3 bg-linear-to-l from-orange-brand/10 to-transparent lg:block'
        aria-hidden
      />

      <div className='mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-28 lg:px-10 lg:pt-44 lg:pb-36'>
        <div className='max-w-3xl'>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='inline-flex items-center gap-2 rounded-full border border-orange-brand/40 bg-orange-brand/10 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-orange-soft uppercase'>
            <span className='size-1.5 rounded-full bg-orange-brand' />
            Canberra · Queanbeyan · Yass · Surrounds
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='mt-6 font-display text-4xl leading-[1.05] font-black tracking-tight text-balance sm:text-6xl lg:text-7xl'>
            Canberra&apos;s trusted <span className='text-orange-brand'>property contractors</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mt-6 max-w-2xl text-base/relaxed text-white/80 sm:text-lg lg:text-xl'>
            Refurbishments, maintenance and project management — delivered with the care of a
            family-owned business and the muscle of an in-house team of qualified tradies. Done
            right, on time, across the ACT and surrounding NSW.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mt-10 flex flex-col gap-3 sm:flex-row sm:items-center'>
            <a
              href={`mailto:${siteMetadata.email}?subject=Quote%20request`}
              className='group inline-flex items-center justify-center gap-2 rounded-full bg-orange-brand px-7 py-4 text-base font-bold text-white shadow-cta transition hover:bg-orange-brand-hover'>
              Get a quote
              <ArrowRight className='size-5 transition group-hover:translate-x-0.5' aria-hidden />
            </a>
            <a
              href={phoneHref}
              className='inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/10'>
              <Phone className='size-5' aria-hidden />
              {siteMetadata.phoneOwner} — {siteMetadata.phone}
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:mt-20 sm:grid-cols-3'>
            {[
              { label: 'Years in Canberra', value: '20+' },
              { label: 'Reactive service', value: '24 / 7' },
              { label: 'In-house trades', value: 'Qualified' },
            ].map(stat => (
              <div key={stat.label}>
                <dt className='text-xs font-semibold tracking-widest text-white/60 uppercase'>
                  {stat.label}
                </dt>
                <dd className='mt-1 font-display text-2xl font-black text-white sm:text-3xl'>
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
