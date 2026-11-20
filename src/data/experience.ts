export interface ExperienceEntry {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: 'Technology & Implementation' | 'Leadership & Social Impact';
  description: string;
  highlights: string[];
}

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'bumbleb-kalvi40',
    period: '2026 – Present',
    role: 'Implementation Lead',
    organization: 'Société Générale CSR — Kalasapakkam Block, Tiruvannamalai',
    type: 'Technology & Implementation',
    description:
      'Leading the CSR education initiative across 21 government schools in Kalasapakkam block, Tiruvannamalai, supporting school rollouts, digital learning operations, field-team coordination, and implementation reporting.',
    highlights: [
      'Leading implementation across 21 government schools in Kalasapakkam block',
      'Coordinating field teams, school visits, attendance, and daily activities',
      'Working with school stakeholders to support digital learning through CSR',
    ],
  },
  {
    id: 'tqi-spoc',
    period: 'April 2025 – March 2026 (3+ Years Ongoing)',
    role: 'SPOC (Single Point of Contact) – Cluster Class Program',
    organization: 'Talent Quest for India (NGO)',
    type: 'Leadership & Social Impact',
    description:
      'Led academic support and foundational IT skill sessions for Grade 9–12 government school students across Dharmapuri district while serving as SPOC coordinating volunteers, schedules, and school stakeholders.',
    highlights: [
      'Managed cluster classes and long-term rural educational outreach',
      'Coordinated volunteer educators and stakeholder communication across multiple schools',
      'Mentored hundreds of government school students in academics and digital literacy',
    ],
  },
  {
    id: 'sm-volunteers',
    period: '2022 – 2026',
    role: 'Overall Coordinator & Vice President (Formerly Volunteer)',
    organization: 'SM (Service Motto) Volunteers, KSRCT',
    type: 'Leadership & Social Impact',
    description:
      'Progressed from active student volunteer to Vice President and Overall Coordinator, mobilizing campus-wide community service, fundraising drives, and developing the institutional SM Volunteers Management Dashboard.',
    highlights: [
      'Coordinated 400+ volunteers across civic, educational, and relief initiatives',
      'Helped mobilize ₹2.5 Lakh+ in funds and essentials for schools and welfare homes',
      'Built a full-stack volunteer management portal with Admin & Volunteer authentication',
    ],
  },
  {
    id: 'atchayam-trust',
    period: '2023 – 2026',
    role: 'Volunteer Leader & SPOC',
    organization: 'Atchayam Trust, Erode',
    type: 'Leadership & Social Impact',
    description:
      'Supported humanitarian rescue interventions and community welfare initiatives in partnership with local authorities, coordinating volunteer response teams and facilitating family reintegrations.',
    highlights: [
      'Supported 100+ humanitarian rescue interventions',
      'Facilitated 20+ family reintegration cases',
      'Recipient of the Best Humanitarian Award from Atchayam Trust',
    ],
  },
  {
    id: 'bhumi-saarvam',
    period: '2023 – 2026',
    role: 'Teachers Express & Community Development Volunteer',
    organization: 'Bhumi (NGO) & Saarvam Educational Trust',
    type: 'Leadership & Social Impact',
    description:
      'Delivered classroom mentoring under Bhumi’s Teachers Express program and participated in rural farmer livelihood surveys and community assessment programs in Kolli Hills with Saarvam Educational Trust.',
    highlights: [
      'Classroom teaching and student mentorship in government schools',
      'Grassroots farmer surveys and rural community assessments in Kolli Hills',
      'Honored with Outstanding Service Award for grassroots social service',
    ],
  },
  {
    id: 'nss-aids-president',
    period: '2022 – 2025',
    role: 'Student Coordinator (NSS) & President (AI & DS Association)',
    organization: 'K.S. Rangasamy College of Technology',
    type: 'Leadership & Social Impact',
    description:
      'Led National Service Scheme (NSS) community awareness campaigns—including campus voter awareness and outreach camps—alongside serving as President of the AI & Data Science Department Association.',
    highlights: [
      'Organized NSS awareness campaigns, civic drives, and student mobilization',
      'Served as President of the AI & Data Science Department Association',
      'Received ₹5,000 Cash Award from AI & DS Department & Best Socially Responsible Student Award',
    ],
  },
];
