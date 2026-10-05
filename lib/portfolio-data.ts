export interface SocialLinks {
  linkedin: string
  credly: string
  github?: string
  twitter?: string
  email?: string
}

export interface ProfileData {
  name: string
  title: string
  subtitle: string
  avatar: string
  email: string
  phone: string
  birthday?: string
  location: string
  cvPdfUrl: string
  social: SocialLinks
}

export const profileData: ProfileData = {
  name: 'Onyia Okwudili Oliver',
  title: 'SAP Junior Consultant | Enterprise Systems | Cybersecurity Enthusiast | IT Operations',
  subtitle: '',
  avatar: '/oliver-onyia-avatar.jpg',
  email: 'okwudilionyia139@gmail.com',
  phone: '+234 907 624 2001',
  birthday: '',
  location: 'Lagos, Nigeria',
  cvPdfUrl: '/Onyia_Okwudili_Oliver_Cv.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/onyia-oliver-okwudili-125a04235',
    credly: 'https://www.credly.com/users/okwudili-onyia',
    github: '',
    twitter: '',
  },
}

export const aboutData = {
  objective:
    'A naturally inquisitive IT professional driven to continuously study, learn, unlearn, and improve across ERP/SAP, supply chain, cybersecurity, and telecom/mobile technologies. Eager to bring this adaptability and hands-on IT experience to a reputable, dynamic team, where I can contribute meaningfully and keep growing.',
  researchInterests: [
    'Cybersecurity & System Resilience',
    'ERP Software & SAP Systems',
    'Supply Chain & Logistics Technology',
    'Distributed Systems Design',
    'Secure Enterprise Architecture',
    'Accessible & Inclusive Computing',
    'IT Infrastructure in Emerging Economies',
  ],
  description: [
    'A dedicated and naturally inquisitive Computer Science graduate from Lagos, Nigeria, with rigorous, practical experience spanning enterprise ERP systems, mission-critical infrastructure, and cybersecurity operations across prominent industry leaders including Dangote Group PLC, Blue Ridge Microfinance Bank (OPay), and Cobranet Limited.',
    'Proven track record in deploying and configuring SAP S/4HANA (SD module), rapidly diagnosing and resolving high-impact incidents across order-to-cash workflows, managing end-to-end ISP service lifecycles with strict SLA compliance, and conducting OWASP Top 10-aligned vulnerability assessments on enterprise systems.',
    'Passionate about building resilient, secure, and accessible digital ecosystems. Holds globally recognized, verified credentials in Cybersecurity (ISC2, Cisco) and advanced ERP proficiency, coupled with demonstrated leadership as a collegiate captain and academic research mentor.',
  ],
  stats: [
    { label: 'Industry Roles', value: '5+' },
    { label: 'Verified Badges', value: '4' },
    { label: 'SAP & IT Experience', value: '3+ Yrs' },
    { label: 'SLA Uptime Focus', value: '99.9%' },
  ],
  services: [
    {
      image: '/generated/sap_database_icon_3d_1773677494540.png',
      title: 'Enterprise ERP & SAP S/4HANA',
      description:
        'Deployment, configuration, and incident resolution for SAP S/4HANA SD (Sales & Distribution) module, order-to-cash workflows, with cross-module integration exposure to MM and HCM.',
    },
    {
      image: '/generated/cybersecurity_icon_3d_1773677462812.png',
      title: 'Cybersecurity & Vulnerability Assessment',
      description:
        'Structured vulnerability assessments and penetration testing support using Burp Suite, Nessus, and Netsparker, mapping security gaps against the OWASP Top 10 framework.',
    },
    {
      image: '/generated/it_infrastructure_icon_3d_1773677478073.png',
      title: 'IT Infrastructure & ISP Operations',
      description:
        'End-to-end service ticket lifecycle management, daily network KPI tracking, SLA uptime compliance reporting, and remote first-line connectivity troubleshooting.',
    },
    {
      image: '/generated/technical_support_icon_3d_1773677509277.png',
      title: 'Digital Systems & Technical Support',
      description:
        'Resolving network and application-layer incidents for digital banking platforms, maintaining high availability during peak transaction periods, and hardware/software maintenance.',
    },
  ],
  testimonials: [
    {
      avatar: '/generated/testimonial_avatar_1_1773677538911.png',
      name: 'Dangote Group PLC',
      role: 'Enterprise Systems & Operations',
      text: 'Oliver demonstrated exceptional technical aptitude during our SAP S/4HANA SD deployment. His proactive root-cause analysis on order-to-cash incidents restored operational continuity with measurable delay reduction across facilities.',
    },
    {
      avatar: '/generated/testimonial_avatar_3_1773677577123.png',
      name: 'Cobranet Limited',
      role: 'ISP Network Operations & Client Support',
      text: 'His coordination between sales and technical engineering streamlined client onboarding and SLA compliance monitoring across our corporate and residential accounts, saving valuable field dispatch hours.',
    },
    {
      avatar: '/generated/testimonial_avatar_4_1773677591458.png',
      name: 'Blue Ridge Microfinance Bank (OPay)',
      role: 'Digital Banking Support Team',
      text: 'Oliver exhibited outstanding composure and rapid incident response when troubleshooting live banking platform and application issues, safeguarding system availability during peak transaction volumes.',
    },
    {
      avatar: '/generated/testimonial_avatar_2_1773677556690.png',
      name: 'Digital Encode Ltd',
      role: 'Cybersecurity Assessment Team',
      text: 'Oliver showed thorough methodology in vulnerability assessments and penetration testing documentation using Nessus and Burp Suite, delivering high-grade security reports validated by senior analysts.',
    },
  ],
  clients: [
    {
      name: 'Cobranet Limited',
      logo: '/logos/cobranet.jpg',
      url: 'https://www.cobranet.org',
      category: 'ISP & Enterprise Telecom',
      badgeBg: '#ffffff',
    },
    {
      name: 'Blue Ridge MFB (OPay)',
      logo: '/logos/opay.jpg',
      url: 'https://www.opayweb.com',
      category: 'Digital Banking & FinTech',
      badgeBg: '#ffffff',
    },
    {
      name: 'Dangote Group PLC',
      logo: '/logos/dangote.jpg',
      url: 'https://www.dangote.com',
      category: 'Industrial Conglomerate & SAP',
      badgeBg: '#1c174d',
    },
    {
      name: 'Molchec Construction',
      logo: '/logos/molchec.jpg',
      url: '#resume',
      category: 'Infrastructure & Projects',
      badgeBg: '#738c9d',
    },
    {
      name: 'Digital Encode Ltd',
      logo: '/logos/digital-encode.jpg',
      url: 'https://digitalencode.net',
      category: 'Cybersecurity & GRC Advisory',
      badgeBg: '#ffffff',
    },
    {
      name: 'Caleb University',
      logo: '/logos/caleb-university.jpg',
      url: 'https://calebuniversity.edu.ng',
      category: 'B.Sc. Computer Science',
      badgeBg: '#ffffff',
    },
    {
      name: 'University of Lagos',
      logo: '/logos/unilag.jpg',
      url: 'https://unilag.edu.ng',
      category: 'Diploma in Computer Science',
      badgeBg: '#ffffff',
    },
  ],
}

