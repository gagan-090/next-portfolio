import Link from 'next/link';
import { site, absoluteUrl } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { getService } from '@/data/services';
import { HireCta } from '@/components/services/ServiceBlocks';

export default function DeliveredProjectPage({ project }) {
  const service = getService(project.service);
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }, { name: project.title, path: `/projects/${project.id}` }])} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CreativeWork', '@id': absoluteUrl(`/projects/${project.id}#work`), name: project.title, description: project.description, url: project.url || absoluteUrl(`/projects/${project.id}`), creator: { '@id': absoluteUrl('/#person') }, mainEntityOfPage: absoluteUrl(`/projects/${project.id}`) }} />
      <article className="max-w-[1200px] mx-auto px-gutter py-16">
        <Link href="/projects" className="text-primary underline underline-offset-4">← All projects</Link>
        <header className="max-w-3xl mt-10">
          <p className="font-label-mono text-primary uppercase tracking-widest mb-4">{project.category} · Developed by Gagan Shukla</p>
          <h1 className="font-headline-md text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
          <p className="font-body-main text-xl text-on-surface-variant leading-relaxed">{project.description}</p>
          {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-primary underline underline-offset-4">Visit the website: vrcmobility.in ↗</a>}
        </header>
        {project.results && <section className="max-w-3xl mt-12" aria-labelledby="project-results">
          <h2 id="project-results" className="font-headline-md text-3xl font-bold mb-6">Reported project results</h2>
          <dl className="grid sm:grid-cols-2 gap-6">
            {project.results.map((result) => <div key={result.label} className="border border-outline-variant p-6">
              <dt className="font-body-main text-on-surface-variant mb-3">{result.label}</dt>
              <dd className="font-headline-md text-4xl font-bold text-primary">{result.value}</dd>
            </div>)}
          </dl>
          <p className="font-body-main text-sm text-on-surface-variant mt-5 leading-relaxed">{project.resultNote}</p>
          <p className="font-body-main text-on-surface-variant mt-5 leading-relaxed">For a new lead-generation website, we define the audience, useful service content, enquiry routes and measurement before deciding the page structure. Page volume alone does not establish the value of a new project.</p>
        </section>}
        <section className="max-w-3xl mt-14 border-t border-outline-variant pt-10">
          <h2 className="font-headline-md text-3xl font-bold mb-5">Planning a similar project?</h2>
          <p className="font-body-main text-on-surface-variant leading-relaxed mb-5">I am available for freelance {project.category.toLowerCase()} projects for Indian and international clients. We start with your users, business workflow and essential features, then agree on the scope, milestones and delivery plan.</p>
          <p className="font-body-main text-on-surface-variant leading-relaxed mb-6">Send your requirements, any reference products, your preferred timeline and budget range. For an existing product, tell me what needs to change. I can discuss the development approach and a project-specific quote with you.</p>
          <div className="flex flex-wrap gap-5">
            <Link href={`/services/${project.service}`} className="text-primary underline underline-offset-4">{service?.name}</Link>
            <Link href={`/contact?service=${project.service}`} className="text-primary underline underline-offset-4">Request a project quote</Link>
            <a href={`${site.whatsapp}?text=${encodeURIComponent(project.enquiry)}`} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Discuss on WhatsApp</a>
          </div>
        </section>
      </article>
      <HireCta title={`Build your next ${project.id === 'vrc-mobility' ? 'business website' : project.id === 'saas-software' ? 'SaaS product' : 'bid management system'}.`} service={project.service} />
    </div>
  );
}
