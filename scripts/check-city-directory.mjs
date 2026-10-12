import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const cities=JSON.parse(await readFile(new URL('../src/data/cities.json',import.meta.url)));
assert.equal(cities.length,6000);
assert.equal(new Set(cities.map(c=>c.id)).size,6000);
assert.equal(new Set(cities.map(c=>`${c.country}/${c.slug}`)).size,6000);
for(const c of cities){
 assert.ok(['india','south-africa','usa'].includes(c.country));
 assert.match(c.slug,/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
 assert.ok(c.name && c.region);
 assert.ok(c.lat>=-90 && c.lat<=90 && c.lng>=-180 && c.lng<=180);
 new Intl.DateTimeFormat('en',{timeZone:c.timezone}).format(new Date('2026-01-01T12:00:00Z'));
}
const base=process.env.BASE_URL || 'http://localhost:3100';
const sitemap=await(await fetch(`${base}/sitemap.xml`)).text();
assert.ok(sitemap.includes('/locations</loc>'));
assert.ok(!sitemap.includes('/locations/'),'Shared-template city and listing routes must not enter sitemap');
const samples=[];
for(const country of ['india','south-africa','usa']){
 const rows=cities.filter(c=>c.country===country);
 for(const city of [rows[0],rows[Math.floor(rows.length/2)],rows.at(-1)])samples.push(`/locations/${country}/${city.slug}`);
 samples.push(`/locations/${country}`,`/locations/${country}/page/2`);
 console.log(`PASS data ${country}: ${rows.length} unique places`);
}
for(const path of samples){
 const response=await fetch(`${base}${path}`);assert.equal(response.status,200,path);
 const html=await response.text();
 assert.match(html,/<meta name="robots" content="noindex, follow"/);
 assert.ok(html.includes(`href="https://gaganshukla.in${path}"`),`${path} canonical`);
 assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,path);
 assert.match(html,/GeoNames/);
 console.log(`PASS ${path}`);
}
for(const path of ['/locations/unknown','/locations/india/unknown-city','/locations/india/page/999','/locations/india/page/0','/locations/india/page/1']){
 assert.equal((await fetch(`${base}${path}`)).status,404,path);
}
const ny=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',hour:'numeric',hour12:false});
assert.equal(ny.format(new Date('2026-01-15T12:00:00Z')),'07');
assert.equal(ny.format(new Date('2026-07-15T12:00:00Z')),'08');
console.log('PASS all 6,000 IDs/slugs/regions/coordinates/time zones, sampled rendered routes, exclusions, invalid routes and seasonal conversion');
