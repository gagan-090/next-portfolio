// Single source of truth for identity, URLs and SEO defaults.
export const SITE_URL = 'https://gaganshukla.in';

export const site = {
  name: 'Gagan Shukla',
  shortName: 'Gagan Shukla',
  title: 'Gagan Shukla | Freelance App, Web & SaaS Developer',
  tagline: 'Freelance Developer for Apps, Websites, SaaS & Business Software',
  description:
    'Freelance app, web and SaaS developer with 4+ years of development experience. Logistics, CRM and HRMS software for India and worldwide. Freelance projects only.',
  jobTitle: 'Freelance Full Stack Developer',
  developmentExperience: '4+ years',
  clientsServed: '28+',
  projectsDelivered: '20+',
  email: 'gaganshuklarmg@gmail.com',
  businessEmail: 'contact@gaganshukla.in',
  phone: '+916394756798',
  phoneDisplay: '+91 63947 56798',
  whatsapp: 'https://wa.me/916394756798',
  locality: 'Noida',
  region: 'Uttar Pradesh',
  country: 'IN',
  linkedin: 'https://www.linkedin.com/in/gagan-shukla-2624b826b/',
  github: 'https://github.com/gagan-090',
  twitter: '@gaganshukla',
  resumePdf: '/Gagan_Shukla_Resume.pdf',
  locale: 'en_IN',
  keywords: [
    'Gagan Shukla',
    'Freelance Full Stack Developer',
    'Freelance App Developer India',
    'Hire Offshore Developer India',
    'Full Stack Developer India',
    'Hire Flutter Developer',
    'Hire React Native Developer',
    'Mobile App Development Services',
    'Freelance Logistics App Developer',
    'Fleet Management Software Development',
    'Transport Management Software Developer',
    'Website Development Services',
    'Next.js Developer',
    'CRM Development',
    'ERP Development',
    'HRMS Software Development',
    'Custom Software Development India',
    'SaaS MVP Development',
    'Bid Management Software Development',
    'Tender Management System Developer',
    'Freelance App Developer Noida',
    'Freelance Web Developer India',
    'Remote Developer for US UK UAE Clients',
  ],
};

export const absoluteUrl = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

/**
 * Build per-page Next.js metadata with consistent canonical, OG and Twitter tags.
 */
export function pageMetadata({ title, description, path = '/', keywords = [], images, type = 'website', noindex = false }) {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords: [...keywords, ...site.keywords.slice(0, 4)],
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: `${site.name} — Developer Portfolio`,
      locale: site.locale,
      // Child metadata replaces the parent's openGraph object, so always set an image.
      images: images || [{ url: '/opengraph-image', width: 1200, height: 630, alt: site.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: site.twitter,
      images: images || ['/opengraph-image'],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
