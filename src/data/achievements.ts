export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  category: string;
  description: string;
  image?: string;
}

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'best-humanitarian',
    title: 'Best Humanitarian Award',
    organization: 'Atchayam Trust',
    category: 'Humanitarian Service',
    description:
      'Honored for sustained volunteer leadership, 100+ rescue support interventions, and 20+ family reintegrations in Erode.',
    image: '/assets/awards/award-1.jpg',
  },
  {
    id: 'outstanding-service',
    title: 'Outstanding Service Award',
    organization: 'Saarvam Educational Trust',
    category: 'Community Development',
    description:
      'Recognized at Sarvam Viruthugal 2025 for grassroots community assessments, rural engagement, and dedicated social service.',
    image: '/assets/awards/award-4.jpg',
  },
  {
    id: 'best-socially-responsible',
    title: 'Best Socially Responsible Student Award',
    organization: 'K.S. Rangasamy College of Technology',
    category: 'Institutional Honor',
    description:
      'Presented during KSRCT Annual Day Celebrations for exemplary student leadership across campus and community outreach.',
    image: '/assets/awards/award-5.jpg',
  },
  {
    id: 'sm-overall-coordinator',
    title: 'Overall Coordinator – Service Motto Volunteers',
    organization: 'SM Volunteers, KSRCT',
    category: 'Leadership & Merit',
    description:
      'Appointed Overall Coordinator (2024–25 Office Bearer) of Service Motto Volunteers at KSRCT for mobilizing student volunteers and community service drives.',
    image: '/assets/awards/award-3.jpg',
  },
  {
    id: 'humanitarian-excellence-citation',
    title: 'Humanitarian Service Excellence Citation',
    organization: 'Atchayam Trust (10th Year Commemoration)',
    category: 'Citation',
    description:
      'Official citation honoring unwavering volunteer commitment toward building a beggar-free India through compassionate rehabilitation.',
    image: '/assets/awards/award-2.jpg',
  },
  {
    id: 'sittruli-volunteer-recognition',
    title: 'Sittruli Foundation Volunteer Recognition',
    organization: 'Sittruli Foundation (Erode Marathon)',
    category: 'Community Event Ops',
    description:
      'Recognized for dedicated on-ground volunteering, participant coordination, and community event execution at the Sittruli Foundation Erode Marathon.',
    image: '/assets/awards/award-6.jpg',
  },
];
