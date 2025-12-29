
import { NavLink, Project, HeroContent, AboutContent, TimelineItem, Certificate, Skill, Service, Technology } from '../types';

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'qualification', label: 'Experience' },
  { id: 'certificate', label: 'Certificates' },
  { id: 'skill', label: 'Skills' },
  { id: 'service', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'technologies', label: 'Technologies' },
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
    'Computer Science Engineering student focused on cross-platform development and cybersecurity. I seek to optimize processes and strengthen skills in challenging teams, with the goal of leading innovative projects. I have experience in developing and implementing CRM systems, which increased the efficiency of the sales team by 20% through task automation.',
  highlights: [
    { label: 'Name', value: 'Felipe Ramos Velazquez' },
    { label: 'Location', value: 'Mexico City, MX' },
    { label: 'Experience', value: '1+ Year' },
    { label: 'Phone', value: '961 761 6748' },
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
    title: 'Software Developer Consultant',
    place: 'EMTIX',
    period: '2025 - Present',
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
    image: "https://picsum.photos/id/1015/800/600",
    description: "Monitoring system for security cameras in Benito Juárez municipality.",
    tech: ["React", "WebSockets", "Maps API"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Corporate CRM",
    category: "Business",
    image: "https://picsum.photos/id/1033/800/600",
    description: "Custom CRM for sales automation, increasing efficiency by 20%.",
    tech: ["PHP", "MySQL", "JavaScript"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Kotlin App Suite",
    category: "Mobile",
    image: "https://picsum.photos/id/1025/800/600",
    description: "Suite of mobile tools using Kotlin Multiplatform for shared logic.",
    tech: ["Kotlin", "Android Studio", "Firebase"],
    link: "#",
    github: "#"
  }
];

export const technologies: Technology[] = [
  { name: 'Windows', icon: 'fab fa-windows' },
  { name: 'Visual Studio Code', icon: 'fas fa-code' },
  { name: 'Git & GitHub', icon: 'fab fa-github' },
  { name: 'Android Studio', icon: 'fab fa-android' },
  { name: 'IntelliJ IDEA', icon: 'fas fa-lightbulb' },
  { name: 'Figma', icon: 'fab fa-figma' },
  { name: 'Trello', icon: 'fab fa-trello' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'Postman', icon: 'fas fa-rocket' },
  { name: 'Azure', icon: 'fab fa-microsoft' },
];
