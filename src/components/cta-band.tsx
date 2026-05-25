'use client'

import { motion } from 'motion/react'
import { ArrowRight, Phone } from 'lucide-react'

import { siteMetadata } from '@/config/site'

const phoneHref = `tel:${siteMetadata.phone.replace(/\s/g, '')}`

export default function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-orange-brand p-8 sm:rounded-4xl sm:p-14 lg:p-20"
        >
          <div
            className="absolute -top-24 -right-24 size-80 rounded-full bg-white/15 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-20 -left-20 size-64 rounded-full bg-navy-900/20 blur-3xl"
            aria-hidden
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="font-display text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
                Got a project?
              </span>
              <h2 className="mt-3 font-display text-3xl leading-tight font-black tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
                Need work done? Talk to Paul.
              </h2>
              <p className="mt-4 text-base text-white/90 sm:text-lg">
                Quick chat, honest quote. From a leaky tap in Googong to a full fit-out in Civic —
                we&apos;ll work out the right approach with you.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-4 text-base font-bold text-white shadow-xl transition hover:bg-navy-800"
              >
                <Phone className="size-5" aria-hidden />
                {siteMetadata.phone}
              </a>
              <a
                href={`mailto:${siteMetadata.email}?subject=Quote%20request`}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-navy-900 shadow-xl transition hover:bg-white/95"
              >
                Email a quote
                <ArrowRight className="size-5 transition group-hover:translate-x-0.5" aria-hidden />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
