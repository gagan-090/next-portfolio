import HomeView from '@/views/HomeView';
import ScopeTable from '@/components/services/ScopeTable';
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
  {
    "q": "What logistics software do you build?",
    "a": "I scope driver apps, dispatch workflows and business dashboards for logistics teams. TruckMitr and TMConnect are relevant work you can review in my portfolio."
  },
  {
    "q": "How much development experience do you have?",
    "a": "I have 4+ years of development experience, with 28+ clients served and 20+ projects delivered across my work. These are owner-reported portfolio totals, not promises of results for a new project."
  },
  {
    "q": "Can you also build websites and SaaS products?",
    "a": "Yes, I offer freelance website, app, SaaS, CRM, HRMS and bid management development. My work includes VRC Mobility and the business software examples in my portfolio."
  },
  {
    "q": "Can we work without calls?",
    "a": "Yes, I handle project enquiries and written reviews through email and WhatsApp. Send your brief through the contact form or directly by email; no call booking is required."
  },
  {
    "q": "How much will my project cost?",
    "a": "I quote the scope after reviewing users, essential features, integrations and existing assets. The proposal separates development, recurring services and ongoing support."
  },
  {
    "q": "Can international businesses work with you?",
    "a": "Yes, I accept remote freelance project enquiries from India and worldwide. Scope, review deadlines, currency, payments and ownership are agreed in writing."
  },
  {
    "q": "Where are you based?",
    "a": "I am based in Noida, Uttar Pradesh, India. The country pages describe markets I can serve remotely and do not claim offices or client references in every location."
  }
];

export default async function HomePage() {
  const { data: latestBlogs } = await blogService.getBlogs({ limit: 3 });

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <HomeView latestBlogs={latestBlogs || []} faqs={homeFaqs} />
      <section className="max-w-[1200px] mx-auto px-gutter pb-16">
        <h2 className="font-headline-md text-2xl font-bold mb-4">Choose the scope for your first release</h2>
        <ScopeTable headers={['Project', 'First-release focus', 'What changes the quote']} rows={[
          ['Logistics app', 'One driver-to-office workflow', 'Offline actions, tracking and integrations'],
          ['Website', 'Clear services and working enquiry routes', 'Content, CMS and existing code'],
          ['SaaS or business software', 'One customer or staff workflow', 'Roles, tenant access, billing and migration'],
        ]} caption="Quotes follow a written scope review. Development, operating services and support are separate decisions." />
      </section>
    </>
  );
}
