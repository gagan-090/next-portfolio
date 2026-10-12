'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function CitySearch({ cities, country }) {
  const [query,setQuery] = useState('');
  const normalise=text=>text.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLocaleLowerCase();
  const term=normalise(query.trim());
  const matches=term.length>=2 ? cities.filter(c => normalise(`${c.name} ${c.region}`).includes(term)) : [];
  return <section className="my-10 max-w-2xl">
    <label htmlFor="city-search" className="block font-body-main font-bold mb-3">Find a city or region</label>
    <input id="city-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Enter at least 2 characters" className="w-full border border-outline-variant p-4 font-body-main" />
    {term.length>=2 && <><p role="status" className="font-body-main text-sm mt-3">{matches.length} matches{matches.length>30 ? ' · showing the first 30' : ''}</p><ul className="mt-3 space-y-3">{matches.slice(0,30).map(c=><li key={c.slug}><Link className="text-primary underline" href={`/locations/${country}/${c.slug}`}>{c.name}, {c.region}</Link></li>)}</ul></>}
  </section>;
}
