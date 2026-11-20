export interface TechItem {
  id: string;
  name: string;
  category: 'Programming' | 'Frontend' | 'Backend' | 'Database' | 'Hosting & Deployment' | 'Design';
  accent: string;
  note: string;
}

export const TECH_CATEGORIES = [
  'Programming',
  'Frontend',
  'Backend',
  'Database',
  'Hosting & Deployment',
  'Design',
] as const;

export const SKILLS: TechItem[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Programming',
    accent: '#3776AB',
    note: 'Automation, scripting & AI/DS foundations',
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Programming',
    accent: '#ED8B00',
    note: 'Object-oriented systems & problem solving',
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    accent: '#61DAFB',
    note: 'Interactive SPAs, ERPs & dashboards',
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'Frontend',
    accent: '#E34F26',
    note: 'Semantic web architecture & accessibility',
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Frontend',
    accent: '#1572B6',
    note: 'Responsive layouts, systems & motion',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    accent: '#339933',
    note: 'REST APIs, auth flows & server runtime',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Database',
    accent: '#4479A1',
    note: 'Relational schemas & ERP data models',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Database',
    accent: '#47A248',
    note: 'Document storage for flexible apps',
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'Database',
    accent: '#3ECF8E',
    note: 'Postgres, auth & real-time backends',
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    category: 'Hosting & Deployment',
    accent: '#F38020',
    note: 'Pages, Workers & edge deployment',
  },
  {
    id: 'canva',
    name: 'Canva',
    category: 'Design',
    accent: '#00C4CC',
    note: 'Campaign visuals & event collateral',
  },
];
