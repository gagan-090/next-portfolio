import BlogView from '@/views/BlogView';
import { blogService } from '@/lib/blogService';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/site';

export const revalidate = 3600;

export const metadata = pageMetadata({
  title: 'Engineering Journal — Flutter, React Native & Full Stack Articles',
  description:
    'Technical articles by Gagan Shukla on Flutter, React Native, Next.js, Supabase, app architecture, performance optimisation and building CRM/ERP software that scales.',
  path: '/blog',
  keywords: ['Flutter Blog', 'React Native Tutorials', 'Next.js Articles', 'Software Architecture Blog'],
});

export default async function BlogPage() {
  const [blogsRes, featRes, catsRes] = await Promise.all([
    blogService.getBlogs({ limit: 12 }),
    blogService.getFeaturedBlogs(1),
    blogService.getCategories(),
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])} />
      <BlogView initialBlogs={blogsRes.data || []} featuredBlogs={featRes.data || []} categories={catsRes.data || []} />
    </>
  );
}
