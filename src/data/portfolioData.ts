import { EducationItem, FAQItem, ProjectItem, ServiceOpportunity, SkillCategory, WorkshopItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Ashwani Pratap Singh',
  shortName: 'Ashwani',
  monogram: 'APS',
  headline: 'Aspiring Business Professional',
  tagline: 'Learning Today. Leading Tomorrow.',
  location: 'Fatehpur, Uttar Pradesh, India',
  email: 'ashwanipratapsingh479@gmail.com',
  linkedin: 'https://linkedin.com/in/ashwani-pratap-singh-6b1653373',
  // Configurable WhatsApp: Set a verified phone number in international format (e.g., '919876543210')
  whatsappNumber: '', 
  resumePath: '/assets/aistudio/Ashwani_Pratap_Singh_ATS_Resume_v2_5f2f366a.pdf',
  resumeFileName: 'Ashwani_Pratap_Singh_Resume.pdf',
  summary:
    'Detail-oriented BBA student with knowledge of MS Excel, data handling, and report preparation. Interested in understanding data and using it to support business decisions. Eager to learn new tools and continue developing analytical and business skills.',
  aboutStory: [
    {
      title: 'Academic Foundation & Vision',
      content:
        'Currently pursuing a Bachelor of Business Administration (BBA) at Allenhouse Business School, Rooma, Kanpur (expected graduation: 2028). Passionate about combining business strategy with empirical data to support smarter corporate decisions.',
    },
    {
      title: 'Analytical & Digital Mindset',
      content:
        'Equipped with foundational strengths in MS Excel data handling, report structuring, and presentation design through Canva and Microsoft PowerPoint. Committed to learning modern tools that enhance organizational efficiency and clear communication.',
    },
    {
      title: 'Future-Ready Engagement',
      content:
        'Active participant in emerging technology and business initiatives, including the Google Student Ambassador Program (Build Night Edition 2026) with certification in AI-Based Ideation and Gemini, and active participation in the Phoenix HR Club.',
    },
  ],
  stats: [
    { label: 'Degree Focus', value: 'BBA (2028)' },
    { label: 'Core Tools', value: 'Excel & Canva' },
    { label: 'Domain Interests', value: 'HR & Marketing' },
    { label: 'AI Ideation', value: 'Certified 2026' },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'tools-utilities',
    name: 'Tools & Utilities',
    description: 'Practical tools used for data analysis, business reporting, and visual design',
    skills: [
      {
        name: 'MS Excel',
        description: 'Data entry, structured data handling, formulas, and report preparation for business analysis.',
        tags: ['Data Handling', 'Spreadsheets', 'Reporting'],
        verified: true,
      },
      {
        name: 'Microsoft PowerPoint',
        description: 'Creating structured executive slide decks, business presentations, and seminar materials.',
        tags: ['Presentations', 'Decks', 'Communication'],
        verified: true,
      },
      {
        name: 'Canva',
        description: 'Designing professional visual assets, digital marketing materials, and promotional graphics.',
        tags: ['Visual Design', 'Graphics', 'Branding'],
        verified: true,
      },
    ],
  },
  {
    id: 'business-skills',
    name: 'Business & Management',
    description: 'Foundational corporate competencies and specialized business administration areas',
    skills: [
      {
        name: 'HR Recruitment',
        description: 'Understanding talent sourcing, interview coordination, and evolving strategic corporate HR practices.',
        tags: ['Talent Sourcing', 'HR Management', 'Corporate Strategy'],
        verified: true,
      },
      {
        name: 'Digital Marketing',
        description: 'Familiarity with online audience outreach, brand positioning, and digital campaign planning.',
        tags: ['Campaigns', 'Social Reach', 'Brand Awareness'],
        verified: true,
      },
      {
        name: 'Report Preparation',
        description: 'Synthesizing business data into readable, structured documentation and actionable insights.',
        tags: ['Documentation', 'Synthesis', 'Business Analysis'],
        verified: true,
      },
    ],
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Tech & AI Ideation',
    description: 'Modern AI-assisted workflows and future-oriented problem solving',
    skills: [
      {
        name: 'AI-Based Ideation & Gemini',
        description: 'Formulating prompts and structured business concepts using Google Gemini via certified ambassador workshops.',
        tags: ['Google Gemini', 'Generative AI', 'Rapid Prototyping'],
        verified: true,
      },
      {
        name: 'Data-Driven Decision Making',
        description: 'Translating raw numbers and business metrics into structured recommendations for leadership.',
        tags: ['Analytical Thinking', 'Problem Solving', 'Data Logic'],
        verified: true,
      },
    ],
  },
  {
    id: 'soft-skills',
    name: 'Professional & Soft Skills',
    description: 'Interpersonal strengths that foster teamwork and execution discipline',
    skills: [
      {
        name: 'Time Management',
        description: 'Balancing academic coursework, extracurricular programs, and structured project timelines with discipline.',
        tags: ['Prioritization', 'Deadline Adherence', 'Focus'],
        verified: true,
      },
      {
        name: 'Teamwork & Collaboration',
        description: 'Thriving in cross-functional group activities, club seminars, and hackathons/build nights.',
        tags: ['Collaboration', 'Communication', 'Active Listening'],
        verified: true,
      },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'allenhouse-bba',
    degree: 'Bachelor of Business Administration (BBA)',
    institution: 'Allenhouse Business School, Rooma, Kanpur',
    period: '2025 – 2028',
    status: 'Expected Graduation: 2028',
    location: 'Rooma, Kanpur, Uttar Pradesh',
    description:
      'Pursuing comprehensive undergraduate coursework in corporate administration, financial management, organizational behavior, marketing principles, and business analytics.',
    highlights: [
      'Active member in campus initiatives including Phoenix – The HR Club',
      'Focused on quantitative data handling and business decision support',
      'Developing cross-functional competencies in recruitment and digital marketing',
    ],
  },
  {
    id: 'sandeepani-intermediate',
    degree: 'Intermediate (Senior Secondary)',
    institution: 'Sandeepani Public School',
    period: '2024 – 2025',
    status: 'Completed',
    location: 'Uttar Pradesh, India',
    description:
      'Completed senior secondary education with strong grounding in foundational subjects, analytical reasoning, and disciplined academic habits.',
    highlights: [
      'Developed core study and organizational skills',
      'Active participation in school activities and team projects',
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'fund-my-crazy-2026',
    title: 'Fund My Crazy: Build Night Edition',
    type: 'Verified Initiative',
    role: 'Participant & AI Concept Ideator',
    date: '2026',
    category: 'AI & Ideation',
    summary:
      'Official initiative under the Google Student Ambassador Program 2026 focusing on AI-based ideation and prototyping with Google Gemini.',
    description:
      'Engaged in an intensive rapid-build night hosted through the Google Student Ambassador Program. Applied generative AI ideation methodologies with Google Gemini to conceptualize innovative business problem-solving frameworks. Received official professional certification for AI-Based Ideation and Gemini.',
    keyLearnings: [
      'Structured prompt engineering for business ideation',
      'Rapid validation of conceptual startup models using Gemini',
      'Collaborative team pitching and presentation under real-time constraints',
    ],
    toolsUsed: ['Google Gemini', 'AI Ideation', 'Canva', 'Presentation Design'],
    verified: true,
    linkText: 'Google Ambassador Initiative',
  },
  {
    id: 'concept-excel-bi',
    title: 'Business Data Handling & Reporting Template',
    type: 'Academic Case Study',
    role: 'Curator & Modeler',
    date: '2026',
    category: 'Business Analysis',
    summary:
      'Structured MS Excel spreadsheet model designed for departmental expense tracking, performance metrics, and summary reporting.',
    description:
      'Developed as an academic demonstration of business data handling principles. Features clean data entry tables, automated formula summaries, categorization lookups, and visual chart presentations designed to support business decision makers.',
    keyLearnings: [
      'Formulas and conditional data structuring',
      'Summary pivot reporting and KPI visualization',
      'Clean business documentation standards',
    ],
    toolsUsed: ['MS Excel', 'Data Handling', 'Financial Formats'],
    verified: false,
    linkText: 'Academic Project',
  },
  {
    id: 'concept-hr-talent',
    title: 'Modern HR Recruitment Pipeline Framework',
    type: 'Concept Project',
    role: 'Author & Researcher',
    date: '2026',
    category: 'HR & Operations',
    summary:
      'Synthesized recruitment process map analyzing modern corporate shifts from administrative candidate tracking to strategic talent sourcing.',
    description:
      'Synthesized insights from the Phoenix HR Club seminar on "The Changing Face of HR in the New Corporate". Explores candidate engagement touchpoints, applicant screening workflows, and digital marketing techniques applied to employer branding.',
    keyLearnings: [
      'End-to-end recruitment lifecycle stages',
      'Strategic vs. administrative HR metrics',
      'Employer branding presentation design using Canva',
    ],
    toolsUsed: ['HR Recruitment', 'Canva', 'Microsoft PowerPoint'],
    verified: false,
    linkText: 'Research Synthesis',
  },
];

export const WORKSHOPS_DATA: WorkshopItem[] = [
  {
    id: 'hr-strategic-aug-2026',
    title: 'The Changing Face of HR in the New Corporate: From Administrative to Strategic',
    organizer: 'Phoenix – The HR Club, Allenhouse Business School',
    date: 'August 2026',
    credentialType: 'Certificate of Participation',
    description:
      'Specialized seminar exploring the paradigm shift in corporate Human Resources—from conventional administrative record-keeping to strategic organizational partnership, talent acquisition, and employee engagement.',
    keyTakeaways: [
      'Strategic HR alignment with broader corporate business goals',
      'Data-supported recruitment and modern retention practices',
      'Role of technology in transforming workplace culture',
    ],
  },
  {
    id: 'google-ambassador-cert-2026',
    title: 'AI-Based Ideation and Gemini Professional Certification',
    organizer: 'Google Student Ambassador Program (Build Night Edition)',
    date: '2026',
    credentialType: 'Professional Certification',
    description:
      'Earned credential validating competencies in leveraging Google Gemini AI models for structured brainstorming, rapid ideation, and problem scoping.',
    keyTakeaways: [
      'Generative AI workflows for business problem analysis',
      'Context framing and multi-step reasoning with Gemini',
      'Translating abstract opportunities into actionable roadmaps',
    ],
  },
];

export const SERVICES_DATA: ServiceOpportunity[] = [
  {
    id: 'internship-opportunities',
    title: 'Internship & Junior Business Roles',
    category: 'Recruiter & Internships',
    targetAudience: 'Recruiters, Hiring Managers & Corporate Teams',
    description:
      'Seeking internship and entry-level business trainee opportunities where I can apply my dedication, analytical mindset, and data handling skills to contribute to team success.',
    capabilities: [
      'MS Excel data collation & spreadsheet maintenance',
      'Business report preparation and executive decks',
      'HR recruitment assistance and coordination',
      'Fast learner eager to master proprietary systems',
    ],
    actionLabel: 'Discuss Internship Role',
    inquiryType: 'internship',
  },
  {
    id: 'data-business-support',
    title: 'Business Analysis & Data Support',
    category: 'Business & Analytics',
    targetAudience: 'Startups, Small Businesses & Project Leads',
    description:
      'Assisting teams with structured data entry, spreadsheet formula organization, clean report generation, and data comprehension to facilitate informed business choices.',
    capabilities: [
      'Organizing unstructured datasets in Excel',
      'Preparing periodic performance summaries',
      'Identifying trends and summarizing key metrics',
      'Ensuring data accuracy and consistency',
    ],
    actionLabel: 'Request Data Support',
    inquiryType: 'collaboration',
  },
  {
    id: 'digital-presentation',
    title: 'Digital Presentation & Canva Design',
    category: 'Creative Presentation',
    targetAudience: 'Student Clubs, Small Businesses & Collaborators',
    description:
      'Designing compelling visual presentations, professional slide decks in PowerPoint, and modern digital promotional materials using Canva.',
    capabilities: [
      'Pitch deck and lecture slide design',
      'Digital marketing social creative assets',
      'Clean typography and branded layout structures',
      'Visual storytelling for academic & business concepts',
    ],
    actionLabel: 'Explore Creative Collaboration',
    inquiryType: 'collaboration',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-who',
    question: 'Who is Ashwani Pratap Singh?',
    answer:
      'Ashwani Pratap Singh is an aspiring business professional currently pursuing a Bachelor of Business Administration (BBA) at Allenhouse Business School, Rooma, Kanpur (expected graduation: 2028). His motto is "Learning Today. Leading Tomorrow."',
    category: 'background',
    action: { label: 'Explore About Me', sectionId: 'about' },
  },
  {
    id: 'faq-skills',
    question: 'What are Ashwani’s core technical and business skills?',
    answer:
      'Ashwani specializes in Tools & Utilities (MS Excel, Microsoft PowerPoint, Canva), Business Skills (HR Recruitment, Digital Marketing, Report Preparation), and Soft Skills (Time Management, Teamwork), alongside AI Ideation with Google Gemini.',
    category: 'skills',
    action: { label: 'View Skills', sectionId: 'skills' },
  },
  {
    id: 'faq-education',
    question: 'Where is Ashwani currently studying?',
    answer:
      'Ashwani is enrolled in the BBA program at Allenhouse Business School, Rooma, Kanpur, with expected completion in 2028. He completed his Intermediate education at Sandeepani Public School (2024–2025).',
    category: 'education',
    action: { label: 'Check Education Timeline', sectionId: 'education' },
  },
  {
    id: 'faq-certifications',
    question: 'What certifications or workshops has Ashwani completed?',
    answer:
      'Ashwani holds a verified Professional Certification in AI-Based Ideation and Gemini from the Google Student Ambassador Program (2026), and a Certificate of Participation for "The Changing Face of HR in the New Corporate" from Phoenix – The HR Club, Allenhouse Business School (Aug 2026).',
    category: 'background',
    action: { label: 'View Certifications', sectionId: 'experience' },
  },
  {
    id: 'faq-resume',
    question: 'Can I view or download Ashwani’s verified resume?',
    answer:
      'Yes! You can preview the official ATS resume directly in the embedded modal or download the PDF with one click from the Education & Resume section.',
    category: 'resume',
    action: { label: 'Open Resume Viewer', sectionId: 'education' },
  },
  {
    id: 'faq-hire',
    question: 'How can recruiters or companies connect with Ashwani for internships?',
    answer:
      'Recruiters can use the direct inquiry form on the Contact section, email ashwanipratapsingh479@gmail.com, or reach out via LinkedIn.',
    category: 'contact',
    action: { label: 'Send an Inquiry', sectionId: 'contact' },
  },
];
