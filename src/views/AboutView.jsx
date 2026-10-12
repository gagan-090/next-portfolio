'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import nanoBananaDev from '../assets/nano_banana_dev.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const recognition = [
  { icon: 'military_tech', year: '2021–24', title: '2× National Winner', description: 'IDE Bootcamp & Think Tank 1.0, Ministry of Education, Govt. of India. Plus 4× Smart India Hackathon internal winner.' },
  { icon: 'verified', year: '2023', title: 'AWS Certified Cloud Practitioner', description: 'Cloud fundamentals for deploying and scaling production apps on AWS. Also IBM Cloud Computing Fundamentals (2023).' },
  { icon: 'workspace_premium', year: '2024–25', title: 'Google ML & ISRO START', description: 'Google Master in Machine Learning (2024) and ISRO START: Space Technology & Applications (2025).' },
];

export const About = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Amity University, Raipur',
      description: 'B.Tech in Computer Science & Engineering. Won national recognition twice (IDE Bootcamp & Think Tank 1.0, Ministry of Education) and four Smart India Hackathon internal rounds while building a foundation in data structures, algorithms and software architecture.'
    },
    {
      year: 'Oct 2024',
      title: 'Codelevate',
      description: 'Designed and built the UI for a MERN-stack e-learning platform, raising user engagement by 40% and standardising UX flows across student, instructor and admin roles.'
    },
    {
      year: 'Apr 2025',
      title: 'Easyian',
      description: 'Shipped cross-platform Flutter and React Native apps with real-time Supabase/PostgreSQL sync, cutting app load time by ~30% through API, indexing and state-management optimisation.'
    },
    {
      year: 'Oct 2025',
      title: 'TruckMitr',
      description: 'Shipped the TruckMitr logistics app to the Play Store and built the TMConnect field-agent CRM from scratch, delivering live GPS tracking, role-based access and real-time notifications.'
    }
  ];

  return (
    <div className="w-full bg-white select-none">

      {/* Section 1: Introduction */}
      <section className="max-w-[1200px] mx-auto px-gutter pt-12 md:pt-20 pb-section-padding">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-stack-md"
        >
          <motion.div variants={fadeUp} className="md:col-span-7 flex flex-col justify-center">
            <span className="font-label-mono text-label-mono text-primary tracking-[0.3em] mb-4">01</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 text-on-surface leading-tight break-words">About Me</h1>
            <div className="hairline-h w-24 mb-8"></div>
            <p className="font-body-main text-body-main max-w-lg mb-8 text-on-surface-variant leading-relaxed">
              <strong>Who I am:</strong> I am Gagan Shukla, a freelance full-stack developer based in Noida, India, with 4+ years of development experience. I build mobile apps, websites, SaaS and business systems (CRM, ERP, HRMS) for Indian and international clients, including logistics businesses.
            </p>
            <p className="font-body-main text-body-main max-w-lg mb-8 text-on-surface-variant leading-relaxed">
              <strong>Core expertise:</strong> Cross-platform apps in Flutter and React Native, web apps in Next.js and React, and Node.js / Supabase / PostgreSQL backends. I specialise in offline-first sync, real-time features, role-based business software and polished UI.
            </p>
            <p className="font-body-main text-body-main max-w-lg mb-12 text-on-surface-variant leading-relaxed">
              <strong>Work philosophy:</strong> My work focuses on building seamless user experiences through technical rigor, clean code architecture, and meticulous attention to visual detail. I believe in bridging the gap between design aesthetic and backend capability.
            </p>
            
            {/* Stat Grid */}
            <div className="grid grid-cols-2 gap-y-12 border-t border-outline-variant pt-12">
              <div className="min-w-0">
                <p className="font-headline-md text-headline-md text-on-surface break-words">4+</p>
                <p className="font-label-mono text-label-mono uppercase text-on-surface-variant break-words">Years Development Experience</p>
              </div>
              <div className="min-w-0">
                <p className="font-headline-md text-headline-md text-on-surface break-words">5+</p>
                <p className="font-label-mono text-label-mono uppercase text-on-surface-variant break-words">Production Apps</p>
              </div>
              <div className="min-w-0">
                <p className="font-headline-md text-headline-md text-on-surface break-words">30-40%</p>
                <p className="font-label-mono text-label-mono uppercase text-on-surface-variant break-words">Performance Boost</p>
              </div>
              <div className="min-w-0">
                <p className="font-headline-md text-headline-md text-on-surface break-words">2×</p>
                <p className="font-label-mono text-label-mono uppercase text-on-surface-variant break-words">National Winner</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-[4/5] border border-outline-variant overflow-hidden bg-surface-container">
              <Image
                src={nanoBananaDev}
                alt="Gagan Shukla's app development workspace"
                fill
                sizes="(min-width: 768px) 460px, 100vw"
                placeholder="blur"
                className="object-cover"
              />
              <div className="absolute inset-0 border-[16px] border-white pointer-events-none shadow-inner"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-[1200px] mx-auto px-gutter">
        <div className="hairline-h"></div>
      </div>

      {/* Section 2: My Journey */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">My Journey</h2>
          <span className="font-label-mono text-label-mono text-on-surface-variant">EXPLORING THE TIMELINE OF GROWTH</span>
        </div>
        <div className="relative">
          {/* Vertical Line - hidden on mobile, shown on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-outline-variant transform -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-24 relative">
            {milestones.map((milestone, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Mobile layout: always left-aligned with left border */}
                <div className="block md:hidden pl-6 border-l-2 border-primary">
                  <span className="font-label-mono text-label-mono text-primary mb-1 block">{milestone.year}</span>
                  <h3 className="font-subhead-italic text-subhead-italic italic text-on-surface">{milestone.title}</h3>
                  <p className="font-body-main text-body-main text-on-surface-variant mt-2 leading-relaxed">{milestone.description}</p>
                </div>

                {/* Desktop alternating layout */}
                {idx % 2 === 0 ? (
                  <>
                    <div className="hidden md:block w-1/2 pr-16 text-right">
                      <span className="font-label-mono text-label-mono text-primary mb-2 block">{milestone.year}</span>
                      <h3 className="font-subhead-italic text-subhead-italic italic text-on-surface">{milestone.title}</h3>
                      <p className="font-body-main text-body-main text-on-surface-variant mt-2 leading-relaxed">{milestone.description}</p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 w-3 h-3 bg-on-surface transform -translate-x-1/2 rounded-full" />
                    <div className="hidden md:block w-1/2 pl-16" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block w-1/2 pr-16" />
                    <div className="hidden md:block absolute left-1/2 w-3 h-3 bg-on-surface transform -translate-x-1/2 rounded-full" />
                    <div className="hidden md:block w-1/2 pl-16">
                      <span className="font-label-mono text-label-mono text-primary mb-2 block">{milestone.year}</span>
                      <h3 className="font-subhead-italic text-subhead-italic italic text-on-surface">{milestone.title}</h3>
                      <p className="font-body-main text-body-main text-on-surface-variant mt-2 leading-relaxed">{milestone.description}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Certs & Awards */}
      <section className="bg-surface-container-low/50 py-section-padding">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="font-headline-md text-headline-md text-on-surface">Recognition</h2>
            <div className="hairline-h flex-grow"></div>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {recognition.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-white border border-outline-variant p-8 hover:border-on-surface transition-colors duration-300 group flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings: "'FILL' 0"}} aria-hidden="true">{item.icon}</span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">{item.year}</span>
                  </div>
                  <h3 className="font-subhead-italic text-subhead-italic italic mb-4 text-on-surface">{item.title}</h3>
                  <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
