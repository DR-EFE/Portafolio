export interface NavLink {
  id: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
}

export interface VideoModalState {
  isOpen: boolean;
  src: string;
}

export interface HeroContent {
  name: string;
  typedRoles: string[];
  profileImage: string;
  cvLink: string;
  video: {
    url: string;
  };
}

export interface AboutContent {
  image: string;
  headline: string;
  description: string;
  highlights: {
    label: string;
    value: string;
    href?: string;
  }[];
  cta: {
    label: string;
    href: string;
  }[];
}

export interface TimelineItem {
  title: string;
  place: string;
  period: string;
  description: string;
}

export interface Certificate {
  icon: string;
  title: string;
  issuer: string;
  description: string;
}

export interface Skill {
  label: string;
  value: number;
  color: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}
