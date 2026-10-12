import { site, SITE_URL } from '@/lib/site';
import { servicesData } from '@/data/services';
import { projectsData } from '@/data/projects';
import { deliveredProjects } from '@/data/deliveredProjects';
import { locationsData } from '@/data/locations';
import { guidesData } from '@/data/guides';

export const dynamic = 'force-static';

export function GET() {
  const lines = [
    `# ${site.name} — Freelance Developer`,
    '', site.description, '',
    `Overall portfolio totals: ${site.clientsServed} clients served; ${site.projectsDelivered} projects delivered. Owner-confirmed, not per-city totals.`,
    `City directory: ${SITE_URL}/locations (6,000 populated places in India, South Africa and USA; remote delivery from Noida).`,
    `Development experience: ${site.developmentExperience}. Logistics experience includes TruckMitr and TMConnect.`,
    `Based in ${site.locality}, ${site.region}, India. Available for remote freelance projects worldwide.`,
    `Website: ${SITE_URL}`, `Project enquiries: ${SITE_URL}/contact`,
    `Email: ${site.email}`, `Phone: ${site.phoneDisplay}`, `WhatsApp: ${site.whatsapp}`,
    '', '## Services',
    ...servicesData.flatMap((service) => [
      '', `### ${service.name}`, `${SITE_URL}/services/${service.slug}`, service.intro,
      'Potential deliverables (scope agreed per project):',
      ...service.deliverables.map((d) => `- ${d.title}: ${d.desc}`),
      ...service.faqs.flatMap((f) => [`Q: ${f.q}`, `A: ${f.a}`]),
    ]),
    '', '## Owner-confirmed website and business software work',
    ...deliveredProjects.flatMap((p) => ['', `### ${p.title}`, p.description, `${SITE_URL}/projects/${p.id}`, ...(p.url ? [`Public website: ${p.url}`] : [])]),
    '', '## Additional portfolio projects',
    ...projectsData.map((p) => `- ${p.title}: ${p.ai_summary || p.description} (${SITE_URL}/projects/${p.id})`),
    '', '## Working internationally',
    'Clients from any country may enquire. Scope, fees, payment terms, delivery dates and communication hours are agreed before work begins.',
    ...locationsData.map((l) => `- ${l.market}: ${SITE_URL}/hire/${l.slug}`),
    '', '## Buying guides',
    ...guidesData.map((g) => `- ${g.title}: ${SITE_URL}/guides/${g.slug}`),
    '', '## Sources and limitations',
    'This is a first-party summary of the portfolio and offered services. Features listed as potential deliverables are not claims about previous projects. VRC Mobility figures are owner-reported: approximately 25,000 pages indexed and 350+ leads in 15 days. They have not been independently verified here and do not guarantee future results.',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
