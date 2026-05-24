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
    category: 'E-Commerce',
    title: 'Dashboard Analytics',
    description: 'Panel de análisis en tiempo real con visualizaciones interactivas y reportes automatizados.',
    gradient: 'linear-gradient(135deg, #6c5ce7, #a29bfe, #74b9ff)',
    tags: ['Angular', 'RxJS', 'D3.js', 'Tailwind'],
  },
  {
    category: 'Mobile App',
    title: 'App Fitness Tracker',
    description: 'Aplicación mobile-first con seguimiento de actividad y sincronización en tiempo real.',
    gradient: 'linear-gradient(135deg, #fd79a8, #e84393, #6c5ce7)',
    tags: ['React', 'React Native', 'Firebase'],
  },
  {
    category: 'SaaS Platform',
    title: 'Cloud Management',
    description: 'Gestión de infraestructura cloud con monitoreo, automatización y alertas.',
    gradient: 'linear-gradient(135deg, #00b894, #00cec9, #0984e3)',
    tags: ['Angular', 'Signals', 'NgRx', 'WebSocket'],
  },
];

export const SKILLS: Skill[] = [
  { name: 'Angular / TypeScript', percent: 95 },
  { name: 'React / Next.js', percent: 90 },
  { name: 'HTML5 / CSS3 / Sass', percent: 98 },
  { name: 'JavaScript / ES6+', percent: 95 },
  { name: 'Tailwind CSS / Styled Components', percent: 92 },
];
