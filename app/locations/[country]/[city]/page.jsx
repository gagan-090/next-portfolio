import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cityCountries, directoryCities, citiesFor, findCity, cityPath, listPath, PAGE_SIZE } from '@/lib/cityDirectory';
import { pageMetadata, site, absoluteUrl } from '@/lib/site';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';
import CityMeetingPlanner from '@/components/locations/CityMeetingPlanner';
import { FaqSection } from '@/components/services/ServiceBlocks';

export const revalidate = 86400;
export const dynamicParams = true;
// Pre-render examples. Every remaining directory URL is generated and cached on demand.
export function generateStaticParams() {
  return Object.keys(cityCountries).map(country => ({country,city:directoryCities.find(c=>c.country===country).slug}));
}
export async function generateMetadata({params}) {
  const {country,city:slug}=await params; const city=findCity(country,slug);
  if (!city) return {};
  return pageMetadata({title:`Freelance App & Web Developer for ${city.name}, ${city.region}`,description:`Discuss a remote app, website, SaaS or logistics project for ${city.name}, ${city.region}, ${cityCountries[country].name}. Gagan Shukla works from Noida, India.`,path:cityPath(city),noindex:true});
}
const services=[
  {slug:'web-development',title:'Website & lead enquiries',brief:'Bring your services, target customers, contact routes and examples of enquiries you want to receive.'},
  {slug:'mobile-app-development',title:'Mobile app',brief:'Define users, Android or iOS requirements, essential screens, notifications and offline needs.'},
  {slug:'logistics-app-development',title:'Logistics & fleet software',brief:'Map dispatch, driver tasks, trip records, tracking, proof of delivery and existing integrations.'},
  {slug:'saas-mvp-development',title:'SaaS product',brief:'Define the first customer workflow, account roles, tenant access, subscription rules and launch scope.'},
  {slug:'crm-development',title:'CRM & business systems',brief:'Describe lead sources, sales stages, staff permissions, reports and data to migrate.'},
];
export default async function CityPage({params}) {
  const {country,city:slug}=await params; const city=findCity(country,slug); if(!city)notFound();
  const info=cityCountries[country]; const all=citiesFor(country); const index=all.findIndex(c=>c.id===city.id);
  const nearby=all.filter(c=>c.id!==city.id && c.region===city.region).map(c=>({city:c,distance:(c.lat-city.lat)**2+(c.lng-city.lng)**2})).sort((a,b)=>a.distance-b.distance).slice(0,6);
  const faqs = [
    { q: `Can I work with a freelance developer for a project in ${city.name}?`, a: `Yes. Gagan Shukla offers remote app, website, SaaS, CRM and logistics development for businesses in ${city.name}, ${city.region}, ${info.name}. He works from Noida, India, and accepts freelance project contracts.` },
    { q: `How much does app or website development for ${city.name} cost?`, a: 'Pricing is based on your scope rather than your city. Share your users, essential features, integrations, platforms and content requirements for a written project quote. Hosting, subscriptions and third-party fees should be listed separately.' },
    { q: `How do we schedule project reviews from ${city.name}?`, a: `Use ${city.timezone} as your review time zone. The review-time converter below converts a proposed UTC deadline to both ${city.name} and Noida. Written reviews use email and WhatsApp; no calls required.` },
    { q: `Do you have a local office in ${city.name}?`, a: 'No. Delivery is remote from Noida, India. Overall portfolio totals are 28+ clients served and 20+ projects delivered; they do not represent completed work in every listed city.' },
    { q: 'What do I receive at handover?', a: 'The written scope defines source-code ownership, repository access, deployment instructions, credentials handover and support terms. Agree acceptance criteria and a complete user-journey test before approving the final milestone.' },
  ];
  const localService = { '@context':'https://schema.org', '@type':'Service', '@id':absoluteUrl(`${cityPath(city)}#service`), name:`Remote freelance software development for ${city.name}, ${city.region}`, serviceType:'Freelance Software Development', description:faqs[0].a, url:absoluteUrl(cityPath(city)), provider:{'@id':absoluteUrl('/#business')}, areaServed:{'@type':'City',name:city.name,containedInPlace:{'@type':'AdministrativeArea',name:city.region,containedInPlace:{'@type':'Country',name:info.name}}}, availableChannel:{'@type':'ServiceChannel',serviceUrl:absoluteUrl('/contact'),availableLanguage:['English','Hindi']} };
  const brief=`Hi Gagan, I am enquiring about a freelance development project for ${city.name}, ${city.region}, ${info.name}. Project type: __. Essential features: __. Timeline: __. Budget range: __. My preferred review hours (${city.timezone}): __.`;
  return <article className="max-w-[1200px] mx-auto px-gutter py-16">
    <JsonLd data={breadcrumbSchema([{name:'Home',path:'/'},{name:'Service locations',path:'/locations'},{name:info.name,path:listPath(country)},{name:`${city.name}, ${city.region}`,path:cityPath(city)}])} />
    <JsonLd data={localService} />
    <JsonLd data={faqSchema(faqs)} />
    <Link href={listPath(country,Math.floor(index/PAGE_SIZE)+1)} className="text-primary underline">← {info.name} city directory</Link>
    <p className="font-label-mono text-primary uppercase tracking-widest mt-10 mb-5">Remote freelance projects · {info.name}</p>
    <h1 className="font-headline-md text-4xl md:text-6xl font-bold max-w-4xl mb-6">Freelance development for {city.name}</h1>
    <p className="font-body-main text-xl max-w-3xl text-on-surface-variant leading-relaxed">For businesses in {city.name}, {city.region}, I offer remote website, app, SaaS, CRM and logistics development from Noida, India. I have 4+ years of development experience and accept freelance project contracts only.</p>
    <p className="font-body-main text-on-surface-variant mt-5">28+ clients served · 20+ projects delivered across my work. These totals do not imply clients or an office in {city.name}.</p>
    <div className="flex flex-wrap gap-5 mt-8"><a href={`${site.whatsapp}?text=${encodeURIComponent(brief)}`} target="_blank" rel="noopener noreferrer" className="bg-on-surface text-white px-6 py-4 font-body-main">Send your project brief</a><Link href="/contact" className="border border-on-surface px-6 py-4 font-body-main">Request a quote</Link></div>
    <section className="mt-16 border-t border-outline-variant pt-10"><h2 className="font-headline-md text-3xl font-bold mb-5">Plan your remote review</h2><p className="font-body-main text-on-surface-variant max-w-3xl mb-6">Directory location: {city.name}, {city.region}, {info.name}. Time zone: {city.timezone}. {info.note}</p><CityMeetingPlanner timezone={city.timezone} city={city.name} /></section>
    <section className="mt-12 max-w-3xl border border-outline-variant p-6"><h2 className="font-headline-md text-2xl font-bold mb-4">How much will your project cost?</h2><p className="font-body-main text-on-surface-variant leading-relaxed mb-4">The scope determines your quote: user roles, essential features, integrations, data migration, design and testing. Your location determines review hours and commercial arrangements, not an automatic price tier.</p><Link className="text-primary underline" href="/guides/freelance-software-development-cost">Cost, timeline and quote checklist →</Link></section>
    <section className="mt-16"><h2 className="font-headline-md text-3xl font-bold mb-6">Choose your project brief</h2><div className="grid md:grid-cols-2 gap-6">{services.map(service=><div key={service.slug} className="border border-outline-variant p-6"><h3 className="font-headline-md text-xl font-bold mb-3">{service.title}</h3><p className="font-body-main text-on-surface-variant mb-4">{service.brief}</p><Link className="text-primary underline" href={`/services/${service.slug}`}>See scope and deliverables →</Link></div>)}</div></section>
    <section className="mt-16 max-w-3xl"><h2 className="font-headline-md text-3xl font-bold mb-5">Review delivered work</h2><p className="font-body-main text-on-surface-variant mb-5">Review the work relevant to your requirements before agreeing a scope. Your quote will specify milestones, acceptance checks, code handover and ongoing support.</p><div className="flex flex-wrap gap-5"><Link href="/projects/vrc-mobility" className="text-primary underline">VRC Mobility</Link><Link href="/projects/truckmitr" className="text-primary underline">TruckMitr logistics app</Link><Link href="/projects/hrms-crm" className="text-primary underline">HRMS & CRM</Link><Link href={`/hire/${info.market}`} className="text-primary underline">Working together in {info.name}</Link></div></section>
    {nearby.length>0 && <section className="mt-16"><h2 className="font-headline-md text-2xl font-bold mb-5">Other places in {city.region}</h2><ul className="flex flex-wrap gap-4">{nearby.map(({city:c})=><li key={c.id}><Link className="text-primary underline" href={cityPath(c)}>{c.name}</Link></li>)}</ul></section>}
    <FaqSection faqs={faqs} heading={`App and web development for ${city.name}: answers`} />
    <p className="font-body-main text-sm text-on-surface-variant mt-14">Place details adapted from <a className="underline" href={`https://www.geonames.org/${city.id}/`}>GeoNames record {city.id}</a> under <a className="underline" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. The place record identifies the service area; it is not evidence of a local office or completed local project.</p>
  </article>;
}
