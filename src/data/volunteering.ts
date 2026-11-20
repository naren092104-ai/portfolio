export interface VolunteeringOrganization {
  id: string;
  name: string;
  logo: string;
  role: string;
  period: string;
  summary: string;
  activities: string[];
  recognition?: string;
}

export interface VolunteeringPhoto {
  id: string;
  src: string;
  orgId: string;
  orgName: string;
  caption: string;
  featured?: boolean;
}

export interface ImpactStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: 'volunteers',
    value: 400,
    suffix: '+',
    label: 'Volunteers Mobilized',
    detail: 'Student & community volunteers coordinated across campus and district drives',
  },
  {
    id: 'hours',
    value: 1500,
    suffix: '+',
    label: 'Volunteer Hours',
    detail: '3.5+ years of sustained grassroots field work, teaching, and coordination',
  },
  {
    id: 'students',
    value: 2000,
    suffix: '+',
    label: 'Students Impacted',
    detail: 'Across 7 supported schools, TQI Cluster Classes, Bhumi & awareness drives',
  },
  {
    id: 'rescues',
    value: 100,
    suffix: '+',
    label: 'Rescue & Welfare Interventions',
    detail: 'Supported with Atchayam Trust alongside 20+ family reintegrations',
  },
];

export const VOLUNTEERING_ORGS: VolunteeringOrganization[] = [
  {
    id: 'talent-quest',
    name: 'Talent Quest for India (TQI)',
    logo: '/assets/logos/tqi.png',
    role: 'SPOC – Cluster Class Program',
    period: '2022 – 2026',
    summary:
      'Delivered structured academics and foundational IT sessions for Grade 9–12 government school students in Dharmapuri district while managing cluster volunteers and stakeholder schedules.',
    activities: [
      'Student Mentoring & IT Literacy',
      'Cluster Class Management',
      'Volunteer Coordination',
      'Stakeholder Communication',
    ],
    recognition: 'SPOC (April 2025 – March 2026)',
  },
  {
    id: 'sm-volunteers',
    name: 'SM Volunteers (Service Motto)',
    logo: '/assets/logos/sm-volunteers.png',
    role: 'Volunteer → Vice President → Overall Coordinator',
    period: '2022 – 2026',
    summary:
      'Led KSRCT’s flagship student service wing—coordinating community outreach, old-age home essentials drives, fundraising campaigns (₹2.5 Lakh+), and building the SM Volunteers Portal.',
    activities: [
      'Community Service & Home Visits',
      'Fundraising & Essentials Drives',
      'Volunteer Mobilization',
      'Stage Leadership & Event Ops',
    ],
    recognition: 'Overall Coordinator Recognition',
  },
  {
    id: 'atchayam',
    name: 'Atchayam Trust',
    logo: '/assets/logos/atchayam-icon.png',
    role: 'Volunteer Leader & SPOC',
    period: '2023 – 2026',
    summary:
      'Supported humanitarian rescue interventions and community welfare initiatives in Erode, partnering with law enforcement and welfare teams to facilitate family reintegrations.',
    activities: [
      '100+ Rescue Support Activities',
      '20+ Family Reintegrations',
      'Police & Shelter Coordination',
      'Humanitarian Welfare Drives',
    ],
    recognition: 'Best Humanitarian Award',
  },
  {
    id: 'bhumi',
    name: 'Bhumi (NGO)',
    logo: '/assets/logos/bhumi.png',
    role: 'Teachers Express Volunteer',
    period: '2023 – 2026',
    summary:
      'Contributed to classroom teaching, English grammar sessions, student mentoring, and activity-based learning through Bhumi’s Teachers Express initiative.',
    activities: [
      'Classroom Teaching Support',
      'Grammar & Foundational Learning',
      'Student Recognition & Mentoring',
    ],
    recognition: 'Teachers Express Volunteer Award',
  },
  {
    id: 'saarvam',
    name: 'Saarvam Educational Trust',
    logo: '/assets/logos/saarvam.jpg',
    role: 'Community Development Volunteer',
    period: '2023 – 2026',
    summary:
      'Participated in grassroots rural development programs including farmer livelihood surveys and community assessments across Kolli Hills.',
    activities: [
      'Farmer Livelihood Surveys',
      'Kolli Hills Field Assessments',
      'Rural Development Programs',
    ],
    recognition: 'Outstanding Service & Best Social Service Awards',
  },
  {
    id: 'nss',
    name: 'National Service Scheme (NSS)',
    logo: '/assets/logos/nss.svg',
    role: 'Student Coordinator',
    period: '2022 – 2024',
    summary:
      'Coordinated college-level NSS awareness campaigns, civic voter engagement drives, and rural service camps mobilizing peer volunteers.',
    activities: [
      'Civic & Voter Awareness Drives',
      'NSS Special Service Camps',
      'Peer Volunteer Mobilization',
    ],
  },
];

