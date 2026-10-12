import Link from 'next/link';
import ScopeTable from '@/components/services/ScopeTable';
import { notFound } from 'next/navigation';
import { locationsData, getLocation } from '@/data/locations';
import { servicesData } from '@/data/services';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';
import { pageMetadata, absoluteUrl, site, SITE_URL } from '@/lib/site';
import { SectionLabel, ProcessSection, RelatedProjects, FaqSection, HireCta } from '@/components/services/ServiceBlocks';

export const dynamicParams = false;

export function generateStaticParams() {
  return locationsData.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return pageMetadata({
    title: loc.metaTitle,
    description: loc.metaDescription,
    path: `/hire/${loc.slug}`,
    keywords: loc.keywords,
  });
}

const serviceSchemaFor = (loc) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: `Freelance app, web, CRM & ERP development for ${loc.shortMarket || loc.market}`,
  serviceType: 'Software Development',
  url: absoluteUrl(`/hire/${loc.slug}`),
  description: loc.metaDescription,
  provider: { '@id': `${SITE_URL}/#person` },
  areaServed:
    loc.countryCode === 'EU'
      ? { '@type': 'Place', name: 'European Union' }
      : loc.city
        ? { '@type': 'City', name: loc.city, containedInPlace: { '@type': 'Country', name: 'India' } }
        : { '@type': 'Country', name: loc.market.replace(/^the /, '').replace(/ \(.*\)$/, '') },
  availableChannel: { '@type': 'ServiceChannel', serviceUrl: absoluteUrl('/contact'), availableLanguage: ['English', 'Hindi'] },
});

