import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
const source = readFileSync(new URL('../src/lib/blogService.js', import.meta.url), 'utf8');
const loader = source.slice(source.indexOf('export async function getAllBlogSlugs')).replace('export async function', 'async function') + '\nglobalThis.loadSlugs = getAllBlogSlugs;';
async function check(total, serverLimit = 1000, errorAt) {
  const records = Array.from({length: total}, (_, id) => ({slug: `post-${String(id).padStart(6, '0')}`, published_at:'2026-10-12'}));
  const requestedOffsets = [];
  const query = {
    from(table){ assert.equal(table, 'blogs'); return this; },
    select(columns){ assert.equal(columns, 'slug, published_at, updated_at'); return this; },
    eq(column, value){ assert.equal(column, 'status'); assert.equal(value, 'published'); return this; },
    order(column, options){ assert.equal(column, 'slug'); assert.equal(options.ascending, true); return this; },
    async range(from, to){
      requestedOffsets.push(from);
      if (from === errorAt) return {data:null, error:new Error('Read failed')};
      return {data:records.slice(from, Math.min(to + 1, from + serverLimit)), error:null};
    },
  };
  const context = {client:()=>query};
  runInNewContext(loader, context);
  const loaded = await context.loadSlugs();
  if (errorAt !== undefined) assert.equal(loaded.length,0,'Failed fetch must not publish a partial sitemap');
  else {
    assert.equal(loaded.length,total,'All published slugs must be included');
    assert.equal(new Set(loaded.map(p=>p.slug)).size,total,'No skipped or duplicate rows');
    if(total) assert.equal(loaded.at(-1).slug,records.at(-1).slug,'Final row must be included');
  }
  console.log(`PASS sitemap pagination: ${total} records, server limit ${serverLimit}${errorAt !== undefined ? ', read failure' : ''}, ${requestedOffsets.length} requests`);
}
await check(0);
await check(1000);
await check(6001);
await check(6001,100);
await check(6001,1000,1000);
