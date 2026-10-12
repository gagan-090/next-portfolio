import Link from 'next/link';
import { guidesData } from '@/data/guides';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/site';
import { HireCta } from '@/components/services/ServiceBlocks';

export const metadata = pageMetadata({
  title: 'Guides for Hiring Developers & Planning Software Projects',
  description:
    'Practical guides for business owners: hiring a freelance developer in India, Flutter vs React Native, and custom CRM vs Zoho/HubSpot. Written by freelance full stack developer Gagan Shukla.',
  path: '/guides',
  keywords: ['hire developer guide', 'app development guide for business', 'software project planning'],
});

export default function GuidesPage() {
  return (
    <div className="w-full bg-white">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Guides', path: '/guides' }])} />
      <section className="max-w-[1200px] mx-auto px-gutter pt-12 md:pt-20 pb-stack-lg border-b border-outline-variant">
        <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-4">Guides</span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-[40px] md:text-[64px] text-on-surface leading-none tracking-tighter mb-6">
          Plan your project with confidence.
        </h1>
        <p className="font-body-main text-[18px] text-on-surface-variant max-w-2xl">Straight answers for founders and business owners, before you hire anyone.</p>
      </section>
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guidesData.map((g) => (
            <li key={g.slug}>
              <Link href={`/guides/${g.slug}`} className="group flex flex-col h-full border border-outline-variant p-8 hover:border-on-surface transition-colors">
                <span className="font-label-mono text-[11px] uppercase tracking-widest text-primary mb-4">{g.readingTime} min read</span>
                <h2 className="font-headline-md text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">{g.title}</h2>
                <p className="font-body-main text-[14px] text-on-surface-variant leading-relaxed mb-6">{g.description}</p>
                <span className="mt-auto font-label-mono text-[11px] uppercase tracking-widest">Read guide →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <HireCta />
    </div>
  );
}
