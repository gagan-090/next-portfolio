import { ImageResponse } from 'next/og';

// Generated social share card (the old site referenced an og-image.png that did not exist).
export const alt = 'Gagan Shukla — Full Stack App, Web, CRM & ERP Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0A0A0A',
          color: '#ffffff',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 22, letterSpacing: 6, color: '#60A5FA', textTransform: 'uppercase' }}>
          gaganshukla.in
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 108, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>Gagan Shukla</div>
          <div style={{ fontSize: 40, marginTop: 28, color: '#cfbcff' }}>
            Full Stack Developer: Apps · Websites · CRM · ERP
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 24, color: '#a3a3a3' }}>
          {['Flutter', 'React Native', 'Next.js', 'Node.js', 'Supabase'].map((t) => (
            <div key={t} style={{ display: 'flex', border: '1px solid #333', padding: '10px 20px' }}>{t}</div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
