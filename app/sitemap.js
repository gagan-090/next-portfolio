import { SITE_URL } from '@/lib/site';
import { projectsData } from '@/data/projects';
import { deliveredProjects } from '@/data/deliveredProjects';
import { servicesData } from '@/data/services';
import { locationsData } from '@/data/locations';
import { guidesData } from '@/data/guides';
import { getAllBlogSlugs } from '@/lib/blogService';

export const revalidate = 3600;

export default async function sitemap() {
  // Content revision date, not the date a crawler requested the sitemap.
  const contentUpdated = new Date('2026-10-12T00:00:00Z');
  const staticRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.95, changeFrequency: 'monthly' },
    { path: '/locations', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/hire', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/guides', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/projects', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'yearly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/resume', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/experience', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/tech-stack', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  ].map((r) => ({ url: `${SITE_URL}${r.path === '/' ? '' : r.path}`, lastModified: contentUpdated, changeFrequency: r.changeFrequency, priority: r.priority }));

  const services = servicesData.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: contentUpdated,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const projects = projectsData.map((p) => ({
    url: `${SITE_URL}/projects/${p.id}`,
    lastModified: contentUpdated,
    changeFrequency: 'monthly',
    priority: 0.8,
    images: [`${SITE_URL}${p.image.src}`],
  }));

  const posts = (await getAllBlogSlugs()).map((b) => ({
    url: `${SITE_URL}/blog/${b.slug}`,
    lastModified: new Date(b.updated_at || b.published_at || contentUpdated),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const markets = locationsData.map((l) => ({
    url: `${SITE_URL}/hire/${l.slug}`,
    lastModified: contentUpdated,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const guides = guidesData.map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.published),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  const delivered = deliveredProjects.map((p) => ({ url: `${SITE_URL}/projects/${p.id}`, lastModified: contentUpdated, changeFrequency: 'monthly', priority: 0.8 }));
  // The city directory is a visitor utility, not thousands of search landing pages.
  return [...staticRoutes, ...services, ...markets, ...guides, ...projects, ...delivered, ...posts];
}
