'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '@/lib/site';

const navLinks = [
  { path: '/', label: 'Home', end: true },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Work' },
  { path: '/hire', label: 'Freelance' },
  { path: '/guides', label: 'Guides' },
  { path: '/about', label: 'About' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

const isActivePath = (pathname, link) =>
  link.end ? pathname === link.path : pathname === link.path || pathname.startsWith(`${link.path}/`);

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="no-print fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant">
      <div className="max-w-[1200px] mx-auto px-gutter h-20 flex justify-between items-center relative z-50">
        <Link href="/" onClick={closeMenu} className="flex items-center" aria-label="Gagan Shukla — Home">
          <img src="/favicon.svg" alt="GS Logo" width={48} height={48} className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link);
            return (
              <Link
                key={link.path}
                href={link.path}
                aria-current={active ? 'page' : undefined}
                className={`font-body-main text-[15px] transition-colors duration-200 border-b-2 pb-0.5 ${
                  active
                    ? 'text-primary font-bold border-primary'
                    : 'text-on-surface-variant hover:text-primary border-transparent'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 border border-[#0A0A0A] text-on-surface px-4 py-2 font-label-mono text-[11px] uppercase tracking-widest font-bold hover:bg-[#F5F8FF] transition-colors duration-200"
          >
            WhatsApp
          </a>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-5 py-2 font-label-mono text-[11px] uppercase tracking-widest font-bold hover:bg-[#2563EB] transition-colors duration-200"
          >
            Get a Quote
            <span className="material-symbols-outlined text-[14px]" aria-hidden="true">arrow_forward</span>
          </Link>

          {/* Hamburger Menu Icon */}
          <button
            onClick={toggleMenu}
            className="flex lg:hidden flex-col justify-center items-center w-6 h-6 gap-1.5 focus:outline-none z-50 relative cursor-pointer"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <span className={`w-6 h-0.5 bg-[#0A0A0A] transition-all duration-300 transform origin-center ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#0A0A0A] transition-all duration-300 transform origin-center ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="absolute top-20 left-0 w-full bg-white border-b border-outline-variant shadow-lg lg:hidden z-40 overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <nav aria-label="Mobile" className="flex flex-col p-6 gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    href={link.path}
                    onClick={closeMenu}
                    className={`block font-headline-sm text-[20px] font-semibold transition-colors duration-200 py-2 border-b border-neutral-100 ${
                      isActivePath(pathname, link) ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="text-center border border-green-600 text-green-700 py-3 font-label-mono text-label-mono uppercase tracking-widest font-bold"
                >
                  WhatsApp
                </a>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="text-center bg-[#0A0A0A] text-white py-3 font-label-mono text-label-mono uppercase tracking-widest font-bold hover:bg-[#2563EB] transition-colors duration-200"
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
