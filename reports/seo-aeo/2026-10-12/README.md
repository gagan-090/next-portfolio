# SEO, GEO and AEO audit — 12 October 2026

Implemented for 29 important pages: homepage, 10 services, 11 curated market pages and 7 guides. Enquiries use email and WhatsApp only. The supplied call-booking goal is overridden by the owner’s latest instruction.

## Evidence and limits

All 29 original live URLs returned HTTP 200. [before.json](before.json) contains exact fetched titles, metadata, ordered headings, main text/word counts, schemas, links, CTAs and images. [search-results.json](search-results.json) records five search-tool results per primary query. These are not verified Google positions, a Google top-five SERP, or People Also Ask. Search intent and scores are editorial assessments based on this evidence. No private Search Console export or GA4 property was available.

The screenshot shows 4 clicks and 733 impressions for a three-month selection; it cannot establish page-level query baselines, current rankings, or 30-day traffic. 1,000 clicks this month cannot be promised from these changes. The first milestones are correct crawl/index behaviour, relevant impressions and actual qualified enquiries.

## Changes and remaining owner evidence

- Critical: 6,000 templated city routes are noindex/follow and excluded from the sitemap; their visitor directory and time conversion still work. The latest supplied prompt expressly excludes mass-generated location landing pages. Curated market pages disclose remote delivery and include distinct planning decisions; expand them only when you have additional first-hand market evidence.
- Service-specific scope tables, answer-first introductions, short title/description tags and matching visible/structured FAQs are implemented. No local offices, testimonials, ranking superlatives or price packages were invented.
- Email/WhatsApp contact routes replace discovery calls. Recruitment was removed from the project form. Form success emits generate_lead only after the database save succeeds. Contact clicks emit contact_click with a method; neither event contains lead details or URL query parameters.
- Events are queued to dataLayer, not sent to a GA4 property. GTM/GA4 must be connected and tested before claiming analytics collection. Contact database and email-notification delivery need an authorised end-to-end check; this audit did not send a test enquiry or email.
- Private placeholders in the page reports are drafts requiring owner evidence; they are not published on the website. Needed: approved price ranges, actual delivery records, implementation role, permission to name clients, analytics exports and testimonials with consent. VRC metrics remain explicitly owner-reported.

## Page reports

- [/](pages/home.md)
- [/services/logistics-app-development](pages/logistics-app-development.md)
- [/services/bid-management-software](pages/bid-management-software.md)
- [/services/mobile-app-development](pages/mobile-app-development.md)
- [/services/web-development](pages/web-development.md)
- [/services/crm-development](pages/crm-development.md)
- [/services/erp-development](pages/erp-development.md)
- [/services/hrms-software-development](pages/hrms-software-development.md)
- [/services/ecommerce-development](pages/ecommerce-development.md)
- [/services/saas-mvp-development](pages/saas-mvp-development.md)
- [/services/ai-chatbot-automation](pages/ai-chatbot-automation.md)
- [/hire/varanasi](pages/varanasi.md)
- [/hire/south-africa](pages/south-africa.md)
- [/hire/india](pages/india.md)
- [/hire/delhi-ncr](pages/delhi-ncr.md)
- [/hire/usa](pages/usa.md)
- [/hire/uk](pages/uk.md)
- [/hire/uae](pages/uae.md)
- [/hire/canada](pages/canada.md)
- [/hire/australia](pages/australia.md)
- [/hire/singapore](pages/singapore.md)
- [/hire/europe](pages/europe.md)
- [/guides/freelance-software-development-cost](pages/freelance-software-development-cost.md)
- [/guides/choose-best-freelance-developer](pages/choose-best-freelance-developer.md)
- [/guides/logistics-app-development-requirements](pages/logistics-app-development-requirements.md)
- [/guides/plan-custom-software-project](pages/plan-custom-software-project.md)
- [/guides/hire-freelance-app-developer-india](pages/hire-freelance-app-developer-india.md)
- [/guides/flutter-vs-react-native-for-business](pages/flutter-vs-react-native-for-business.md)
- [/guides/custom-crm-vs-zoho-hubspot-salesforce](pages/custom-crm-vs-zoho-hubspot-salesforce.md)

## Sources

- [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [Google AI features guidance](https://developers.google.com/search/docs/appearance/ai-features)
- [GA4 generate_lead event](https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead)
- [Search Console performance report](https://support.google.com/webmasters/answer/7576553)
- [Flutter FAQ](https://docs.flutter.dev/resources/faq)
- [React Native core components](https://reactnative.dev/docs/intro-react-native-components)

Inspected competitor examples (their claims are not Gagan’s evidence):

- [Logistics service page](https://magora-systems.com/development-of-transport-and-logistics-apps/)
- [Solo SaaS service page](https://www.adrianrbdev.com/en/services/saas-mvp-development/)
- [Field sales CRM service page](https://www.raftlabs.com/services/custom-crm-development/field-sales-crm)
- [Solo Next.js service page](https://www.tomhirst.com/freelance-next-js-developer/)
- [Freelancer service page](https://acamue.com/)
