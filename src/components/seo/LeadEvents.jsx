'use client';
import { useEffect } from 'react';
import { trackLeadEvent } from '@/lib/leadEvents';

export default function LeadEvents() {
  useEffect(() => {
    const onClick = (event) => {
      const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.origin);
      if (url.protocol === 'mailto:') trackLeadEvent('contact_click', { contact_method: 'email' });
      if (url.hostname === 'wa.me' || url.hostname === 'api.whatsapp.com') trackLeadEvent('contact_click', { contact_method: 'whatsapp' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