export default async function HireLocationPage({ params }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const services = loc.popularServices.map((s) => servicesData.find((x) => x.slug === s)).filter(Boolean);
  const others = locationsData.filter((l) => l.slug !== loc.slug);
  const label = loc.shortMarket || loc.market;

  return (
    <div className="w-full bg-white">
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Freelance projects', path: '/hire' },
        { name: label, path: `/hire/${loc.slug}` },
      ])} />
      <JsonLd data={serviceSchemaFor(loc)} />
      <JsonLd data={faqSchema(loc.faqs)} />

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-gutter pt-12 md:pt-20 pb-stack-lg border-b border-outline-variant">
        <nav aria-label="Breadcrumb" className="font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant mb-8">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/hire" className="hover:text-primary">Freelance projects</Link>
          <span className="mx-2">/</span>
          <span className="text-on-surface">{label}</span>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-6">
              <span aria-hidden="true">{loc.flag}</span> Freelance developer · {label}
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-[36px] sm:text-[48px] md:text-[64px] text-on-surface leading-[1.05] tracking-tighter mb-6">
              {loc.h1}
            </h1>
            <p className="font-body-main text-[18px] text-on-surface-variant max-w-2xl leading-relaxed">{loc.intro}</p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link href="/contact" className="text-center bg-[#0A0A0A] text-white px-8 py-4 font-label-mono text-label-mono uppercase tracking-widest hover:bg-primary transition-colors">
              Send your logistics brief
            </Link>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-center border border-[#0A0A0A] px-8 py-4 font-label-mono text-label-mono uppercase tracking-widest hover:bg-[#F5F8FF] transition-colors">
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      {/* Working together: time zone, payments, compliance */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <SectionLabel>WORKING TOGETHER</SectionLabel>
        <h2 className="font-headline-md text-[32px] md:text-headline-md text-on-surface mb-12 max-w-3xl">
          Built around how you work in {label}.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-outline-variant p-8">
            <span className="material-symbols-outlined text-primary text-[32px] mb-4 block" aria-hidden="true">schedule</span>
            <h3 className="font-body-main font-bold text-lg text-on-surface mb-3">Time zone · {loc.timezone.label}</h3>
            <p className="font-body-main text-on-surface-variant leading-relaxed mb-2"><strong className="text-on-surface">Written reviews:</strong> {loc.timezone.overlap}</p>
            <p className="font-label-mono text-[11px] text-on-surface-variant uppercase tracking-wider">Contact method: {loc.timezone.meeting}</p>
          </div>
          <div className="border border-outline-variant p-8">
            <span className="material-symbols-outlined text-primary text-[32px] mb-4 block" aria-hidden="true">payments</span>
            <h3 className="font-body-main font-bold text-lg text-on-surface mb-3">Payments</h3>
            <ul className="font-body-main text-on-surface-variant leading-relaxed list-disc pl-5 space-y-1">
              {loc.payments.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
          <div className="border border-outline-variant p-8">
            <span className="material-symbols-outlined text-primary text-[32px] mb-4 block" aria-hidden="true">verified_user</span>
            <h3 className="font-body-main font-bold text-lg text-on-surface mb-3">Privacy · {loc.compliance.name}</h3>
            <p className="font-body-main text-on-surface-variant leading-relaxed">{loc.compliance.text}</p>
          </div>
        </div>
      </section>

      {/* Market-specific capabilities */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <SectionLabel>WHAT {label.toUpperCase()} CLIENTS NEED</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loc.localNeeds.map((n) => (
            <div key={n.title} className="border border-outline-variant p-8 bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary text-[32px] mb-4 block" aria-hidden="true">{n.icon}</span>
              <h3 className="font-body-main font-bold text-on-surface text-lg mb-2">{n.title}</h3>
              <p className="font-body-main text-[14px] text-on-surface-variant leading-relaxed">{n.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <SectionLabel>POPULAR SERVICES</SectionLabel>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant border border-outline-variant">
          {services.map((s) => (
            <li key={s.slug} className="bg-white">
              <Link href={`/services/${s.slug}`} className="group flex gap-5 p-8 h-full hover:bg-[#F5F8FF] transition-colors">
                <span className="material-symbols-outlined text-primary text-[32px] flex-shrink-0" aria-hidden="true">{s.icon}</span>
                <div>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">{s.name}</h3>
                  <p className="font-body-main text-[14px] text-on-surface-variant leading-relaxed">{s.headline}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {loc.planningSections && <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <SectionLabel>PLAN YOUR FREELANCE PROJECT</SectionLabel>
        <div className="grid md:grid-cols-2 gap-10">
          {loc.planningSections.map((section) => <div key={section.heading}>
            <h2 className="font-headline-md text-2xl font-bold mb-4">{section.heading}</h2>
            <p className="font-body-main text-on-surface-variant leading-relaxed mb-4">{section.text}</p>
            <ul className="list-disc pl-5 font-body-main text-on-surface-variant space-y-2">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>)}
        </div>
      </section>}
      <RelatedProjects ids={['truckmitr', 'hrms-crm', 'hashkart']} />
      <section className="max-w-[1200px] mx-auto px-gutter py-12 border-b border-outline-variant">
        <h2 className="font-headline-md text-2xl font-bold mb-4">Compare your logistics project scope</h2>
        <ScopeTable {...servicesData.find(s => s.slug === 'logistics-app-development').comparison} />
        <div className="flex flex-wrap gap-5"><Link className="text-primary underline" href="/guides/logistics-app-development-requirements">Logistics app requirements checklist</Link><Link className="text-primary underline" href="/guides/freelance-software-development-cost">What determines your development quote</Link><Link className="text-primary underline" href="/projects/vrc-mobility">VRC Mobility website case study</Link></div>
      </section>
      <ProcessSection />
      <FaqSection faqs={loc.faqs} heading={`Freelance projects from ${label}: FAQ`} />

      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <SectionLabel>ALSO WORKING WITH CLIENTS IN</SectionLabel>
        <ul className="flex flex-wrap gap-3">
          {others.map((l) => (
            <li key={l.slug}>
              <Link href={`/hire/${l.slug}`} className="inline-flex items-center gap-2 border border-outline-variant px-4 py-3 font-body-main text-[15px] hover:border-on-surface hover:text-primary transition-colors">
                <span aria-hidden="true">{l.flag}</span> {l.shortMarket || l.market}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <HireCta title={`Start your project from ${label}.`} />
    </div>
  );
}
