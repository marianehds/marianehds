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
  { id: 'sobre', label: 'Sobre', emoji: '🌸' },
  { id: 'skills', label: 'Skills', emoji: '✨' },
  { id: 'projetos', label: 'Projetos', emoji: '🎮' },
  { id: 'contato', label: 'Contato', emoji: '💌' },
] as const

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
  emoji: string
  isNew?: boolean
}

export const projects: Project[] = [
  {
    id: 'design-system',
    title: 'Design System',
    description: 'Biblioteca de componentes reutilizáveis e micro front-ends com React, testes automatizados e integração com Figma.',
    tags: ['React', 'SCSS', 'Jest', 'Playwright'],
    emoji: '🎨',
    isNew: true,
  },
  {
    id: 'fullstack-app',
    title: 'App Full Stack',
    description: 'Funcionalidades ponta a ponta — interface, backend, modelagem de dados e regras de negócio em .NET e SQL Server.',
    tags: ['React', 'C#', '.NET', 'SQL Server'],
    emoji: '⚡',
  },
  {
    id: 'finance-module',
    title: 'Módulo Financeiro',
    description: 'Cálculos financeiros, relatórios e documentos com TypeScript, React e integração Azure.',
    tags: ['TypeScript', 'React', 'Azure'],
    emoji: '💰',
  },
  {
    id: 'legacy-maintenance',
    title: 'Manutenção & APIs',
    description: 'Evolução de sistemas legados com ASP.NET Core MVC, permissões de usuário e manipulação de dados.',
    tags: ['ASP.NET', 'SQL Server', 'MUI'],
    emoji: '🔧',
  },
]
