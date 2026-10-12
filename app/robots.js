import { SITE_URL } from '@/lib/site';

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api', '/api/'] },
      // Search and AI crawlers may access public content. Access does not guarantee inclusion.
      { userAgent: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended'], allow: '/', disallow: ['/api', '/api/'] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
