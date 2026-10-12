import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cityCountries, citiesFor, PAGE_SIZE, listPath, cityPath } from '@/lib/cityDirectory';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import CitySearch from './CitySearch';
export default function CityListPage({ country, page = 1 }) {
  const info=cityCountries[country]; const cities=citiesFor(country);
  const pages=Math.ceil(cities.length/PAGE_SIZE);
  if (!info || !Number.isInteger(page) || page<1 || page>pages) notFound();
  return <article className="max-w-[1200px] mx-auto px-gutter py-16">
    <JsonLd data={breadcrumbSchema([{name:'Home',path:'/'},{name:'Service locations',path:'/locations'},{name:info.name,path:listPath(country)}])} />
    <Link href="/locations" className="text-primary underline">← All countries</Link>
    <h1 className="font-headline-md text-4xl md:text-5xl font-bold mt-8 mb-6">Freelance project directory: {info.name}</h1>
    <p className="font-body-main text-lg max-w-3xl text-on-surface-variant">Browse {cities.length.toLocaleString('en-US')} cities and towns for remote app, website and business software projects. Gagan Shukla delivers from Noida, India. A listed place is a service area, not a local office or client claim.</p>
    <Link href={`/hire/${info.market}`} className="inline-block mt-5 text-primary underline">Project terms and working together in {info.name} →</Link>
    <CitySearch country={country} cities={cities.map(({name,slug,region})=>({name,slug,region}))} />
    <h2 className="font-headline-md text-2xl font-bold mb-6">Cities and towns · page {page} of {pages}</h2>
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{cities.slice((page-1)*PAGE_SIZE,page*PAGE_SIZE).map(c=><li key={c.id}><Link href={cityPath(c)} className="block border border-outline-variant p-4 hover:border-primary"><span className="font-body-main font-bold">{c.name}</span><span className="block text-sm text-on-surface-variant mt-2">{c.region}</span></Link></li>)}</ul>
    <nav aria-label="City directory pages" className="flex flex-wrap gap-3 mt-10">{Array.from({length:pages},(_,i)=>i+1).map(n=><Link key={n} href={listPath(country,n)} aria-current={page===n?'page':undefined} className={`border p-3 ${page===n?'bg-on-surface text-white':'text-primary'}`}>{n}</Link>)}</nav>
    <p className="font-body-main text-sm text-on-surface-variant mt-10">Place names, regions and time zones adapted from <a className="underline" href="https://www.geonames.org/">GeoNames</a>, licensed <a className="underline" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. The directory is a selected dataset of populated places, not an exhaustive list of every city.</p>
  </article>;
}
