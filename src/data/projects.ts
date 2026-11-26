export type ProjectFilter =
  | 'All Projects'
  | 'Web Development'
  | 'Business Solutions'
  | 'ERP'
  | 'Social Impact';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  image: string;
  primaryCategory: Exclude<ProjectFilter, 'All Projects'>;
  categories: Exclude<ProjectFilter, 'All Projects'>[];
  technologies: string[];
  featured?: boolean;
  span?: 'wide' | 'tall' | 'standard';
}

export const PROJECT_FILTERS: ProjectFilter[] = [
  'All Projects',
  'Web Development',
  'Business Solutions',
  'ERP',
  'Social Impact',
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'kalvi40',
    title: 'Kalvi40',
    subtitle: 'Centralized Staff & Project Management System',
    description:
      'Centralized web application for KALVI40 educational organization to manage districts, blocks, projects, government schools, staff, GPS attendance, school visits, daily activities, meetings, leave, and reports.',
    url: 'https://kalvi40-554411619054.asia-southeast1.run.app',
    image: '/assets/projects/kalvi40.png',
    primaryCategory: 'ERP',
    categories: ['ERP', 'Social Impact', 'Web Development'],
    technologies: ['React', 'Node.js', 'SQL', 'Cloud Deployment'],
    featured: true,
    span: 'wide',
  },
  {
    id: 'kalvi40-offerletter',
    title: 'KALVI40 Offer Letter Automation',
    subtitle: 'Teaching Coordinator Appointment & Offer Automation',
    description:
      'Secure administrator portal for generating verified BumbleB Trust engagement letters, importing candidates from Excel, managing CC governance, and dispatching personalized offer letters with pre-send database, email, and PDF verification.',
    url: 'https://offerletter-kalvi40.pages.dev/',
    image: '/assets/projects/kalvi40.png',
    primaryCategory: 'ERP',
    categories: ['ERP', 'Social Impact', 'Web Development'],
    technologies: ['React', 'Cloudflare Pages', 'Email & PDF Automation'],
    featured: true,
    span: 'wide',
  },
  {
    id: 'tqi-erp',
    title: 'TQI Academic ERP',
    subtitle: 'Talent Quest for India Cluster Administration',
    description:
      'Administration ERP built for Talent Quest for India to streamline cluster class operations, volunteer coordination, work-email access, and structured academic program management.',
    url: 'https://tqi-erp.pages.dev/',
    image: '/assets/projects/tqi.png',
    primaryCategory: 'ERP',
    categories: ['ERP', 'Social Impact', 'Web Development'],
    technologies: ['React', 'Cloudflare Pages', 'REST APIs'],
    span: 'standard',
  },
  {
    id: 'sm-dash',
    title: 'SM Volunteers Dashboard',
    subtitle: 'Institutional Volunteer Management Portal',
    description:
      'Full-stack volunteer management dashboard for Service Motto Volunteers at KSRCT featuring role-based authentication for Admins and Volunteers, member records, events, and REST API integration.',
    url: 'https://sm-dash.pages.dev/',
    image: '/assets/projects/smdash.png',
    primaryCategory: 'Social Impact',
    categories: ['Social Impact', 'Web Development'],
    technologies: ['React', 'Node.js', 'MySQL', 'Cloudflare Pages'],
    span: 'standard',
  },
  {
    id: 'vinayaga-bakes-pos',
    title: 'Vinayaga Bakes POS',
    subtitle: 'Artisanal Utility POS & Bakery Inventory',
    description:
      'Complete point-of-sale and inventory management platform featuring counter billing, parcel order tracking, credit customer ledgers, low-stock alerts, and 7-day revenue analytics.',
    url: 'https://vinayaga-bakes-pos.ai.studio',
    image: '/assets/projects/vinayaga.png',
    primaryCategory: 'Business Solutions',
    categories: ['Business Solutions', 'Web Development'],
    technologies: ['React', 'CSS', 'Analytics UI'],
    span: 'wide',
  },
  {
    id: 'athishta-gold-portal',
    title: 'Athishta Gold Portal',
    subtitle: 'Transparent Gold Valuation & Booking Portal',
    description:
      'Commercial web portal for Athishta Gold Company offering transparent gold valuation, live market rate displays, valuation calculators, instant quotations, and doorstep visit scheduling across Tamil Nadu.',
    url: 'https://athishta-gold-portal.pages.dev/',
    image: '/assets/projects/athishta.png',
    primaryCategory: 'Business Solutions',
    categories: ['Business Solutions', 'Web Development'],
    technologies: ['React', 'HTML', 'CSS', 'Cloudflare Pages'],
    span: 'standard',
  },
  {
    id: 'material-research-center',
    title: 'Material Research Center',
    subtitle: 'Advanced Energy & Nanomaterials Lab Portal',
    description:
      'Scientific institutional website for MRC Coimbatore showcasing research in solid-state electrolytes, battery technologies, polymers, supercapacitors, fuel cells, and EIS testing facilities.',
    url: 'https://materialresearchcenter.pages.dev/',
    image: '/assets/projects/mrc.png',
    primaryCategory: 'Web Development',
    categories: ['Web Development'],
    technologies: ['React', 'HTML', 'CSS', 'Cloudflare Pages'],
    span: 'standard',
  },
  {
    id: 'autorevives',
    title: 'AutoRevives',
    subtitle: 'Live Vehicle Auction & Liquidation Platform',
    description:
      'Automotive marketplace and live vehicle auction platform designed to browse curated listings, streamline liquidation workflows, and connect verified buyers with transparent pricing.',
    url: 'https://autorevives.com/',
    image: '/assets/projects/autorevives.png',
    primaryCategory: 'Business Solutions',
    categories: ['Business Solutions', 'Web Development'],
    technologies: ['React', 'Node.js', 'Web Platform'],
    span: 'standard',
  },
  {
    id: 'wedding-invitation-platform',
    title: 'Wedding Invitation Platform',
    subtitle: 'Interactive Bilingual Digital Celebration',
    description:
      'Bespoke digital wedding invitation platform crafted for C. Jabaraj & R. Tharani (Veronica) with interactive reveal animations, bilingual typography, ceremony timelines, and venue guidance.',
    url: 'https://jabaraj-veronica-wedding.pages.dev/',
    image: '/assets/projects/wedding.png',
    primaryCategory: 'Web Development',
    categories: ['Web Development'],
    technologies: ['React', 'CSS', 'Cloudflare Pages'],
    span: 'standard',
  },
];