export const VOLUNTEERING_PHOTOS: VolunteeringPhoto[] = [
  {
    id: 'v-01',
    src: '/assets/volunteering/IMG-20250405-WA0093.jpg',
    orgId: 'talent-quest',
    orgName: 'Talent Quest for India (TQI)',
    caption: 'Talent Quest for India, Ullas Trust & Mission Samriddhi Sangamam team presentation',
    featured: true,
  },
  {
    id: 'v-02',
    src: '/assets/volunteering/IMG_20240908_161700.jpg',
    orgId: 'atchayam',
    orgName: 'Atchayam Trust',
    caption: 'Rescue coordination and rehabilitation support with Bhavani Police Station, Erode District',
    featured: true,
  },
  {
    id: 'v-03',
    src: '/assets/volunteering/IMG-20241020-WA0103.jpg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'Large-scale SM Volunteers student mobilization formation at KSRCT campus',
    featured: true,
  },
  {
    id: 'v-04',
    src: '/assets/volunteering/IMG-20250120-WA0026.jpg',
    orgId: 'talent-quest',
    orgName: 'Talent Quest for India (TQI)',
    caption: 'Government school classroom outreach and student mentoring session',
  },
  {
    id: 'v-05',
    src: '/assets/volunteering/IMG-20260304-WA0072.jpg',
    orgId: 'talent-quest',
    orgName: 'Talent Quest for India (TQI)',
    caption: 'Classroom certificate presentation after "Grammar is Fun" learning session',
  },
  {
    id: 'v-06',
    src: '/assets/volunteering/IMG-20241025-WA0067.jpg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'Diwali grocery and essentials distribution at Sivapackiam Old Age Home',
    featured: true,
  },
  {
    id: 'v-07',
    src: '/assets/volunteering/IMG_20240831_142133.jpg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'Addressing student volunteers during campus leadership & orientation session',
  },
  {
    id: 'v-08',
    src: '/assets/volunteering/20240418_105600AM.jpg',
    orgId: 'nss',
    orgName: 'National Service Scheme (NSS)',
    caption: 'NSS "Vote Loud! Vote Proud!" civic voting awareness campaign at KSRCT, Namakkal',
  },
  {
    id: 'v-09',
    src: '/assets/volunteering/IMG-20250317-WA0008.jpg',
    orgId: 'saarvam',
    orgName: 'Saarvam Educational Trust',
    caption: 'Sarvam Viruthugal recognition ceremony celebrating grassroots community volunteers',
  },
  {
    id: 'v-10',
    src: '/assets/volunteering/IMG-20250823-WA0027.jpg',
    orgId: 'atchayam',
    orgName: 'Atchayam Trust',
    caption: 'Atchayam Trust volunteer team in front of national and state service recognition showcase',
  },
  {
    id: 'v-11',
    src: '/assets/volunteering/IMG-20250208-WA0005.jpg',
    orgId: 'atchayam',
    orgName: 'Atchayam Trust',
    caption: 'Service Motto Volunteers hosting Atchayam Trust founder meet at KSRCT auditorium',
  },
  {
    id: 'v-12',
    src: '/assets/volunteering/IMG_20240213_144905.jpg',
    orgId: 'talent-quest',
    orgName: 'Talent Quest for India (TQI)',
    caption: 'Interactive circle-learning and activity session at Government High School',
  },
  {
    id: 'v-13',
    src: '/assets/volunteering/IMG-20250518-WA0019.jpg',
    orgId: 'talent-quest',
    orgName: 'Talent Quest for India (TQI)',
    caption: 'Student Holistic Development Program with Ullas Trust and Mission Samriddhi',
  },
  {
    id: 'v-14',
    src: '/assets/volunteering/IMG-20241015-WA0128.jpg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'Volunteer delegation at Best Handloom Weavers Awarding Ceremony, Salem',
  },
  {
    id: 'v-15',
    src: '/assets/volunteering/IMG-20241222-WA0101.jpg',
    orgId: 'atchayam',
    orgName: 'Atchayam Trust',
    caption: 'Community elders outreach and welfare visit with volunteer team',
  },
  {
    id: 'v-16',
    src: '/assets/volunteering/IMG-20241111-WA0111.jpg',
    orgId: 'atchayam',
    orgName: 'Atchayam Trust',
    caption: 'Shelter care and elderly welfare check-in with Atchayam Trust volunteers',
  },
  {
    id: 'v-17',
    src: '/assets/volunteering/IMG-20250915-WA0099.jpg',
    orgId: 'talent-quest',
    orgName: 'Talent Quest for India (TQI)',
    caption: 'Demonstrating satellite agriculture and farmer-support technology to school students',
  },
  {
    id: 'v-18',
    src: '/assets/volunteering/IMG-20250809-WA0050.jpg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'Campus volunteer cohort gathering for academic-year community initiatives',
  },
  {
    id: 'v-19',
    src: '/assets/volunteering/WhatsApp_Image_2026-06-08_at_12.26.23_PM.jpeg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'Sittruli Foundation & Erode Marathon volunteer operations team on stage',
  },
  {
    id: 'v-20',
    src: '/assets/volunteering/IMG-20240902-WA0005.jpg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'SM Volunteers leadership and faculty felicitation on KSRCT auditorium stage',
  },
  {
    id: 'v-21',
    src: '/assets/volunteering/IMG-20241020-WA0091.jpg',
    orgId: 'nss',
    orgName: 'National Service Scheme (NSS)',
    caption: 'Morning fitness and volunteer assembly during campus service camp',
  },
  {
    id: 'v-22',
    src: '/assets/volunteering/IMG_20231105_065825.jpg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'Early morning community field drive team outside college main block',
  },
  {
    id: 'v-23',
    src: '/assets/volunteering/IMG-20260127-WA0001.jpg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'Volunteer logistics team at South Zone Inter-University Women Cricket Tournament',
  },
  {
    id: 'v-24',
    src: '/assets/volunteering/IMG-20241026-WA0003.jpg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'Community outreach and volunteer field coordination',
  },
  {
    id: 'v-25',
    src: '/assets/volunteering/IMG-20241117-WA0019.jpg',
    orgId: 'talent-quest',
    orgName: 'Talent Quest for India (TQI)',
    caption: 'Weekend educational volunteering & mentoring meetup',
  },
  {
    id: 'v-26',
    src: '/assets/volunteering/IMG-20250208-WA0007.jpg',
    orgId: 'atchayam',
    orgName: 'Atchayam Trust',
    caption: 'Atchayam Trust student volunteer orientation & briefing',
  },
  {
    id: 'v-27',
    src: '/assets/volunteering/IMG-20250329-WA0013.jpg',
    orgId: 'talent-quest',
    orgName: 'Talent Quest for India (TQI)',
    caption: 'Government school classroom outreach and student engagement session',
  },
  {
    id: 'v-28',
    src: '/assets/volunteering/IMG-20250801-WA0045.jpg',
    orgId: 'bhumi',
    orgName: 'Bhumi (NGO)',
    caption: 'Teachers Express volunteer engagement & classroom preparation',
  },
  {
    id: 'v-29',
    src: '/assets/volunteering/IMG-20250801-WA0058.jpg',
    orgId: 'bhumi',
    orgName: 'Bhumi (NGO)',
    caption: 'Student interaction and activity-based learning workshop',
  },
  {
    id: 'v-30',
    src: '/assets/volunteering/IMG-20250809-WA0046.jpg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'SM Volunteers coordination briefing and team planning',
  },
  {
    id: 'v-31',
    src: '/assets/volunteering/IMG-20251010-WA0001.jpg',
    orgId: 'talent-quest',
    orgName: 'Talent Quest for India (TQI)',
    caption: 'Cluster class coordination and student outreach event',
  },
  {
    id: 'v-32',
    src: '/assets/volunteering/IMG-20260304-WA0040.jpg',
    orgId: 'talent-quest',
    orgName: 'Talent Quest for India (TQI)',
    caption: 'Interactive classroom session and student mentoring',
  },
  {
    id: 'v-33',
    src: '/assets/volunteering/WhatsApp_Image_2026-06-08_at_12.25.55_PM.jpeg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'Dakshaa stage celebration and student volunteer recognition gathering at KSRCT',
  },
  {
    id: 'v-34',
    src: '/assets/volunteering/WhatsApp_Image_2026-06-08_at_12.26.12_PM.jpeg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'Erode civic run & volunteer coordination support team',
  },
  {
    id: 'v-35',
    src: '/assets/volunteering/WhatsApp_Image_2026-06-08_at_12.26.14_PM.jpeg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'Field volunteers collaborating on community event execution',
  },
  {
    id: 'v-36',
    src: '/assets/volunteering/WhatsApp_Image_2026-06-08_at_12.26.19_PM.jpeg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'Dakshaa T26 National Level Techno-Cultural Fest volunteer team at KSRCT',
  },
  {
    id: 'v-37',
    src: '/assets/volunteering/WhatsApp_Image_2026-06-08_at_12.26.21_PM.jpeg',
    orgId: 'sm-volunteers',
    orgName: 'SM Volunteers (Service Motto)',
    caption: 'With Natraj Sir during the KSRCT Sports Meet volunteer coordination',
  },
  {
    id: 'v-38',
    src: '/assets/volunteering/WhatsApp_Image_2026-06-08_at_12.26.21_PM_1.jpeg',
    orgId: 'talent-quest',
    orgName: 'Talent Quest for India (TQI)',
    caption: 'Student Holistic Development Program session at government school',
  },
];
