import { Mail, MapPin, Phone } from 'lucide-react';

import Logo from '@/components/logo';
import { siteMetadata } from '@/config/site';

const phoneHref = `tel:${siteMetadata.phone.replace(/\s/g, '')}`;
const mailHref = `mailto:${siteMetadata.email}`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-navy-900 text-white'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-12'>
          <div className='lg:col-span-4'>
            <Logo className='h-12 w-auto text-yellow-400 sm:h-14' />
            <p className='mt-6 max-w-sm text-sm/relaxed text-white/70'>
              Family-owned property contractors based in Fyshwick, serving Canberra and the
              surrounding region with refurbishments, maintenance and project management.
            </p>
          </div>

          <div className='lg:col-span-3'>
            <h3 className='font-display text-xs font-bold tracking-[0.2em] text-orange-soft uppercase'>
              Get in touch
            </h3>
            <a
              href={phoneHref}
              className='mt-4 flex items-start gap-3 text-white transition hover:text-orange-soft'>
              <Phone className='mt-1 size-5 shrink-0' aria-hidden />
              <span>
                <span className='block text-xs tracking-wider text-white/60 uppercase'>
                  {siteMetadata.phoneOwner}
                </span>
                <span className='font-display text-xl font-bold'>{siteMetadata.phone}</span>
              </span>
            </a>
            <a
              href={mailHref}
              className='mt-5 flex items-start gap-3 text-white transition hover:text-orange-soft'>
              <Mail className='mt-1 size-5 shrink-0' aria-hidden />
              <span className='text-sm break-all'>{siteMetadata.email}</span>
            </a>
            <a
              href={siteMetadata.address.mapUrl}
              target='_blank'
              rel='noreferrer noopener'
              className='mt-5 flex items-start gap-3 text-white transition hover:text-orange-soft'>
              <MapPin className='mt-1 size-5 shrink-0' aria-hidden />
              <span className='text-sm'>{siteMetadata.address.full}</span>
            </a>
          </div>

          <div className='lg:col-span-2'>
            <h3 className='font-display text-xs font-bold tracking-[0.2em] text-orange-soft uppercase'>
              Hours
            </h3>
            <p className='mt-4 text-sm text-white/80'>{siteMetadata.hours.weekdays}</p>
            <p className='mt-2 text-sm font-semibold text-white'>{siteMetadata.hours.emergency}</p>
          </div>

          <div className='lg:col-span-3'>
            <h3 className='font-display text-xs font-bold tracking-[0.2em] text-orange-soft uppercase'>
              Service areas
            </h3>
            <ul className='mt-4 space-y-1.5 text-sm text-white/80'>
              {siteMetadata.serviceAreas.map(area => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-10'>
          <p>
            {`© ${year} PA & KS Contractors. All rights reserved.`}
            <span className='ml-2 text-white/40'>ABN {siteMetadata.abn}</span>
          </p>
          <p>
            Built by{' '}
            <a
              href='https://github.com/stage88/paks-web'
              target='_blank'
              rel='noreferrer noopener'
              className='text-white/70 hover:text-orange-soft'>
              Sam Ilic
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
