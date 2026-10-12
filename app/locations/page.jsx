import Link from 'next/link';
import {cityCountries,citiesFor,directoryCities} from '@/lib/cityDirectory';
import {pageMetadata} from '@/lib/site';
import {JsonLd,breadcrumbSchema} from '@/components/seo/JsonLd';
export const metadata=pageMetadata({title:'Remote Freelance Project Locations — India, South Africa & USA',description:'Find your city in the freelance service directory. Plan app, website, SaaS and logistics projects with Gagan Shukla, based in Noida and serving clients remotely.',path:'/locations'});
export default function Locations(){return <article className="max-w-[1200px] mx-auto px-gutter py-16">
 <JsonLd data={breadcrumbSchema([{name:'Home',path:'/'},{name:'Service locations',path:'/locations'}])}/>
 <p className="font-label-mono text-primary uppercase tracking-widest mb-5">Freelance projects worldwide</p>
 <h1 className="font-headline-md text-4xl md:text-6xl font-bold max-w-4xl mb-6">Your city. A remote project team.</h1>
 <p className="font-body-main text-xl text-on-surface-variant max-w-3xl leading-relaxed">Work directly with Gagan Shukla on apps, websites, SaaS, CRM and logistics software. I am based in Noida, India, and serve clients remotely. This directory covers {directoryCities.length.toLocaleString('en-US')} real cities and towns across three countries.</p>
 <div className="grid md:grid-cols-3 gap-6 mt-12">{Object.entries(cityCountries).map(([slug,info])=><Link key={slug} href={`/locations/${slug}`} className="border border-outline-variant p-8 hover:border-primary"><h2 className="font-headline-md text-2xl font-bold mb-4">{info.name}</h2><p className="font-body-main text-on-surface-variant">{citiesFor(slug).length.toLocaleString('en-US')} places · browse and search →</p></Link>)}</div>
 <section className="mt-16 max-w-3xl"><h2 className="font-headline-md text-3xl font-bold mb-5">Start with your business requirements</h2><p className="font-body-main text-on-surface-variant leading-relaxed mb-6">City pages help you identify your location, compare written review deadlines and prepare a project brief. They do not imply local offices or past clients. For a quote, share the product type, users, essential features, timeline and budget range. We then agree scope, milestones and handover.</p><Link href="/contact" className="text-primary underline">Discuss your freelance project →</Link></section>
 <p className="font-body-main text-sm text-on-surface-variant mt-12">Geographic data adapted from <a href="https://www.geonames.org/" className="underline">GeoNames</a>, <a href="https://creativecommons.org/licenses/by/4.0/" className="underline">CC BY 4.0</a>. Coverage is a selected set of populated places, not every city in each country.</p>
 </article>;}
