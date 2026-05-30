'use client';

import { motion } from 'motion/react';
import { Award, HeartHandshake, ShieldCheck, Users } from 'lucide-react';

const points = [
  {
    icon: HeartHandshake,
    title: 'Family-owned',
    description:
      'Run by Paul & Kirsty Saunderson — the same people who answer the phone do the walk-throughs.',
  },
  {
    icon: Users,
    title: 'In-house trades',
    description:
      'A qualified team backed by long-trusted contractors. No subletting your job to strangers.',
  },
  {
    icon: ShieldCheck,
    title: 'WHS compliant',
    description: 'Police Checks, WWVP Cards (ACT & NSW) and White Cards — current and audited.',
  },
  {
    icon: Award,
    title: 'Track record',
    description:
      'Long-standing relationships with aged care, child care, retail centres and government.',
  },
];

export default function WhyUs() {
  return (
    <section className='relative overflow-hidden bg-navy-900 py-20 text-white sm:py-28'>
      <div className='pointer-events-none absolute inset-0' aria-hidden>
        <div className='relative mx-auto h-full max-w-7xl'>
          <div className='absolute -bottom-16 -left-12 size-96 rounded-full bg-navy-500/15 blur-3xl' />
        </div>
      </div>

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
        <div className='max-w-2xl'>
          <span className='font-display text-xs font-bold tracking-[0.2em] text-orange-soft uppercase'>
            Why PA &amp; KS
          </span>
          <h2 className='mt-3 font-display text-3xl/tight font-black tracking-tight text-balance sm:text-4xl lg:text-5xl'>
            Relationships that last longer than the build.
          </h2>
          <p className='mt-5 text-base/relaxed text-white/75 sm:text-lg'>
            Working alongside our clients, PA &amp; KS Contractors act as a one-stop shop — safe,
            compliant and cost-effective. We&apos;ve built strong, ongoing relationships across the
            ACT and surrounding NSW because we treat every job like our reputation depends on it.
          </p>
        </div>

        <div className='mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6'>
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className='rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-orange-brand/50 hover:bg-white/8'>
              <span className='inline-flex size-12 items-center justify-center rounded-xl bg-orange-brand/15 text-orange-soft'>
                <point.icon className='size-6' aria-hidden />
              </span>
              <h3 className='mt-5 font-display text-lg font-bold text-white'>{point.title}</h3>
              <p className='mt-2 text-sm/relaxed text-white/70'>{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
