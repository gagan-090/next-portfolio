// Resume content: rendered at /resume and exported to public/Gagan_Shukla_Resume.pdf
// (`npm run resume:pdf`). Every bullet leads with an action verb and shows measurable impact where one exists.
import { experienceData } from './experience';

export const resume = {
  name: 'Gagan Shukla',
  headline: 'Full-Stack Software Engineer · Mobile (Flutter, React Native) · Web (Next.js) · CRM / ERP / HRMS',
  contact: [
    { label: 'gaganshuklarmg@gmail.com', href: 'mailto:gaganshuklarmg@gmail.com' },
    { label: 'WhatsApp project enquiries', href: 'https://wa.me/916394756798' },
    { label: 'Noida, India · Open to remote', href: null },
    { label: 'gaganshukla.in', href: 'https://www.gaganshukla.in' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gagan-shukla-2624b826b/' },
    { label: 'GitHub', href: 'https://github.com/gagan-090' },
  ],
  summary:
    'Full-stack software engineer with 4+ years of development experience, shipping production mobile apps, web apps and business systems (CRM, HRMS) for logistics, e-commerce and enterprise clients. Owns delivery end to end: REST APIs, PostgreSQL / Supabase / Firebase backends and offline-first sync through to pixel-perfect UIs and Play Store / App Store releases. Measured outcomes include ~30% faster load times, 40% higher user engagement and 30% fewer crashes. AWS Certified Cloud Practitioner and 2× national hackathon winner (Ministry of Education, Govt. of India).',
  skills: [
    { group: 'Mobile', items: 'Flutter (Dart) · React Native · Riverpod · Redux Toolkit · Android SDK · Jetpack Compose · FCM · Google Maps' },
    { group: 'Web', items: 'Next.js · React.js · TypeScript · JavaScript (ES6+) · Tailwind CSS · HTML5 / CSS3 · SEO & Core Web Vitals' },
    { group: 'Backend', items: 'Node.js · Express.js · Django REST · PHP · REST APIs · WebSockets · JWT / OAuth · Supabase Edge Functions' },
    { group: 'Data & Cloud', items: 'PostgreSQL · MongoDB · SQLite · Supabase · Firebase · AWS · Docker · GitHub Actions CI/CD · Vercel' },
    { group: 'Domains', items: 'Logistics & fleet · E-commerce & marketplaces · CRM · HRMS & payroll · Booking platforms · LLM chatbots' },
  ],
  experience: [
    {
      ...experienceData[0],
      bullets: [
        'Shipped TruckMitr, a production React Native logistics app on Google Play, for truck owners, drivers and business clients, with live GPS tracking, role-based auth and real-time FCM push notifications.',
        'Built TMConnect, a Flutter CRM for telecallers and field agents, from scratch to cross-platform release in under 3 months, with role-based dashboards and smooth, consistent animations.',
      ],
      dates: 'Oct 2025 – Present',
    },
    {
      ...experienceData[1],
      bullets: [
        'Cut app load time by ~30% by optimising REST API queries, adding database indexes and restructuring Redux state across React Native and Flutter projects.',
        'Built cross-platform apps with real-time Supabase / PostgreSQL sync, PHP REST APIs and secure role-based access, released to Android and iOS.',
      ],
      dates: 'Apr 2025 – Sep 2025',
    },
    {
      ...experienceData[2],
      bullets: [
        'Increased user engagement by 40% by designing and building a responsive UI for a MERN-stack e-learning platform, including a student project-showcase system.',
        'Led end-to-end UX for onboarding, course browsing and dashboards across student, instructor and admin roles; reduced drop-off by standardising components and micro-interactions.',
      ],
      dates: 'Oct 2024 – Mar 2025',
    },
  ],
  projects: [
    {
      name: 'HRMS & CRM',
      stack: 'React Native · Node.js · Supabase · Firebase Auth',
      href: 'https://www.gaganshukla.in/projects/hrms-crm',
      desc: 'Published on Play Store & App Store: attendance, leave, payroll and notifications in one employee app. Redux caching cut crashes by 30%; CI/CD pipeline for continuous delivery.',
    },
    {
      name: 'HashKart',
      stack: 'Flutter · Django REST · PostgreSQL · JWT',
      href: 'https://www.gaganshukla.in/projects/hashkart',
      desc: 'Multi-vendor e-commerce app with Admin / Seller / Buyer roles and REST APIs for orders, payments and vendor management.',
    },
    {
      name: 'AURA',
      stack: 'Flutter · Firebase · Razorpay · REST APIs',
      href: 'https://www.gaganshukla.in/projects/aura',
      desc: 'Experience-booking platform with curated discovery, real-time slot booking and Razorpay payments.',
    },
    {
      name: 'gaganshukla.in',
      stack: 'Next.js · Supabase · LLM API · Tailwind CSS',
      href: 'https://www.gaganshukla.in',
      desc: 'Server-rendered portfolio and blog with schema.org structured data, a Supabase-backed CMS and an LLM-powered assistant via Edge Functions.',
    },
  ],
  certifications: [
    'AWS Certified Cloud Practitioner (2023)',
    'IBM Cloud Computing Fundamentals (2023)',
    'Google Master in Machine Learning (2024)',
    'ISRO START: Space Technology & Applications (2025)',
  ],
  education: {
    degree: 'B.Tech, Computer Science & Engineering',
    school: 'Amity University, Raipur',
    dates: '2021 – 2025',
  },
  awards: [
    '2× National Winner, IDE Bootcamp & Think Tank 1.0, Ministry of Education, Govt. of India',
    '4× Smart India Hackathon Internal Winner (2021–2024)',
  ],
};
