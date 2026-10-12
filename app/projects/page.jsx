import ProjectsView from '@/views/ProjectsView';
import { deliveredProjects } from '@/data/deliveredProjects';
import { projectsData } from '@/data/projects';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { pageMetadata, absoluteUrl } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Projects — Websites, Apps, SaaS, HRMS & Bid Management',
  description:
    "Explore Gagan Shukla's work: VRC Mobility, bid management software, SaaS, HRMS, CRM and mobile apps. Hire a freelance developer for your next project.",
  path: '/projects',
  keywords: ['Flutter Projects', 'React Native Projects', 'App Development Portfolio', 'CRM Case Study', 'E-commerce App Case Study'],
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }])} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Gagan Shukla — Project Case Studies',
          itemListElement: [...deliveredProjects, ...projectsData].map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: absoluteUrl(`/projects/${p.id}`),
            name: p.title,
          })),
        }}
      />
      <ProjectsView />
    </>
  );
}
