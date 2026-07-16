import {
  NavLink,
  Project,
  HeroContent,
  AboutContent,
  TimelineItem,
  Certificate,
  Skill,
  Service
} from '../types';

export type TranslationData = {
  navLinks: NavLink[];
  heroContent: HeroContent;
  aboutContent: AboutContent;
  educationTimeline: TimelineItem[];
  experienceTimeline: TimelineItem[];
  certificateList: Certificate[];
  skills: Skill[];
  services: Service[];
  projects: Project[];
  ui: {
    downloadCV: string;
    contactMe: string;
    watchVideo: string;
    aboutMe: string;
    my: string;
    education: string;
    experience: string;
    certificates: string;
    skills: string;
    services: string;
    portfolio: string;
    contact: string;
    getInTouch: string;
    portfolioSubtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendMessage: string;
    contactSubtitle: string;
    messageSent: string;
    messageSentDesc: string;
    sendAnother: string;
    sending: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    rights: string;
    menu: string;
    close: string;
  };
};

export const en: TranslationData = {
  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'qualification', label: 'Experience' },
    { id: 'certificate', label: 'Certificates' },
    { id: 'skill', label: 'Skills' },
    { id: 'service', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ],
  heroContent: {
    name: 'Felipe Ramos',
    typedRoles: ['Web Designer', 'Web Developer', 'Front End Developer', 'Apps Designer', 'Apps Developer'],
    profileImage: 'https://i.pinimg.com/736x/5a/aa/7a/5aaa7ae1334977e3bd9e1d444b3c9d71.jpg',
    cvLink: '#contact',
    video: {
      url: 'https://www.youtube.com/embed/DWRcNpR6Kdc',
    },
  },
  aboutContent: {
    image: 'https://i.pinimg.com/736x/5a/aa/7a/5aaa7ae1334977e3bd9e1d444b3c9d71.jpg',
    headline: 'Multi-platform Developer & Cybersecurity Enthusiast',
    description: 'Informatics Engineer specialized in mobile and web development, with a strong vocation for clean code and continuous improvement. My approach combines technical quality with an understanding of business needs to deliver products that make a difference.',
    highlights: [
      { label: 'Name', value: 'Felipe Ramos Velazquez' },
      { label: 'Location', value: 'Mexico City, MX' },
      { label: 'Experience', value: '2+ Years' },
      { label: 'English', value: 'B1 Intermediate' },
      { label: 'Phone', value: '221 957 07 59' },
      { label: 'Email', value: 'felipe100rv@gmail.com' },
      { label: 'LinkedIn', value: 'felipe-ramos-098301249', href: 'https://linkedin.com/in/felipe-ramos-098301249' },
      { label: 'GitHub', value: 'DR-EFE', href: 'https://github.com/DR-EFE' },
      { label: 'Status', value: 'Available for Freelance' },
    ],
    cta: [
      { label: 'Contact Me', href: '#contact' },
      { label: 'GitHub Profile', href: 'https://github.com/DR-EFE' },
    ],
  },
  educationTimeline: [
    {
      title: 'Computer Science Engineering',
      place: 'UPIICSA, IPN',
      period: '2021 - Present',
      description: 'Combining solid foundations in hardware with a focus on software development, preparing for an integral approach in corporate environments.',
    },
    {
      title: 'Technician in Computer Equipment Support and Maintenance',
      place: 'CECyTEO',
      period: '2016 - 2019',
      description: 'Developed strong skills in hardware diagnostics, server deployment, and backend-hardware integration.',
    },
  ],
  experienceTimeline: [
    {
      title: 'Trainee',
      place: 'Truper',
      period: '2026 - Present',
      description: 'Contributed to the improvement and optimization of two strategic platforms at Truper (PMM and multi-supplier comparative system), streamlining processes and centralizing information for the Matrices area.',
    },
    {
      title: 'Web Integration Lead',
      place: 'ContBit',
      period: '2025 - 2026',
      description: 'Led the integration of web projects with Zoho One, designing automations that connected isolated systems, reducing manual intervention and improving data consistency across the organization.',
    },
    {
      title: 'Software Developer Consultant',
      place: 'EMTIX',
      period: '2024 - 2025',
      description: 'Collaborated on multiple high-impact projects, including the development of a comprehensive monitoring system for the C2 security cameras of the Benito Juárez municipality.',
    },
    {
      title: 'Jr. Programmer',
      place: 'Litoplas S.A. de C.V.',
      period: '2023 - 2024',
      description: 'Developed and implemented a CRM system, optimizing client and sales management. Increased the sales team\'s efficiency by 20% through task automation.',
    },
  ],
  certificateList: [
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
      url: 'https://drive.google.com/file/d/1WtajhGsAGh78gEs_-pxIU-CXXHrspP_1/view?usp=sharing'
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
      url: 'https://app.aluracursos.com/program/certificate/9794193e-6a24-423d-86bd-4be54c98c72b'
    },
    {
      icon: 'fa-python',
      title: 'Python for Data Science',
      issuer: 'Alura Latam',
      description: 'Acquired foundational skills in Python applied to Data Science.',
      url: 'https://app.aluracursos.com/certificate/643ddd4e-31e6-40f2-86be-e1727ef0d815'
    },
  ],
  skills: [
    { label: 'Java', value: 85, color: 'bg-blue-500' },
    { label: 'Kotlin (Multiplatform)', value: 75, color: 'bg-yellow-500' },
    { label: 'Git & GitHub', value: 95, color: 'bg-gray-700' },
    { label: 'Frontend (HTML/CSS/JS)', value: 90, color: 'bg-red-500' },
    { label: 'React.js & Node', value: 85, color: 'bg-cyan-500' },
    { label: 'Databases (SQL)', value: 90, color: 'bg-green-500' },
  ],
  services: [
    {
      icon: 'fa-laptop-code',
      title: 'Full-Stack Web Development',
      description: 'Creating modern and scalable web applications using technologies like React, Node.js, and PHP.',
    },
    {
      icon: 'fab fa-android',
      title: 'Multiplatform Development',
      description: 'Building applications for web, Android, and desktop from a single codebase with Kotlin Multiplatform.',
    },
    {
      icon: 'fa-shield-alt',
      title: 'Cybersecurity & Cloud',
      description: 'Implementation of secure development practices (OWASP) and leveraging cloud platforms like Azure.',
    },
  ],
  projects: [
    {
      id: 1,
      title: "Consumption Equations Calculator",
      category: "Economics & Math",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
      description: "An interactive educational tool designed to analyze and project consumer demand, market equilibrium, and price supply/demand elasticities with dynamic charts.",
      tech: ["React", "Tailwind CSS", "D3.js", "Economics"],
      link: "https://cienciaseconomicas.netlify.app/",
      github: "#"
    },
    {
      id: 2,
      title: "Attendance QR",
      category: "EdTech",
      image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=800&auto=format&fit=crop",
      description: "App landing page for a smart school attendance system utilizing QR code technology. Scans credentials instantly, prevents fraud, and auto-generates reports via Supabase integration.",
      tech: ["React", "Supabase", "QR Scanner", "Tailwind CSS"],
      link: "https://escaneripn.netlify.app/",
      github: "#",
      isAppDownload: true
    },
    {
      id: 3,
      title: "Virtual Medic",
      category: "Utility & Diagnostics",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=800&auto=format&fit=crop",
      description: "A fast diagnostic and optimization tool suite landing page. Helps users perform RAM/disk health and network checks to keep PCs running like new in minutes.",
      tech: ["React", "Tailwind CSS", "Diagnostics"],
      link: "https://doctorcomputadoras.netlify.app/",
      github: "#",
      isAppDownload: true
    },
    {
      id: 4,
      title: "Tu Próximo Abogado",
      category: "Legal Tech",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
      description: "A professional landing page and dynamic diagnostic system for a strategic CDMX-based law firm, specialized in assets protection and proactive risk analysis.",
      tech: ["React", "Tailwind CSS", "Booking Systems"],
      link: "https://scintillating-semolina-a2677c.netlify.app/",
      github: "#"
    },
    {
      id: 5,
      title: "ContBIT",
      category: "Industrial Cybersecurity",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      description: "A specialized platform for Industrial Network Engineering (OT). Features network assessment tools, secure IT/OT segmentations, and configurations matching the ISA/IEC 62443 standard.",
      tech: ["React", "OT Networks", "Cybersecurity", "Automation"],
      link: "https://contbitpruebas.netlify.app/",
      github: "#"
    },
    {
      id: 6,
      title: "C2 Security Monitor",
      category: "Government/Security",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      description: "Monitoring system for security cameras in Benito Juárez municipality.",
      tech: ["React", "WebSockets", "Maps API"],
      link: "#",
      github: "#",
      isPrivate: true
    },
    {
      id: 7,
      title: "Corporate CRM",
      category: "Business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      description: "Custom CRM for sales automation, increasing efficiency by 20%.",
      tech: ["PHP", "MySQL", "JavaScript"],
      link: "#",
      github: "#",
      isPrivate: true
    },
    {
      id: 8,
      title: "Love App ❤️",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
      description: "A private mobile app for couples to connect, create memory vaults, exchange custom love coupons, sync mood, track cycle logs (CycleSync), and play intimate roulette games. Powered by React Native with Expo and Firebase.",
      tech: ["React Native", "Expo", "Firebase", "Realtime DB"],
      link: "#",
      github: "#",
      isPrivate: true
    }
  ],
  ui: {
    downloadCV: 'Download CV',
    contactMe: 'Contact Me',
    watchVideo: 'Watch Video',
    aboutMe: 'About Me',
    my: 'My',
    education: 'Education',
    experience: 'Experience',
    certificates: 'Certificates',
    skills: 'Skills',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
    getInTouch: 'Get in Touch',
    portfolioSubtitle: 'Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos.',
    namePlaceholder: 'Name',
    emailPlaceholder: 'Email',
    messagePlaceholder: 'Message',
    sendMessage: 'Send Message',
    contactSubtitle: 'Have a project in mind or just want to say hi? My inbox is always open.',
    messageSent: 'Message Sent!',
    messageSentDesc: 'Thanks for reaching out. I\'ll get back to you soon.',
    sendAnother: 'Send Another',
    sending: 'Sending...',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    rights: 'All rights reserved.',
    menu: 'Menu',
    close: 'Close',
  }
};

