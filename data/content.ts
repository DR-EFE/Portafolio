
import { NavLink, Project, HeroContent, AboutContent, TimelineItem, Certificate, Skill, Service } from '../types';

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'qualification', label: 'Experience' },
  { id: 'certificate', label: 'Certificates' },
  { id: 'skill', label: 'Skills' },
  { id: 'service', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

export const heroContent: HeroContent = {
  name: 'Felipe Ramos',
  typedRoles: ['Web Designer', 'Web Developer', 'Front End Developer', 'Apps Designer', 'Apps Developer'],
  profileImage: 'https://picsum.photos/id/1005/800/800',
  cvLink: '#contact', 
  video: {
    url: 'https://www.youtube.com/embed/DWRcNpR6Kdc',
  },
};

export const aboutContent: AboutContent = {
  image: 'https://picsum.photos/id/1/800/1000',
  headline: 'Multi-platform Developer & Cybersecurity Enthusiast',
  description:
    'Informatics Engineer specialized in mobile and web development, with a strong vocation for clean code and continuous improvement. My approach combines technical quality with an understanding of business needs to deliver products that make a difference.',
  highlights: [
    { label: 'Name', value: 'Felipe Ramos Velazquez' },
    { label: 'Location', value: 'Mexico City, MX' },
    { label: 'Experience', value: '2+ Years' },
    { label: 'Phone', value: '221 957 07 59' },
    { label: 'Email', value: 'felipe100rv@gmail.com' },
    {
      label: 'LinkedIn',
      value: 'felipe-ramos-098301249',
      href: 'https://linkedin.com/in/felipe-ramos-098301249',
    },
    { label: 'GitHub', value: 'DR-EFE', href: 'https://github.com/DR-EFE' },
    { label: 'Status', value: 'Available for Freelance' },
  ],
  cta: [
    { label: 'Contact Me', href: '#contact' },
    { label: 'GitHub Profile', href: 'https://github.com/DR-EFE' },
  ],
};

export const educationTimeline: TimelineItem[] = [
  {
    title: 'Computer Science Engineering',
    place: 'UPIICSA, IPN',
    period: '2021 - Present',
    description:
      'Combining solid foundations in hardware with a focus on software development, preparing for an integral approach in corporate environments.',
  },
  {
    title: 'Technician in Computer Equipment Support and Maintenance',
    place: 'CECyTEO',
    period: '2016 - 2019',
    description: 'Developed strong skills in hardware diagnostics, server deployment, and backend-hardware integration.',
  },
];

export const experienceTimeline: TimelineItem[] = [
  {
    title: 'Trainee',
    place: 'Truper',
    period: '2026 - Present',
    description:
      'Contributed to the improvement and optimization of two strategic platforms at Truper (PMM and multi-supplier comparative system), streamlining processes and centralizing information for the Matrices area.',
  },
  {
    title: 'Web Integration Lead',
    place: 'ContBit',
    period: '2025 - 2026',
    description:
      'Led the integration of web projects with Zoho One, designing automations that connected isolated systems, reducing manual intervention and improving data consistency across the organization.',
  },
  {
    title: 'Software Developer Consultant',
    place: 'EMTIX',
    period: '2024 - 2025',
    description:
      'Collaborated on multiple high-impact projects, including the development of a comprehensive monitoring system for the C2 security cameras of the Benito Juárez municipality.',
  },
  {
    title: 'Jr. Programmer',
    place: 'Litoplas S.A. de C.V.',
    period: '2023 - 2024',
    description:
      "Developed and implemented a CRM system, optimizing client and sales management. Increased the sales team's efficiency by 20% through task automation.",
  },
];

export const certificateList: Certificate[] = [
  {
    icon: 'fa-github',
    title: 'GitHub Universe 2023 Cloud Skills Challenge',
    issuer: 'Academia Red · 2023',
    description: 'Completed the cloud skills challenge.',
    url: 'https://learn.microsoft.com/es-es/users/feliperamos-4284/achievements/hyekcpl8?ref=https%3A%2F%2Fwww.canva.com%2F'
  },
  {
    icon: 'fa-network-wired',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy · Jun 2024',
    description: 'Proficient in network communication concepts, protocols, Ethernet, IPv4/IPv6 addressing, and troubleshooting.',
  },
  {
    icon: 'fa-shield-alt',
    title: 'Operación Aleph',
    issuer: 'Red por la Ciberseguridad · Mar 2024',
    description: 'Advanced cybersecurity operations training.',
  },
  {
    icon: 'fa-laptop-code',
    title: 'Oracle Next Education Back-end',
    issuer: 'Alura Latam · Jun 2023',
    description: 'Specialized in Java Spring Boot and Backend architecture.',
  },
];

export const skills: Skill[] = [
  { label: 'Java', value: 85, color: 'bg-blue-500' },
  { label: 'Kotlin (Multiplatform)', value: 75, color: 'bg-yellow-500' },
  { label: 'Git & GitHub', value: 95, color: 'bg-gray-700' },
  { label: 'Frontend (HTML/CSS/JS)', value: 90, color: 'bg-red-500' },
  { label: 'React.js & Node', value: 85, color: 'bg-cyan-500' },
  { label: 'Databases (SQL)', value: 90, color: 'bg-green-500' },
];

export const services: Service[] = [
  {
    icon: 'fa-laptop-code',
    title: 'Full-Stack Web Development',
    description:
      'Creating modern and scalable web applications using technologies like React, Node.js, and PHP.',
  },
  {
    icon: 'fab fa-android',
    title: 'Multiplatform Development',
    description:
      'Building applications for web, Android, and desktop from a single codebase with Kotlin Multiplatform.',
  },
  {
    icon: 'fa-shield-alt',
    title: 'Cybersecurity & Cloud',
    description:
      'Implementation of secure development practices (OWASP) and leveraging cloud platforms like Azure.',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "C2 Security Monitor",
    category: "Government/Security",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    description: "Monitoring system for security cameras in Benito Juárez municipality.",
    tech: ["React", "WebSockets", "Maps API"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Corporate CRM",
    category: "Business",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    description: "Custom CRM for sales automation, increasing efficiency by 20%.",
    tech: ["PHP", "MySQL", "JavaScript"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Kotlin App Suite",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    description: "Suite of mobile tools using Kotlin Multiplatform for shared logic.",
    tech: ["Kotlin", "Android Studio", "Firebase"],
    link: "#",
    github: "#"
  }
];
