/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '**.supabase.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'date-fns'],
  },
  // Preserve link equity from the old SPA URLs
  async redirects() {
    return [
      { source: '/hire/delhi', destination: '/hire/delhi-ncr', permanent: true },
      { source: '/hire/dehli', destination: '/hire/delhi-ncr', permanent: true },
      { source: '/hire/noida', destination: '/hire/delhi-ncr', permanent: true },
      { source: '/work', destination: '/projects', permanent: true },
      { source: '/work/:projectId', destination: '/projects/:projectId', permanent: true },
      { source: '/skills', destination: '/tech-stack', permanent: true },
      // Old resume links (LinkedIn, job portals) now get the updated resume
      { source: '/Main_Resume_.pdf', destination: '/Gagan_Shukla_Resume.pdf', permanent: true },
    ];
  },
  async headers() {
    return [
      { source: '/(.*)', headers: securityHeaders },
      {
        source: '/:file(.*\\.(?:pdf|png|svg|jpg|jpeg|webp))',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }],
      },
    ];
  },
};

export default nextConfig;
