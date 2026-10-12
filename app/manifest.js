import { site } from '@/lib/site';

export default function manifest() {
  return {
    name: `${site.name} — Freelance App, Web & SaaS Developer`,
    short_name: site.shortName,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0A0A0A',
    lang: 'en',
    categories: ['portfolio', 'technology', 'business'],
    icons: [
      { src: '/favicon.png', sizes: '192x192', type: 'image/png' },
      { src: '/favicon.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  };
}
