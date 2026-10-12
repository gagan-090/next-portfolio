import AboutView from '@/views/AboutView';
import { JsonLd, breadcrumbSchema, profilePageSchema } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'About Gagan Shukla — Full Stack Developer in Noida, India',
  description:
    'Gagan Shukla is a full stack software engineer in Noida, India with 4+ years of development experience in apps, websites, SaaS and logistics software. Available for freelance projects worldwide.',
  path: '/about',
  keywords: ['About Gagan Shukla', 'Full Stack Developer Noida', 'Software Engineer India', 'AWS Certified Developer'],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])} />
      <JsonLd data={profilePageSchema()} />
      <AboutView />
    </>
  );
}
