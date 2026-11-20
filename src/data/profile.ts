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
    institution: string;
    period: string;
    grade: string;
  };
  aboutParagraphs: string[];
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
    'Implementation Coordinator',
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
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'K.S. Rangasamy College of Technology, Tiruchengode',
    period: '2022 – 2026',
    grade: 'CGPA 7.48 · HSC 95% · SSLC 83%',
  },
  aboutParagraphs: [
    'I work at the intersection of practical software engineering, technology implementation, and grassroots social impact. Pursuing a B.Tech in Artificial Intelligence and Data Science at K.S. Rangasamy College of Technology, I have paired academic grounding in software systems with over three and a half years of active field leadership across Tamil Nadu.',
    'On the technology side, I design and deploy real-world web platforms, institutional ERP systems, point-of-sale applications, and volunteer management dashboards—turning operational bottlenecks in education, NGOs, and local enterprises into dependable digital workflows.',
    'Alongside engineering, community service defines who I am. From mentoring government school students across Dharmapuri district with Talent Quest for India and Bhumi, to serving as Overall Coordinator of SM Volunteers and Volunteer Leader with Atchayam Trust, I believe technology creates lasting value only when it serves people.',
  ],
  highlights: [
    { label: 'Focus', value: 'Full-Stack Engineering & Implementation' },
    { label: 'Location', value: 'Tamil Nadu, India' },
    { label: 'Degree', value: 'B.Tech AI & Data Science (2022–2026)' },
    { label: 'Field Impact', value: 'Education, Rescue & Rural Outreach' },
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
