import localFont from 'next/font/local';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ScrollProgress from '@/components/common/ScrollProgress';
import ChatBot from '@/components/ui/ChatBot';
import LeadEvents from '@/components/seo/LeadEvents';
import { JsonLd, personSchema, websiteSchema, professionalServiceSchema } from '@/components/seo/JsonLd';
import { SITE_URL, site } from '@/lib/site';
import { servicesData } from '@/data/services';
import '@/styles/globals.css';

// Bundle the existing Latin font assets so production builds do not depend on Google Fonts.
const syne = localFont({ src: '../src/assets/fonts/syne-latin.woff2', weight: '700 800', variable: '--font-syne', display: 'swap' });
const dmSans = localFont({ src: [
  { path: '../src/assets/fonts/dm-sans-latin.woff2', weight: '400 700', style: 'normal' },
  { path: '../src/assets/fonts/dm-sans-italic-latin.woff2', weight: '400 700', style: 'italic' },
], variable: '--font-dm-sans', display: 'swap' });
const garamond = localFont({ src: [
  { path: '../src/assets/fonts/eb-garamond-latin.woff2', weight: '400', style: 'normal' },
  { path: '../src/assets/fonts/eb-garamond-italic-latin.woff2', weight: '400', style: 'italic' },
], variable: '--font-garamond', display: 'swap', fallback: ['Georgia'] });
const jetbrains = localFont({ src: '../src/assets/fonts/jetbrains-mono-latin.woff2', weight: '500', variable: '--font-jetbrains', display: 'swap', fallback: ['monospace'] });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.title,
    template: '%s | Gagan Shukla',
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  category: 'technology',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: site.title,
    description: site.description,
    siteName: `${site.name} — Developer Portfolio`,
    locale: site.locale,
    alternateLocale: ['en_US', 'en_GB', 'en_AE'],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    creator: site.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/favicon.png',
  },
  formatDetection: { telephone: false, email: false, address: false },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'light',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${garamond.variable} ${jetbrains.variable}`}>
      <head>
        {/* Icon font: loaded with display=block so ligature names never flash as text */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
        />
        <link rel="alternate" type="text/plain" title="Developer and services summary" href="/llms.txt" />
        <link rel="alternate" type="text/plain" title="Detailed services and project information" href="/llms-full.txt" />
      </head>
      <body className="font-body-main">
        <JsonLd data={personSchema()} />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={professionalServiceSchema(servicesData.map((s) => ({ name: s.name, slug: s.slug })))} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:border focus:border-on-surface"
        >
          Skip to content
        </a>
        <div className="relative min-h-screen bg-white text-on-surface overflow-x-hidden w-full">
          <Navbar />
          <ScrollProgress />
          <LeadEvents />
        <ChatBot />
          <main id="main" className="pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
