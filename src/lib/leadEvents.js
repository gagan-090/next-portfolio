// GTM/GA4 can consume these events when the owner connects their analytics account.
// Never include names, emails, phone numbers, messages or URL query parameters.
export function trackLeadEvent(event, properties = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  if (!['contact_click', 'generate_lead'].includes(event)) return;
  const payload = { event, page_path: window.location.pathname };
  if (event === 'contact_click' && ['email', 'whatsapp'].includes(properties.contact_method)) payload.contact_method = properties.contact_method;
  if (event === 'generate_lead' && properties.lead_source === 'project_form') payload.lead_source = 'project_form';
  window.dataLayer.push(payload);
}