export const resumeData = {
  education: [
    {
      degree: 'Bachelor of Science (B.Sc.) in Computer Science',
      institution: 'Caleb University',
      logo: '/logos/caleb-university.jpg',
      location: 'Lagos, Nigeria',
      period: '2019 – 2023',
      thesis:
        'Thesis: Development and Evaluation of an E-Learning Platform for Visually Impaired Students — designed and implemented a full accessibility-first learning system with screen-reader integration, keyboard navigation architecture, and low-bandwidth optimisation.',
      highlights: [
        'Conducted structured usability evaluations with target users, measuring interaction efficiency and identifying design gaps; demonstrated measurable improvement in digital accessibility outcomes.',
        'Coursework: Data Structures & Algorithms, Operating Systems, Database Management, Computer Networks, Software Engineering, Information Security, Human-Computer Interaction.',
        'Department Research Team Member; provided peer mentorship to junior Computer Science students in programming fundamentals and academic writing.',
      ],
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'University of Lagos',
      logo: '/logos/unilag.jpg',
      location: 'Lagos, Nigeria',
      period: '2019 – 2020',
      thesis: '',
      highlights: [
        'Foundational program in computer science covering core programming languages, database architectures, algorithmic logic, and computer systems.',
      ],
    },
  ],
  experience: [
    {
      title: 'Operations Support',
      employmentType: 'Voluntary',
      company: 'Cobranet Limited',
      logo: '/logos/cobranet.jpg',
      location: 'Lekki Phase 1, Lagos',
      period: 'February 2026 – Present',
      isCurrent: true,
      highlights: [
        'Strengthened team performance by managing the end-to-end service ticket lifecycle for a portfolio of corporate and residential ISP clients, coordinating across technical, field, and account teams to resolve escalated incidents.',
        'Monitor network performance KPIs daily and generate service delivery reports tracking SLA uptime compliance across multiple client accounts.',
        'Serve as the coordination bridge between the sales and technical teams, resolving client onboarding delays and improving cross-departmental communication workflows.',
        'Provide remote first-line troubleshooting for connectivity faults, reducing unnecessary field dispatch and improving technician scheduling efficiency across service regions.',
      ],
      tags: ['ISP Operations', 'SLA Monitoring', 'Ticket Lifecycle', 'KPI Reporting', 'Technical Troubleshooting'],
    },
    {
      title: 'Inbound Customer Representative',
      company: 'Blue Ridge Microfinance Bank (OPAY)',
      logo: '/logos/opay.jpg',
      location: 'Lagos',
      period: 'June 2025 – August 2026',
      isCurrent: false,
      highlights: [
        'Served as first point of contact for inbound customer calls at a digital banking platform, resolving live service incidents in real time and maintaining a professional customer experience.',
        'Assisted in troubleshooting network and application-layer issues alongside technical teams, helping maintain business continuity and high system availability during peak transaction periods.',
        'Supported customers with limited access to alternative formal financial services, an environment where responsive, accurate incident handling directly shaped financial inclusion outcomes.',
        'Logged and escalated recurring customer-reported issues, contributing to process improvements that reduced repeat incidents and strengthened overall service reliability.',
      ],
      tags: ['Digital Banking', 'FinTech Incident Response', 'System Availability', 'Customer Experience', 'SLA Management'],
    },
    {
      title: 'Field Support Engineer / SAP Junior Consultant (NYSC)',
      company: 'Dangote Group PLC',
      logo: '/logos/dangote.jpg',
      location: 'Lagos',
      period: 'Jun 2024 – May 2025',
      isCurrent: false,
      highlights: [
        'Supported the deployment and configuration of SAP S/4HANA (Sales & Distribution module) across multiple operational sites within one of Africa\'s largest industrial enterprise system environments.',
        'Resolved live SAP SD incidents affecting order-to-cash processes, diagnosing root causes and implementing fixes that restored operational continuity with measurable reduction in processing delays.',
        'Delivered on-site technical support across several Dangote facilities, reducing system downtime through proactive fault diagnosis and rapid hardware/software intervention.',
        'Translated complex system-level findings into operational language for non-technical business stakeholders, supporting informed decision-making for business continuity planning.',
        'Gained hands-on, cross-module exposure to SAP\'s enterprise architecture beyond core SD — including Materials Management (MM) and Human Capital Management (HCM) — deepening understanding of system integration patterns, module interdependencies, and the real-world consequences of distributed system failure at enterprise scale.',
        'Complemented on-site functional exposure with self-directed study to advance from foundational to advanced-level SAP proficiency, applying IT infrastructure and network-troubleshooting expertise alongside SAP functional analysis to bridge technical and business-process problem-solving across Dangote\'s multi-site environment.',
      ],
      tags: ['SAP S/4HANA', 'SD Module', 'Order-to-Cash', 'Enterprise Architecture', 'Incident Resolution', 'Materials Management (MM)'],
    },
    {
      title: 'Project Support Staff',
      company: 'Molchec Construction Company Ltd',
      logo: '/logos/molchec.jpg',
      location: 'Lagos',
      period: 'October 2023 – March 2024',
      isCurrent: false,
      highlights: [
        'Coordinated workforce allocation and material procurement across three concurrent infrastructure projects, demonstrating organisational and cross-functional planning skills.',
        'Supported project logistics and scheduling to ensure on-time delivery of project milestones across pipeline construction operations.',
      ],
      tags: ['Project Logistics', 'Resource Allocation', 'Material Procurement', 'Cross-Functional Planning'],
    },
    {
      title: 'Cybersecurity Intern',
      company: 'Digital Encode Ltd',
      logo: '/logos/digital-encode.jpg',
      location: 'Lagos',
      period: 'July 2022 – December 2022',
      isCurrent: false,
      highlights: [
        'Conducted structured vulnerability assessments on web applications and network systems using Burp Suite, Netsparker, and Nessus mapping findings against the OWASP Top 10 framework.',
        'Assisted in penetration testing engagements across application, network, and infrastructure layers, identifying security gaps in client systems with detailed severity classifications.',
        'Documented discovered vulnerabilities with remediation recommendations, contributing to final client security reports reviewed and validated by senior analysts.',
        'Developed working knowledge of common exploit patterns, attack surface analysis, and the relationship between software design decisions and long-term security exposure.',
      ],
      tags: ['Burp Suite', 'Nessus', 'Netsparker', 'OWASP Top 10', 'Vulnerability Assessment', 'Penetration Testing'],
    },
  ],
  certifications: [
    {
      title: 'SAP SD — Basic to Advanced Level',
      issuer: 'Udemy',
      date: '2026',
      badgeImage: '/generated/sap_database_icon_3d_1773677494540.png',
      verified: true,
      credlyUrl: '',
      description:
        'Comprehensive advanced mastery of SAP S/4HANA Sales & Distribution module, enterprise structure configuration, master data, order-to-cash workflows, pricing conditions, delivery, and billing customization.',
      tags: ['SAP S/4HANA', 'SD Module', 'Order-to-Cash', 'ERP Configuration'],
    },
    {
      title: 'Certified in Cybersecurity (CC)',
      issuer: 'ISC2',
      date: 'Issued March 2025',
      badgeImage: '/badges/cc-isc2.png',
      verified: true,
      credlyUrl: 'https://www.credly.com/badges/993ad43e-feda-403e-aeb7-708b3a969b39',
      description:
        'Globally accredited foundational cybersecurity certification validating expertise in Security Principles, Incident Response, Business Continuity, Access Controls, Network Security, and Security Operations.',
      tags: ['ISC2', 'Cybersecurity', 'Incident Response', 'Network Security', 'Access Controls'],
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'Issued March 2026',
      badgeImage: '/badges/cisco-intro-cybersecurity.png',
      verified: true,
      credlyUrl: 'https://www.credly.com/badges/6cddfac5-e574-4c5f-82c4-a0ffecadbd74',
      description:
        'Comprehensive credential covering modern threat defense, threat actor methodologies, vulnerability identification, defense-in-depth principles, and enterprise information protection.',
      tags: ['Cisco', 'Network Defense', 'Threat Analysis', 'Security Architecture'],
    },
    {
      title: 'Verified International Academic Qualifications',
      issuer: 'World Education Services (WES)',
      date: 'Issued May 2026',
      badgeImage: '/badges/wes-verified-qualifications.png',
      verified: true,
      credlyUrl: 'https://www.credly.com/badges/21552273-5e4c-4fd6-9eb2-bda1e424fe12',
      description:
        'Official international credential evaluation validating academic degrees and university coursework according to strict global standards for academic integrity.',
      tags: ['WES', 'Academic Verification', 'Degree Recognition', 'International Standards'],
    },
    {
      title: 'ISC2 Candidate',
      issuer: 'ISC2',
      date: 'Issued September 2024',
      badgeImage: '/badges/isc2-candidate.png',
      verified: true,
      credlyUrl: 'https://www.credly.com/badges/7c1cba07-09b1-4196-95f7-e9b101305a17',
      description:
        'Recognized candidate member of the ISC2 global cybersecurity professional body, maintaining continuous professional education and adherence to the ISC2 Code of Ethics.',
      tags: ['ISC2', 'Professional Membership', 'Continuous Education'],
    },
  ],
  leadership: [
    {
      role: 'Academic Research Team Member',
      organization: 'Caleb University',
      period: '2022 – 2023',
      description:
        'Mentored junior Computer Science students in programming fundamentals, algorithm design, and academic research writing, resulting in measurable improvements in peer academic performance.',
      icon: 'Users',
    },
    {
      role: 'Captain',
      organization: 'Caleb University Volleyball Team',
      period: 'Two Seasons',
      description:
        'Led collegiate team selection, tactical training coordination, squad conditioning, and tournament competitive strategy across two consecutive athletic seasons.',
      icon: 'Trophy',
    },
    {
      role: 'Gold Medalist, Faculty Table Tennis',
      organization: 'Caleb University Faculty Games',
      period: 'Collegiate Honor',
      description:
        'Clinched the championship gold medal in singles table tennis competition at the annual Faculty Sports Championship.',
      icon: 'Medal',
    },
    {
      role: 'Protocol Lead',
      organization: 'RCCG Youth Congress',
      period: 'Leadership & Logistics',
      description:
        'Coordinated high-level operational logistics and protocol management for a large-scale national youth congress accommodating thousands of attendees.',
      icon: 'Award',
    },
  ],
  skillCategories: [
    {
      category: 'Cybersecurity',
      skills: [
        { name: 'Burp Suite & Web Application Auditing', level: 90 },
        { name: 'Nessus & Netsparker Scanners', level: 88 },
        { name: 'OWASP Top 10 Vulnerability Analysis', level: 92 },
        { name: 'Penetration Testing Support & Threat Modeling', level: 82 },
        { name: 'Security Documentation & Remediation Reporting', level: 90 },
      ],
    },
    {
      category: 'Enterprise Systems (SAP)',
      skills: [
        { name: 'SAP S/4HANA (SD Module)', level: 88 },
        { name: 'Order-to-Cash Workflow Configuration', level: 86 },
        { name: 'Live Enterprise Incident Diagnostics & Resolution', level: 90 },
        { name: 'Cross-Module Integration (MM & HCM)', level: 80 },
      ],
    },
    {
      category: 'IT & Networking',
      skills: [
        { name: 'Network Fault Diagnosis & Troubleshooting', level: 92 },
        { name: 'ISP Operations & Service Ticket Management', level: 90 },
        { name: 'SLA Monitoring & Daily KPI Reporting', level: 94 },
        { name: 'Hardware & System Maintenance', level: 88 },
      ],
    },
    {
      category: 'Programming & Analytics',
      skills: [
        { name: 'Python & Automation Scripting', level: 82 },
        { name: 'SQL & Relational Database Queries', level: 84 },
        { name: 'Java (Foundational)', level: 75 },
        { name: 'WCAG Accessibility Standards Implementation', level: 90 },
        { name: 'Microsoft Office Suite (Advanced)', level: 95 },
        { name: 'Power BI (Working Knowledge)', level: 78 },
      ],
    },
  ],
  referees: 'Referees available upon request (Academic and Industry Supervisors)',
}

