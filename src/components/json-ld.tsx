import { siteMetadata } from '@/config/site'

export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: siteMetadata.title,
    legalName: 'PA & KS Contractors',
    description: siteMetadata.longDescription,
    url: siteMetadata.siteUrl,
    image: `${siteMetadata.siteUrl}${siteMetadata.ogImage}`,
    logo: `${siteMetadata.siteUrl}${siteMetadata.siteImage}`,
    telephone: `+61${siteMetadata.phone.replace(/\D/g, '').replace(/^0/, '')}`,
    email: siteMetadata.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteMetadata.address.street,
      addressLocality: siteMetadata.address.suburb,
      addressRegion: siteMetadata.address.state,
      postalCode: siteMetadata.address.postcode,
      addressCountry: siteMetadata.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteMetadata.address.lat,
      longitude: siteMetadata.address.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    areaServed: siteMetadata.serviceAreas.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'ABN',
      value: siteMetadata.abn,
    },
    founder: [
      { '@type': 'Person', name: 'Paul Saunderson' },
      { '@type': 'Person', name: 'Kirsty Saunderson' },
    ],
    knowsAbout: [
      'property refurbishment',
      'building maintenance',
      'commercial fit out',
      'project management',
      'aged care facilities',
      'child care facilities',
      'retail centres',
      'government works',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
