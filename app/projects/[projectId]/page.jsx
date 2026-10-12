import { notFound } from 'next/navigation';
import { deliveredProjects, getDeliveredProject } from '@/data/deliveredProjects';
import DeliveredProjectPage from '@/components/projects/DeliveredProjectPage';
import ProjectDetailView from '@/views/ProjectDetailView';
import { projectsData } from '@/data/projects';
import { JsonLd, breadcrumbSchema, projectSchema, faqSchema } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return [...projectsData, ...deliveredProjects].map((p) => ({ projectId: p.id }));
}

export async function generateMetadata({ params }) {
  const { projectId } = await params;
  const delivered = getDeliveredProject(projectId);
  if (delivered) return pageMetadata({ title: `${delivered.title} — ${delivered.category}`, description: delivered.description, path: `/projects/${projectId}` });
  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return {};
  return pageMetadata({
    title: `${project.title} — ${project.type} Case Study`,
    description: project.ai_summary || project.description,
    path: `/projects/${project.id}`,
    keywords: [project.title, ...project.tags, `${project.type} Case Study`],
    images: [{ url: project.image.src, width: project.image.width, height: project.image.height, alt: `${project.title} app screenshot` }],
  });
}

export default async function ProjectDetailPage({ params }) {
  const { projectId } = await params;
  const delivered = getDeliveredProject(projectId);
  if (delivered) return <DeliveredProjectPage project={delivered} />;
  const project = projectsData.find((p) => p.id === projectId);
  if (!project) notFound();

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: project.title, path: `/projects/${project.id}` },
      ])} />
      <JsonLd data={projectSchema(project)} />
      {project.faqs?.length > 0 && <JsonLd data={faqSchema(project.faqs)} />}
      <ProjectDetailView projectId={project.id} />
    </>
  );
}
