import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guidesData, getGuide } from '@/data/guides';
import { servicesData } from '@/data/services';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';
import { pageMetadata, absoluteUrl, site, SITE_URL } from '@/lib/site';
import { FaqSection, HireCta } from '@/components/services/ServiceBlocks';

export const dynamicParams = false;

export function generateStaticParams() {
  return guidesData.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const meta = pageMetadata({
    title: guide.metaTitle,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    keywords: guide.keywords,
    type: 'article',
  });
  meta.openGraph = { ...meta.openGraph, publishedTime: guide.published, authors: [site.name] };
  return meta;
}

const slugify = (t) => t.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');

const Block = ({ block }) => {
  switch (block.type) {
    case 'ul':
      return <ul className="list-disc pl-6 mb-6 space-y-2 text-on-surface-variant text-[17px] leading-relaxed">{block.items.map((i) => <li key={i}>{i}</li>)}</ul>;
    case 'ol':
      return <ol className="list-decimal pl-6 mb-6 space-y-2 text-on-surface-variant text-[17px] leading-relaxed">{block.items.map((i) => <li key={i}>{i}</li>)}</ol>;
    case 'tip':
      return <aside className="border-l-4 border-primary bg-[#F5F8FF] p-5 mb-6 text-on-surface text-[16px] leading-relaxed"><strong>Tip: </strong>{block.text}</aside>;
    default:
      return <p className="text-on-surface-variant leading-relaxed text-[17px] mb-5">{block.text}</p>;
  }
};

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const services = guide.relatedServices.map((s) => servicesData.find((x) => x.slug === s)).filter(Boolean);
  const others = guidesData.filter((g) => g.slug !== guide.slug);

  return (
    <div className="w-full bg-white">
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Guides', path: '/guides' },
        { name: guide.title, path: `/guides/${guide.slug}` },
      ])} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: guide.title,
        description: guide.description,
        datePublished: guide.published,
        dateModified: guide.published,
        author: { '@id': `${SITE_URL}/#person`, '@type': 'Person', name: site.name, url: SITE_URL },
        publisher: { '@id': `${SITE_URL}/#person` },
        image: absoluteUrl('/opengraph-image'),
        mainEntityOfPage: absoluteUrl(`/guides/${guide.slug}`),
      }} />
      <JsonLd data={faqSchema(guide.faqs)} />

      <article className="max-w-[1200px] mx-auto px-gutter pt-12 md:pt-20 pb-16">
        <Link href="/guides" className="font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary">← All guides</Link>
        <header className="max-w-[820px] mt-8 mb-12">
          <h1 className="font-headline-lg text-4xl md:text-5xl font-bold text-on-surface leading-[1.1] tracking-tight mb-6">{guide.title}</h1>
          <p className="font-body-main text-[19px] text-on-surface-variant leading-relaxed mb-6">{guide.description}</p>
          <p className="font-label-mono text-[12px] text-on-surface-variant">
            By <Link href="/about" className="text-on-surface underline underline-offset-2">{site.name}</Link> · <time dateTime={guide.published}>{new Date(guide.published).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</time> · {guide.readingTime} min read
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16">
          <div className="min-w-0 max-w-[760px]">
            {guide.sections.map((s) => (
              <section key={s.heading}>
                <h2 id={slugify(s.heading)} className="font-headline-md text-2xl font-bold text-on-surface mt-10 mb-4 scroll-mt-28">{s.heading}</h2>
                {s.body.map((b, i) => <Block key={i} block={b} />)}
              </section>
            ))}
          </div>
          <aside className="flex flex-col gap-8">
            <nav aria-label="On this page" className="lg:sticky lg:top-28">
              <p className="font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant mb-4">On this page</p>
              <ul className="space-y-2 mb-8">
                {guide.sections.map((s) => (
                  <li key={s.heading}><a href={`#${slugify(s.heading)}`} className="text-[14px] text-on-surface-variant hover:text-primary">{s.heading}</a></li>
                ))}
              </ul>
              <div className="border border-outline-variant p-6">
                <p className="font-body-main font-bold text-on-surface mb-2">Need a developer?</p>
                <p className="text-[14px] text-on-surface-variant mb-4">Free discovery call and a fixed quote within 48 hours.</p>
                <Link href="/contact" className="block text-center bg-[#0A0A0A] text-white py-3 font-label-mono text-[11px] uppercase tracking-widest hover:bg-primary">Get a Quote</Link>
              </div>
            </nav>
          </aside>
        </div>
      </article>

      <FaqSection faqs={guide.faqs} />

      <section className="max-w-[1200px] mx-auto px-gutter py-16 border-b border-outline-variant grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant mb-4">Related services</p>
          <ul className="space-y-3">
            {services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} className="text-lg text-on-surface hover:text-primary underline underline-offset-4">{s.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant mb-4">More guides</p>
          <ul className="space-y-3">
            {others.map((g) => <li key={g.slug}><Link href={`/guides/${g.slug}`} className="text-lg text-on-surface hover:text-primary underline underline-offset-4">{g.title}</Link></li>)}
          </ul>
        </div>
      </section>

      <HireCta />
    </div>
  );
}