export const portfolioData = {
  categories: ['all', 'sap projects', 'cybersecurity', 'it support', 'accessibility'],
  projects: [
    {
      title: 'SAP S/4HANA Enterprise Implementation & SD Support',
      category: 'sap projects',
      image: '/generated/project_sap_implementation.png',
      description:
        'Supported the deployment and configuration of SAP S/4HANA Sales & Distribution (SD) module across multi-site industrial operations at Dangote Group PLC. Diagnosed root causes and resolved live incidents in order-to-cash workflows, drastically decreasing order processing delays.',
      tech: ['SAP S/4HANA', 'SD Module', 'Order-to-Cash', 'Enterprise ERP', 'Incident Resolution'],
      highlights: [
        'Live incident diagnosis for order-to-cash workflows',
        'Cross-module integration with MM and HCM',
        'Bridged technical fixes with business stakeholders',
      ],
      liveUrl: 'https://www.credly.com/users/okwudili-onyia',
      githubUrl: '',
      hasCredly: false,
    },
    {
      title: 'Vulnerability Assessment & OWASP Top 10 Security Auditing',
      category: 'cybersecurity',
      image: '/generated/project_vulnerability_assessment.png',
      description:
        'Conducted structured security assessments and vulnerability scans on enterprise web applications and network systems using Burp Suite, Nessus, and Netsparker at Digital Encode Ltd. Mapped all vulnerabilities to OWASP Top 10 with actionable remediation recommendations.',
      tech: ['Burp Suite', 'Nessus', 'Netsparker', 'OWASP Top 10', 'Pen Testing', 'Vulnerability Assessment'],
      highlights: [
        'Application, network, and infrastructure scans',
        'Severity classification with remediation plans',
        'Client security reports verified by senior analysts',
      ],
      liveUrl: 'https://www.credly.com/badges/993ad43e-feda-403e-aeb7-708b3a969b39',
      githubUrl: '',
      hasCredly: true,
      credlyBadgeName: 'ISC2 Certified in Cybersecurity',
    },
    {
      title: 'ISP Service Ticket Lifecycle & SLA Performance System',
      category: 'it support',
      image: '/generated/project_network_monitoring.png',
      description:
        'Orchestrated end-to-end service ticket lifecycles for corporate and residential ISP clients at Cobranet Limited. Monitored daily network KPIs, tracked strict SLA uptime compliance, and provided remote first-line connectivity troubleshooting to optimize field technician dispatches.',
      tech: ['ISP Operations', 'SLA Tracking', 'KPI Reporting', 'Fault Diagnosis', 'Network Uptime'],
      highlights: [
        'Streamlined ticket resolution lifecycle',
        'Daily SLA uptime compliance reporting',
        'Reduced unnecessary field dispatches via remote triage',
      ],
      liveUrl: '',
      githubUrl: '',
      hasCredly: false,
    },
    {
      title: 'High-Availability Digital Banking Support Infrastructure',
      category: 'it support',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      description:
        'Delivered responsive technical support for core banking platforms and internal applications at Blue Ridge Microfinance Bank (OPay). Troubleshot network and application incidents during peak transaction surges, ensuring continuous financial service availability.',
      tech: ['FinTech', 'Core Banking', 'Application Incident Response', 'System Availability', 'SLA Management'],
      highlights: [
        'Real-time incident response for digital banking users',
        'System continuity maintained during peak volume',
        'Logged patterns to implement repeat-incident prevention',
      ],
      liveUrl: '',
      githubUrl: '',
      hasCredly: false,
    },
    {
      title: 'Accessible E-Learning Platform for Visually Impaired Students',
      category: 'accessibility',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      description:
        'Undergraduate thesis at Caleb University: Designed and engineered an accessibility-first e-learning platform with built-in screen-reader integration, full keyboard navigation architecture, and low-bandwidth optimization. Conducted empirical usability evaluations with target users.',
      tech: ['Python', 'WCAG 2.1', 'Screen-Reader Integration', 'Accessibility Engineering', 'Usability Testing'],
      highlights: [
        'Screen-reader & keyboard-accessible navigation',
        'Structured usability evaluations with visually impaired users',
        'Low-bandwidth optimization for emerging economy networks',
      ],
      liveUrl: '',
      githubUrl: '',
      hasCredly: false,
    },
    {
      title: 'ISC2 & Cisco Verified Cybersecurity Credentials Portfolio',
      category: 'cybersecurity',
      image: '/badges/cc-isc2.png',
      description:
        'Professional verification portfolio on Credly demonstrating verified mastery in enterprise cybersecurity domains, incident response, network defense principles, and international academic evaluation.',
      tech: ['ISC2 CC', 'Cisco Academy', 'WES Credential', 'Credly Digital Badges', 'Network Defense'],
      highlights: [
        'ISC2 Certified in Cybersecurity verified badge',
        'Cisco Introduction to Cybersecurity certification',
        'WES Verified International Academic Qualifications',
      ],
      liveUrl: 'https://www.credly.com/users/okwudili-onyia',
      githubUrl: '',
      hasCredly: true,
      credlyBadgeName: 'View Verified Credly Badges',
    },
  ],
}

