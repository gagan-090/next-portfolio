import TechStackView from '@/views/TechStackView';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Tech Stack — Flutter, React Native, Next.js, Node.js & Supabase',
  description:
    "Gagan Shukla's engineering toolkit: Flutter, React Native, React/Next.js, Node.js, PostgreSQL, Supabase, Firebase and AWS, used to build apps, websites, CRM and ERP systems.",
  path: '/tech-stack',
  keywords: ['Flutter Developer Skills', 'React Native Skills', 'Full Stack Developer Skills', 'Next.js Developer'],
});

export default function TechStackPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tech Stack', path: '/tech-stack' }])} />
      <TechStackView />
    </>
  );
}
