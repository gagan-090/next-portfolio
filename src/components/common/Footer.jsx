import Link from 'next/link';
import { LinkedinIcon, GithubIcon, MailIcon } from '../ui/SocialIcons';
import { servicesData } from '@/data/services';
import { locationsData } from '@/data/locations';
import { site } from '@/lib/site';

const linkClass =
  'font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors underline decoration-1 underline-offset-4 uppercase tracking-widest';

export const Footer = () => {
  return (
    <footer className="no-print w-full bg-white border-t border-outline-variant">
      <div className="max-w-[1200px] mx-auto px-gutter py-stack-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-stack-md">
        <div>
          <Link href="/" className="inline-block mb-3" aria-label="Gagan Shukla — Home">
            <img src="/favicon.svg" alt="GS Logo" width={48} height={48} className="h-12 w-auto" />
          </Link>
          <p className="font-body-main text-[14px] text-on-surface-variant max-w-[280px] mb-4">
            Available for freelance projects only. Full stack developer building mobile apps, websites, CRM, ERP and SaaS products for clients in India and worldwide.
          </p>
          <p className="font-label-mono text-[11px] text-on-surface-variant">© {new Date().getFullYear()} GAGAN SHUKLA. BUILT WITH PRECISION.</p>
        </div>

        <nav aria-label="Services" className="flex flex-col gap-4">
          <span className="font-label-mono text-[11px] text-on-surface-variant uppercase tracking-widest">Services</span>
          <ul className="flex flex-col gap-2">
            {servicesData.map((s) => (
              <li key={s.slug}>
                <Link className="font-body-main text-[14px] text-on-surface-variant hover:text-primary transition-colors" href={`/services/${s.slug}`}>
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Freelance services by location" className="flex flex-col gap-4">
          <span className="font-label-mono text-[11px] text-on-surface-variant uppercase tracking-widest">Project locations</span>
          <ul className="flex flex-col gap-2">
            {locationsData.map((l) => (
              <li key={l.slug}>
                <Link className="font-body-main text-[14px] text-on-surface-variant hover:text-primary transition-colors" href={`/hire/${l.slug}`}>
                  {l.shortMarket || l.market}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer" className="flex flex-col gap-4">
          <span className="font-label-mono text-[11px] text-on-surface-variant uppercase tracking-widest">Navigation</span>
          <div className="flex flex-col gap-2">
            <Link className={linkClass} href="/about">About</Link>
            <Link className={linkClass} href="/projects">Projects</Link>
            <Link className={linkClass} href="/tech-stack">Tech Stack</Link>
            <Link className={linkClass} href="/experience">Experience</Link>
            <Link className={linkClass} href="/resume">Resume</Link>
            <Link className={linkClass} href="/guides">Guides</Link>
            <Link className={linkClass} href="/locations">City directory</Link>
            <Link className={linkClass} href="/blog">Blog</Link>
            <Link className={linkClass} href="/contact">Contact</Link>
          </div>
        </nav>

        <div className="flex flex-col gap-4">
          <span className="font-label-mono text-[11px] text-on-surface-variant uppercase tracking-widest">Get in touch</span>
          <a href={`mailto:${site.email}`} className="font-body-main text-[14px] text-on-surface hover:text-primary">{site.email}</a>
          <a href={`tel:${site.phone}`} className="font-body-main text-[14px] text-on-surface hover:text-primary">{site.phoneDisplay}</a>
          <div className="flex gap-4">
            <a aria-label="LinkedIn" className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-on-surface hover:text-white transition-all duration-200" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={20} strokeWidth={1.5} />
            </a>
            <a aria-label="GitHub" className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-on-surface hover:text-white transition-all duration-200" href={site.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={20} strokeWidth={1.5} />
            </a>
            <a aria-label="Email" className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-on-surface hover:text-white transition-all duration-200" href={`mailto:${site.email}`}>
              <MailIcon size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