export const blogData = {
  posts: [
    {
      title: 'SAP S/4HANA SD Module: Troubleshooting Order-to-Cash In The Real World',
      category: 'Enterprise ERP',
      date: 'Mar 24, 2026',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      excerpt:
        'A practical breakdown of navigating live SAP SD incident resolution, diagnosing pricing condition blocks, and maintaining business continuity in large enterprise environments.',
      tags: ['SAP', 'S/4HANA', 'Enterprise ERP', 'Order-to-Cash'],
      slug: 'sap-s4hana-sd-module-real-world',
    },
    {
      title: 'Vulnerability Assessments with Burp Suite and Nessus Against OWASP Top 10',
      category: 'Cybersecurity',
      date: 'Mar 15, 2026',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      excerpt:
        'How to conduct structured application scans, identify high-risk exposure vectors, and craft actionable remediation documentation for enterprise engineering teams.',
      tags: ['Cybersecurity', 'OWASP Top 10', 'Burp Suite', 'Nessus'],
      slug: 'vulnerability-assessments-owasp-burp-nessus',
    },
    {
      title: 'Engineering High Availability for Digital Banking Platforms',
      category: 'FinTech Support',
      date: 'Feb 28, 2026',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      excerpt:
        'Strategies for rapid network and application triage during high-volume transaction periods, keeping downtime to an absolute minimum in financial services.',
      tags: ['IT Support', 'Digital Banking', 'Incident Response'],
      slug: 'engineering-high-availability-digital-banking',
    },
    {
      title: 'Designing for Accessibility: Practical WCAG Lessons for Inclusive Systems',
      category: 'Accessible Computing',
      date: 'Feb 18, 2026',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      excerpt:
        'Key architectural patterns learned while building an e-learning platform for visually impaired students: screen reader flows, low-bandwidth optimizations, and keyboard navigation.',
      tags: ['Accessibility', 'WCAG', 'Inclusive Design', 'Python'],
      slug: 'wcag-accessible-computing-systems',
    },
  ],
}

export const contactData = {
  email: 'okwudilionyia139@gmail.com',
  phone: '+234 907 624 2001',
  location: 'Lagos, Nigeria',
  credlyUrl: 'https://www.credly.com/users/okwudili-onyia',
  linkedinUrl: 'https://www.linkedin.com/in/onyia-oliver-okwudili-125a04235',
  cvPdfUrl: '/Onyia_Okwudili_Oliver_Cv.pdf',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.45932698045!2d3.1191195!3d6.5480357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng',
}
