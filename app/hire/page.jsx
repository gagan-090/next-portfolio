import Link from 'next/link';
import { domesticLocations, internationalLocations } from '@/data/locations';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/site';
import { SectionLabel, ProcessSection, EngagementSection, FaqSection, HireCta } from '@/components/services/ServiceBlocks';

export const metadata = pageMetadata({
  title: 'Freelance Development Projects — India & Worldwide',
  description:
    'Hire Gagan Shukla, a freelance full stack developer in India, for app, website, SaaS, CRM, HRMS and bid management projects. Working with clients across India and remotely with the USA, UK, UAE, Canada, Australia, Singapore and Europe.',
  path: '/hire',
  keywords: ['Hire Freelance Developer', 'Hire Offshore Developer India', 'Freelance App Developer', 'Remote Full Stack Developer for Hire'],
});

const faqs = [
  { q: 'Are you looking for a job or freelance projects?', a: 'I am available for freelance development projects only. Enquiries should be for a website, app, SaaS product or custom business system, with an agreed scope and project contract.' },
  { q: 'Do you work with international clients?', a: 'Yes. I work remotely with clients worldwide and keep a daily live-overlap window for calls in your time zone, with async updates the rest of the day.' },
  { q: 'How do international payments work?', a: 'Invoices can be issued in USD, GBP, EUR, AED or your local currency and paid via Wise, PayPal or international wire. Indian clients can pay via UPI or bank transfer.' },
  { q: 'Do you sign NDAs and IP agreements?', a: 'Yes. I sign an NDA before discussing details and a work-for-hire / IP assignment so you own 100% of the code.' },
];

const LocationGrid = ({ items }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant border border-outline-variant">
    {items.map((l) => (
      <li key={l.slug} className="bg-white">
        <Link href={`/hire/${l.slug}`} className="group flex flex-col h-full p-8 hover:bg-[#F5F8FF] transition-colors">
          <span className="text-[32px] mb-4" aria-hidden="true">{l.flag}</span>
          <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">{l.shortMarket || l.market}</h3>
          <p className="font-body-main text-[14px] text-on-surface-variant mb-4">Live overlap: {l.timezone.overlap}</p>
          <span className="mt-auto font-label-mono text-[11px] uppercase tracking-widest text-on-surface">Learn more →</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default function HirePage() {
  return (
    <div className="w-full bg-white">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Freelance projects', path: '/hire' }])} />
      <JsonLd data={faqSchema(faqs)} />

      <section className="max-w-[1200px] mx-auto px-gutter pt-12 md:pt-20 pb-stack-lg border-b border-outline-variant">
        <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-4">Freelance projects</span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-[40px] sm:text-display-lg-mobile md:text-display-lg text-on-surface leading-none tracking-tighter mb-8 max-w-4xl">
          Freelance developer, from India to anywhere.
        </h1>
        <p className="font-subhead-italic text-subhead-italic italic text-on-surface-variant max-w-2xl">
          Available for freelance project contracts, not employment or recruitment. I build apps, websites, logistics software, SaaS, CRM, HRMS and bid management systems for Indian and international businesses. We agree on scope, milestones and communication hours before starting.
        </p>
      </section>

      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <SectionLabel>INTERNATIONAL CLIENTS</SectionLabel>
        <h2 className="font-headline-md text-[32px] md:text-headline-md text-on-surface mb-12">Remote, with real overlap.</h2>
        <LocationGrid items={internationalLocations} />
      </section>

      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <SectionLabel>CLIENTS IN INDIA</SectionLabel>
        <h2 className="font-headline-md text-[32px] md:text-headline-md text-on-surface mb-12">Local, and meet in person in NCR.</h2>
        <LocationGrid items={domesticLocations} />
      </section>

      <section className="max-w-[1200px] mx-auto px-gutter py-12"><Link href="/locations" className="text-primary underline font-body-main">Find your city: India, South Africa & USA project directory →</Link></section>
      <ProcessSection />
      <EngagementSection />
      <FaqSection faqs={faqs} />
      <HireCta />
    </div>
  );
}
