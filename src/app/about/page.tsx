import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Building2, ClipboardCheck, HardHat, Users } from 'lucide-react';

import { siteMetadata } from '@/config/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Paul & Kirsty Saunderson — the family team behind PA & KS Contractors, delivering refurbishments and maintenance across Canberra, Queanbeyan, Googong, Bungendore and Yass.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About PA & KS Contractors',
    description:
      'Family-owned Canberra contractors with deep experience across aged care, child care, retail and government refurbishments.',
    url: '/about',
    images: [siteMetadata.ogImage],
  },
};

const credentials = [
  { icon: BadgeCheck, label: 'Police Checks', detail: 'Current for every team member' },
  { icon: ClipboardCheck, label: 'WWVP Cards', detail: 'ACT &amp; NSW' },
  { icon: HardHat, label: 'White Cards', detail: 'Construction induction' },
  { icon: Building2, label: 'WHS Compliant', detail: 'Up-to-date procedures' },
];

const whoWeAre = [
  'Family-owned and managed by Paul & Kirsty Saunderson.',
  'Based in Fyshwick, working across Canberra and the surrounding region.',
  'In-house team of qualified tradesmen, backed by long-trusted subcontractors.',
  'Trusted by aged care, child care, retail centres, and government clients.',
];

const howWeWork = [
  'One point of contact — start to handover.',
  'Honest, upfront quoting with no surprises mid-build.',
  'Safe, compliant and cost-effective by default, not by accident.',
  '24/7 reactive and emergency service when you need us out tonight.',
];

export default function AboutPage() {
  return (
    <>
      <section className='relative isolate overflow-hidden bg-navy-900 pt-32 pb-16 text-white sm:pt-40 sm:pb-24 lg:pt-44'>
        <div
          className='absolute inset-0 -z-10 bg-linear-to-br from-navy-900 via-navy-800 to-navy-700'
          aria-hidden
        />
        <div
          className='absolute -top-32 -right-32 -z-10 size-96 rounded-full bg-orange-brand/20 blur-3xl'
          aria-hidden
        />

        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white'>
            <ArrowRight className='size-4 rotate-180' aria-hidden />
            Back home
          </Link>
          <div className='mt-6 grid gap-10 lg:grid-cols-12 lg:items-end'>
            <div className='lg:col-span-7'>
              <span className='font-display text-xs font-bold tracking-[0.2em] text-orange-soft uppercase'>
                About PA &amp; KS
              </span>
              <h1 className='mt-3 font-display text-4xl leading-[1.05] font-black tracking-tight text-balance sm:text-5xl lg:text-6xl'>
                A family-run team that treats every build like our own.
              </h1>
            </div>
            <p className='text-base/relaxed text-white/75 sm:text-lg lg:col-span-5'>
              Paul & Kirsty Saunderson started PA & KS Contractors to do property work the way it
              ought to be done — straight talk, qualified hands, and a finish you&apos;d be proud to
              put your name on.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-surface transition-colors duration-300'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10'>
          <div className='overflow-hidden rounded-3xl shadow-card'>
            <Image
              src='/paks-images/PAKS-Building.png'
              alt='PA & KS Contractors building in Fyshwick'
              width={1600}
              height={900}
              className='h-auto w-full object-cover'
              priority
            />
          </div>
        </div>
      </section>

      <section className='bg-surface pb-20 transition-colors duration-300 sm:pb-28'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
            <div>
              <span className='font-display text-xs font-bold tracking-[0.2em] text-orange-brand uppercase'>
                Who we are
              </span>
              <h2 className='mt-3 font-display text-3xl/tight font-black tracking-tight text-foreground sm:text-4xl'>
                Local, qualified, and accountable.
              </h2>
              <ul className='mt-6 space-y-4'>
                {whoWeAre.map(item => (
                  <li key={item} className='flex gap-3 text-base text-muted'>
                    <Users className='mt-1 size-5 shrink-0 text-orange-brand' aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className='font-display text-xs font-bold tracking-[0.2em] text-orange-brand uppercase'>
                How we work
              </span>
              <h2 className='mt-3 font-display text-3xl/tight font-black tracking-tight text-foreground sm:text-4xl'>
                Straight answers, clean handovers.
              </h2>
              <ul className='mt-6 space-y-4'>
                {howWeWork.map(item => (
                  <li key={item} className='flex gap-3 text-base text-muted'>
                    <BadgeCheck className='mt-1 size-5 shrink-0 text-orange-brand' aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-surface-2 py-16 transition-colors duration-300 sm:py-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <div className='flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
            <h2 className='font-display text-2xl font-black tracking-tight text-foreground sm:text-3xl'>
              Credentials &amp; compliance
            </h2>
            <p className='text-sm text-muted'>All current, all auditable, on request.</p>
          </div>
          <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {credentials.map(c => (
              <div
                key={c.label}
                className='flex items-start gap-4 rounded-2xl border border-line bg-card p-5'>
                <span className='inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-brand/10 text-orange-brand'>
                  <c.icon className='size-5' aria-hidden />
                </span>
                <div>
                  <h3 className='font-display text-base font-bold text-foreground'>{c.label}</h3>
                  <p
                    className='mt-1 text-sm text-muted'
                    dangerouslySetInnerHTML={{ __html: c.detail }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-surface py-16 transition-colors duration-300 sm:py-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <div className='flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-card p-8 sm:flex-row sm:items-center sm:p-10'>
            <div>
              <h3 className='font-display text-2xl font-black tracking-tight text-foreground sm:text-3xl'>
                Ready when you are.
              </h3>
              <p className='mt-2 text-base text-muted'>
                Talk to Paul about your next job — across Canberra, Queanbeyan, Googong, Bungendore
                and Yass.
              </p>
            </div>
            <Link
              href='/contact'
              className='group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-orange-brand px-7 py-4 text-base font-bold text-white shadow-cta transition hover:bg-orange-brand-hover'>
              Contact us
              <ArrowRight className='size-5 transition group-hover:translate-x-0.5' aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
