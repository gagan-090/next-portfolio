import ExperienceView from '@/views/ExperienceView';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Work Experience — Flutter, React Native & Full Stack Developer',
  description:
    "Gagan Shukla's professional experience at TruckMitr, Easyian and Codelevate: shipping production logistics apps, cross-platform Flutter/React Native products and MERN-stack web platforms.",
  path: '/experience',
  keywords: ['Gagan Shukla Experience', 'Flutter Developer Experience', 'React Native Developer Career'],
});

export default function ExperiencePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Experience', path: '/experience' }])} />
      <ExperienceView />
    </>
  );
}
