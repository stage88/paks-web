'use client'

import { motion } from 'motion/react'
import { Clock, Hammer, ShieldCheck, Wrench, type LucideIcon } from 'lucide-react'

interface Service {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

const services: Service[] = [
  {
    number: '01',
    title: 'Major & minor refurbishments',
    description:
      'Construction, commercial fit-outs and building refurbishment with long-standing relationships across aged care, child care, retail centres and the government sector.',
    icon: Hammer,
  },
  {
    number: '02',
    title: 'Maintenance, repairs & project management',
    description:
      'Commercial and domestic building work delivered by an in-house team of qualified tradesmen backed by trusted contractors — every project completed to the highest standard.',
    icon: Wrench,
  },
  {
    number: '03',
    title: 'Government & statutory authorities',
    description:
      'Extensive experience working alongside Government and Statutory Authorities ensures a smooth, compliant completion of every job we take on.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Compliant & 24/7 reactive',
    description:
      'WHS compliant with up-to-date Police Checks, WWVP Cards (ACT & NSW) and White Cards. Available 24/7 for reactive and emergency call-outs across the region.',
    icon: Clock,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-paper py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="font-display text-xs font-bold tracking-[0.2em] text-orange-brand uppercase">
            What we do
          </span>
          <h2 className="mt-3 font-display text-3xl leading-tight font-black tracking-tight text-balance text-navy-900 sm:text-4xl lg:text-5xl">
            Property work, end to end. One team, one point of contact.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            From small reactive jobs to full refurbishments, PA &amp; KS handles every step —
            quoting, trades coordination, compliance and clean handover.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 transition hover:-translate-y-1 hover:border-transparent hover:shadow-card sm:p-9"
            >
              <div className="absolute top-7 right-7 font-display text-5xl font-black text-navy-100 transition group-hover:text-orange-brand/30 sm:text-6xl">
                {service.number}
              </div>
              <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-orange-brand/10 text-orange-brand transition group-hover:bg-orange-brand group-hover:text-white">
                <service.icon className="size-7" aria-hidden />
              </span>
              <h3 className="mt-6 max-w-xs font-display text-xl leading-tight font-bold text-balance text-navy-900 sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
