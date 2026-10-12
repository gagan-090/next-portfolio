import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';
import { processSteps, engagementModels } from '@/data/services';
import { site } from '@/lib/site';

// Server-only building blocks shared by /services and /services/[slug].

export const SectionLabel = ({ children }) => (
  <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block mb-4">{children}</span>
);

export const ProcessSection = ({ label = 'HOW WE WORK' }) => (
  <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
    <SectionLabel>{label}</SectionLabel>
    <h2 className="font-headline-md text-[32px] md:text-headline-md text-on-surface mb-16 max-w-2xl">
      A clear process, from first call to launch.
    </h2>
    <ol className="grid grid-cols-1 md:grid-cols-5 gap-8">
      {processSteps.map((p) => (
        <li key={p.step} className="border-t-2 border-on-surface pt-6">
          <span className="font-label-mono text-label-mono text-primary">{p.step}</span>
          <h3 className="font-headline-md text-lg font-bold text-on-surface mt-2 mb-3">{p.title}</h3>
          <p className="font-body-main text-[14px] text-on-surface-variant leading-relaxed">{p.desc}</p>
        </li>
      ))}
    </ol>
  </section>
);

export const EngagementSection = () => (
  <section className="bg-surface-container-low/50 py-section-padding border-b border-outline-variant">
    <div className="max-w-[1200px] mx-auto px-gutter">
      <SectionLabel>WAYS TO WORK TOGETHER</SectionLabel>
      <h2 className="font-headline-md text-[32px] md:text-headline-md text-on-surface mb-16">Pick the model that fits.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {engagementModels.map((m) => (
          <div key={m.title} className="bg-white border border-outline-variant p-8">
            <span className="material-symbols-outlined text-primary text-[32px] mb-6 block" aria-hidden="true">{m.icon}</span>
            <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3">{m.title}</h3>
            <p className="font-body-main text-on-surface-variant leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const RelatedProjects = ({ ids, heading = 'Proof, not promises.' }) => {
  const projects = ids.map((id) => projectsData.find((p) => p.id === id)).filter(Boolean);
  if (!projects.length) return null;
  return (
    <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
      <SectionLabel>RELATED CASE STUDIES</SectionLabel>
      <h2 className="font-headline-md text-[32px] md:text-headline-md text-on-surface mb-16">{heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <Link key={p.id} href={`/projects/${p.id}`} className="group border border-outline-variant hover:border-on-surface transition-colors flex flex-col">
            <div className="relative h-[220px] bg-surface-container overflow-hidden">
              <Image
                src={p.image}
                alt={`${p.title} — ${p.type} app`}
                fill
                sizes="(min-width: 768px) 380px, 100vw"
                placeholder="blur"
                className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <span className="font-label-mono text-[10px] text-primary uppercase tracking-widest mb-2">{p.type}</span>
              <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="font-body-main text-[14px] text-on-surface-variant leading-relaxed mb-4">{p.description}</p>
              <span className="mt-auto font-label-mono text-[11px] uppercase tracking-widest text-on-surface">Read case study →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export const FaqSection = ({ faqs, heading = 'Frequently asked questions' }) => (
  <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-4">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="font-headline-md text-[32px] md:text-headline-md text-on-surface">{heading}</h2>
      </div>
      <div className="md:col-span-8 divide-y divide-outline-variant border-y border-outline-variant">
        {faqs.map((faq) => (
          <details key={faq.q} className="group py-6">
            <summary className="flex justify-between items-start gap-6 cursor-pointer list-none font-body-main font-bold text-[17px] text-on-surface">
              {faq.q}
              <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-45" aria-hidden="true">add</span>
            </summary>
            <p className="font-body-main text-on-surface-variant leading-relaxed mt-4 max-w-2xl">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export const HireCta = ({ title = 'Have a project in mind?', service }) => (
  <section className="max-w-[1200px] mx-auto px-gutter py-section-padding">
    <div className="bg-[#0A0A0A] text-white p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
      <div className="max-w-xl">
        <p className="font-label-mono text-label-mono uppercase tracking-[0.3em] text-white/50 mb-4">Free discovery call</p>
        <h2 className="font-headline-md text-[32px] md:text-[44px] font-bold leading-tight mb-4">{title}</h2>
        <p className="font-body-main text-white/70">Reply within 24 hours. Fixed quote. You own the code.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <Link
          href={service ? `/contact?service=${service}` : '/contact'}
          className="text-center bg-white text-[#0A0A0A] px-8 py-4 font-label-mono text-label-mono uppercase tracking-widest hover:bg-[#2563EB] hover:text-white transition-colors"
        >
          Get a Quote
        </Link>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center border border-white/40 px-8 py-4 font-label-mono text-label-mono uppercase tracking-widest hover:border-white transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </section>
);
