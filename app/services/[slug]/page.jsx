import Link from 'next/link';
import ScopeTable from '@/components/services/ScopeTable';
import DeliveredWork from '@/components/projects/DeliveredWork';
import { guidesData } from '@/data/guides';
import { notFound } from 'next/navigation';
import { servicesData, getService } from '@/data/services';
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/site';
import { SectionLabel, ProcessSection, EngagementSection, RelatedProjects, FaqSection, HireCta } from '@/components/services/ServiceBlocks';

export const dynamicParams = false;

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <div className="w-full bg-white">
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: service.name, path: `/services/${service.slug}` },
      ])} />
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-gutter pt-12 md:pt-20 pb-stack-lg border-b border-outline-variant">
        <nav aria-label="Breadcrumb" className="font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant mb-8">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-primary">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-on-surface">{service.shortName}</span>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <span className="material-symbols-outlined text-primary text-[48px] mb-6 block" aria-hidden="true">{service.icon}</span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-[36px] sm:text-[48px] md:text-[64px] text-on-surface leading-[1.05] tracking-tighter mb-6">
              {service.name}
            </h1>
            <p className="font-body-main text-lg leading-relaxed text-on-surface-variant max-w-2xl">{service.intro}</p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link
              href={`/contact?service=${service.slug}`}
              className="text-center bg-[#0A0A0A] text-white px-8 py-4 font-label-mono text-label-mono uppercase tracking-widest hover:bg-primary transition-colors"
            >
              {service.cta}
            </Link>
            <Link
              href="/projects"
              className="text-center border border-[#0A0A0A] px-8 py-4 font-label-mono text-label-mono uppercase tracking-widest hover:bg-[#F5F8FF] transition-colors"
            >
              See My Work
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-gutter py-10 border-b border-outline-variant">
        <SectionLabel>QUICK ANSWER</SectionLabel>
        <h2 className="font-headline-md text-2xl font-bold mb-4">{service.faqs[0].q}</h2>
        <p className="font-body-main text-lg text-on-surface-variant leading-relaxed max-w-3xl mb-5">{service.faqs[0].a}</p>
        <p className="font-body-main text-on-surface-variant mb-4">4+ years of development experience · 28+ clients served · 20+ projects delivered. Freelance project contracts for clients in India and worldwide.</p>
        <div className="flex flex-wrap gap-5"><Link className="text-primary underline" href="/guides/freelance-software-development-cost">Cost and timeline: what affects your quote →</Link><Link className="text-primary underline" href="/guides/plan-custom-software-project">Prepare your requirements →</Link></div>
      </section>
      {/* Intro + problems */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <SectionLabel>OVERVIEW</SectionLabel>
            <p className="font-body-main text-[18px] md:text-[20px] text-on-surface leading-relaxed">{service.headline}</p>
          </div>
          <div className="md:col-span-6">
            <SectionLabel>SOUND FAMILIAR?</SectionLabel>
            <ul className="flex flex-col gap-4">
              {service.problems.map((p) => (
                <li key={p} className="flex gap-4 border border-outline-variant p-5">
                  <span className="material-symbols-outlined text-primary flex-shrink-0" aria-hidden="true">priority_high</span>
                  <span className="font-body-main text-on-surface-variant leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <SectionLabel>WHAT YOU GET</SectionLabel>
        <h2 className="font-headline-md text-[32px] md:text-headline-md text-on-surface mb-16 max-w-3xl">
          {service.shortName}, built for real business use.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.deliverables.map((d) => (
            <div key={d.title} className="border border-outline-variant p-8 bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary text-[32px] mb-4 block" aria-hidden="true">{d.icon}</span>
              <h3 className="font-body-main font-bold text-on-surface text-lg mb-2">{d.title}</h3>
              <p className="font-body-main text-[14px] text-on-surface-variant leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-2">
          {service.techStack.map((t) => (
            <span key={t} className="bg-secondary-container text-on-secondary-container px-3 py-1 font-label-mono text-[11px] border border-outline-variant">
              {t}
            </span>
          ))}
        </div>
      </section>

      <DeliveredWork service={service.slug} />
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        {service.buyerSections.map(section => <div key={section.heading} className="max-w-3xl mb-10">
          <h2 className="font-headline-md text-2xl font-bold mb-4">{section.heading}</h2>
          <p className="font-body-main text-on-surface-variant leading-relaxed">{section.text}</p>
        </div>)}
        <h2 className="font-headline-md text-2xl font-bold mb-4">Compare your first-release scope</h2>
        <ScopeTable {...service.comparison} />
      </section>
      <RelatedProjects ids={service.relatedProjects} />
      <ProcessSection />
      <EngagementSection />
      <FaqSection faqs={service.faqs} heading={`${service.shortName}: common questions`} />
      {service.relatedGuides?.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-gutter py-12 border-b border-outline-variant">
          <h2 className="font-headline-md text-2xl font-bold mb-6">Plan your freelance project</h2>
          <ul className="space-y-4">
            {service.relatedGuides.map((slug) => guidesData.find((g) => g.slug === slug)).filter(Boolean).map((g) => (
              <li key={g.slug}><Link href={`/guides/${g.slug}`} className="text-primary underline underline-offset-4">{g.title}</Link><p className="text-sm text-on-surface-variant mt-2 max-w-2xl">{g.description}</p></li>
            ))}
          </ul>
        </section>
      )}

      {/* Internal links to sibling services */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <SectionLabel>OTHER SERVICES</SectionLabel>
        <ul className="flex flex-wrap gap-3">
          {others.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-2 border border-outline-variant px-4 py-3 font-body-main text-[15px] hover:border-on-surface hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px] text-primary" aria-hidden="true">{s.icon}</span>
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <HireCta title={`Send your ${service.shortName.toLowerCase()} requirements.`} service={service.slug} primaryLabel={service.cta} />
    </div>
  );
}
