'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';
import { supabase } from '../lib/supabase';
import { site } from '../lib/site';
import { servicesData } from '../data/services';

const budgets = ['Not sure yet', 'Under ₹50k / $600', '₹50k – ₹2L / $600 – $2.5k', '₹2L – ₹5L / $2.5k – $6k', '₹5L+ / $6k+'];
// Budget ranges show INR and USD so both Indian and international clients can self-select.
const projectTypes = [...servicesData.map((s) => s.name), 'Full-time / contract role', 'Something else'];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    projectType: '',
    budget: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Pre-select the service when arriving from /services/<slug> (?service=<slug>).
  // Read after mount so the page itself stays statically rendered.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('service');
    const preselected = servicesData.find((s) => s.slug === slug)?.name;
    if (preselected) setFormData((prev) => ({ ...prev, projectType: preselected }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (formData.name && formData.email) {
      setIsSubmitting(true);
      
      const subject = [formData.projectType, formData.subject].filter(Boolean).join(' — ') || 'Website enquiry';
      const message = [
        formData.message,
        '',
        formData.country && `Country: ${formData.country}`,
        formData.phone && `Phone/WhatsApp: ${formData.phone}`,
        formData.budget && `Budget: ${formData.budget}`,
      ].filter((line) => line !== false && line !== '').join('\n').trim();

      if (!supabase) {
        setIsSubmitting(false);
        setError(`The form is temporarily unavailable. Please email ${site.email} directly.`);
        return;
      }

      try {
        const { error: submitError } = await supabase
          .from('contact_messages')
          .insert([{ name: formData.name.trim(), email: formData.email.trim(), subject, message }]);
        if (submitError) throw submitError;

        // The enquiry is saved first. Email notification is secondary.
        void supabase.functions.invoke('send_email', {
          body: { name: formData.name.trim(), email: formData.email.trim(), subject, message }
        }).then(({ error: notificationError }) => {
          if (notificationError) console.warn('Email notification unavailable');
        }).catch(() => console.warn('Email notification unavailable'));

        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', country: '', projectType: '', budget: '', subject: '', message: '' });
      } catch {
        setError(`Your enquiry could not be saved. Please try again or email ${site.email}. You can also reach me on WhatsApp.`);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubmitted(false);
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-white select-none">
      {/* Hero Header */}
      <section className="max-w-[1200px] mx-auto px-gutter pt-12 pb-stack-lg border-b border-outline-variant">
        <motion.div
          className="grid grid-cols-12 gap-gutter mt-12 md:mt-20"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="col-span-12 md:col-span-2">
            <span className="font-display-lg text-[48px] md:text-display-lg text-outline-variant opacity-30">05</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="font-display-lg-mobile md:font-display-lg text-[32px] sm:text-[44px] md:text-display-lg text-on-surface leading-none tracking-tighter">
              Let's build<br />something great.
            </h1>
            <p className="font-body-main text-[17px] text-on-surface-variant mt-8 max-w-2xl leading-relaxed">
              I am available for freelance projects only. Tell me about your app, website, SaaS, CRM, HRMS or bid management project, wherever you are. You will get a reply within 24 hours and, if it is a fit, a free discovery call and a fixed quote.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Contact Content */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Reach Me */}
          <div className="md:col-span-5 flex flex-col justify-between gap-12">
            <div>
              <h2 className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant mb-6">
                Reach Me At
              </h2>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] uppercase text-outline mb-1">Email</span>
                  <a className="font-subhead-italic text-subhead-italic italic hover:text-primary transition-colors text-2xl break-all" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] uppercase text-outline mb-1">Phone</span>
                  <a className="font-subhead-italic text-subhead-italic italic hover:text-primary transition-colors text-2xl" href="tel:+916394756798">
                    +91 6394756798
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] uppercase text-outline mb-1">WhatsApp</span>
                  <a className="font-subhead-italic text-subhead-italic italic hover:text-primary transition-colors text-2xl" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] uppercase text-outline mb-1">Location</span>
                  <span className="font-subhead-italic text-subhead-italic italic text-2xl">
                    Noida, India · Working worldwide
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <span className="inline-flex items-center gap-2 bg-[#F5F8FF] text-primary px-4 py-2.5 font-label-mono text-[11px] border border-[#2563EB]/20">
                  <span className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></span>
                  Typically responds within 24 hours
                </span>
              </div>
              <div>
                <h2 className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant mb-4">
                  Social Channels
                </h2>
                <div className="flex flex-wrap gap-4">
                  <a className="font-body-main text-on-surface hover:text-[#2563EB] underline underline-offset-4 transition-colors" href="https://www.linkedin.com/in/gagan-shukla-2624b826b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="font-body-main text-on-surface hover:text-[#2563EB] underline underline-offset-4 transition-colors" href="https://github.com/gagan-090" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-7">
            <div className="bg-white border border-outline-variant p-8 md:p-12">
              <p className="font-body-main text-sm text-on-surface-variant mb-6">Clients from any country are welcome. Share your requirements and timeline; budget and phone number are optional.</p>
              <a href="/guides/plan-custom-software-project" className="inline-block text-sm text-primary underline underline-offset-4 mb-6">Need help writing your project brief?</a>
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-label-mono text-label-mono uppercase text-on-surface-variant">Name</label>
                    <input
                      id="name"
                      autoComplete="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors font-body-main rounded-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-label-mono text-label-mono uppercase text-on-surface-variant">Email</label>
                    <input
                      id="email"
                      autoComplete="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors font-body-main rounded-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-label-mono text-label-mono uppercase text-on-surface-variant">Phone / WhatsApp <span className="normal-case">(optional)</span></label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors font-body-main rounded-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="projectType" className="font-label-mono text-label-mono uppercase text-on-surface-variant">What do you need?</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors font-body-main rounded-none"
                    >
                      <option value="">Select a service</option>
                      {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="country" className="font-label-mono text-label-mono uppercase text-on-surface-variant">Country</label>
                  <input
                    id="country"
                    type="text"
                    name="country"
                    autoComplete="country-name"
                    list="country-list"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="India, USA, UK, UAE..."
                    className="bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors font-body-main rounded-none"
                  />
                  <datalist id="country-list">
                    {['India', 'United States', 'United Kingdom', 'United Arab Emirates', 'Canada', 'Australia', 'Singapore', 'Germany', 'Netherlands', 'Saudi Arabia'].map((c) => <option key={c} value={c} />)}
                  </datalist>
                </div>
                <div className="flex flex-col gap-2">
                  <span id="budget-label" className="font-label-mono text-label-mono uppercase text-on-surface-variant">Estimated budget</span>
                  <div role="radiogroup" aria-labelledby="budget-label" className="flex flex-wrap gap-2 pt-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        role="radio"
                        aria-checked={formData.budget === b}
                        key={b}
                        onClick={() => setFormData((prev) => ({ ...prev, budget: b }))}
                        className={`px-3 py-2 font-label-mono text-[11px] border transition-colors ${formData.budget === b ? 'bg-on-surface text-white border-on-surface' : 'border-outline-variant hover:border-on-surface'}`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="font-label-mono text-label-mono uppercase text-on-surface-variant">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    className="bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors font-body-main rounded-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-label-mono text-label-mono uppercase text-on-surface-variant">Message</label>
                  <textarea
                    id="message"
                    required
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What are you building, who is it for, and when do you need it?"
                    className="bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary transition-colors font-body-main resize-none rounded-none"
                  />
                </div>

                {error && (
                  <div role="alert" className="bg-red-50 border border-red-200 text-red-800 p-4 font-body-main text-sm">
                    {error}
                  </div>
                )}
                
                {submitted && (
                  <div role="status" className="bg-green-50 border border-green-200 text-green-800 p-4 font-body-main text-sm">
                    Thank you! Your enquiry has been saved. I will reply within 24 hours.
                  </div>
                )}

                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-on-surface text-white px-12 py-4 font-label-mono text-label-mono uppercase tracking-[0.2em] font-bold hover:bg-[#2563EB] disabled:bg-opacity-50 disabled:cursor-not-allowed transition-colors duration-200 rounded-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Project Details'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding">
        <h2 className="font-headline-md text-[32px] md:text-headline-md text-on-surface mb-12">What happens next</h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            ['01', 'Reply within 24h', 'I read every message personally and reply with questions or next steps.'],
            ['02', 'Free discovery call', 'A 30-minute call to understand your goals, users and timeline.'],
            ['03', 'Fixed quote & plan', 'A written scope, milestone plan and fixed price, so you know exactly what you get.'],
          ].map(([n, title, desc]) => (
            <li key={n} className="border-t-2 border-on-surface pt-6">
              <span className="font-label-mono text-label-mono text-primary">{n}</span>
              <h3 className="font-headline-md text-xl font-bold text-on-surface mt-2 mb-3">{title}</h3>
              <p className="font-body-main text-on-surface-variant leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};
export default Contact;
