import Link from 'next/link';
import { servicesData } from '@/data/services';
import { locationsData } from '@/data/locations';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/site';
import { SectionLabel, ProcessSection, EngagementSection, RelatedProjects, FaqSection, HireCta } from '@/components/services/ServiceBlocks';

export const metadata = pageMetadata({
  title: 'Services — App, Website, CRM, ERP & SaaS Development',
  description:
    'Hire Gagan Shukla for mobile app development, website development, custom CRM and ERP software, HRMS, e-commerce, SaaS MVPs and AI chatbots. Fixed quotes, weekly demos, full code ownership.',
  path: '/services',
  keywords: ['Software Development Services', 'App Development Services India', 'CRM ERP Development', 'Hire Freelance Developer'],
});

const faqs = [
  { q: 'Do you work with clients outside India?', a: 'Yes. I work remotely with clients worldwide, communicate in English and Hindi, and overlap working hours with US, UK, EU, Middle East and APAC time zones.' },
  { q: 'How do payments work?', a: 'Fixed-scope projects are split into milestones (typically an advance, mid-project and on launch). Retainers and dedicated-developer engagements are billed monthly. Payments can be made via bank transfer, UPI, Wise or PayPal.' },
  { q: 'What if I need changes after launch?', a: 'Every project includes a post-launch bug-fix warranty. New features after launch can be added on a retainer or as a new fixed-scope phase.' },
  { q: 'Do I own the code and data?', a: 'Yes, completely. You get the source code, repository, hosting and store accounts under your name.' },
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-white">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])} />
      <JsonLd data={faqSchema(faqs)} />

      <section className="max-w-[1200px] mx-auto px-gutter pt-12 md:pt-20 pb-stack-lg border-b border-outline-variant">
        <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-4">Services</span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-[40px] sm:text-display-lg-mobile md:text-display-lg text-on-surface leading-none tracking-tighter mb-8 max-w-4xl">
          Freelance app, website & SaaS development.
        </h1>
        <p className="font-subhead-italic text-subhead-italic italic text-on-surface-variant max-w-2xl">
          Hire Gagan Shukla for mobile apps, websites, SaaS, CRM, ERP, HRMS and bid management software. Based in India and available for freelance projects worldwide.
        </p>
      </section>

      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <SectionLabel>WHAT I BUILD</SectionLabel>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant border border-outline-variant">
          {servicesData.map((s) => (
            <li key={s.slug} className="bg-white">
              <Link href={`/services/${s.slug}`} className="group flex gap-6 h-full p-8 md:p-10 hover:bg-[#F5F8FF] transition-colors">
                <span className="material-symbols-outlined text-primary text-[36px] flex-shrink-0" aria-hidden="true">{s.icon}</span>
                <div className="flex flex-col">
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">{s.name}</h2>
                  <p className="font-body-main text-on-surface-variant leading-relaxed mb-4">{s.intro}</p>
                  <p className="font-label-mono text-[11px] text-on-surface-variant uppercase tracking-wider mb-6">{s.techStack.slice(0, 5).join(' · ')}</p>
                  <span className="mt-auto font-label-mono text-[11px] uppercase tracking-widest text-on-surface">Explore {s.shortName} →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <SectionLabel>CLIENTS IN INDIA & ABROAD</SectionLabel>
        <h2 className="font-headline-md text-[32px] md:text-headline-md text-on-surface mb-10">Wherever you are, we overlap.</h2>
        <ul className="flex flex-wrap gap-3">
          {locationsData.map((l) => (
            <li key={l.slug}>
              <Link href={`/hire/${l.slug}`} className="inline-flex items-center gap-2 border border-outline-variant px-4 py-3 font-body-main text-[15px] hover:border-on-surface hover:text-primary transition-colors">
                <span aria-hidden="true">{l.flag}</span> Hire from {l.shortMarket || l.market}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ProcessSection />
      <EngagementSection />
      <RelatedProjects ids={['truckmitr', 'hrms-crm', 'hashkart']} />
      <FaqSection faqs={faqs} />
      <HireCta />
    </div>
  );
}
