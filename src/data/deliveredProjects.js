// Owner-confirmed work. Do not add client metrics, stacks or features without evidence.
export const deliveredProjects = [
  {
    id: 'vrc-mobility', title: 'VRC Mobility', category: 'Website development',
    description: 'VRC Mobility (vrcmobility.in) is a website developed by Gagan Shukla. Gagan reports approximately 25,000 pages indexed and 350+ leads in 15 days.',
    results: [{ value: '350+', label: 'Leads in 15 days' }, { value: '≈25,000', label: 'Pages created and indexed' }],
    resultNote: 'Results reported by Gagan Shukla for VRC Mobility. Search Console and lead records are not published here; these figures have not been independently verified. This outcome is specific to that project.',
    url: 'https://vrcmobility.in', service: 'web-development',
    enquiry: 'I would like to discuss a business website project like VRC Mobility.',
  },
  {
    id: 'bid-management-system', title: 'Bid Management System', category: 'Business software',
    description: 'A bid management system developed by Gagan Shukla. This work adds procurement and bidding software to his business application experience.',
    service: 'bid-management-software',
    enquiry: 'I would like to discuss custom bid or tender management software.',
  },
  {
    id: 'saas-software', title: 'SaaS Software', category: 'SaaS development',
    description: 'Gagan Shukla has developed SaaS software and is available to build new subscription products, startup MVPs and business web applications.',
    service: 'saas-mvp-development',
    enquiry: 'I would like to discuss a SaaS product or MVP.',
  },
];
export const getDeliveredProject = (id) => deliveredProjects.find((project) => project.id === id);
