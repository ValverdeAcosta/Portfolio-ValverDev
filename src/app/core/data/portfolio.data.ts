import { CardItem, NavItem, Project, Skill } from '../models/portfolio.models';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sobre mí', sectionId: 'about' },
  { label: 'Servicios', sectionId: 'services' },
  { label: 'Proyectos', sectionId: 'projects' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Contacto', sectionId: 'contact' },
];

export const SERVICES: CardItem[] = [
  {
    title: 'Desarrollo Web',
    description: 'Aplicaciones modernas, escalables y accesibles con Angular, React y TypeScript.',
    tags: ['Angular', 'React', 'TypeScript', 'Next.js'],
  },
  {
    title: 'Diseño UI/UX',
    description: 'Interfaces intuitivas, visualmente sólidas y centradas en la experiencia de usuario.',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
  },
  {
    title: 'Responsive Design',
    description: 'Layouts fluidos y cuidados para móviles, tabletas y pantallas grandes.',
    tags: ['Mobile First', 'CSS Grid', 'Flexbox'],
  },
  {
    title: 'Optimización',
    description: 'Mejora de rendimiento, SEO técnico, carga eficiente y Core Web Vitals.',
    tags: ['Performance', 'SEO', 'Lazy Loading'],
  },
];

export const PROJECTS: Project[] = [
  {
    company: 'EPAM - NEORIS',
    category: 'Sanoma Learning',
    title: 'Plataforma educativa en Holanda',
    role: 'Senior Frontend Developer',
    period: 'Marzo 2023 → Actualidad',
    logoSrc: 'assets/logos/epam-neoris.svg',
    logoAlt: 'Logo de EPAM y NEORIS',
    description:
      'Migración y nuevos desarrollos para una plataforma educativa utilizada por más de 5000 escuelas en los Países Bajos. Liderazgo frontend, mentoría técnica, definición de directrices estratégicas, garantía de estándares de calidad, cumplimiento de plazos y coordinación con otros equipos para mejorar la integración y la experiencia de usuario.',
    gradient: 'linear-gradient(135deg, #6c5ce7, #a29bfe, #74b9ff)',
    tags: ['Angular', 'Liderazgo Frontend', 'Mentoría', 'Calidad de código', 'UX'],
  },
  {
    company: 'IRIUM',
    category: 'Cliente Accenture',
    title: 'Aplicaciones bancarias BBVA e Inversis',
    role: 'Frontend Developer',
    period: 'Mayo 2022 → Marzo 2023',
    logoSrc: 'assets/logos/irium.svg',
    logoAlt: 'Logo de IRIUM',
    description:
      'Desarrollo y mantenimiento de aplicaciones para Banco Inversis y Banco BBVA. Resolución de incidencias, corrección de bugs, construcción de componentes reutilizables y web components, mejora de estilos, gestión de estados, revisiones de PR y refactors orientados a reducir code smell y mejorar escalabilidad, homogeneidad, complejidad y legibilidad.',
    gradient: 'linear-gradient(135deg, #fd79a8, #e84393, #6c5ce7)',
    tags: ['Web Components', 'State Management', 'Code Review', 'Refactor', 'Clean Code'],
  },
  {
    company: 'SOAMEE',
    category: 'Marketplace, Backoffice y Landing Page',
    title: 'Aplicaciones web para clientes',
    role: 'Frontend + Tareas de Backend',
    period: 'Septiembre 2021 → Mayo 2022',
    logoSrc: 'assets/logos/soamee.svg',
    logoAlt: 'Logo de SOAMEE',
    description:
      'Desarrollo de aplicaciones web para diferentes clientes, incluyendo marketplace, backoffice y landing page. Trabajo enfocado en SOLID, Clean Code, buenas prácticas y revisiones de código en GitHub como parte del aprendizaje continuo del equipo.',
    gradient: 'linear-gradient(135deg, #00b894, #00cec9, #0984e3)',
    tags: ['Frontend', 'Backend', 'SOLID', 'Clean Code', 'GitHub Reviews'],
  },
];

export const SKILLS: Skill[] = [
  { name: 'Angular / TypeScript', percent: 95 },
  { name: 'React / Next.js', percent: 90 },
  { name: 'HTML5 / CSS3 / Sass', percent: 98 },
  { name: 'JavaScript / ES6+', percent: 95 },
  { name: 'Tailwind CSS / Styled Components', percent: 92 },
];
