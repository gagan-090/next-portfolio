import assert from 'node:assert/strict';
import { servicesData } from '../src/data/services.js';
import { locationsData } from '../src/data/locations.js';
import { guidesData } from '../src/data/guides.js';

const base = process.env.BASE_URL || 'http://localhost:3100';
const decode = s => s.replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16))).replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const pages = [{path:'/'}].concat(servicesData.map(s => ({path:`/services/${s.slug}`, intro:s.intro})), locationsData.map(s => ({path:`/hire/${s.slug}`, intro:s.intro})), guidesData.map(s => ({path:`/guides/${s.slug}`, intro:s.intro})));
for (const page of pages) {
  const response = await fetch(base + page.path, { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, page.path);
  const html = await response.text();
  const title = decode(html.match(/<title>(.*?)<\/title>/s)[1]);
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/)[1]);
  assert.ok(title.length <= 60, `${page.path} title ${title.length}`);
  assert.ok(description.length <= 155, `${page.path} description ${description.length}`);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, page.path);
  assert.ok(!html.includes('href="tel:'), `${page.path} no phone-call CTA`);
  assert.ok(!html.includes('discovery call'), `${page.path} no sales-call promise`);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const faq = schemas.find(s => s['@type'] === 'FAQPage').mainEntity;
  assert.ok(faq.length >= 5 && faq.length <= 8, page.path);
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)[1];
  const text = decode(main.replace(/<script[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
  for (const f of faq) {
    assert.ok(text.includes(f.name), `${page.path} visible FAQ question`);
    assert.ok(text.includes(f.acceptedAnswer.text), `${page.path} matching visible FAQ answer`);
  }
  assert.ok(main.includes('<table'), `${page.path} scope comparison`);
  const person = schemas.find(s => s['@type'] === 'Person');
  assert.deepEqual(person.sameAs, ['https://www.linkedin.com/in/gagan-shukla-2624b826b/', 'https://github.com/gagan-090']);
  if (page.intro) {
    assert.ok(page.intro.split(/\s+/).length >= 40 && page.intro.split(/\s+/).length <= 60, page.path);
    assert.ok(text.includes(page.intro), `${page.path} visible introduction`);
  }
  console.log(`PASS ${page.path}: short metadata, visible FAQ/schema, table and written enquiry routes`);
}
console.log(`PASS all ${pages.length} audited pages`);
