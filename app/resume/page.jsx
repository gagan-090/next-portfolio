import ResumeSheet from '@/components/resume/ResumeSheet';
import PrintButton from '@/components/resume/PrintButton';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { pageMetadata, site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Resume — Gagan Shukla, Full-Stack Software Engineer',
  description:
    'Resume of Gagan Shukla: full-stack software engineer with 4+ years of development experience in Flutter, React Native and Next.js products, CRM and HRMS systems. AWS certified, 2× national hackathon winner.',
  path: '/resume',
  keywords: ['Gagan Shukla Resume', 'Flutter Developer Resume', 'React Native Developer CV', 'Full Stack Developer Resume India'],
});

export default function ResumePage() {
  return (
    <div className="bg-surface-container-low/60 print:bg-white py-10 md:py-16 px-4 print:p-0">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Resume', path: '/resume' }])} />
      <div className="no-print max-w-[210mm] mx-auto mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant">Updated Oct 2026 · One page · ATS-friendly</p>
        <div className="flex gap-3">
          <PrintButton />
          <a
            href={site.resumePdf}
            download="Gagan_Shukla_Resume.pdf"
            className="bg-[#0A0A0A] text-white px-5 py-2 font-label-mono text-[11px] uppercase tracking-widest font-bold hover:bg-[#2563EB] transition-colors inline-flex items-center gap-2"
          >
            Download PDF
            <span className="material-symbols-outlined text-[14px]" aria-hidden="true">download</span>
          </a>
        </div>
      </div>
      <ResumeSheet />
    </div>
  );
}
