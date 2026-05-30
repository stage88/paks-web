import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Mail, MapPin, Phone, Siren } from 'lucide-react';

import { siteMetadata } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact PA & KS Contractors — call Paul on ${siteMetadata.phone}, email ${siteMetadata.email}, or visit us at ${siteMetadata.address.full}. Serving Canberra, Queanbeyan, Googong, Bungendore and Yass.`,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact PA & KS Contractors',
    description: `Talk to Paul on ${siteMetadata.phone} or email ${siteMetadata.email}. Based in Fyshwick, serving Canberra and surrounds.`,
    url: '/contact',
    images: [siteMetadata.ogImage],
  },
};

const phoneHref = `tel:${siteMetadata.phone.replace(/\s/g, '')}`;
const mailHref = `mailto:${siteMetadata.email}?subject=Quote%20request`;

const quickCards = [
  {
    icon: Phone,
    title: 'Call Paul',
    primary: siteMetadata.phone,
    secondary: 'Fastest way to get a quote',
    href: phoneHref,
    cta: 'Tap to call',
  },
  {
    icon: Mail,
    title: 'Email us',
    primary: siteMetadata.email,
    secondary: 'Send a brief, we&apos;ll reply within a business day',
    href: mailHref,
    cta: 'Send email',
  },
  {
    icon: MapPin,
    title: 'Visit us',
    primary: siteMetadata.address.full,
    secondary: 'By appointment — give us a heads-up first',
    href: siteMetadata.address.mapUrl,
    cta: 'Open in Maps',
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className='relative isolate overflow-hidden bg-navy-900 pt-32 pb-16 text-white sm:pt-40 sm:pb-20 lg:pt-44'>
        <div
          className='absolute inset-0 -z-10 bg-linear-to-br from-navy-900 via-navy-800 to-navy-700'
          aria-hidden
        />
        <div
          className='absolute -top-32 -left-32 -z-10 size-96 rounded-full bg-orange-brand/15 blur-3xl'
          aria-hidden
        />

        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white'>
            <ArrowRight className='size-4 rotate-180' aria-hidden />
            Back home
          </Link>
          <div className='mt-6 max-w-3xl'>
            <span className='font-display text-xs font-bold tracking-[0.2em] text-orange-soft uppercase'>
              Get in touch
            </span>
            <h1 className='mt-3 font-display text-4xl leading-[1.05] font-black tracking-tight text-balance sm:text-5xl lg:text-6xl'>
              Let&apos;s talk about your project.
            </h1>
            <p className='mt-5 text-base/relaxed text-white/75 sm:text-lg'>
              Whether it&apos;s a one-off repair or a full refurbishment, the quickest way to get
              moving is to give Paul a call. We serve Canberra, Queanbeyan, Googong, Bungendore,
              Yass and the surrounding region.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-surface py-16 transition-colors duration-300 sm:py-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <div className='grid gap-4 sm:gap-6 lg:grid-cols-3'>
            {quickCards.map(card => (
              <a
                key={card.title}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noreferrer noopener' : undefined}
                className='group flex flex-col rounded-3xl border border-line bg-card p-7 transition hover:-translate-y-1 hover:border-orange-brand hover:shadow-card sm:p-8'>
                <span className='inline-flex size-12 items-center justify-center rounded-2xl bg-orange-brand/10 text-orange-brand transition group-hover:bg-orange-brand group-hover:text-white'>
                  <card.icon className='size-6' aria-hidden />
                </span>
                <h2 className='mt-6 font-display text-xl font-bold text-foreground'>
                  {card.title}
                </h2>
                <p className='mt-2 font-display text-lg/snug font-semibold wrap-break-word text-foreground'>
                  {card.primary}
                </p>
                <p
                  className='mt-2 text-sm text-muted'
                  dangerouslySetInnerHTML={{ __html: card.secondary }}
                />
                <span className='mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-orange-brand'>
                  {card.cta}
                  <ArrowRight
                    className='size-4 transition group-hover:translate-x-0.5'
                    aria-hidden
                  />
                </span>
              </a>
            ))}
          </div>

          <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4'>
            <div className='rounded-2xl bg-surface-2 p-6'>
              <div className='flex items-center gap-2 text-orange-brand'>
                <Clock className='size-5' aria-hidden />
                <h3 className='font-display text-sm font-bold tracking-wider uppercase'>Hours</h3>
              </div>
              <p className='mt-3 text-base font-semibold text-foreground'>
                {siteMetadata.hours.weekdays}
              </p>
            </div>

            <div className='rounded-2xl bg-surface-2 p-6'>
              <div className='flex items-center gap-2 text-orange-brand'>
                <Siren className='size-5' aria-hidden />
                <h3 className='font-display text-sm font-bold tracking-wider uppercase'>
                  Emergency
                </h3>
              </div>
              <p className='mt-3 text-base font-semibold text-foreground'>
                {siteMetadata.hours.emergency}
              </p>
            </div>

            <div className='rounded-2xl bg-surface-2 p-6 sm:col-span-2'>
              <div className='flex items-center gap-2 text-orange-brand'>
                <MapPin className='size-5' aria-hidden />
                <h3 className='font-display text-sm font-bold tracking-wider uppercase'>
                  Service areas
                </h3>
              </div>
              <p className='mt-3 text-base font-semibold text-foreground'>
                {siteMetadata.serviceAreas.join(' · ')}
              </p>
              <p className='mt-2 text-xs text-muted'>ABN {siteMetadata.abn}</p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-surface pb-20 transition-colors duration-300 sm:pb-28'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
          <div className='overflow-hidden rounded-3xl border border-line shadow-card'>
            <iframe
              src={siteMetadata.address.embedUrl}
              title='PA & KS Contractors — Fyshwick location map'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='block aspect-16/10 w-full sm:aspect-16/7'
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
