// Evergreen, client-facing guides that target pre-hire search intent
// ("how to hire a developer in India", "flutter vs react native", "custom crm vs hubspot").
// Section types: p (paragraph), ul / ol (lists), h3 (sub-heading), tip (callout).

export const guidesData = [
  {
    slug: 'choose-best-freelance-developer',
    title: 'How to Choose the Best Freelance Developer for Your App or Website',
    metaTitle: 'Choose the Best Freelance App & Web Developer for Your Project',
    description: 'Choosing a freelance app or web developer? Compare relevant projects, technical ownership, communication, testing and handover. A practical guide by Gagan Shukla.',
    keywords: ['best freelance developer', 'best app developer', 'best web developer', 'top class freelance developer', 'hire freelance developer India'],
    published: '2026-10-12', readingTime: 6,
    relatedServices: ['mobile-app-development', 'web-development', 'saas-mvp-development', 'logistics-app-development'],
    sections: [
      { heading: 'What best means for your project', body: [
        { type: 'p', text: 'The best freelance developer for your business is the person whose experience and working process fit the product you need. A logistics company needs different knowledge from a restaurant website or a subscription startup. Begin with your users, the business workflow and the features that must work at launch, then compare developers against that scope.' },
        { type: 'p', text: 'I am Gagan Shukla, a freelance app, web and SaaS developer in Noida, India, with 4+ years of development experience. This guide explains the evidence I recommend buyers examine, including when considering me. It is a selection checklist, not an independent ranking of developers.' },
      ]},
      { heading: 'Finding the best app developer for a business', body: [
        { type: 'p', text: 'Ask to see shipped mobile work and a description of the developer’s role. Screenshots alone do not tell you whether they built the backend, handled permissions or managed release problems. Relevant app experience should include what happens when requests fail, a phone has little storage or the user loses connectivity.' },
        { type: 'ul', items: ['Review the driver, customer or staff workflow you actually need.', 'Ask how authentication, permissions, payments and notifications will be tested.', 'Discuss device coverage and the Android or iOS release process.', 'Confirm who owns the repository, backend and app-store accounts.', 'Ask how bugs found after launch will be reported and handled.'] },
        { type: 'p', text: 'My mobile portfolio includes TruckMitr, TMConnect and HRMS/CRM work. For a logistics or field-team product, those projects are relevant starting points for a discussion about offline behaviour, mobile roles and operational workflows.' },
      ]},
      { heading: 'Finding the best web developer for a website or web app', body: [
        { type: 'p', text: 'For a marketing website, examine whether visitors can understand the offer and enquire easily on a phone. For a web application, examine how users complete their work, how access is controlled and how data is kept consistent. A polished homepage and a reliable internal application require different checks.' },
        { type: 'ul', items: ['Check useful content, navigation, mobile layout and keyboard access.', 'Discuss page rendering, canonical URLs and content editing where relevant.', 'Test contact forms, error states and the handover process.', 'Ask how hosting, domain access and recurring costs will be managed.', 'Agree on how changes are reviewed before production release.'] },
        { type: 'p', text: 'VRC Mobility (vrcmobility.in) is a website I developed. You can visit the public website and discuss your own requirements through its portfolio page. My services also include SaaS products and custom business web applications.' },
      ]},
      { heading: 'What to expect from a top-class developer', body: [
        { type: 'p', text: 'If you are searching for a top-class developer, look for clear scope, sensible trade-offs and reliable delivery. Ask what the developer would leave out of version one and why. A useful technical partner can explain risks and choices in business terms rather than agreeing to every feature without a plan.' },
        { type: 'ul', items: ['A written feature scope with acceptance criteria.', 'Milestones you can review through demonstrations.', 'A clear process for changes and additional work.', 'Testing appropriate to the important user journeys.', 'Documentation, source-code handover and agreed support terms.'] },
      ]},
      { heading: 'Hiring from India or abroad', body: [
        { type: 'p', text: 'I accept freelance enquiries from India and other countries. Tell me your country or time zone, who will review the work and which communication hours are practical. Before starting, we agree on scope, milestones, payment terms and ownership. The same delivery questions apply whether your developer is local or remote.' },
        { type: 'p', text: 'For a fair comparison, give each developer the same brief. Compare what is included, what depends on an external service and what happens after launch. A headline price without the same scope is not a useful comparison.' },
      ]},
      { heading: 'Decide using evidence, then start a conversation', body: [
        { type: 'p', text: 'Review the project pages for VRC Mobility, the bid management system, SaaS work, TruckMitr and HRMS/CRM. Choose the experience closest to your needs. Send the business problem, essential features, timeline and budget range; if some details are unknown, we can clarify them during discovery.' },
        { type: 'tip', text: 'Ask every candidate: “What is included in the first release, how will we verify it, and what will I own when it is delivered?” The answers are more useful than an unsupported best-developer claim.' },
      ]},
    ],
    faqs: [
      { q: 'Who is the best freelance developer for my project?', a: 'There is no single best developer for every project. Compare relevant work, delivery process, communication, testing and ownership against your own requirements. Gagan Shukla offers app, website, SaaS and business software development with 4+ years of development experience.' },
      { q: 'How much experience does Gagan Shukla have?', a: 'Gagan Shukla has 4+ years of development experience. His professional employment timeline is separately listed on the experience page.' },
      { q: 'Can I hire Gagan as an app or web developer from outside India?', a: 'Yes. Gagan accepts remote freelance enquiries worldwide. Project scope, communication hours and commercial terms are agreed before work starts.' },
    ],
  },
  {
    slug: 'logistics-app-development-requirements',
    title: 'Logistics App Development: A Requirements Checklist for Transport Businesses',
    metaTitle: 'Logistics App & Fleet Software Development Checklist',
    description: 'Plan a logistics app or fleet system: driver workflows, offline sync, location updates, dispatch, permissions and integrations. A checklist by developer Gagan Shukla.',
    keywords: ['logistics app development', 'logistics software requirements', 'fleet management app developer', 'transport software development', 'truck booking app developer'],
    published: '2026-10-12', readingTime: 6,
    relatedServices: ['logistics-app-development', 'mobile-app-development', 'crm-development', 'web-development'],
    sections: [
      { heading: 'Start with one operational workflow', body: [
        { type: 'p', text: 'A logistics application can mean a driver app, truck booking platform, operations dashboard, fleet system or field-agent CRM. Those products share some building blocks, but they solve different problems. Describe one workflow from start to finish: who creates the job, who accepts it, who changes its status and who needs to see the result.' },
        { type: 'p', text: 'I have worked on TruckMitr and TMConnect and offer freelance logistics development for Indian and international businesses. This checklist covers decisions to make for a new project; it does not claim that every feature below was included in those earlier applications.' },
      ]},
      { heading: 'Define drivers, vehicles, jobs and permissions', body: [
        { type: 'ul', items: ['Who can register a driver or vehicle, and who reviews the record?', 'Who creates, assigns, accepts, cancels or closes a job?', 'Which information belongs to a driver, agent, customer or operations manager?', 'Which changes need a review step or activity history?', 'Do different branches or business customers need separate views?'] },
        { type: 'p', text: 'Write down the allowed status changes and the person responsible for each one. This helps prevent a driver app and an office dashboard from showing inconsistent operational states. It also makes testing concrete: each role should see and change only what the workflow permits.' },
      ]},
      { heading: 'Plan explicitly for weak networks', body: [
        { type: 'p', text: 'Decide which information a driver needs while offline, which actions can be queued and which actions require an immediate server response. A stored form and live vehicle location behave differently when connectivity disappears. The screen should make pending synchronisation visible rather than reporting success too early.' },
        { type: 'ul', items: ['Define the records available offline and their retention period.', 'Agree on retry rules and protection against duplicate submissions.', 'Decide what happens if two people update the same job.', 'Provide clear pending, failed and completed states.', 'Test interrupted requests and app restarts during synchronisation.'] },
      ]},
      { heading: 'Scope location tracking and alerts', body: [
        { type: 'p', text: 'Describe why location is needed and who should see it. Agree on update frequency, battery expectations, foreground and background behaviour, and what the dashboard shows when location is stale. Location permissions and device limitations need to be part of the product design.' },
        { type: 'p', text: 'For notifications, define the event, recipient and useful next action. An assignment alert should lead to the correct job. A missed update should have a clear follow-up path. Choose provider integrations after the notification requirements are understood.' },
      ]},
      { heading: 'Identify integrations and office reporting', body: [
        { type: 'ul', items: ['Existing CRM or ERP and the API access it provides.', 'Maps, messages, payment or accounting providers.', 'Required job, customer and driver exports.', 'Reports that operations managers need daily.', 'Who owns the external accounts and pays recurring charges.'] },
        { type: 'p', text: 'Avoid promising an integration before checking the available documentation, access and business rules. If you have existing data, list what must be migrated and which records must remain accessible. The first phase can focus on the most useful workflow while later integrations remain separately scoped.' },
      ]},
      { heading: 'Ask for a scope you can test', body: [
        { type: 'p', text: 'For a first release, choose one driver or staff workflow, the corresponding office view and a clear definition of completion. Include the roles, error states and offline cases in the acceptance criteria. Review the working product at milestones rather than waiting until the final delivery.' },
        { type: 'tip', text: 'Send your logistics workflow, user roles, current tools, preferred launch date and budget range through the contact form. I am based in Noida, India, and available for remote freelance work worldwide.' },
      ]},
    ],
    faqs: [
      { q: 'Do you build logistics apps for transport businesses?', a: 'Yes. Gagan Shukla offers logistics apps, fleet and transport software development, with relevant experience through TruckMitr and TMConnect.' },
      { q: 'What affects the cost of a logistics app?', a: 'User roles, mobile platforms, offline workflows, tracking behaviour, integrations, reporting and data migration affect the scope. A quote follows a discussion of those requirements.' },
      { q: 'Should a logistics app support offline use?', a: 'Choose offline support around the actual tasks and connectivity conditions. Define local data, queued actions, retry rules and conflict handling; some features still require a network connection.' },
    ],
  },
  {
    slug: 'plan-custom-software-project',
    title: 'Planning a Website, App, SaaS or CRM Project: What to Send Your Developer',
    metaTitle: 'Plan Your Software Project & Request a Development Quote',
    description: 'A practical project brief for businesses hiring Gagan Shukla: define users, workflows, essential features, integrations, budget and milestones before requesting a quote.',
    keywords: ['custom software development quote', 'SaaS project brief', 'hire freelance software developer', 'CRM development requirements'],
    published: '2026-10-12', readingTime: 5,
    relatedServices: ['web-development', 'mobile-app-development', 'saas-mvp-development', 'crm-development', 'bid-management-software'],
    sections: [
      { heading: 'Start with the business problem', body: [
        { type: 'p', text: 'When you contact me about freelance development, you do not need a technical specification. Start with the work your business needs to do. Explain who uses the product, what they do today and where the process becomes slow, confusing or expensive. A workflow is more useful than a long list of technologies.' },
        { type: 'p', text: 'For a website, this might be helping visitors understand your services and enquire. For a CRM, it might be keeping enquiries and follow-ups visible. For a SaaS product, it might be giving customers a repeatable tool they can subscribe to. For a bid management system, it might be keeping opportunities, documents and approvals together.' },
      ]},
      { heading: 'Choose the first release', body: [
        { type: 'p', text: 'Describe the smallest version that would be useful to a real user. Separate required launch features from features that can wait. This helps me quote a defined scope and helps you evaluate whether the first release solves the original problem.' },
        { type: 'ul', items: ['List the user roles, such as customer, employee, manager or administrator.', 'Write the three most important tasks each role must complete.', 'Identify the information each task needs and the result it should produce.', 'Separate Android, iOS, browser and admin dashboard requirements.', 'Share reference products and explain what you like about them.'] },
      ]},
      { heading: 'Make integrations and existing data visible', body: [
        { type: 'p', text: 'Payments, maps, email, accounting software, identity providers and external APIs can materially change the scope. Tell me which tools you already use, whether API documentation is available and who controls those accounts. Avoid sending passwords or customer data in your first enquiry.' },
        { type: 'p', text: 'If you are replacing an existing tool, describe the records you need to keep and how you can export them. Migration and historical reports should be scoped explicitly. An existing product may also need a code review before a reliable maintenance or feature quote is possible.' },
      ]},
      { heading: 'Discuss budget, timeline and delivery', body: [
        { type: 'p', text: 'A budget range helps us decide what belongs in the first phase. If you do not have one, say so and I can discuss scope options. Mention any fixed launch date and the reason for it. I estimate after understanding the requirements rather than promising one price for every website or application.' },
        { type: 'ul', items: ['Agree on a written feature scope and acceptance criteria.', 'Break delivery into milestones with demonstrable results.', 'Choose who reviews designs and approves completed work.', 'Include hosting, third-party charges and support expectations in the discussion.', 'Agree on code handover, documentation and account ownership.'] },
      ]},
      { heading: 'Working together from India or another country', body: [
        { type: 'p', text: 'I am based in Noida, India, and accept freelance enquiries from any country. Include your country or time zone and preferred call times. We can agree on a communication window, written updates and demonstrations that fit the project. Payment terms and currency are confirmed before work starts.' },
        { type: 'p', text: 'My portfolio includes the VRC Mobility website, a bid management system, HRMS and SaaS work, alongside mobile app projects. Use the project and service pages to identify relevant experience, then ask about the requirements that matter for your own product.' },
      ]},
      { heading: 'A brief you can copy into your enquiry', body: [
        { type: 'ul', items: ['Business and country:', 'Problem we want to solve:', 'Users and their main tasks:', 'Required platforms: website, Android, iOS or admin dashboard:', 'Essential first-release features:', 'Existing software, APIs or data to migrate:', 'Reference products:', 'Preferred launch date and budget range:', 'Preferred contact method and call times:'] },
        { type: 'tip', text: 'Send this brief through the contact form or WhatsApp. If some answers are unknown, leave them open: discovery is where we clarify them.' },
      ]},
    ],
    faqs: [
      { q: 'Can I request a quote without a technical specification?', a: 'Yes. Explain the business problem, users and essential tasks. Gagan can discuss scope and the development approach with you.' },
      { q: 'Do you accept clients outside India?', a: 'Yes. Gagan Shukla is available for remote freelance development projects worldwide. Communication hours and commercial terms are agreed per project.' },
      { q: 'Do you build websites as well as SaaS and business software?', a: 'Yes. Services include websites, mobile apps, SaaS, CRM, ERP, HRMS and custom bid management software.' },
    ],
  },
  {
    slug: 'hire-freelance-app-developer-india',
    title: 'How to Hire a Freelance App Developer in India: A Checklist for Clients Worldwide',
    metaTitle: 'How to Hire a Freelance App Developer in India',
    description:
      'A practical checklist for US, UK, UAE, European and Indian businesses hiring a freelance app or web developer in India: vetting, contracts, IP, payments, time zones and red flags.',
    keywords: ['hire freelance app developer india', 'hire offshore developer india', 'outsource app development india', 'how to hire remote developer'],
    published: '2026-10-08',
    readingTime: 8,
    relatedServices: ['mobile-app-development', 'saas-mvp-development', 'web-development'],
    sections: [
      { heading: 'Why businesses hire freelance developers from India', body: [
        { type: 'p', text: 'India has one of the largest pools of software engineers in the world, strong English communication, and a time zone that overlaps with Europe, the Middle East and Asia, plus US mornings. For a startup or small business, a skilled freelancer offers something agencies often cannot: one accountable person who designs, builds and supports your product, at a cost that leaves budget for marketing and growth.' },
        { type: 'p', text: 'The challenge is choosing well. The checklist below is the process I would want a client to follow before hiring anyone, me included.' },
      ]},
      { heading: '1. Check shipped work, not just a portfolio', body: [
        { type: 'p', text: 'Screenshots are easy to fake. Ask for proof that the developer has taken something from idea to production:' },
        { type: 'ul', items: [
          'Live apps on the Google Play Store or Apple App Store that you can download yourself.',
          'Public GitHub repositories with real commit history, not a single upload.',
          'Case studies that explain the problem, architecture and trade-offs, not just the final UI.',
          'A reference from a past client or employer if the project is large.',
        ]},
        { type: 'tip', text: 'Ask: “What broke after launch, and how did you fix it?” Developers who have shipped real products always have a good answer.' },
      ]},
      { heading: '2. Run a short paid discovery, not a free test', body: [
        { type: 'p', text: 'Instead of a speculative coding test, pay for a one- or two-week discovery phase: user flows, database schema, a clickable prototype and a fixed quote for the build. You learn how the developer thinks and communicates, and you own a useful spec even if you do not continue.' },
      ]},
      { heading: '3. Put IP, NDA and code ownership in writing', body: [
        { type: 'ul', items: [
          'Sign an NDA before sharing sensitive details.',
          'Use a work-for-hire / IP assignment clause so all code, designs and content belong to you on payment.',
          'Host the code in your own GitHub, GitLab or Bitbucket organisation from day one.',
          'Create cloud, app-store and domain accounts in your company’s name, and add the developer as a collaborator.',
        ]},
      ]},
      { heading: '4. Agree on time-zone overlap and communication', body: [
        { type: 'p', text: 'Time zones are only a problem when nobody plans for them. Agree on a daily live window and an async rhythm:' },
        { type: 'ul', items: [
          'USA / Canada: calls during your morning (Indian evening); work continues while you sleep.',
          'UK / Europe: 6–8 hours of shared working time every day.',
          'UAE / Singapore: almost the full working day overlaps.',
          'Daily written updates, a weekly live demo, and a staging link you can open at any time.',
        ]},
      ]},
      { heading: '5. Structure payments around milestones', body: [
        { type: 'p', text: 'Fixed-scope projects work best when payment follows visible progress: an advance to start, payments on milestone demos, and a final payment on launch. International clients typically pay via Wise, PayPal or bank wire; Indian clients via UPI or bank transfer. Avoid paying 100% upfront, and be wary of anyone who asks for it.' },
      ]},
      { heading: 'Red flags to watch for', body: [
        { type: 'ul', items: [
          'A quote given before understanding your users and features.',
          'Refusing to work in your repository or to hand over credentials.',
          'No live apps or verifiable work.',
          'Vague timelines with no milestones or demos.',
          '“Yes” to every feature without discussing trade-offs.',
        ]},
      ]},
      { heading: 'The bottom line', body: [
        { type: 'p', text: 'Hiring a freelance developer in India can give you senior-level output at a sustainable cost, as long as you vet for shipped work, protect your IP, plan the time-zone overlap and pay against milestones. If you would like to run this checklist on me, start with a free discovery call.' },
      ]},
    ],
    faqs: [
      { q: 'Is it safe to hire a freelance developer from India?', a: 'Yes, when you sign an NDA and IP assignment, keep code in your own repository, and pay against milestones rather than upfront.' },
      { q: 'How do I pay a freelancer in India from abroad?', a: 'Wise, PayPal and international bank wire are the most common options. Invoices can be issued in your currency.' },
      { q: 'How do I manage the time difference?', a: 'Agree a daily live-overlap window for calls and use async updates (written notes, Loom videos, staging links) for the rest of the day.' },
    ],
  },
  {
    slug: 'flutter-vs-react-native-for-business',
    title: 'Flutter vs React Native: Which Should Your Business Choose?',
    metaTitle: 'Flutter vs React Native: A Business Owner’s Guide',
    description:
      'A plain-English comparison of Flutter and React Native for founders and business owners: performance, UI, hiring, cost, web support and when to pick each, from a developer who ships both.',
    keywords: ['flutter vs react native', 'flutter or react native for startup', 'cross platform app development', 'best framework for mobile app'],
    published: '2026-10-08',
    readingTime: 6,
    relatedServices: ['mobile-app-development', 'saas-mvp-development'],
    sections: [
      { heading: 'The short answer', body: [
        { type: 'p', text: 'Both Flutter and React Native let you launch on Android and iOS from one codebase, which typically saves significant time and cost compared with building two native apps. Both are production-proven. The right choice depends on your product, your existing team and your roadmap, not on which framework is “better”.' },
        { type: 'p', text: 'I have shipped production apps in both: TruckMitr and an HRMS & CRM app in React Native; AURA, GlowCart, HashKart and TMConnect in Flutter. Here is how I advise clients.' },
      ]},
      { heading: 'Choose Flutter when…', body: [
        { type: 'ul', items: [
          'Your app is design-led, with custom animations, branded UI and pixel-perfect consistency across devices.',
          'You want the same UI on Android, iOS and possibly web or desktop from a single codebase.',
          'You do not already have a React web team that needs to share code with the app.',
          'You need smooth performance on a wide range of budget Android devices.',
        ]},
      ]},
      { heading: 'Choose React Native when…', body: [
        { type: 'ul', items: [
          'Your company already has a React / Next.js web app and you want to share logic, types or developers.',
          'The app should feel closest to platform-native controls.',
          'You rely on JavaScript/TypeScript libraries or want to hire from the large JavaScript talent pool.',
          'You want over-the-air updates for quick fixes between store releases.',
        ]},
      ]},
      { heading: 'What matters more than the framework', body: [
        { type: 'p', text: 'In my experience, product success depends far more on architecture decisions than on Flutter vs React Native:' },
        { type: 'ul', items: [
          'Offline-first data handling if users have unreliable networks.',
          'A clean backend and database design that can grow with you.',
          'Analytics and crash reporting from day one.',
          'A release process for both app stores, including review timelines.',
        ]},
        { type: 'tip', text: 'If you are unsure, start with the user experience you need and the team you have. A good developer will recommend the framework that fits those, not the one they prefer.' },
      ]},
    ],
    faqs: [
      { q: 'Is Flutter or React Native cheaper?', a: 'Costs are similar. Both use one codebase for Android and iOS. The bigger cost drivers are features, integrations and design complexity.' },
      { q: 'Can I switch frameworks later?', a: 'It requires a rewrite of the app UI, so it is worth choosing carefully. Your backend and database can stay the same.' },
      { q: 'Which is better for an MVP?', a: 'Both work well. Pick Flutter for design-heavy MVPs and React Native if you already have a React web product.' },
    ],
  },
  {
    slug: 'custom-crm-vs-zoho-hubspot-salesforce',
    title: 'Custom CRM vs Zoho, HubSpot or Salesforce: When Should You Build Your Own?',
    metaTitle: 'Custom CRM vs Zoho, HubSpot & Salesforce',
    description:
      'Should you buy an off-the-shelf CRM or build a custom one? A practical guide covering per-seat costs, workflow fit, mobile field teams, data ownership and a decision checklist.',
    keywords: ['custom crm vs hubspot', 'custom crm development', 'build vs buy crm', 'zoho crm alternative', 'crm for field sales team'],
    published: '2026-10-08',
    readingTime: 7,
    relatedServices: ['crm-development', 'erp-development', 'hrms-software-development'],
    sections: [
      { heading: 'Start with an off-the-shelf CRM, unless one of these is true', body: [
        { type: 'p', text: 'Zoho, HubSpot and Salesforce are excellent products. For a small team with a standard sales pipeline, they are usually the right first step. A custom CRM starts to make sense when the tool begins to shape your business instead of the other way around.' },
      ]},
      { heading: 'Signs you have outgrown an off-the-shelf CRM', body: [
        { type: 'ol', items: [
          'Per-seat licences are growing faster than revenue as you add telecallers, field agents or franchisees.',
          'Your team keeps a parallel spreadsheet because the CRM cannot model your process (site visits, quotations, service tickets, dealer networks).',
          'Field staff need a simple mobile app that works offline, not a complex desktop dashboard.',
          'You need deep integration with your own systems: ERP, billing, inventory, WhatsApp or a customer app.',
          'Customer data must be hosted in a specific region or stay fully under your control.',
        ]},
      ]},
      { heading: 'What a custom CRM typically includes', body: [
        { type: 'ul', items: [
          'Lead capture from website forms, ads and calls, with automatic assignment.',
          'Custom pipeline stages that match your real sales process.',
          'Mobile apps for telecallers and field agents, with call logging and visit check-ins.',
          'Role-based access for admins, managers and agents.',
          'Automated follow-up reminders via push, email or WhatsApp.',
          'Dashboards for conversion, team performance and revenue.',
        ]},
        { type: 'p', text: 'I built exactly this kind of system with TMConnect, a Flutter CRM for telecallers and field agents, and an HRMS & CRM app published on both app stores.' },
      ]},
      { heading: 'A quick build-vs-buy checklist', body: [
        { type: 'ul', items: [
          'Will licence costs over the next 3 years exceed a one-time build plus hosting?',
          'Is your sales process a competitive advantage that generic tools flatten?',
          'Do you have field or mobile-first users?',
          'Do you need to own your data and integrations end to end?',
        ]},
        { type: 'tip', text: 'If you answered yes to two or more, a custom CRM, often built in phases starting with the most painful workflow, is worth a discovery call.' },
      ]},
    ],
    faqs: [
      { q: 'How long does a custom CRM take to build?', a: 'A focused first version usually takes 6–10 weeks, delivered in phases so your team can start using it early.' },
      { q: 'Can I migrate data from Zoho or HubSpot?', a: 'Yes. Contacts, deals and history can be exported as CSV and imported into the new system.' },
      { q: 'Do custom CRMs have mobile apps?', a: 'They can. Companion Android/iOS apps for field teams are one of the main reasons businesses go custom.' },
    ],
  },
];

export const getGuide = (slug) => guidesData.find((g) => g.slug === slug);
