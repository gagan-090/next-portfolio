import ContactView from '@/views/ContactView';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { pageMetadata, site, absoluteUrl } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Freelance Development Project — Get a Free Quote',
  description:
    'Contact Gagan Shukla for a freelance development project for mobile app, website, SaaS, CRM, HRMS or bid management development. Email and WhatsApp enquiries; no calls required.',
  path: '/contact',
  keywords: ['Hire App Developer', 'Hire Full Stack Developer India', 'App Development Quote', 'Freelance Developer Contact'],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          url: absoluteUrl('/contact'),
          name: 'Contact Gagan Shukla',
          mainEntity: {
            '@type': 'Person',
            name: site.name,
            email: site.email,
            telephone: site.phone,
          },
        }}
      />
      <ContactView />
    </>
  );
}
