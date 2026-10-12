import { cache } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowLeft, Clock, Calendar, Eye } from 'lucide-react';
import authorAvatar from '@/assets/author.png';
import { blogService, getAllBlogSlugs } from '@/lib/blogService';
import { JsonLd, breadcrumbSchema, blogPostingSchema } from '@/components/seo/JsonLd';
import { pageMetadata, absoluteUrl, site } from '@/lib/site';
import ReadingProgressBar from '@/components/blog/ReadingProgressBar';
import TableOfContents from '@/components/blog/TableOfContents';
import MDXRenderer, { extractHeadings } from '@/components/blog/MDXRenderer';
import BlogCard from '@/components/blog/BlogCard';
import BlogActions from '@/components/blog/BlogActions';

export const revalidate = 3600;
export const dynamicParams = true;

const getPost = cache(async (slug) => {
  const { data } = await blogService.getBlogBySlug(slug);
  return data;
});

export async function generateStaticParams() {
  const posts = await getAllBlogSlugs();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getPost(slug);
  if (!blog) return { title: 'Article not found', robots: { index: false } };

  const meta = pageMetadata({
    title: blog.meta_title || blog.title,
    description: blog.meta_description || blog.excerpt,
    path: `/blog/${slug}`,
    type: 'article',
    keywords: blog.category?.name ? [`${blog.category.name} tutorial`, `${blog.category.name} development`] : [],
    images: blog.cover_image_url ? [{ url: blog.cover_image_url, alt: blog.title }] : undefined,
  });
  meta.openGraph = {
    ...meta.openGraph,
    publishedTime: blog.published_at,
    modifiedTime: blog.updated_at || blog.published_at,
    authors: [blog.author?.full_name || site.name],
    section: blog.category?.name,
  };
  return meta;
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = await getPost(slug);
  if (!blog) notFound();

  const headings = extractHeadings(blog.content);
  const { data: relatedBlogs } = blog.category?.slug
    ? await blogService.getRelatedBlogs(blog.category.slug, slug, 3)
    : { data: [] };

  const formattedDate = blog.published_at ? format(new Date(blog.published_at), 'MMM d, yyyy') : '';
  const currentUrl = absoluteUrl(`/blog/${slug}`);
  const authorName = blog.author?.full_name || site.name;

  return (
    <div className="min-h-screen bg-white pt-16 pb-20 px-gutter selection:bg-primary/20">
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: blog.title, path: `/blog/${slug}` },
      ])} />
      <JsonLd data={blogPostingSchema({ ...blog, slug })} />
      <ReadingProgressBar />

      <article className="max-w-[1200px] mx-auto">
        <Link href="/blog" className="group inline-flex items-center gap-2 font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-8">
          <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1" /> Back to Journal
        </Link>

        <header className="max-w-[800px] mb-12">
          {blog.category?.name && (
            <span className="inline-block font-label-mono text-[11px] uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 px-2 py-0.5 mb-6">
              {blog.category.name}
            </span>
          )}

          <h1 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface leading-[1.1] tracking-tight mb-8">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-on-surface-variant font-label-mono text-[12px]">
            <div className="flex items-center gap-3">
              <Image src={authorAvatar} alt={authorName} width={40} height={40} className="w-10 h-10 rounded-full bg-surface-container object-cover" />
              <span className="font-bold text-on-surface" rel="author">{authorName}</span>
            </div>
            {formattedDate && (
              <time dateTime={blog.published_at} className="flex items-center gap-1.5 border-l border-outline-variant pl-6">
                <Calendar size={14} /> {formattedDate}
              </time>
            )}
            {blog.reading_time_minutes && (
              <span className="flex items-center gap-1.5 border-l border-outline-variant pl-6">
                <Clock size={14} /> {blog.reading_time_minutes} min read
              </span>
            )}
            {blog.view_count > 0 && (
              <span className="flex items-center gap-1.5 border-l border-outline-variant pl-6">
                <Eye size={14} /> {blog.view_count.toLocaleString()} {blog.view_count === 1 ? 'view' : 'views'}
              </span>
            )}
          </div>
        </header>

        {blog.cover_image_url && (
          <div className="w-full aspect-[21/9] md:aspect-[2.5/1] bg-surface-container border border-outline-variant mb-16 overflow-hidden">
            <img src={blog.cover_image_url} alt={blog.title} fetchPriority="high" className="w-full h-full object-cover" />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-16 lg:gap-24 relative">
          <div className="min-w-0">
            <div className="lg:hidden">
              <TableOfContents headings={headings} />
            </div>
            <MDXRenderer content={blog.content} />

            <BlogActions blogId={blog.id} initialLikes={blog.like_count || 0} url={currentUrl} title={blog.title} />

            {/* Author Bio Box */}
            <div className="mt-16 p-8 border border-outline-variant bg-surface-container-lowest flex flex-col md:flex-row gap-6 items-start md:items-center">
              <Image src={authorAvatar} alt={authorName} width={80} height={80} className="w-20 h-20 rounded-none object-cover border border-outline-variant" />
              <div>
                <p className="font-headline-md text-xl font-bold text-on-surface mb-2">Written by {authorName}</p>
                <p className="text-on-surface-variant text-[15px] leading-relaxed mb-4">
                  {blog.author?.bio || 'Full stack developer building mobile apps, websites, CRM and ERP systems with Flutter, React Native, Next.js and Node.js.'}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/about" className="font-label-mono text-[11px] text-primary hover:underline uppercase tracking-widest">About</Link>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="font-label-mono text-[11px] text-primary hover:underline uppercase tracking-widest">GitHub</a>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="font-label-mono text-[11px] text-primary hover:underline uppercase tracking-widest">LinkedIn</a>
                  <Link href="/contact" className="font-label-mono text-[11px] text-primary hover:underline uppercase tracking-widest">Discuss a project</Link>
                </div>
              </div>
            </div>
          </div>

          <aside className="hidden lg:block relative">
            <TableOfContents headings={headings} />
          </aside>
        </div>

        {relatedBlogs?.length > 0 && (
          <section className="mt-32 border-t border-outline-variant pt-16">
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface tracking-tight mb-10">Read Next</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
