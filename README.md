# next-portfolio

Portfolio, services site and blog for Gagan Shukla. Migrated from the Vite + React Router SPA in `../gagan-portfolio`.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

Env vars (`.env.local`, and in Vercel → Settings → Environment Variables):

| Name | Note |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | was `VITE_SUPABASE_URL` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | was `VITE_SUPABASE_ANON_KEY` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | optional, Search Console |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | optional, Bing Webmaster |

## Where things live

- `app/`: routes. Each `page.jsx` is a server component that exports metadata + JSON-LD.
- `src/views/`: interactive (client) page bodies ported from the old `src/pages`.
- `src/data/`: content. `services.js` drives `/services/*`; `resume.js` drives `/resume` and the PDF.
- `src/lib/site.js`: name, contact details, SEO defaults.

## Resume PDF

Edit `src/data/resume.js`, start the site, then:

```bash
BASE_URL=http://localhost:3000 npm run resume:pdf   # writes public/Gagan_Shukla_Resume.pdf
```

## SEO checklist after deploy

1. Add the domain in Google Search Console and submit `https://www.gaganshukla.in/sitemap.xml`.
2. Same in Bing Webmaster Tools (it also feeds ChatGPT search).
3. Create or claim a Google Business Profile ("Software developer", Noida) linking to the site.
4. Validate a page at https://search.google.com/test/rich-results.
