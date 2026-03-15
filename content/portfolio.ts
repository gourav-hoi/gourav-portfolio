import type { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  seo: {
    title: 'Gourav Sharma | Full Stack Mobile Developer',
    description: 'Premium 3D developer portfolio for Gourav Sharma, a full stack mobile developer building scalable mobile apps, dashboards, and modern web systems.',
    keywords: ['Gourav Sharma portfolio', 'Full Stack Mobile Developer', 'React Native developer', 'Next.js portfolio', 'Spring Boot developer', '3D portfolio website'],
  },
  navigation: [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tech', label: 'Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    name: 'Gourav Sharma',
    title: 'Full Stack Mobile Developer',
    tagline: 'Building scalable mobile and web systems with modern technologies.',
    rotatingTitles: ['React Native Architect', 'Next.js Experience Builder', 'Spring Boot API Engineer', 'Cloud-Ready Product Developer'],
    ctas: [
      { label: 'View Projects', href: '#projects' },
      { label: 'Download Resume', href: '/resume/gourav-sharma-resume.pdf' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  stats: [
    { label: 'Years building products', value: 2.5, suffix: '+' },
    { label: 'Users reached', value: 15, suffix: 'K+' },
    { label: 'Performance gains delivered', value: 40, suffix: '%' },
    { label: 'Dashboards and platforms shipped', value: 8, suffix: '+' },
  ],
  about: {
    intro: 'Full-stack software engineer with 2.5+ years of experience delivering mobile applications, dashboards, APIs, and cloud-ready workflows across education, healthcare, and enterprise operations.',
    cards: [
      { title: 'Experience', body: '2.5+ years across React Native, React.js, Java, Spring Boot, and Node.js with an end-to-end product mindset.' },
      { title: 'Scale', body: 'Built and scaled production systems serving 10K+ users with measurable gains in load time, reliability, and reporting velocity.' },
      { title: 'Strengths', body: 'Strong in mobile-first UX, backend architecture, SQL and NoSQL systems, CI/CD, and performance tuning.' },
    ],
    achievements: [
      { title: 'Scaled parent app adoption', description: 'Built and optimized the Apeejay Parent App for 15K+ active users with a 4.5/5 user rating and faster load times.' },
      { title: 'Boosted platform efficiency', description: 'Improved reporting and operational workflows by up to 40% through admin dashboards, analytics, and automation.' },
      { title: 'Built resilient communication flows', description: 'Delivered a fault-tolerant FCM notification system handling 50K+ messages per month with high delivery stability.' },
    ],
  },
  tech: [
    { name: 'Frontend', items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'TypeScript'] },
    { name: 'Backend', items: ['Node.js', 'Spring Boot', 'Express'] },
    { name: 'Database', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
    { name: 'DevOps', items: ['AWS', 'Docker', 'CI/CD', 'Firebase'] },
  ],
  projects: [
    { name: 'Apeejay Parent App', summary: 'React Native + Firebase mobile experience for attendance, fees, alerts, leave management, and day-to-day school communication.', metric: '15K+ users mobile application', stack: ['React Native', 'Firebase', 'FCM', 'Analytics'], github: '#', live: '#', preview: 'High-retention mobile app with realtime communication flows and parent-first UX.' },
    { name: 'Cadence School ERP App', summary: 'A complete ERP system for schools covering academics, attendance, fees, and communication with secure payment flows.', metric: 'ERP workflow efficiency +30%', stack: ['React Native CLI', 'Payments', 'Cloud Storage'], github: '#', live: '#', preview: 'Operational ERP experience connecting academic administration and real-time parent communication.' },
    { name: 'CRC Doctor Reporting App', summary: 'Doctor and medical representative reporting system focused on visits, appointments, and actionable field analytics.', metric: '100+ doctors supported', stack: ['React Native', 'Analytics', 'Reporting'], github: '#', live: '#', preview: 'Healthcare reporting workflow with analytics surfaces designed to reduce friction for field teams.' },
    { name: 'Smart Workflow Automation', summary: 'React.js platform with JWT authentication, multi-level escalations, and approval automation across business teams.', metric: 'Approval cycles improved by 40%', stack: ['React.js', 'JWT', 'MySQL', 'Node.js'], github: '#', live: '#', preview: 'Web platform for workflow automation, escalations, and business process transparency.' },
  ],
  experience: [
    { role: 'Software Developer', company: 'Apeejay Education Society', duration: 'Feb 2024 - Present', highlights: ['Scaled the Apeejay Parent App to 15K+ active users and improved load performance by 30%.', 'Built a fault-tolerant FCM pipeline delivering 50K+ notifications per month with 99.9% stability.', 'Engineered the CRC doctor reporting application used by 100+ doctors and improved workflow efficiency by 35%.', 'Created a React.js admin dashboard with RBAC and Node.js APIs, reducing manual reporting by 40%.'] },
    { role: 'Associate Software Developer', company: 'Bharti Airtel', duration: 'Feb 2023 - Sep 2023', highlights: ['Built 4+ real-time analytics dashboards that improved internal visibility across 10+ teams.', 'Improved UI performance by 50% using optimized state management, lazy loading, and code splitting.', 'Automated CSV ingestion pipelines that reduced manual preparation time by 60%.'] },
  ],
  contact: {
    email: 'gsharmafp@gmail.com',
    phone: '+91 9643063309',
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/gourav-hoi' },
      { label: 'LinkedIn', href: '#', placeholder: true },
      { label: 'Email', href: 'mailto:gsharmafp@gmail.com' },
    ],
  },
};
