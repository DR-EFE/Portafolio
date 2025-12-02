import { NavLink, Project, HeroContent, AboutContent, TimelineItem, Certificate, Skill, Service } from '../types';

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'qualification', label: 'Quality' },
  { id: 'certificate', label: 'Certificates' },
  { id: 'skill', label: 'Skill' },
  { id: 'service', label: 'Service' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export const heroContent: HeroContent = {
  name: 'Felipe Ramos',
  typedRoles: ['Web Designer', 'Web Developer', 'Front End Developer', 'Apps Designer', 'Apps Developer'],
  profileImage: 'https://picsum.photos/id/1005/800/800', // Placeholder
  cvLink: '#!',
  video: {
    url: 'https://www.youtube.com/embed/DWRcNpR6Kdc',
  },
};

export const aboutContent: AboutContent = {
  image: 'https://picsum.photos/id/1/800/1000', // Placeholder
  headline: 'Multi-platform Developer & Cybersecurity Enthusiast',
  description:
    'Computer Science Engineering student focused on cross-platform development and cybersecurity. I seek to optimize processes and strengthen skills in challenging teams, with the goal of leading innovative projects. I have experience in developing and implementing CRM systems, which increased the efficiency of the sales team by 20% through task automation.',
  highlights: [
    { label: 'Name', value: 'Felipe Ramos Velazquez' },
    { label: 'Degree', value: 'Computer Science Engineering (7th semester)' },
    { label: 'Experience', value: '1+ Year' },
    { label: 'Phone', value: '961 761 6748' },
    { label: 'Email', value: 'felipe100rv@gmail.com' },
    {
      label: 'LinkedIn',
      value: 'felipe-ramos-098301249',
      href: 'https://linkedin.com/in/felipe-ramos-098301249',
    },
    { label: 'GitHub', value: 'DR-EFE', href: 'https://github.com/DR-EFE' },
    { label: 'Freelance', value: 'Available' },
  ],
  cta: [
    { label: 'Hire Me', href: 'mailto:felipe100rv@gmail.com' },
    { label: 'Learn More', href: 'https://github.com/DR-EFE' },
  ],
};

export const educationTimeline: TimelineItem[] = [
  {
    title: 'Computer Science Engineering',
    place: 'UPIICSA, IPN',
    period: 'Ongoing (7th semester)',
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
    title: 'Jr. Programmer',
    place: 'Litoplas S.A. de C.V.',
    period: '2023 - 2024',
    description:
      "Developed and implemented a CRM system, optimizing client and sales management. Increased the sales team's efficiency by 20% through task automation. This involved relational database design, backend services, and front-end integration.",
  },
];

export const certificateList: Certificate[] = [
  {
    icon: 'fa-shield-alt',
    title: 'Operación Aleph',
    issuer: 'Red por la Ciberseguridad · Mar 2024',
    description: 'ID: 6852778575FR. Advanced cybersecurity operations training.',
  },
  {
    icon: 'fa-laptop-code',
    title: 'Programa Oracle Next Education F2 T4 Back-end',
    issuer: 'Alura Latam · Jun 2023',
    description: 'ID: 9794193e-6a24-423d-86bd-4be54c98c72b. Specialized in Java Spring Boot and Backend architecture.',
  },
  {
    icon: 'fa-laptop-code',
    title: 'GIT Y GITHUB: CONTROLE Y COMPARTA SU CÓDIGO',
    issuer: 'Alura · Ene 2023',
    description: 'Mastery of version control systems, branching strategies, and collaborative workflows.',
  },
  {
    icon: 'fa-laptop-code',
    title: 'INTRODUCCIÓN A LA PROGRAMACIÓN',
    issuer: 'OpenBootcamp · Nov 2022',
    description: 'Solid foundations in programming logic, algorithms, and structured coding practices.',
  },
  {
    icon: 'fa-certificate',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft · Oct 2021',
    description: 'ID: FRmA-XMSy. Knowledge of cloud concepts, Azure services, workloads, security, and pricing.',
  },
  {
    icon: 'fa-certificate',
    title: 'Técnico en informática (Ofimática)',
    issuer: 'Fundación Carlos Slim · Oct 2021',
    description: 'ID: C6B5E882-0E2F-45CE-83E4-C2AF9600D0A3. Office automation and technical support certification.',
  },
  {
    icon: 'fa-laptop-code',
    title: 'Curso de Introducción al Desarrollo Web: HTML y CSS',
    issuer: 'Google Actívate · Sept 2021',
    description: 'ID: FGZ S2J 635. Fundamentals of responsive web design and frontend structure.',
  },
  {
    icon: 'fa-certificate',
    title: 'Cómputo básico',
    issuer: 'Fundación Carlos Slim · Sept 2021',
    description: 'ID: E9B7ED3E-7819-41C4-85B7-04E2B1683CE6. Essential computer skills and digital literacy.',
  },
  {
    icon: 'fab fa-android',
    title: 'Desarrollo de Apps Móviles',
    issuer: 'Google Actívate · Jul 2021',
    description: 'ID: TJJ 3WG 8G9. Principles of mobile application development and user experience.',
  },
];

export const skills: Skill[] = [
  { label: 'Java', value: 85, color: 'bg-blue-500' }, // Mapped to tailwind colors or custom hex
  { label: 'Kotlin (Multiplatform & Android)', value: 75, color: 'bg-yellow-500' },
  { label: 'Git & GitHub', value: 95, color: 'bg-gray-700' },
  { label: 'HTML, CSS & JavaScript', value: 90, color: 'bg-red-500' },
  { label: 'React.js & PHP', value: 85, color: 'bg-cyan-500' },
  { label: 'Databases (SQL)', value: 90, color: 'bg-green-500' },
];

export const services: Service[] = [
  {
    icon: 'fa-laptop-code',
    title: 'Full-Stack Web Development',
    description:
      'Creating modern and scalable web applications using technologies like React, Node.js, and PHP. Experience in building robust backends and dynamic user interfaces.',
  },
  {
    icon: 'fab fa-android',
    title: 'Multiplatform Development',
    description:
      'Building applications for web, Android, and desktop from a single codebase with Kotlin Multiplatform, ensuring a consistent user experience and efficient development.',
  },
  {
    icon: 'fa-shield-alt',
    title: 'Cybersecurity & Cloud',
    description:
      'Implementation of secure development practices (OWASP) and leveraging cloud platforms like Azure and Supabase to build and deploy scalable and secure applications.',
  },
];

// Kept projects for the portfolio section as no new project data was provided in the snippet
export const projects: Project[] = [
  {
    id: 1,
    title: "Neon Finance Dashboard",
    category: "Fintech",
    image: "https://picsum.photos/id/1015/800/600",
    description: "Real-time crypto analytics platform with WebGL data visualization.",
    tech: ["React", "Three.js", "D3.js"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Cyber Commerce",
    category: "E-Commerce",
    image: "https://picsum.photos/id/1033/800/600",
    description: "Headless Shopify store with immersive 3D product previews.",
    tech: ["Next.js", "Shopify", "Tailwind"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "AI Chat Interface",
    category: "AI Tool",
    image: "https://picsum.photos/id/1025/800/600",
    description: "Generative AI interface with streaming responses and markdown support.",
    tech: ["React", "Gemini API", "Framer Motion"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "DevOps Monitor",
    category: "Infrastructure",
    image: "https://picsum.photos/id/1068/800/600",
    description: "Server log monitoring tool with websocket integration.",
    tech: ["Vue", "Go", "WebSockets"],
    link: "#",
    github: "#"
  }
];