export const es: TranslationData = {
  navLinks: [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'qualification', label: 'Experiencia' },
    { id: 'certificate', label: 'Certificados' },
    { id: 'skill', label: 'Habilidades' },
    { id: 'service', label: 'Servicios' },
    { id: 'portfolio', label: 'Portafolio' },
    { id: 'contact', label: 'Contacto' },
  ],
  heroContent: {
    name: 'Felipe Ramos',
    typedRoles: ['Diseñador Web', 'Desarrollador Web', 'Desarrollador Front End', 'Diseñador de Apps', 'Desarrollador de Apps'],
    profileImage: 'https://i.pinimg.com/736x/5a/aa/7a/5aaa7ae1334977e3bd9e1d444b3c9d71.jpg',
    cvLink: '#contact',
    video: {
      url: 'https://www.youtube.com/embed/DWRcNpR6Kdc',
    },
  },
  aboutContent: {
    image: 'https://i.pinimg.com/736x/5a/aa/7a/5aaa7ae1334977e3bd9e1d444b3c9d71.jpg',
    headline: 'Desarrollador Multiplataforma y Entusiasta de Ciberseguridad',
    description: 'Ingeniero en Informática especializado en desarrollo móvil y web, con una fuerte vocación por el código limpio y la mejora continua. Mi enfoque combina la calidad técnica con la comprensión de las necesidades del negocio para entregar productos que marquen la diferencia.',
    highlights: [
      { label: 'Nombre', value: 'Felipe Ramos Velazquez' },
      { label: 'Ubicación', value: 'Ciudad de México, MX' },
      { label: 'Experiencia', value: '2+ Años' },
      { label: 'Inglés', value: 'B1 Intermedio' },
      { label: 'Teléfono', value: '221 957 07 59' },
      { label: 'Email', value: 'felipe100rv@gmail.com' },
      { label: 'LinkedIn', value: 'felipe-ramos-098301249', href: 'https://linkedin.com/in/felipe-ramos-098301249' },
      { label: 'GitHub', value: 'DR-EFE', href: 'https://github.com/DR-EFE' },
      { label: 'Estado', value: 'Disponible (Freelance)' },
    ],
    cta: [
      { label: 'Contáctame', href: '#contact' },
      { label: 'Perfil en GitHub', href: 'https://github.com/DR-EFE' },
    ],
  },
  educationTimeline: [
    {
      title: 'Ingeniería en Ciencias de la Informática',
      place: 'UPIICSA, IPN',
      period: '2021 - Actualidad',
      description: 'Combinando bases sólidas en hardware con enfoque en desarrollo de software, preparándome para un enfoque integral en entornos corporativos.',
    },
    {
      title: 'Técnico en Soporte y Mantenimiento de Equipo de Cómputo',
      place: 'CECyTEO',
      period: '2016 - 2019',
      description: 'Desarrollé fuertes habilidades en diagnóstico de hardware, despliegue de servidores e integración de hardware/backend.',
    },
  ],
  experienceTimeline: [
    {
      title: 'Becario',
      place: 'Truper',
      period: '2026 - Actualidad',
      description: 'Contribuí en la mejora y optimización de dos plataformas estratégicas en Truper (PMM y sistema de comparativos multi-proveedores), agilizando procesos y centralizando información para el área de Matrices.',
    },
    {
      title: 'Líder de Integración Web',
      place: 'ContBit',
      period: '2025 - 2026',
      description: 'Lideré la integración de proyectos web con Zoho One, diseñando automatizaciones que conectaron sistemas aislados, reduciendo la intervención manual y mejorando la consistencia de los datos en toda la organización.',
    },
    {
      title: 'Consultor Desarrollador de Software',
      place: 'EMTIX',
      period: '2024 - 2025',
      description: 'Colaboré en múltiples proyectos de alto impacto, incluyendo el desarrollo de un sistema de monitoreo integral para las cámaras de seguridad C2 de la alcaldía Benito Juárez.',
    },
    {
      title: 'Programador Jr.',
      place: 'Litoplas S.A. de C.V.',
      period: '2023 - 2024',
      description: 'Desarrollé e implementé un sistema CRM, optimizando la gestión de clientes y ventas. Aumentó la eficiencia del equipo de ventas en un 20% a través de la automatización de tareas.',
    },
  ],
  certificateList: [
    {
      icon: 'fa-github',
      title: 'GitHub Universe 2023 Cloud Skills Challenge',
      issuer: 'Academia Red · 2023',
      description: 'Completé el reto de habilidades en la nube.',
      url: 'https://learn.microsoft.com/es-es/users/feliperamos-4284/achievements/hyekcpl8?ref=https%3A%2F%2Fwww.canva.com%2F'
    },
    {
      icon: 'fa-network-wired',
      title: 'Conceptos Básicos de Redes',
      issuer: 'Cisco Networking Academy · Jun 2024',
      description: 'Competente en conceptos de comunicación de redes, protocolos, Ethernet, direccionamiento IPv4/IPv6 y solución de problemas.',
      url: 'https://drive.google.com/file/d/1WtajhGsAGh78gEs_-pxIU-CXXHrspP_1/view?usp=sharing'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Operación Aleph',
      issuer: 'Red por la Ciberseguridad · Mar 2024',
      description: 'Entrenamiento avanzado en operaciones de ciberseguridad.',
    },
    {
      icon: 'fa-laptop-code',
      title: 'Oracle Next Education Back-end',
      issuer: 'Alura Latam · Jun 2023',
      description: 'Especializado en arquitectura Backend y Java Spring Boot.',
      url: 'https://app.aluracursos.com/program/certificate/9794193e-6a24-423d-86bd-4be54c98c72b'
    },
    {
      icon: 'fa-python',
      title: 'Python para Data Science',
      issuer: 'Alura Latam',
      description: 'Habilidades fundamentales en Python aplicado a la Ciencia de Datos.',
      url: 'https://app.aluracursos.com/certificate/643ddd4e-31e6-40f2-86be-e1727ef0d815'
    },
  ],
  skills: [
    { label: 'Java', value: 85, color: 'bg-blue-500' },
    { label: 'Kotlin (Multiplataforma)', value: 75, color: 'bg-yellow-500' },
    { label: 'Git & GitHub', value: 95, color: 'bg-gray-700' },
    { label: 'Frontend (HTML/CSS/JS)', value: 90, color: 'bg-red-500' },
    { label: 'React.js & Node', value: 85, color: 'bg-cyan-500' },
    { label: 'Bases de Datos (SQL)', value: 90, color: 'bg-green-500' },
  ],
  services: [
    {
      icon: 'fa-laptop-code',
      title: 'Desarrollo Web Full-Stack',
      description: 'Creación de aplicaciones web modernas y escalables utilizando tecnologías como React, Node.js y PHP.',
    },
    {
      icon: 'fab fa-android',
      title: 'Desarrollo Multiplataforma',
      description: 'Construcción de aplicaciones para web, Android y escritorio desde una única base de código con Kotlin Multiplatform.',
    },
    {
      icon: 'fa-shield-alt',
      title: 'Ciberseguridad y Nube',
      description: 'Implementación de prácticas de desarrollo seguro (OWASP) y aprovechamiento de plataformas en la nube como Azure.',
    },
  ],
  projects: [
    {
      id: 1,
      title: "Calculadora de Ecuaciones de Consumo",
      category: "Economía y Matemáticas",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
      description: "Herramienta interactiva y educativa diseñada para analizar y proyectar la demanda del mercado, el equilibrio de precios y las elasticidades con representaciones gráficas dinámicas.",
      tech: ["React", "Tailwind CSS", "D3.js", "Economics"],
      link: "https://cienciaseconomicas.netlify.app/",
      github: "#"
    },
    {
      id: 2,
      title: "Attendance QR",
      category: "Tecnología Educativa (EdTech)",
      image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=800&auto=format&fit=crop",
      description: "Página de presentación para un sistema digital de control rápido de asistencia escolar mediante códigos QR. Registra asistencias con un smartphone, previene fraudes y genera reportes con Supabase.",
      tech: ["React", "Supabase", "QR Code", "Tailwind CSS"],
      link: "https://escaneripn.netlify.app/",
      github: "#",
      isAppDownload: true
    },
    {
      id: 3,
      title: "Virtual Medic",
      category: "Utilidades y Diagnósticos",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=800&auto=format&fit=crop",
      description: "Página de aterrizaje para una suite de diagnóstico y optimización rápida de computadoras. Permite analizar el estado de RAM, disco, red y sistema operativo en minutos.",
      tech: ["React", "Tailwind CSS", "Diagnostics"],
      link: "https://doctorcomputadoras.netlify.app/",
      github: "#",
      isAppDownload: true
    },
    {
      id: 4,
      title: "Tu Próximo Abogado",
      category: "Tecnología Legal (LegalTech)",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
      description: "Firma legal estratégica y plataforma de diagnóstico en CDMX enfocada en la protección patrimonial y la resolución proactiva de conflictos complejos para empresarios.",
      tech: ["React", "Tailwind CSS", "Legal Tech"],
      link: "https://scintillating-semolina-a2677c.netlify.app/",
      github: "#"
    },
    {
      id: 5,
      title: "ContBIT",
      category: "Ciberseguridad Industrial",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      description: "Plataforma de ingeniería en telecomunicaciones y seguridad para redes industriales (OT). Especialistas en segmentación segura IT/OT, alta disponibilidad y estándar ISA/IEC 62443.",
      tech: ["React", "OT Networks", "Ciberseguridad", "Automatización"],
      link: "https://contbitpruebas.netlify.app/",
      github: "#"
    },
    {
      id: 6,
      title: "Monitor de Seguridad C2",
      category: "Gobierno/Seguridad",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      description: "Sistema de monitoreo para las cámaras de seguridad de la alcaldía Benito Juárez.",
      tech: ["React", "WebSockets", "Maps API"],
      link: "#",
      github: "#",
      isPrivate: true
    },
    {
      id: 7,
      title: "CRM Corporativo",
      category: "Negocios",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      description: "CRM a medida para automatización de ventas, aumentando la eficiencia en un 20%.",
      tech: ["PHP", "MySQL", "JavaScript"],
      link: "#",
      github: "#",
      isPrivate: true
    },
    {
      id: 8,
      title: "Love App ❤️",
      category: "Aplicación Móvil",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
      description: "Aplicación móvil privada diseñada para que las parejas fortalezcan su conexión, creen recuerdos y se diviertan en un espacio privado y seguro. Desarrollada con React Native, Expo y Firebase. Cuenta con vinculación segura, bóveda de recuerdos, cupones personalizados, selector de ánimo, sincronización de ciclo (CycleSync) y juegos como la ruleta íntima.",
      tech: ["React Native", "Expo", "Firebase", "Realtime DB"],
      link: "#",
      github: "#",
      isPrivate: true
    }
  ],
  ui: {
    downloadCV: 'Descargar CV',
    contactMe: 'Contáctame',
    watchVideo: 'Ver Video',
    aboutMe: 'Sobre Mí',
    my: 'Mi',
    education: 'Educación',
    experience: 'Experiencia',
    certificates: 'Certificados',
    skills: 'Habilidades',
    services: 'Servicios',
    portfolio: 'Portafolio',
    contact: 'Contacto',
    getInTouch: 'Ponte en Contacto',
    portfolioSubtitle: 'Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos reales de mi trabajo. Cada proyecto se describe brevemente con enlaces a repositorios de código y demostraciones en vivo.',
    namePlaceholder: 'Nombre',
    emailPlaceholder: 'Correo electrónico',
    messagePlaceholder: 'Mensaje',
    sendMessage: 'Enviar Mensaje',
    contactSubtitle: '¿Tienes un proyecto en mente o solo quieres saludar? Mi bandeja de entrada está siempre abierta.',
    messageSent: '¡Mensaje Enviado!',
    messageSentDesc: 'Gracias por comunicarte. Me pondré en contacto contigo pronto.',
    sendAnother: 'Enviar Otro',
    sending: 'Enviando...',
    nameLabel: 'Nombre',
    emailLabel: 'Correo',
    messageLabel: 'Mensaje',
    rights: 'Todos los derechos reservados.',
    menu: 'Menú',
    close: 'Cerrar',
  }
};