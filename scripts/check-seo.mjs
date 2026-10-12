// Run against a local or deployed site: BASE_URL=https://gaganshukla.in npm run seo:check
import assert from 'node:assert/strict';
const baseUrl = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
const canonicalBase = 'https://gaganshukla.in';
const paths = ['/', '/locations', '/projects', '/projects/vrc-mobility', '/projects/bid-management-system', '/projects/saas-software', '/projects/hrms-crm', '/services/web-development', '/services/saas-mvp-development', '/services/bid-management-software', '/hire/varanasi', '/hire/south-africa', '/hire/delhi-ncr', '/hire', '/hire/india', '/hire/usa', '/hire/uk', '/hire/uae', '/contact', '/guides/plan-custom-software-project', '/guides/choose-best-freelance-developer', '/guides/logistics-app-development-requirements', '/services/logistics-app-development', '/about', '/experience', '/resume'];
async function read(path) {
  const response = await fetch(`${baseUrl}${path}`, { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${path} must return HTTP 200`);
  return response.text();
}
for (const path of paths) {
  const html = await read(path);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${path} needs exactly one H1`);
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/);
  assert.equal(canonical?.[1], `${canonicalBase}${path === '/' ? '' : path}`, `${path} canonical`);
  assert.match(html, /<meta name="description" content="[^"]+"/, `${path} description`);
  assert.match(html, /<meta property="og:image" content="[^"]+"/, `${path} social preview`);
  assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html), `${path} should be indexable`);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  assert.ok(schemas.some((s) => s['@type'] === 'Person'), `${path} person identity`);
  assert.ok(schemas.some((s) => s['@type'] === 'ProfessionalService'), `${path} business identity`);
  if (path !== '/') assert.ok(schemas.some((s) => s['@type'] === 'BreadcrumbList'), `${path} breadcrumbs`);
  if (['/', '/about', '/experience'].includes(path)) assert.match(html, /4(?:\+|<!-- -->\+)|4 Years\+/, `${path} development experience`);
  if (path === '/projects/vrc-mobility') {
    assert.match(html, /350\+/, 'Owner-reported leads');
    assert.match(html, /25,000/, 'Owner-reported page count');
    assert.match(html, /not been independently verified/, 'Results attribution');
  }
  if (path === '/hire/south-africa') {
    const service = schemas.find((s) => s['@type'] === 'Service');
    assert.equal(service.areaServed.name, 'South Africa');
    assert.match(html, /not offices/, 'Remote service area disclosure');
  }
  if (path === '/') {
    assert.ok(html.includes('aria-label="28+ Clients Served"'), '28+ clients served');
    assert.ok(html.includes('aria-label="20+ Projects Delivered"'), '20+ projects delivered');
  }
  if (path === '/hire') assert.match(html, /not employment or recruitment/, 'Freelance-only availability');
  if (path === '/projects/vrc-mobility') assert.match(html, /https:\/\/vrcmobility\.in/, 'VRC public project link');
  console.log(`PASS ${path}: content, canonical, metadata, structured data`);
}
const sitemap = await read('/sitemap.xml');
for (const path of paths) assert.ok(sitemap.includes(`${canonicalBase}${path === '/' ? '</loc>' : `${path}</loc>`}`), `${path} must be in sitemap`);
const robots = await read('/robots.txt');
assert.match(robots, /Sitemap: https:\/\/gaganshukla\.in\/sitemap\.xml/);
assert.match(robots, /User-Agent: OAI-SearchBot/i);
assert.match(robots, /Disallow: \/api/);
for (const path of ['/llms.txt', '/llms-full.txt']) {
  const text = await read(path);
  for (const term of ['VRC Mobility', 'Bid Management', 'SaaS', '4+ years', 'logistics', 'gaganshuklarmg@gmail.com']) assert.ok(text.toLowerCase().includes(term.toLowerCase()), `${path} missing ${term}`);
}
const missing = await fetch(`${baseUrl}/projects/nonexistent-seo-check`);
assert.equal(missing.status, 404, 'Unknown project should return 404');
console.log('PASS sitemap, crawler rules, AI reference files, and unknown-project 404');
