import Link from 'next/link';
import { deliveredProjects } from '@/data/deliveredProjects';

export default function DeliveredWork({ service }) {
  const projects = service ? deliveredProjects.filter((p) => p.service === service) : deliveredProjects;
  if (!projects.length) return null;
  return (
    <section aria-labelledby="delivered-work-heading" className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
      <p className="font-label-mono text-label-mono text-primary uppercase tracking-widest mb-4">Websites & business software I have built</p>
      <h2 id="delivered-work-heading" className="font-headline-md text-3xl md:text-4xl font-bold mb-6">Your project starts with relevant experience.</h2>
      <p className="font-body-main text-on-surface-variant max-w-2xl mb-10">Work with me on a freelance business website, mobile app, SaaS product or internal system. Explore my work, then tell me what your business needs.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article key={project.id} className="border border-outline-variant p-7 flex flex-col items-start">
            <p className="font-label-mono text-xs text-primary uppercase mb-3">{project.category}</p>
            <h3 className="font-headline-md text-2xl font-bold mb-3"><Link href={`/projects/${project.id}`} className="hover:text-primary">{project.title}</Link></h3>
            <p className="font-body-main text-on-surface-variant mb-6">{project.description}</p>
            <Link href={`/projects/${project.id}`} className="mt-auto text-primary underline underline-offset-4">Explore this project →</Link>
            {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-3 text-sm underline underline-offset-4">Visit vrcmobility.in ↗</a>}
          </article>
        ))}
        {!service && <article className="border border-outline-variant p-7">
          <p className="font-label-mono text-xs text-primary uppercase mb-3">HRMS & CRM development</p>
          <h3 className="font-headline-md text-2xl font-bold mb-3"><Link href="/projects/hrms-crm" className="hover:text-primary">HRMS & CRM</Link></h3>
          <p className="font-body-main text-on-surface-variant mb-6">Explore my existing HRMS and CRM case study for employee and business management software.</p>
          <Link href="/projects/hrms-crm" className="text-primary underline underline-offset-4">Read the HRMS case study →</Link>
        </article>}
      </div>
    </section>
  );
}
