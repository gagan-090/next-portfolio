import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-white flex items-center justify-center px-gutter py-20">
      <div className="text-center">
        <h1 className="font-headline-lg text-[120px] md:text-[200px] font-bold text-on-surface leading-none tracking-tighter mb-4">
          404
        </h1>
        <p className="font-body-main text-on-surface-variant text-xl md:text-2xl mb-10 max-w-md mx-auto">
          The page you&apos;re looking for seems to have vanished into the digital void.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-label-mono uppercase tracking-widest text-sm hover:bg-black transition-colors">
            Return Home <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
          </Link>
          <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 border border-on-surface font-label-mono uppercase tracking-widest text-sm hover:bg-[#F5F8FF] transition-colors">
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
