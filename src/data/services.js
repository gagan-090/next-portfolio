// Service landing pages. Each one targets a distinct buyer search intent
// ("hire flutter developer", "custom crm development", ...) and links to real case studies as proof.

export const engagementModels = [
  {
    icon: 'task_alt',
    title: 'Fixed-Scope Project',
    desc: 'Clear scope, milestones and a fixed quote. Best for MVPs, websites and well-defined apps.',
  },
  {
    icon: 'event_repeat',
    title: 'Monthly Retainer',
    desc: 'Ongoing feature work, maintenance, and performance fixes with a reserved block of hours each month.',
  },
  {
    icon: 'badge',
    title: 'Freelance Development Retainer',
    desc: 'A freelance project contract for a reserved block of development work, with agreed scope, review hours and deliverables.',
  },
];

export const processSteps = [
  { step: '01', title: 'Written project brief', desc: 'Send your workflow by email or WhatsApp. I clarify scope, dependencies and acceptance checks in writing; no call required.' },
  { step: '02', title: 'Plan & Design', desc: 'User flows, database schema and clickable UI screens, approved by you before any code is written.' },
  { step: '03', title: 'Build in Sprints', desc: 'Reviewable releases on a staging link. Written updates and review deadlines are agreed in the proposal.' },
  { step: '04', title: 'Launch', desc: 'Play Store / App Store submission, domain, hosting, SSL and analytics, handled end to end.' },
  { step: '05', title: 'Support & Scale', desc: 'Support, warranty, monitoring and future releases are scoped explicitly in the contract.' },
];

