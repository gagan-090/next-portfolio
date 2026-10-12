import { resume } from '@/data/resume';

// Single-column, real-text layout: parses cleanly in ATS systems and fits one A4 page.
const Heading = ({ children }) => (
  <h2 className="font-body-main text-[9.4pt] font-bold uppercase tracking-normal text-[#2563EB] border-b border-[#0A0A0A] pb-[2px] mb-[5px] mt-[9px]">
    {children}
  </h2>
);

export default function ResumeSheet() {
  return (
    <article
      id="resume"
      className="resume-sheet bg-white text-[#1d1b20] mx-auto w-full max-w-[210mm] min-h-[297mm] px-[13mm] py-[9mm] text-[9pt] leading-[1.38] font-body-main shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-outline-variant print:shadow-none print:border-0 print:min-h-0"
    >
      {/* Header */}
      <header className="border-b-2 border-[#0A0A0A] pb-[7px]">
        <h1 className="font-headline-md text-[22pt] font-extrabold tracking-tight leading-none text-[#0A0A0A]">{resume.name}</h1>
        <p className="mt-[5px] text-[9.6pt] font-bold text-[#0A0A0A]">{resume.headline}</p>
        <p className="mt-[4px] text-[8.6pt] text-[#494551]">
          {resume.contact.map((c, i) => (
            <span key={c.label}>
              {i > 0 && <span className="mx-[6px] text-[#cbc4d2]">|</span>}
              {c.href ? (
                <a href={c.href} className="underline decoration-[#cbc4d2] underline-offset-2 hover:text-[#2563EB]">{c.label}</a>
              ) : (
                c.label
              )}
            </span>
          ))}
        </p>
      </header>

      <Heading>Summary</Heading>
      <p className="text-[#2b2830]">{resume.summary}</p>

      <Heading>Technical Skills</Heading>
      <dl className="grid grid-cols-[92px_1fr] gap-y-[2px]">
        {resume.skills.map((s) => (
          <div key={s.group} className="contents">
            <dt className="font-bold text-[#0A0A0A]">{s.group}</dt>
            <dd className="text-[#2b2830]">{s.items}</dd>
          </div>
        ))}
      </dl>

      <Heading>Experience</Heading>
      <div className="flex flex-col gap-[6px]">
        {resume.experience.map((job) => (
          <section key={job.id} className="break-inside-avoid">
            <div className="flex justify-between items-baseline gap-4">
              <h3 className="text-[9.8pt]">
                <span className="font-bold text-[#0A0A0A]">{job.role}</span>
                <span className="text-[#494551]"> · {job.company}, {job.location}</span>
              </h3>
              <span className="text-[8.6pt] text-[#494551] whitespace-nowrap italic">{job.dates}</span>
            </div>
            <ul className="list-disc pl-[14px] mt-[2px] space-y-[1px] marker:text-[#2563EB]">
              {job.bullets.map((b) => (
                <li key={b} className="text-[#2b2830]">{b}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Heading>Selected Projects</Heading>
      <div className="flex flex-col gap-[4px]">
        {resume.projects.map((p) => (
          <section key={p.name} className="break-inside-avoid">
            <h3 className="text-[9.6pt]">
              <a href={p.href} className="font-bold text-[#0A0A0A] hover:text-[#2563EB]">{p.name}</a>
              <span className="text-[#494551] text-[8.6pt]"> · {p.stack}</span>
            </h3>
            <p className="text-[#2b2830]">{p.desc}</p>
          </section>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-[8mm]">
        <div>
          <Heading>Education</Heading>
          <p className="font-bold text-[#0A0A0A]">{resume.education.degree}</p>
          <p className="text-[#494551]">{resume.education.school} · {resume.education.dates}</p>
          <Heading>Awards</Heading>
          <ul className="list-disc pl-[14px] space-y-[1px] marker:text-[#2563EB]">
            {resume.awards.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
        <div>
          <Heading>Certifications</Heading>
          <ul className="list-disc pl-[14px] space-y-[1px] marker:text-[#2563EB]">
            {resume.certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </article>
  );
}
