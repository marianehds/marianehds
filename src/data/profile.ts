export const profile = {
  name: 'Portfólio',
  fullName: 'Mariane Halberstadt de Souza',
  role: 'Desenvolvedora Full Stack Pleno',
  tagline: 'React · TypeScript · .NET · SQL Server',
  bio: 'Desenvolvedora Full Stack com 4 anos de experiência em aplicações web. Atuo do front-end ao banco de dados — interfaces, APIs, modelagem e regras de negócio, com foco em performance, qualidade e manutenibilidade.',
  education: 'Bacharelado em Ciência da Computação (2021 – 2028)',
  email: 'marianehds@outlook.com',
  linkedin: 'https://www.linkedin.com/in/marianehds/',
  alura: 'https://www.alura.com.br/user/marianeh',
} as const

export const navItems = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'skills', label: 'Skills' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
] as const

export type Experience = {
  id: string
  period: string
  title: string
  description: string
  isCurrent?: boolean
}

export const experiences: Experience[] = [
  {
    id: 'wk-jobhub',
    period: '2026 – atual',
    title: 'Full Stack Pleno · Wk JobHub',
    description: 'Celebré Soluções Digitais & Abrutelecom — ponta a ponta com React, .NET e Azure.',
    isCurrent: true,
  },
  {
    id: 'bem-jr',
    period: '2023 – 2025',
    title: 'Programadora JR · Bem Promotora',
    description: 'Design System, micro front-ends e testes automatizados.',
  },
  {
    id: 'bem-estagio',
    period: '2022 – 2023',
    title: 'Estágio Full Stack · Bem Promotora',
    description: 'React, TypeScript, ASP.NET Core MVC e SQL Server.',
  },
]

export const skills = {
  frontend: ['React', 'TypeScript', 'Redux', 'Context API', 'SCSS', 'Styled Components', 'MUI'],
  backend: ['C#', '.NET Core', 'ASP.NET Core MVC', 'SQL Server', 'Azure'],
  tools: ['Git', 'Playwright', 'Jest', 'Figma'],
} as const

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string
  viewUrl?: string
  codeUrl?: string
  isNew?: boolean
}

export const projects: Project[] = [
  {
    id: 'cute-chaos',
    title: 'Cute Chaos',
    description: 'Site de vendas de itens impressos em 3D.',
    image: '/projects/cute-chaos.png',
    viewUrl: 'https://cutechaos.com.br',
    tags: ['React', 'Vite', 'TypeScript', 'SCSS'],
  },
  {
    id: 'design-system',
    title: 'Design System',
    description: 'Biblioteca de componentes reutilizáveis e micro front-ends com React, vite e storybook.',
    image: '/projects/design-system.png',
    viewUrl: 'https://marianehds.github.io/StarSystem/',
    codeUrl: 'https://github.com/marianehds/StarSystem',
    tags: ['React', 'Vite', 'Storybook', 'SCSS'],
  },
  {
    id: 'pokedex',
    title: 'Pokedex',
    description: 'Pokedex com React, TypeScript, Vite e API de Pokémon.',
    image: '/projects/pokedex.png',
    tags: ['React', 'TypeScript', 'Vite'],
  },
  {
    id: 'reading-room',
    title: 'Reading Room',
    description: 'Aplicação web desenvolvida em Ruby on Rails para cadastro e exibição de livros lidos, com autenticação de usuários e integração com OpenLibrary.',
    tags: ['Ruby on Rails', 'PostgreSQL', 'JavaScript'],
  },
  {
    id: 'vollappmobile',
    title: 'VollAppMobile',
    description: 'O projeto VollAppMobile é um projeto de estudo para desenvolvimento mobile com React Native e Expo.',
    tags: ['React Native', 'Expo', 'TypeScript'],
  },
]