export const servicesData = [
  {
    "slug": "logistics-app-development",
    "name": "Freelance Logistics App Developer",
    "shortName": "Logistics & Fleet Software",
    "icon": "local_shipping",
    "headline": "Freelance project delivery, with scope and milestones agreed in writing.",
    "metaTitle": "Freelance Logistics App Developer | Gagan Shukla",
    "metaDescription": "I build logistics & fleet software for business workflows. 4+ years of experience. Send your scope by email or WhatsApp for a written quote.",
    "keywords": [
      "logistics app developer",
      "freelance logistics software developer",
      "fleet management software development",
      "transport management system developer",
      "truck booking app development",
      "logistics CRM development"
    ],
    "intro": "I provide freelance logistics app development for businesses that need driver assignments, trip status, proof of delivery and dispatch dashboards. My relevant work includes TruckMitr and TMConnect. I work from Noida, India, with 4+ years of development experience. Send your requirements by email or WhatsApp so I can assess the scope, dependencies and delivery milestones.",
    "problems": [
      "Drivers and field staff work in areas where mobile connectivity is unreliable.",
      "Jobs, driver records and follow-ups are split across calls, messages and spreadsheets.",
      "Your operations team needs a shared view while drivers need a simple mobile workflow.",
      "A generic CRM does not reflect the roles and tasks in your transport business."
    ],
    "deliverables": [
      {
        "icon": "smartphone",
        "title": "Driver & field-team apps",
        "desc": "Android and iOS workflows for the tasks your drivers or agents need to complete."
      },
      {
        "icon": "cloud_off",
        "title": "Offline workflows",
        "desc": "Plan local storage, retries and synchronisation for unreliable networks."
      },
      {
        "icon": "location_on",
        "title": "Location & tracking",
        "desc": "Scope GPS updates, map displays and location permissions around operational needs."
      },
      {
        "icon": "dashboard",
        "title": "Operations dashboard",
        "desc": "Web views of jobs, assignments, records and status for your office team."
      },
      {
        "icon": "groups",
        "title": "Logistics CRM",
        "desc": "Customer, transporter and agent workflows with agreed roles and permissions."
      },
      {
        "icon": "integration_instructions",
        "title": "APIs & integrations",
        "desc": "Assess existing APIs, notification providers and business systems before quoting."
      }
    ],
    "techStack": [
      "Flutter",
      "React Native",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "SQLite",
      "WebSockets"
    ],
    "relatedProjects": [
      "truckmitr",
      "TMConnact",
      "hrms-crm"
    ],
    "relatedGuides": [
      "logistics-app-development-requirements",
      "choose-best-freelance-developer",
      "freelance-software-development-cost",
      "plan-custom-software-project"
    ],
    "faqs": [
      {
        "q": "What does your logistics & fleet software service include?",
        "a": "I scope driver assignments, trip status, proof of delivery and dispatch dashboards around your business workflow. The proposal lists the included features, integrations, testing and handover deliverables."
      },
      {
        "q": "How much does logistics & fleet software cost?",
        "a": "The price depends on the agreed scope; I have not published a universal starting price. Send the users, required features, integrations and existing assets for a written estimate that separates development and recurring costs."
      },
      {
        "q": "How long will the first release take?",
        "a": "I estimate delivery after reviewing the workflow and dependencies. The milestone plan identifies required approvals, integration access and what you can test at each stage."
      },
      {
        "q": "Can we work entirely by email and WhatsApp?",
        "a": "Yes, I handle freelance project enquiries and written project updates through email and WhatsApp. Send a project brief; no call booking is required."
      },
      {
        "q": "What relevant work can I review?",
        "a": "My relevant portfolio includes TruckMitr and TMConnect. Review the case studies and ask about my role and the scope closest to your project; portfolio totals are not results guaranteed for your business."
      },
      {
        "q": "What will I own when the project is delivered?",
        "a": "Source-code ownership, repository access, deployment instructions and support terms are agreed in the written contract. External services, existing licences and third-party intellectual property need their own terms."
      },
      {
        "q": "Can you improve an existing product?",
        "a": "Yes, I can assess a defined improvement to an existing product. Share the current stack, repository access arrangements and the problem to reproduce before I quote the work."
      }
    ],
    "buyerSections": [
      {
        "heading": "How I scope your logistics & fleet software project",
        "text": "I begin with one complete trip: assignment, pickup, delivery and office confirmation. I ask you to show the exception cases, including reassignment, poor connectivity and missing delivery evidence. We agree which actions work offline and how the office distinguishes a stale position from a current one."
      },
      {
        "heading": "What determines price and delivery",
        "text": "I quote the agreed scope after reviewing the users, essential features, integrations and existing code or data. The written proposal separates development from recurring services and lists milestones, acceptance checks and handover terms. I do not publish an unconfirmed starting price or promise a launch date before that review."
      }
    ],
    "comparison": {
      "headers": [
        "Scope option",
        "What we define",
        "Quote depends on"
      ],
      "rows": [
        [
          "Driver workflow",
          "Assigned jobs, status updates and delivery evidence",
          "Offline queue, permissions and retry behaviour"
        ],
        [
          "Dispatcher dashboard",
          "Assignment rules, driver visibility and exception reports",
          "Map provider, GPS source and notification events"
        ],
        [
          "Connected fleet platform",
          "Driver app, operations console and integrations",
          "Existing TMS APIs, data migration and tracking requirements"
        ]
      ],
      "caption": "Scope comparison, not published package prices. Request a written estimate for your requirements."
    },
    "cta": "Send your logistics brief"
  },
  {
    "slug": "bid-management-software",
    "name": "Custom Bid Management Developer",
    "shortName": "Bid & Tender Management",
    "icon": "description",
    "headline": "Freelance project delivery, with scope and milestones agreed in writing.",
    "metaTitle": "Custom Bid Management Developer | Gagan Shukla",
    "metaDescription": "I build bid & tender management for business workflows. 4+ years of experience. Send your scope by email or WhatsApp for a written quote.",
    "keywords": [
      "bid management software development",
      "tender management system developer",
      "procurement software developer",
      "custom bidding software"
    ],
    "intro": "I provide custom bid management software development for businesses that need tender records, document checklists, submission deadlines and approval workflows. My relevant work includes the bid management system. I work from Noida, India, with 4+ years of development experience. Send your requirements by email or WhatsApp so I can assess the scope, dependencies and delivery milestones.",
    "problems": [
      "Bid documents and deadlines are spread across spreadsheets and inboxes.",
      "Your approval process needs clear owners and visibility.",
      "Generic tools do not fit your procurement workflow."
    ],
    "deliverables": [
      {
        "icon": "dashboard",
        "title": "Opportunity workspace",
        "desc": "A shared view of tenders, bids, owners and current status."
      },
      {
        "icon": "folder",
        "title": "Document workflows",
        "desc": "Organise supporting documents and submission requirements."
      },
      {
        "icon": "event",
        "title": "Deadline tracking",
        "desc": "Track due dates and agree on reminder channels during discovery."
      },
      {
        "icon": "verified_user",
        "title": "Roles & approvals",
        "desc": "Permissions and review stages designed around your team."
      },
      {
        "icon": "monitoring",
        "title": "Reporting",
        "desc": "Choose the bid status and outcome reports your business needs."
      },
      {
        "icon": "integration_instructions",
        "title": "Integration planning",
        "desc": "Scope connections to your CRM, ERP or existing data sources."
      }
    ],
    "techStack": [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL"
    ],
    "relatedProjects": [
      "hrms-crm"
    ],
    "faqs": [
      {
        "q": "What does your bid & tender management service include?",
        "a": "I scope tender records, document checklists, submission deadlines and approval workflows around your business workflow. The proposal lists the included features, integrations, testing and handover deliverables."
      },
      {
        "q": "How much does bid & tender management cost?",
        "a": "The price depends on the agreed scope; I have not published a universal starting price. Send the users, required features, integrations and existing assets for a written estimate that separates development and recurring costs."
      },
      {
        "q": "How long will the first release take?",
        "a": "I estimate delivery after reviewing the workflow and dependencies. The milestone plan identifies required approvals, integration access and what you can test at each stage."
      },
      {
        "q": "Can we work entirely by email and WhatsApp?",
        "a": "Yes, I handle freelance project enquiries and written project updates through email and WhatsApp. Send a project brief; no call booking is required."
      },
      {
        "q": "What relevant work can I review?",
        "a": "My relevant portfolio includes the bid management system. Review the case studies and ask about my role and the scope closest to your project; portfolio totals are not results guaranteed for your business."
      },
      {
        "q": "What will I own when the project is delivered?",
        "a": "Source-code ownership, repository access, deployment instructions and support terms are agreed in the written contract. External services, existing licences and third-party intellectual property need their own terms."
      },
      {
        "q": "Can you improve an existing product?",
        "a": "Yes, I can assess a defined improvement to an existing product. Share the current stack, repository access arrangements and the problem to reproduce before I quote the work."
      }
    ],
    "buyerSections": [
      {
        "heading": "How I scope your bid & tender management project",
        "text": "I map a tender from discovery to submission before designing the dashboard. I need the actual document checklist, approval owners and rules for deadline changes. The first release should make incomplete submissions visible, rather than adding an automatic tender feed before its access and reliability are understood."
      },
      {
        "heading": "What determines price and delivery",
        "text": "I quote the agreed scope after reviewing the users, essential features, integrations and existing code or data. The written proposal separates development from recurring services and lists milestones, acceptance checks and handover terms. I do not publish an unconfirmed starting price or promise a launch date before that review."
      }
    ],
    "comparison": {
      "headers": [
        "Scope option",
        "What we define",
        "Quote depends on"
      ],
      "rows": [
        [
          "Tender register",
          "Opportunities, owners, deadlines and reminders",
          "Existing spreadsheet fields and import rules"
        ],
        [
          "Approval workflow",
          "Submission checks, permissions and audit history",
          "Who can approve, revise or withdraw a bid"
        ],
        [
          "Connected bid system",
          "Document storage, reporting and integrations",
          "Retention rules and the systems providing tender data"
        ]
      ],
      "caption": "Scope comparison, not published package prices. Request a written estimate for your requirements."
    },
    "cta": "Send your tender workflow",
    "relatedGuides": [
      "freelance-software-development-cost",
      "plan-custom-software-project"
    ]
  },
  {
    "slug": "mobile-app-development",
    "name": "Freelance Flutter App Developer",
    "shortName": "Mobile Apps",
    "icon": "smartphone",
    "headline": "Freelance project delivery, with scope and milestones agreed in writing.",
    "metaTitle": "Freelance Flutter App Developer | Gagan Shukla",
    "metaDescription": "I build mobile apps for business workflows. 4+ years of experience. Send your scope by email or WhatsApp for a written quote.",
    "relatedGuides": [
      "choose-best-freelance-developer",
      "logistics-app-development-requirements",
      "freelance-software-development-cost",
      "plan-custom-software-project"
    ],
    "keywords": [
      "Mobile App Development Services",
      "Hire Flutter Developer",
      "Hire React Native Developer",
      "Android App Developer India",
      "iOS App Developer",
      "Cross Platform App Development"
    ],
    "intro": "I provide freelance Flutter app development for businesses that need Android and iOS workflows, account access, notifications and backend integration. My relevant work includes TruckMitr, TMConnect and HRMS/CRM. I work from Noida, India, with 4+ years of development experience. Send your requirements by email or WhatsApp so I can assess the scope, dependencies and delivery milestones.",
    "problems": [
      "Your app idea needs to launch on Android and iOS without paying for two separate teams.",
      "Your current app is slow, crashes, or breaks when users lose network connection.",
      "You need real features (payments, live tracking, push notifications), not just screens."
    ],
    "deliverables": [
      {
        "icon": "devices",
        "title": "Android + iOS from one codebase",
        "desc": "Flutter or React Native, chosen based on your team and product needs."
      },
      {
        "icon": "cloud_off",
        "title": "Offline-first sync",
        "desc": "Local SQLite storage that syncs to the cloud when the network returns, already proven in logistics apps."
      },
      {
        "icon": "payments",
        "title": "Payments",
        "desc": "Razorpay, Stripe and UPI checkout flows with server-side verification."
      },
      {
        "icon": "location_on",
        "title": "Maps & live tracking",
        "desc": "Google Maps SDK, live GPS tracking, geofencing and route display."
      },
      {
        "icon": "notifications_active",
        "title": "Push notifications",
        "desc": "Firebase Cloud Messaging with role-based and scheduled notifications."
      },
      {
        "icon": "rocket_launch",
        "title": "Store launch",
        "desc": "Play Store & App Store submission, listing assets and release management."
      }
    ],
    "techStack": [
      "Flutter",
      "Dart",
      "React Native",
      "Redux Toolkit",
      "Riverpod",
      "Firebase",
      "Supabase",
      "Node.js",
      "SQLite"
    ],
    "relatedProjects": [
      "truckmitr",
      "aura",
      "TMConnact"
    ],
    "faqs": [
      {
        "q": "What does your mobile apps service include?",
        "a": "I scope Android and iOS workflows, account access, notifications and backend integration around your business workflow. The proposal lists the included features, integrations, testing and handover deliverables."
      },
      {
        "q": "How much does mobile apps cost?",
        "a": "The price depends on the agreed scope; I have not published a universal starting price. Send the users, required features, integrations and existing assets for a written estimate that separates development and recurring costs."
      },
      {
        "q": "How long will the first release take?",
        "a": "I estimate delivery after reviewing the workflow and dependencies. The milestone plan identifies required approvals, integration access and what you can test at each stage."
      },
      {
        "q": "Can we work entirely by email and WhatsApp?",
        "a": "Yes, I handle freelance project enquiries and written project updates through email and WhatsApp. Send a project brief; no call booking is required."
      },
      {
        "q": "What relevant work can I review?",
        "a": "My relevant portfolio includes TruckMitr, TMConnect and HRMS/CRM. Review the case studies and ask about my role and the scope closest to your project; portfolio totals are not results guaranteed for your business."
      },
      {
        "q": "What will I own when the project is delivered?",
        "a": "Source-code ownership, repository access, deployment instructions and support terms are agreed in the written contract. External services, existing licences and third-party intellectual property need their own terms."
      },
      {
        "q": "Can you improve an existing product?",
        "a": "Yes, I can assess a defined improvement to an existing product. Share the current stack, repository access arrangements and the problem to reproduce before I quote the work."
      }
    ],
    "buyerSections": [
      {
        "heading": "How I scope your mobile apps project",
        "text": "I choose Flutter, React Native or native code after reviewing the required device features and the team that will maintain the app. I test the core journey on actual target devices, including denied permissions and poor connectivity. Store review and external API availability are dependencies, so I separate them from development milestones."
      },
      {
        "heading": "What determines price and delivery",
        "text": "I quote the agreed scope after reviewing the users, essential features, integrations and existing code or data. The written proposal separates development from recurring services and lists milestones, acceptance checks and handover terms. I do not publish an unconfirmed starting price or promise a launch date before that review."
      }
    ],
    "comparison": {
      "headers": [
        "Scope option",
        "What we define",
        "Quote depends on"
      ],
      "rows": [
        [
          "First mobile release",
          "One user journey, authentication and essential screens",
          "Android, iOS, offline needs and API availability"
        ],
        [
          "Business app",
          "Multiple roles, notifications and admin tools",
          "Permissions, device testing and backend ownership"
        ],
        [
          "Existing app improvement",
          "A defined feature, bug fix or release update",
          "Repository access, dependencies and reproduction steps"
        ]
      ],
      "caption": "Scope comparison, not published package prices. Request a written estimate for your requirements."
    },
    "cta": "Send your app brief"
  },
  {
    "slug": "web-development",
    "name": "Freelance Next.js Web Developer",
    "shortName": "Websites & Web Apps",
    "icon": "language",
    "headline": "Freelance project delivery, with scope and milestones agreed in writing.",
    "metaTitle": "Freelance Next.js Web Developer | Gagan Shukla",
    "metaDescription": "I build websites & web apps for business workflows. 4+ years of experience. Send your scope by email or WhatsApp for a written quote.",
    "relatedGuides": [
      "choose-best-freelance-developer",
      "plan-custom-software-project",
      "freelance-software-development-cost"
    ],
    "keywords": [
      "Website Development Services",
      "Next.js Developer",
      "React Developer India",
      "Web Application Development",
      "Business Website Development",
      "Freelance Web Developer India"
    ],
    "intro": "I provide freelance Next.js web development for businesses that need service websites, enquiry journeys, account dashboards and web applications. My relevant work includes VRC Mobility. I work from Noida, India, with 4+ years of development experience. Send your requirements by email or WhatsApp so I can assess the scope, dependencies and delivery milestones.",
    "problems": [
      "Your website does not show up on Google, or loads too slowly on mobile.",
      "You need a customer portal, booking system or dashboard, not just a brochure site.",
      "Your team is stuck editing content through a developer for every change."
    ],
    "deliverables": [
      {
        "icon": "speed",
        "title": "Core Web Vitals optimised",
        "desc": "Server rendering, optimised images and fonts for top Lighthouse scores."
      },
      {
        "icon": "travel_explore",
        "title": "Technical SEO built in",
        "desc": "Metadata, sitemaps, JSON-LD schema and clean URLs on every page."
      },
      {
        "icon": "dashboard",
        "title": "Dashboards & portals",
        "desc": "Role-based admin panels, customer portals and internal tools."
      },
      {
        "icon": "edit_note",
        "title": "Editable content",
        "desc": "CMS or Supabase-backed content so your team can update pages without code."
      },
      {
        "icon": "api",
        "title": "APIs & integrations",
        "desc": "REST APIs, payment gateways, email (Resend), CRMs and third-party services."
      },
      {
        "icon": "cloud_upload",
        "title": "Deployment & hosting",
        "desc": "Vercel or AWS deployment, custom domain, SSL, CI/CD and analytics."
      }
    ],
    "techStack": [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "Vercel",
      "AWS"
    ],
    "relatedProjects": [
      "hashkart",
      "hrms-crm"
    ],
    "faqs": [
      {
        "q": "What does your websites & web apps service include?",
        "a": "I scope service websites, enquiry journeys, account dashboards and web applications around your business workflow. The proposal lists the included features, integrations, testing and handover deliverables."
      },
      {
        "q": "How much does websites & web apps cost?",
        "a": "The price depends on the agreed scope; I have not published a universal starting price. Send the users, required features, integrations and existing assets for a written estimate that separates development and recurring costs."
      },
      {
        "q": "How long will the first release take?",
        "a": "I estimate delivery after reviewing the workflow and dependencies. The milestone plan identifies required approvals, integration access and what you can test at each stage."
      },
      {
        "q": "Can we work entirely by email and WhatsApp?",
        "a": "Yes, I handle freelance project enquiries and written project updates through email and WhatsApp. Send a project brief; no call booking is required."
      },
      {
        "q": "What relevant work can I review?",
        "a": "My relevant portfolio includes VRC Mobility. Review the case studies and ask about my role and the scope closest to your project; portfolio totals are not results guaranteed for your business."
      },
      {
        "q": "What will I own when the project is delivered?",
        "a": "Source-code ownership, repository access, deployment instructions and support terms are agreed in the written contract. External services, existing licences and third-party intellectual property need their own terms."
      },
      {
        "q": "Can you improve an existing product?",
        "a": "Yes, I can assess a defined improvement to an existing product. Share the current stack, repository access arrangements and the problem to reproduce before I quote the work."
      }
    ],
    "buyerSections": [
      {
        "heading": "How I scope your websites & web apps project",
        "text": "I start with the enquiry or business action the website needs to support. For a service website, I connect useful pages to relevant evidence and a working contact route. For a web application, I define permissions and error states before adding screens. I check rendered metadata and canonical URLs rather than relying on keyword counts."
      },
      {
        "heading": "What determines price and delivery",
        "text": "I quote the agreed scope after reviewing the users, essential features, integrations and existing code or data. The written proposal separates development from recurring services and lists milestones, acceptance checks and handover terms. I do not publish an unconfirmed starting price or promise a launch date before that review."
      }
    ],
    "comparison": {
      "headers": [
        "Scope option",
        "What we define",
        "Quote depends on"
      ],
      "rows": [
        [
          "Lead generation website",
          "Service pages, clear contact routes and editable content",
          "Copy, assets, CMS needs and enquiry routing"
        ],
        [
          "Business web app",
          "Roles, dashboards and operational workflows",
          "Data model, integrations and permissions"
        ],
        [
          "Website improvement",
          "A bounded performance, accessibility or SEO task",
          "Current code, crawl evidence and acceptance checks"
        ]
      ],
      "caption": "Scope comparison, not published package prices. Request a written estimate for your requirements."
    },
    "cta": "Send your website brief"
  },
  {
    "slug": "crm-development",
    "name": "Custom CRM Developer for Field Sales",
    "shortName": "CRM Systems",
    "icon": "support_agent",
    "headline": "Freelance project delivery, with scope and milestones agreed in writing.",
    "metaTitle": "Custom CRM Developer for Field Sales | Gagan Shukla",
    "metaDescription": "I build crm systems for business workflows. 4+ years of experience. Send your scope by email or WhatsApp for a written quote.",
    "keywords": [
      "Custom CRM Development",
      "CRM Software Development India",
      "Mobile CRM App",
      "Lead Management Software",
      "Sales CRM Developer",
      "Telecaller CRM App"
    ],
    "intro": "I provide custom CRM development for field sales teams that need lead stages, follow-ups, field visits, staff permissions and reporting. My relevant work includes TMConnect and HRMS/CRM. I work from Noida, India, with 4+ years of development experience. Send your requirements by email or WhatsApp so I can assess the scope, dependencies and delivery milestones.",
    "problems": [
      "Leads are scattered across WhatsApp, Excel sheets and notebooks, and follow-ups get missed.",
      "Per-user pricing on Salesforce, Zoho or HubSpot is growing faster than your team.",
      "Field agents and telecallers need a simple mobile app, not a complex desktop tool."
    ],
    "deliverables": [
      {
        "icon": "filter_alt",
        "title": "Lead & pipeline management",
        "desc": "Capture leads from forms, ads and calls; move them through custom stages."
      },
      {
        "icon": "call",
        "title": "Telecaller & field-agent apps",
        "desc": "Mobile apps with call logging, visit check-ins and daily targets."
      },
      {
        "icon": "manage_accounts",
        "title": "Role-based access",
        "desc": "Admin, manager and agent roles with row-level data security."
      },
      {
        "icon": "alarm",
        "title": "Follow-up reminders",
        "desc": "Automated push, email and WhatsApp reminders so no lead goes cold."
      },
      {
        "icon": "monitoring",
        "title": "Reports & dashboards",
        "desc": "Conversion funnels, team performance and revenue forecasts in real time."
      },
      {
        "icon": "hub",
        "title": "Integrations",
        "desc": "Connect website forms, Meta/Google lead ads, payment gateways and email."
      }
    ],
    "techStack": [
      "React Native",
      "Flutter",
      "Next.js",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Firebase"
    ],
    "relatedProjects": [
      "hrms-crm",
      "TMConnact"
    ],
    "faqs": [
      {
        "q": "What does your crm systems service include?",
        "a": "I scope lead stages, follow-ups, field visits, staff permissions and reporting around your business workflow. The proposal lists the included features, integrations, testing and handover deliverables."
      },
      {
        "q": "How much does crm systems cost?",
        "a": "The price depends on the agreed scope; I have not published a universal starting price. Send the users, required features, integrations and existing assets for a written estimate that separates development and recurring costs."
      },
      {
        "q": "How long will the first release take?",
        "a": "I estimate delivery after reviewing the workflow and dependencies. The milestone plan identifies required approvals, integration access and what you can test at each stage."
      },
      {
        "q": "Can we work entirely by email and WhatsApp?",
        "a": "Yes, I handle freelance project enquiries and written project updates through email and WhatsApp. Send a project brief; no call booking is required."
      },
      {
        "q": "What relevant work can I review?",
        "a": "My relevant portfolio includes TMConnect and HRMS/CRM. Review the case studies and ask about my role and the scope closest to your project; portfolio totals are not results guaranteed for your business."
      },
      {
        "q": "What will I own when the project is delivered?",
        "a": "Source-code ownership, repository access, deployment instructions and support terms are agreed in the written contract. External services, existing licences and third-party intellectual property need their own terms."
      },
      {
        "q": "Can you improve an existing product?",
        "a": "Yes, I can assess a defined improvement to an existing product. Share the current stack, repository access arrangements and the problem to reproduce before I quote the work."
      }
    ],
    "buyerSections": [
      {
        "heading": "How I scope your crm systems project",
        "text": "I recommend configuring an existing CRM when its standard workflow meets your needs. A custom system becomes worth discussing when field visits, permissions or disconnected records block daily work. I ask for sample exports and a written definition of each sales stage. Hosting, support and any third-party licences remain separate cost items."
      },
      {
        "heading": "What determines price and delivery",
        "text": "I quote the agreed scope after reviewing the users, essential features, integrations and existing code or data. The written proposal separates development from recurring services and lists milestones, acceptance checks and handover terms. I do not publish an unconfirmed starting price or promise a launch date before that review."
      }
    ],
    "comparison": {
      "headers": [
        "Scope option",
        "What we define",
        "Quote depends on"
      ],
      "rows": [
        [
          "Configure existing CRM",
          "Standard sales stages and existing integrations",
          "Available plans, limitations and configuration effort"
        ],
        [
          "Custom CRM first release",
          "One sales workflow and role-based access",
          "Lead sources, assignment and reporting rules"
        ],
        [
          "Field sales companion",
          "Mobile visits, offline capture and office sync",
          "Device permissions, conflicts and source CRM APIs"
        ]
      ],
      "caption": "Scope comparison, not published package prices. Request a written estimate for your requirements."
    },
    "cta": "Send your sales workflow",
    "relatedGuides": [
      "freelance-software-development-cost",
      "plan-custom-software-project"
    ]
  },
  {
    "slug": "erp-development",
    "name": "Custom ERP Developer for Business",
    "shortName": "ERP Systems",
    "icon": "account_tree",
    "headline": "Freelance project delivery, with scope and milestones agreed in writing.",
    "metaTitle": "Custom ERP Developer for Business | Gagan Shukla",
    "metaDescription": "I build erp systems for business workflows. 4+ years of experience. Send your scope by email or WhatsApp for a written quote.",
    "keywords": [
      "Custom ERP Development",
      "ERP Software for SME",
      "ERP Developer India",
      "Inventory Management Software",
      "Billing Software Development",
      "Business Management Software"
    ],
    "intro": "I provide custom ERP development for businesses that need inventory, purchasing, approval rules and operational reports. My relevant work includes HRMS/CRM and related business software. I work from Noida, India, with 4+ years of development experience. Send your requirements by email or WhatsApp so I can assess the scope, dependencies and delivery milestones.",
    "problems": [
      "Stock, orders and billing live in different tools, so nobody trusts the numbers.",
      "Generic ERPs are expensive, bloated and take months to configure.",
      "Owners want live business reports on their phone, not at month-end."
    ],
    "deliverables": [
      {
        "icon": "inventory_2",
        "title": "Inventory & warehouse",
        "desc": "Stock levels, batches, low-stock alerts and multi-location tracking."
      },
      {
        "icon": "receipt_long",
        "title": "Sales, purchase & billing",
        "desc": "Quotations, orders, invoices and GST-ready billing workflows."
      },
      {
        "icon": "groups",
        "title": "HR & payroll module",
        "desc": "Attendance, leave and payroll, built on my production HRMS experience."
      },
      {
        "icon": "query_stats",
        "title": "Live reports",
        "desc": "Sales, stock and cash-flow dashboards on web and mobile."
      },
      {
        "icon": "lock_person",
        "title": "Granular permissions",
        "desc": "Department-level roles and audit trails for every change."
      },
      {
        "icon": "extension",
        "title": "Modular rollout",
        "desc": "Launch one module first, then add more as your team adopts it."
      }
    ],
    "techStack": [
      "Next.js",
      "React Native",
      "Node.js",
      "Django",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "AWS"
    ],
    "relatedProjects": [
      "hrms-crm",
      "hashkart",
      "truckmitr"
    ],
    "faqs": [
      {
        "q": "What does your erp systems service include?",
        "a": "I scope inventory, purchasing, approval rules and operational reports around your business workflow. The proposal lists the included features, integrations, testing and handover deliverables."
      },
      {
        "q": "How much does erp systems cost?",
        "a": "The price depends on the agreed scope; I have not published a universal starting price. Send the users, required features, integrations and existing assets for a written estimate that separates development and recurring costs."
      },
      {
        "q": "How long will the first release take?",
        "a": "I estimate delivery after reviewing the workflow and dependencies. The milestone plan identifies required approvals, integration access and what you can test at each stage."
      },
      {
        "q": "Can we work entirely by email and WhatsApp?",
        "a": "Yes, I handle freelance project enquiries and written project updates through email and WhatsApp. Send a project brief; no call booking is required."
      },
      {
        "q": "What relevant work can I review?",
        "a": "My relevant portfolio includes HRMS/CRM and related business software. Review the case studies and ask about my role and the scope closest to your project; portfolio totals are not results guaranteed for your business."
      },
      {
        "q": "What will I own when the project is delivered?",
        "a": "Source-code ownership, repository access, deployment instructions and support terms are agreed in the written contract. External services, existing licences and third-party intellectual property need their own terms."
      },
      {
        "q": "Can you improve an existing product?",
        "a": "Yes, I can assess a defined improvement to an existing product. Share the current stack, repository access arrangements and the problem to reproduce before I quote the work."
      }
    ],
    "buyerSections": [
      {
        "heading": "How I scope your erp systems project",
        "text": "I scope one operational module before proposing a full ERP replacement. I need the source of truth for stock, purchasing and finance, including who can correct a record. I agree migration checks and reconciliation reports with the business owner. Accounting and statutory requirements must be supplied and approved by your advisers."
      },
      {
        "heading": "What determines price and delivery",
        "text": "I quote the agreed scope after reviewing the users, essential features, integrations and existing code or data. The written proposal separates development from recurring services and lists milestones, acceptance checks and handover terms. I do not publish an unconfirmed starting price or promise a launch date before that review."
      }
    ],
    "comparison": {
      "headers": [
        "Scope option",
        "What we define",
        "Quote depends on"
      ],
      "rows": [
        [
          "Operations module",
          "One stock or purchasing workflow",
          "Units, locations, permissions and approval rules"
        ],
        [
          "Connected ERP modules",
          "Shared records across agreed departments",
          "Finance system boundaries and reconciliation"
        ],
        [
          "ERP migration",
          "Import and validation of existing records",
          "Export format, duplicate handling and opening balances"
        ]
      ],
      "caption": "Scope comparison, not published package prices. Request a written estimate for your requirements."
    },
    "cta": "Send your operations brief",
    "relatedGuides": [
      "freelance-software-development-cost",
      "plan-custom-software-project"
    ]
  },
  {
    "slug": "hrms-software-development",
    "name": "Custom HRMS App Developer",
    "shortName": "HRMS & Payroll",
    "icon": "badge",
    "headline": "Freelance project delivery, with scope and milestones agreed in writing.",
    "metaTitle": "Custom HRMS App Developer | Gagan Shukla",
    "metaDescription": "I build hrms & payroll for business workflows. 4+ years of experience. Send your scope by email or WhatsApp for a written quote.",
    "keywords": [
      "HRMS Software Development",
      "Payroll Software Development",
      "Attendance App Development",
      "Leave Management System",
      "Employee Management App",
      "Custom HR Software India"
    ],
    "intro": "I provide custom HRMS app development for businesses that need attendance, employee records, leave approvals and manager dashboards. My relevant work includes HRMS/CRM. I work from Noida, India, with 4+ years of development experience. Send your requirements by email or WhatsApp so I can assess the scope, dependencies and delivery milestones.",
    "problems": [
      "Attendance and leave are tracked on paper or spreadsheets and payroll takes days.",
      "Mismatches between attendance and salary create disputes every month.",
      "Employees have no self-service app for payslips, leave or announcements."
    ],
    "deliverables": [
      {
        "icon": "fingerprint",
        "title": "Mobile attendance",
        "desc": "Geo-fenced check-in/out with selfie or location verification."
      },
      {
        "icon": "event_busy",
        "title": "Leave management",
        "desc": "Custom leave policies, approvals and balances."
      },
      {
        "icon": "account_balance_wallet",
        "title": "Automated payroll",
        "desc": "Payroll calculated directly from attendance, with payslip generation."
      },
      {
        "icon": "person",
        "title": "Employee self-service",
        "desc": "Payslips, documents, holidays and announcements in one app."
      },
      {
        "icon": "notifications",
        "title": "Notifications",
        "desc": "Push alerts for approvals, reminders and company updates."
      },
      {
        "icon": "insights",
        "title": "HR analytics",
        "desc": "Headcount, attendance trends and payroll cost reports."
      }
    ],
    "techStack": [
      "React Native",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Firebase Auth",
      "Redux Toolkit"
    ],
    "relatedProjects": [
      "hrms-crm"
    ],
    "faqs": [
      {
        "q": "What does your hrms & payroll service include?",
        "a": "I scope attendance, employee records, leave approvals and manager dashboards around your business workflow. The proposal lists the included features, integrations, testing and handover deliverables."
      },
      {
        "q": "How much does hrms & payroll cost?",
        "a": "The price depends on the agreed scope; I have not published a universal starting price. Send the users, required features, integrations and existing assets for a written estimate that separates development and recurring costs."
      },
      {
        "q": "How long will the first release take?",
        "a": "I estimate delivery after reviewing the workflow and dependencies. The milestone plan identifies required approvals, integration access and what you can test at each stage."
      },
      {
        "q": "Can we work entirely by email and WhatsApp?",
        "a": "Yes, I handle freelance project enquiries and written project updates through email and WhatsApp. Send a project brief; no call booking is required."
      },
      {
        "q": "What relevant work can I review?",
        "a": "My relevant portfolio includes HRMS/CRM. Review the case studies and ask about my role and the scope closest to your project; portfolio totals are not results guaranteed for your business."
      },
      {
        "q": "What will I own when the project is delivered?",
        "a": "Source-code ownership, repository access, deployment instructions and support terms are agreed in the written contract. External services, existing licences and third-party intellectual property need their own terms."
      },
      {
        "q": "Can you improve an existing product?",
        "a": "Yes, I can assess a defined improvement to an existing product. Share the current stack, repository access arrangements and the problem to reproduce before I quote the work."
      }
    ],
    "buyerSections": [
      {
        "heading": "How I scope your hrms & payroll project",
        "text": "I define attendance rules before implementing a check-in screen. The scope needs to cover missed check-ins, manager corrections, offline submissions and employee access to their records. I keep payroll calculations separate unless their rules and validation are explicitly included. Staff privacy and retention requirements come from your approved business policy."
      },
      {
        "heading": "What determines price and delivery",
        "text": "I quote the agreed scope after reviewing the users, essential features, integrations and existing code or data. The written proposal separates development from recurring services and lists milestones, acceptance checks and handover terms. I do not publish an unconfirmed starting price or promise a launch date before that review."
      }
    ],
    "comparison": {
      "headers": [
        "Scope option",
        "What we define",
        "Quote depends on"
      ],
      "rows": [
        [
          "Attendance workflow",
          "Employee check-ins and manager review",
          "Device access, offline rules and location requirements"
        ],
        [
          "HR operations",
          "Employee records, leave and permissions",
          "Approval chains and export requirements"
        ],
        [
          "HRMS integration",
          "Connections to an existing payroll or HR tool",
          "Documented API, data boundaries and audit requirements"
        ]
      ],
      "caption": "Scope comparison, not published package prices. Request a written estimate for your requirements."
    },
    "cta": "Send your HRMS brief",
    "relatedGuides": [
      "freelance-software-development-cost",
      "plan-custom-software-project"
    ]
  },
  {
    "slug": "ecommerce-development",
    "name": "Freelance Ecommerce App Developer",
    "shortName": "E-commerce",
    "icon": "shopping_cart",
    "headline": "Freelance project delivery, with scope and milestones agreed in writing.",
    "metaTitle": "Freelance Ecommerce App Developer | Gagan Shukla",
    "metaDescription": "I build e-commerce for business workflows. 4+ years of experience. Send your scope by email or WhatsApp for a written quote.",
    "keywords": [
      "E-commerce App Development",
      "E-commerce Website Development",
      "Multi Vendor Marketplace Development",
      "Shopping App Developer",
      "Razorpay Integration",
      "Flutter E-commerce App"
    ],
    "intro": "I provide freelance ecommerce app development for businesses that need product catalogues, checkout, order status and merchant administration. My relevant work includes HashKart and GlowCart. I work from Noida, India, with 4+ years of development experience. Send your requirements by email or WhatsApp so I can assess the scope, dependencies and delivery milestones.",
    "problems": [
      "Marketplace commissions and Shopify app fees are eating into your margins.",
      "Your current store is slow on mobile and loses customers at checkout.",
      "You need seller onboarding, commissions and order routing for a marketplace."
    ],
    "deliverables": [
      {
        "icon": "storefront",
        "title": "Catalogue & search",
        "desc": "Fast product listings, filters, variants and image galleries."
      },
      {
        "icon": "shopping_bag",
        "title": "Cart & checkout",
        "desc": "Razorpay, Stripe and UPI checkout with order tracking."
      },
      {
        "icon": "store",
        "title": "Multi-vendor marketplace",
        "desc": "Admin / Seller / Buyer roles, commissions and vendor dashboards."
      },
      {
        "icon": "local_shipping",
        "title": "Orders & delivery",
        "desc": "Order states, shipping integrations and customer notifications."
      },
      {
        "icon": "loyalty",
        "title": "Wishlist, coupons & reviews",
        "desc": "The retention features shoppers expect."
      },
      {
        "icon": "analytics",
        "title": "Sales analytics",
        "desc": "Revenue, best-sellers and inventory dashboards."
      }
    ],
    "techStack": [
      "Flutter",
      "React Native",
      "Next.js",
      "Node.js",
      "Django REST",
      "PostgreSQL",
      "MongoDB",
      "Razorpay",
      "Stripe"
    ],
    "relatedProjects": [
      "hashkart",
      "glowcart"
    ],
    "faqs": [
      {
        "q": "What does your e-commerce service include?",
        "a": "I scope product catalogues, checkout, order status and merchant administration around your business workflow. The proposal lists the included features, integrations, testing and handover deliverables."
      },
      {
        "q": "How much does e-commerce cost?",
        "a": "The price depends on the agreed scope; I have not published a universal starting price. Send the users, required features, integrations and existing assets for a written estimate that separates development and recurring costs."
      },
      {
        "q": "How long will the first release take?",
        "a": "I estimate delivery after reviewing the workflow and dependencies. The milestone plan identifies required approvals, integration access and what you can test at each stage."
      },
      {
        "q": "Can we work entirely by email and WhatsApp?",
        "a": "Yes, I handle freelance project enquiries and written project updates through email and WhatsApp. Send a project brief; no call booking is required."
      },
      {
        "q": "What relevant work can I review?",
        "a": "My relevant portfolio includes HashKart and GlowCart. Review the case studies and ask about my role and the scope closest to your project; portfolio totals are not results guaranteed for your business."
      },
      {
        "q": "What will I own when the project is delivered?",
        "a": "Source-code ownership, repository access, deployment instructions and support terms are agreed in the written contract. External services, existing licences and third-party intellectual property need their own terms."
      },
      {
        "q": "Can you improve an existing product?",
        "a": "Yes, I can assess a defined improvement to an existing product. Share the current stack, repository access arrangements and the problem to reproduce before I quote the work."
      }
    ],
    "buyerSections": [
      {
        "heading": "How I scope your e-commerce project",
        "text": "I trace an order through payment, fulfilment, cancellation and refund before deciding the first release. I need your catalogue source, inventory rules and payment-provider requirements. A multi-seller marketplace needs separate agreement on seller permissions and settlement responsibilities. I avoid quoting it as a simple storefront with extra screens."
      },
      {
        "heading": "What determines price and delivery",
        "text": "I quote the agreed scope after reviewing the users, essential features, integrations and existing code or data. The written proposal separates development from recurring services and lists milestones, acceptance checks and handover terms. I do not publish an unconfirmed starting price or promise a launch date before that review."
      }
    ],
    "comparison": {
      "headers": [
        "Scope option",
        "What we define",
        "Quote depends on"
      ],
      "rows": [
        [
          "Storefront",
          "Catalogue, product pages and checkout",
          "Catalogue source, payment provider and fulfilment"
        ],
        [
          "Shopping app",
          "Mobile shopping and order updates",
          "Customer accounts, notifications and backend APIs"
        ],
        [
          "Marketplace",
          "Multiple sellers and order responsibilities",
          "Settlement rules, commission and seller permissions"
        ]
      ],
      "caption": "Scope comparison, not published package prices. Request a written estimate for your requirements."
    },
    "cta": "Send your commerce brief",
    "relatedGuides": [
      "freelance-software-development-cost",
      "plan-custom-software-project"
    ]
  },
  {
    "slug": "saas-mvp-development",
    "name": "Freelance SaaS MVP Developer",
    "shortName": "SaaS & MVPs",
    "icon": "rocket_launch",
    "headline": "Freelance project delivery, with scope and milestones agreed in writing.",
    "metaTitle": "Freelance SaaS MVP Developer | Gagan Shukla",
    "metaDescription": "I build saas & mvps for business workflows. 4+ years of experience. Send your scope by email or WhatsApp for a written quote.",
    "keywords": [
      "MVP Development",
      "SaaS Development",
      "Startup App Developer",
      "Hire Full Stack Developer",
      "MVP Developer India",
      "Technical Co-founder for Hire"
    ],
    "intro": "I provide freelance SaaS MVP development for businesses that need tenant accounts, user roles, subscriptions and the core customer workflow. My relevant work includes SaaS work in my portfolio. I work from Noida, India, with 4+ years of development experience. Send your requirements by email or WhatsApp so I can assess the scope, dependencies and delivery milestones.",
    "problems": [
      "You have an idea and early interest, but no technical co-founder.",
      "Agencies quote six months and a six-figure budget for version one.",
      "Your prototype works in demos but falls over with real users."
    ],
    "deliverables": [
      {
        "icon": "bolt",
        "title": "Rapid MVP",
        "desc": "Core user journey live in weeks, with weekly demos."
      },
      {
        "icon": "key",
        "title": "Auth & user roles",
        "desc": "Email, Google and OTP login with role-based access."
      },
      {
        "icon": "credit_card",
        "title": "Subscriptions",
        "desc": "Recurring billing with Stripe or Razorpay subscriptions."
      },
      {
        "icon": "admin_panel_settings",
        "title": "Admin dashboard",
        "desc": "Manage users, content and metrics from day one."
      },
      {
        "icon": "insights",
        "title": "Product analytics",
        "desc": "Event tracking so you know what users actually do."
      },
      {
        "icon": "trending_up",
        "title": "Built to scale",
        "desc": "Clean architecture, CI/CD and a database designed for growth."
      }
    ],
    "techStack": [
      "Next.js",
      "React Native",
      "Flutter",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Vercel",
      "Docker"
    ],
    "relatedProjects": [
      "aura",
      "hashkart",
      "truckmitr"
    ],
    "faqs": [
      {
        "q": "What does your saas & mvps service include?",
        "a": "I scope tenant accounts, user roles, subscriptions and the core customer workflow around your business workflow. The proposal lists the included features, integrations, testing and handover deliverables."
      },
      {
        "q": "How much does saas & mvps cost?",
        "a": "The price depends on the agreed scope; I have not published a universal starting price. Send the users, required features, integrations and existing assets for a written estimate that separates development and recurring costs."
      },
      {
        "q": "How long will the first release take?",
        "a": "I estimate delivery after reviewing the workflow and dependencies. The milestone plan identifies required approvals, integration access and what you can test at each stage."
      },
      {
        "q": "Can we work entirely by email and WhatsApp?",
        "a": "Yes, I handle freelance project enquiries and written project updates through email and WhatsApp. Send a project brief; no call booking is required."
      },
      {
        "q": "What relevant work can I review?",
        "a": "My relevant portfolio includes SaaS work in my portfolio. Review the case studies and ask about my role and the scope closest to your project; portfolio totals are not results guaranteed for your business."
      },
      {
        "q": "What will I own when the project is delivered?",
        "a": "Source-code ownership, repository access, deployment instructions and support terms are agreed in the written contract. External services, existing licences and third-party intellectual property need their own terms."
      },
      {
        "q": "Can you improve an existing product?",
        "a": "Yes, I can assess a defined improvement to an existing product. Share the current stack, repository access arrangements and the problem to reproduce before I quote the work."
      }
    ],
    "buyerSections": [
      {
        "heading": "How I scope your saas & mvps project",
        "text": "I start a SaaS MVP with the customer action that proves the product is useful. I define tenant boundaries, roles and subscription entitlements before adding billing. I separate the first release from later automation and reporting. The quote explains what is included in hosting setup, support and source-code handover."
      },
      {
        "heading": "What determines price and delivery",
        "text": "I quote the agreed scope after reviewing the users, essential features, integrations and existing code or data. The written proposal separates development from recurring services and lists milestones, acceptance checks and handover terms. I do not publish an unconfirmed starting price or promise a launch date before that review."
      }
    ],
    "comparison": {
      "headers": [
        "Scope option",
        "What we define",
        "Quote depends on"
      ],
      "rows": [
        [
          "Validation release",
          "One customer workflow and account access",
          "What demonstrates value to the first customer"
        ],
        [
          "Paid SaaS MVP",
          "Tenant access, billing and administration",
          "Subscription rules, provider access and entitlements"
        ],
        [
          "Existing SaaS feature",
          "One improvement with acceptance checks",
          "Architecture, tenant boundaries and release process"
        ]
      ],
      "caption": "Scope comparison, not published package prices. Request a written estimate for your requirements."
    },
    "cta": "Send your SaaS brief",
    "relatedGuides": [
      "freelance-software-development-cost",
      "plan-custom-software-project"
    ]
  },
  {
    "slug": "ai-chatbot-automation",
    "name": "Freelance AI Chatbot Developer",
    "shortName": "AI & Automation",
    "icon": "smart_toy",
    "headline": "Freelance project delivery, with scope and milestones agreed in writing.",
    "metaTitle": "Freelance AI Chatbot Developer | Gagan Shukla",
    "metaDescription": "I build ai & automation for business workflows. 4+ years of experience. Send your scope by email or WhatsApp for a written quote.",
    "keywords": [
      "AI Chatbot Development",
      "Website Chatbot",
      "LLM Integration",
      "Business Automation Services",
      "AI Integration Developer",
      "Workflow Automation"
    ],
    "intro": "I provide AI chatbot development for businesses that need document-backed answers, enquiry capture and human handover. My relevant work includes the assistant on this website. I work from Noida, India, with 4+ years of development experience. Send your requirements by email or WhatsApp so I can assess the scope, dependencies and delivery milestones.",
    "problems": [
      "Your team answers the same customer questions dozens of times a day.",
      "Website visitors leave without contacting you outside business hours.",
      "Manual data entry between tools wastes hours every week."
    ],
    "deliverables": [
      {
        "icon": "chat",
        "title": "Website & in-app chatbot",
        "desc": "An AI assistant that answers from your own content and FAQs."
      },
      {
        "icon": "person_add",
        "title": "Lead capture",
        "desc": "The bot qualifies visitors and sends hot leads to your CRM or inbox."
      },
      {
        "icon": "description",
        "title": "Document Q&A",
        "desc": "Let staff search manuals, policies and knowledge bases in plain language."
      },
      {
        "icon": "autorenew",
        "title": "Workflow automation",
        "desc": "Automate emails, reports, data syncs and approvals between tools."
      },
      {
        "icon": "shield",
        "title": "Safe & private",
        "desc": "Server-side API keys, rate limiting and no training on your private data."
      },
      {
        "icon": "integration_instructions",
        "title": "Any stack",
        "desc": "Integrates with Next.js, React Native, Flutter, Supabase Edge Functions or Node."
      }
    ],
    "techStack": [
      "LLM APIs",
      "Supabase Edge Functions",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "Python"
    ],
    "relatedProjects": [
      "hrms-crm",
      "aura"
    ],
    "faqs": [
      {
        "q": "What does your ai & automation service include?",
        "a": "I scope document-backed answers, enquiry capture and human handover around your business workflow. The proposal lists the included features, integrations, testing and handover deliverables."
      },
      {
        "q": "How much does ai & automation cost?",
        "a": "The price depends on the agreed scope; I have not published a universal starting price. Send the users, required features, integrations and existing assets for a written estimate that separates development and recurring costs."
      },
      {
        "q": "How long will the first release take?",
        "a": "I estimate delivery after reviewing the workflow and dependencies. The milestone plan identifies required approvals, integration access and what you can test at each stage."
      },
      {
        "q": "Can we work entirely by email and WhatsApp?",
        "a": "Yes, I handle freelance project enquiries and written project updates through email and WhatsApp. Send a project brief; no call booking is required."
      },
      {
        "q": "What relevant work can I review?",
        "a": "My relevant portfolio includes the assistant on this website. Review the case studies and ask about my role and the scope closest to your project; portfolio totals are not results guaranteed for your business."
      },
      {
        "q": "What will I own when the project is delivered?",
        "a": "Source-code ownership, repository access, deployment instructions and support terms are agreed in the written contract. External services, existing licences and third-party intellectual property need their own terms."
      },
      {
        "q": "Can you improve an existing product?",
        "a": "Yes, I can assess a defined improvement to an existing product. Share the current stack, repository access arrangements and the problem to reproduce before I quote the work."
      }
    ],
    "buyerSections": [
      {
        "heading": "How I scope your ai & automation project",
        "text": "I agree what the assistant can answer and when it must hand over before connecting a model. I test with questions your customers actually ask, including questions the source material cannot answer. Actions that change business records need permission checks and an approval path. Model and hosting usage are operating costs, separate from development."
      },
      {
        "heading": "What determines price and delivery",
        "text": "I quote the agreed scope after reviewing the users, essential features, integrations and existing code or data. The written proposal separates development from recurring services and lists milestones, acceptance checks and handover terms. I do not publish an unconfirmed starting price or promise a launch date before that review."
      }
    ],
    "comparison": {
      "headers": [
        "Scope option",
        "What we define",
        "Quote depends on"
      ],
      "rows": [
        [
          "Website assistant",
          "Answers from approved business information",
          "Content ownership, limits and human handover"
        ],
        [
          "Document assistant",
          "Search across agreed source documents",
          "Access permissions, updates and evaluation questions"
        ],
        [
          "Workflow automation",
          "A bounded action through existing tools",
          "API access, human approval and error recovery"
        ]
      ],
      "caption": "Scope comparison, not published package prices. Request a written estimate for your requirements."
    },
    "cta": "Send your automation brief",
    "relatedGuides": [
      "freelance-software-development-cost",
      "plan-custom-software-project"
    ]
  }
];

export const getService = (slug) => servicesData.find((s) => s.slug === slug);
