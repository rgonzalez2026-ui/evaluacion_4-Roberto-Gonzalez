import type { NavigationItem, ProjectItem, SkillItem } from '../types'

export const navigationItems: NavigationItem[] = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/sobre-mi', label: 'Sobre mí' },
  { to: '/habilidades', label: 'Habilidades' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
]

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'Mi portafolio',
    description: 'Página personal con presentación, proyectos destacados, información de contacto y una identidad visual propia.',
    url: 'https://rgonzalez2026-ui.github.io/Portafolio-Roberto-Gonzalez/',
    technologies: ['HTML', 'CSS', 'Responsive'],
    visual: 'portfolio',
    label: 'RG.',
    category: 'web',
  },
  {
    id: 2,
    title: 'Nova',
    description: 'Boceto web interactivo para organizar ideas con claridad y visualizar el progreso de proyectos.',
    url: 'https://rgonzalez2026-ui.github.io/Portafolio-Roberto-Gonzalez/proyecto%202/boceto%201.html',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    visual: 'nova',
    label: 'Nova',
    category: 'web',
  },
  {
    id: 3,
    title: 'Prestige Legal',
    description: 'Landing page elegante para una asesoría legal, con enfoque editorial y profesional.',
    url: 'https://rgonzalez2026-ui.github.io/Portafolio-Roberto-Gonzalez/proyecto%203-legal%20page/prestige_legal_perfil_profesional_espa_ol/code.html',
    technologies: ['HTML', 'Tailwind CSS'],
    visual: 'legal',
    label: 'Prestige Legal',
    category: 'web',
  },
  {
    id: 4,
    title: 'Promar',
    description: 'Página web para productos de sushi, con catálogo, destacados y carrito interactivo.',
    url: 'https://rgonzalez2026-ui.github.io/Portafolio-Roberto-Gonzalez/proyecto%204/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    visual: 'promar',
    label: 'Promar',
    category: 'web',
  },
  {
    id: 5,
    title: 'Mini Portafolio React',
    description: 'SPA personal desarrollada con React, rutas y navegación entre secciones sin recargar la página.',
    url: 'https://rgonzalez2026-ui.github.io/mini_portafolio/',
    technologies: ['React', 'Vite', 'React Router'],
    visual: 'mini',
    label: 'React SPA',
    category: 'react',
  },
  {
    id: 6,
    title: 'Pokédex con API',
    description: 'Buscador de Pokémon por código que consume PokéAPI y maneja estados de carga, éxito y error.',
    url: 'https://github.com/vfonseca2026-afk/Frontend-03-11.git',
    technologies: ['React', 'Vite', 'PokéAPI'],
    visual: 'pokedex',
    label: '#025',
    category: 'react',
  },
  {
    id: 7,
    title: 'Graficador de Cálculo',
    description: 'Aplicación de escritorio para trabajar con expresiones matemáticas y visualizar funciones.',
    url: 'https://github.com/rgonzalez2026-ui/python.git',
    technologies: ['Python', 'SymPy', 'Matplotlib'],
    visual: 'python',
    label: 'f(x)',
    category: 'python',
  },
]

export const skills: SkillItem[] = [
  { name: 'HTML y CSS', level: 'Intermedio', percentage: 82 },
  { name: 'JavaScript', level: 'Intermedio', percentage: 72 },
  { name: 'React', level: 'Intermedio', percentage: 68 },
  { name: 'TypeScript', level: 'En desarrollo', percentage: 62 },
  { name: 'Consumo de APIs', level: 'Intermedio', percentage: 70 },
  { name: 'Git y GitHub', level: 'Intermedio', percentage: 76 },
  { name: 'Python', level: 'Intermedio', percentage: 74 },
]

export const tools = ['VS Code', 'Vite', 'TypeScript', 'Git', 'GitHub', 'Figma', 'Postman']
