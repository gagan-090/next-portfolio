import HomeView from '@/views/HomeView';
import { blogService } from '@/lib/blogService';
import { JsonLd, faqSchema } from '@/components/seo/JsonLd';
import { pageMetadata, site } from '@/lib/site';

// Re-generate at most hourly so new blog posts appear without a redeploy.
export const revalidate = 3600;

export const metadata = {
  ...pageMetadata({
    title: site.title,
    description: site.description,
    path: '/',
    keywords: ['Hire Full Stack Developer', 'App Developer India', 'Custom Software Developer'],
  }),
  // The layout template would append "| Gagan Shukla" twice on the home page.
  title: { absolute: site.title },
};

const homeFaqs = [
  { q: 'How much development experience does Gagan Shukla have?', a: 'Gagan Shukla has 4+ years of development experience across mobile apps, websites and business software. His professional employment history is listed separately on the experience page.' },
  { q: 'Can Gagan develop logistics and transport software?', a: 'Yes. Gagan has worked on TruckMitr and TMConnect and offers freelance logistics app, fleet management and transport software development for Indian and international businesses.' },
  { q: 'What websites and business software has Gagan developed?', a: 'Gagan developed VRC Mobility (vrcmobility.in), a bid management system, HRMS and SaaS software. His portfolio also covers mobile apps, e-commerce and logistics products. Discuss your required features directly with him.' },
  {
    q: 'What does Gagan Shukla build?',
    a: 'Gagan Shukla builds Android and iOS apps (Flutter, React Native), websites and web apps (Next.js, React), SaaS products, bid management systems and business software such as CRM, ERP, HRMS and e-commerce platforms, including the backend, database and admin dashboards.',
  },
  {
    q: 'Is Gagan Shukla available for freelance projects?',
    a: 'Yes. He takes on fixed-scope projects, monthly retainers and dedicated-developer engagements for clients in India, the USA, UK, UAE, Europe, Canada, Australia and Singapore. Use the contact form, email gaganshuklarmg@gmail.com or message on WhatsApp at +91 63947 56798.',
  },
  {
    q: 'How many production apps has Gagan Shukla shipped?',
    a: 'He has shipped 5+ production applications, including the TruckMitr logistics app on Google Play and an HRMS & CRM app published on the Play Store and App Store.',
  },
  {
    q: 'How much does it cost to build an app or website?',
    a: 'Cost depends on scope: number of screens, user roles, integrations and platforms. After a free discovery call you receive a written scope with a fixed quote and milestone plan, so there are no surprises.',
  },
  {
    q: 'Can international clients hire Gagan Shukla?',
    a: 'Yes. He keeps a daily live-overlap window for calls in the client’s time zone (for example US mornings, the UK and EU working day, or a full day for the UAE), invoices in USD, GBP, EUR or AED, and accepts Wise, PayPal and wire transfers. NDAs and full IP assignment are standard.',
  },
  {
    q: 'Where is Gagan Shukla based?',
    a: 'He is based in Noida, Uttar Pradesh, India, meets Delhi NCR clients in person, and works remotely with clients across time zones.',
  },
];

export default async function HomePage() {
  const { data: latestBlogs } = await blogService.getBlogs({ limit: 3 });

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <HomeView latestBlogs={latestBlogs || []} faqs={homeFaqs} />
    </>
  );
}
