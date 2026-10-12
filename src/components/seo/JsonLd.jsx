import { SITE_URL, site, absoluteUrl } from '@/lib/site';

/**
 * JSON-LD structured data, rendered on the server so crawlers see it in the initial HTML.
 * `<` is escaped to keep user-supplied strings (e.g. blog titles) from breaking out of the script tag.
 */
export const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
  />
);

const personRef = { '@id': `${SITE_URL}/#person` };

export const personSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: site.name,
  givenName: 'Gagan',
  familyName: 'Shukla',
  jobTitle: site.jobTitle,
  description: site.description,
  url: SITE_URL,
  image: absoluteUrl('/opengraph-image'),
  email: `mailto:${site.email}`,
  knowsLanguage: ['English', 'Hindi'],
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Amity University, Raipur' },
  knowsAbout: [
    'Flutter', 'Dart', 'React Native', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'Django',
    'TypeScript', 'JavaScript', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'AWS', 'Docker',
    'Mobile App Development', 'Web Development', 'CRM Development', 'ERP Development', 'HRMS',
    'SaaS Development', 'Logistics App Development', 'Fleet Management Software', 'Transport Management Systems', 'Bid Management Software', 'Tender Management Systems', 'REST APIs', 'WebSockets', 'Clean Architecture', 'UI/UX Engineering',
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'AWS Certified Cloud Practitioner', credentialCategory: 'certification' },
    { '@type': 'EducationalOccupationalCredential', name: 'IBM Cloud Computing Fundamentals', credentialCategory: 'certification' },
  ],
  award: [
    '2× National Winner — IDE Bootcamp & Think Tank 1.0, Ministry of Education, Govt. of India',
    '4× Smart India Hackathon Internal Winner (2021–2024)',
  ],
  sameAs: [site.linkedin, site.github],
  worksFor: { '@type': 'Organization', name: 'TruckMitr Corporate Services' },
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: `${site.name} — Developer Portfolio`,
  alternateName: 'Gagan Shukla Portfolio',
  url: SITE_URL,
  description: site.description,
  inLanguage: 'en',
  publisher: personRef,
});

// Describe the freelance business consistently; structured data does not guarantee rankings.
export const professionalServiceSchema = (services = []) => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: `${site.name} — App, Web, SaaS & Business Software Development`,
  url: SITE_URL,
  image: absoluteUrl('/opengraph-image'),
  logo: absoluteUrl('/favicon.png'),
  email: site.email,
  telephone: site.phone,
  founder: personRef,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  areaServed: [
    'India', 'United States', 'United Kingdom', 'United Arab Emirates', 'Canada',
    'Australia', 'Singapore', 'Germany', 'Netherlands', 'South Africa',
  ].map((name) => ({ '@type': 'Country', name })),
  currenciesAccepted: 'INR, USD, GBP, EUR, AED, CAD, AUD, SGD',
  paymentAccepted: 'UPI, Bank Transfer, Wise, PayPal, Wire Transfer',
  knowsLanguage: ['English', 'Hindi'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Project enquiries',
    email: site.email,
    telephone: site.phone,
    url: absoluteUrl('/contact'),
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [site.linkedin, site.github],
  ...(services.length
    ? {
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software Development Services',
          itemListElement: services.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.name, url: absoluteUrl(`/services/${s.slug}`) },
          })),
        },
      }
    : {}),
});

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
});

export const serviceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': absoluteUrl(`/services/${service.slug}#service`),
  name: service.name,
  serviceType: service.name,
  description: service.metaDescription,
  url: absoluteUrl(`/services/${service.slug}`),
  provider: { '@id': `${SITE_URL}/#business` },
  areaServed: [{ '@type': 'Country', name: 'India' }, { '@type': 'Place', name: 'Worldwide' }],
});

export const profilePageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: `About ${site.name}`,
  url: absoluteUrl('/about'),
  mainEntity: personRef,
});

export const projectSchema = (project) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: project.title,
  description: project.ai_summary || project.description,
  url: absoluteUrl(`/projects/${project.id}`),
  applicationCategory: project.category || 'BusinessApplication',
  operatingSystem: 'Android, iOS',
  author: personRef,
  keywords: (project.techStack || project.tags || []).join(', '),
  ...(project.github ? { codeRepository: project.github } : {}),
});

export const blogPostingSchema = (post) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  image: post.cover_image_url || absoluteUrl('/opengraph-image'),
  datePublished: post.published_at,
  dateModified: post.updated_at || post.published_at,
  author: { '@type': 'Person', name: post.author?.full_name || site.name, url: SITE_URL },
  publisher: personRef,
  mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(`/blog/${post.slug}`) },
});
