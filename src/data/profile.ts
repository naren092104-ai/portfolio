export interface ProfileData {
  initials: string;
  name: string;
  roles: string[];
  heroDescription: string;
  floatingLabels: {
    label: string;
    detail: string;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  }[];
  portraitSrc: string;
  resumeUrl: string;
  location: string;
  education: {
    degree: string;
    completed: string;
  };
  aboutParagraphs: string[];
  aboutOrganizations: string[];
  technicalInterests: string[];
  highlights: {
    label: string;
    value: string;
  }[];
  contact: {
    email: string;
    phone: string;
    whatsappUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    instagramUrl: string;
  };
}

export const PROFILE: ProfileData = {
  initials: 'ND',
  name: 'Narendhar D',
  roles: [
    'Implementation Lead',
    'Full-Stack Developer',
    'Education & Social Impact',
  ],
  heroDescription:
    'I build digital products, develop practical solutions, and work on projects that create meaningful impact in education, technology, and communities.',
  floatingLabels: [
    {
      label: 'Developer',
      detail: 'React · Node.js · Python',
      position: 'top-left',
    },
    {
      label: 'Technology Implementation',
      detail: 'ERP · Digital Systems',
      position: 'top-right',
    },
    {
      label: 'Education',
      detail: 'TQI · Bhumi · Kalvi40',
      position: 'bottom-left',
    },
    {
      label: 'Social Impact',
      detail: 'Volunteer Leadership',
      position: 'bottom-right',
    },
  ],
  portraitSrc: '/assets/portrait-cutout.png',
  resumeUrl: '/resume.pdf',
  location: 'Uthangarai, Krishnagiri, Tamil Nadu, India',
  education: {
    degree: 'B.Tech – Artificial Intelligence and Data Science',
    completed: 'May 2026',
  },
  aboutParagraphs: [
    'I am an Artificial Intelligence and Data Science graduate with a strong interest in software development, digital transformation, and social impact. I combine a technical mindset with hands-on experience turning community and operational needs into practical solutions.',
    'Over the past four years, I have contributed to volunteering organizations, educational initiatives, community programs, and leadership activities. Across these experiences, I have coordinated teams and programs, supported educational initiatives, managed implementations, and worked closely with stakeholders. This has strengthened my team leadership, project coordination, stakeholder management, program implementation, problem-solving, communication, and community engagement.',
    'My work spans full-stack and web application development, AI, data science, databases, ERP systems, dashboards, automation, and digital solutions. I enjoy building practical applications that solve real-world problems, improve workflows, and connect technology with people’s needs.',
    'I currently work with BumbleB Trust, contributing to educational program implementation, technology integration, coordination, and field-level operations. My journey brings together technology, software development, leadership, and meaningful community impact.',
  ],
  aboutOrganizations: [
    'SM Volunteers',
    'Talent Quest for India (TQI)',
    'Bhumi',
    'Sarvam Educational Trust',
    'Atchayam Trust',
    'National Service Scheme (NSS)',
    'Sittruli',
  ],
  technicalInterests: [
    'Full-Stack Web Development',
    'Artificial Intelligence',
    'Data Science',
    'Software Development',
    'Web Application Development',
    'Database Management',
    'ERP Systems',
    'Dashboard Development',
    'Automation',
    'Digital Solutions',
  ],
  highlights: [
    { label: 'Focus', value: 'Full-Stack Development | AI | Data Science | Technology & Social Impact' },
    { label: 'Experience', value: '4 Years of Community Leadership & Volunteering' },
    { label: 'Current Organization', value: 'BumbleB Trust' },
    { label: 'Field Impact', value: 'Education | Community Development | Technology' },
  ],
  contact: {
    email: 'naren2004dn@gmail.com',
    phone: '+91 97516 73398',
    whatsappUrl: 'https://wa.me/919751673398',
    githubUrl: 'https://github.com/naren092104-ai',
    linkedinUrl: 'https://www.linkedin.com/in/narendhar-d-808b49270/',
    instagramUrl: 'https://www.instagram.com/naren_0921/',
  },
};
