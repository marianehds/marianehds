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
  { id: 'projetos', label: 'Projetos' },
  { id: 'skills', label: 'Skills' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'cursos', label: 'Cursos' },
  { id: 'contato', label: 'Contato' },
] as const

export type Course = {
  id: string
  title: string
  platform: string
  year?: string
  url?: string
  tags?: string[]
}

export const courses: Course[] = [
  {
    id: 'udemy-node-apis',
    title: 'Curso completo de APIs com Nodejs, Express + MongoDB, SQL',
    platform: 'Udemy',
    year: 'jan 2026',
    url: 'https://www.udemy.com/certificate/UC-77a77b15-3c26-4f3f-8536-129ce87a0858/',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
  },
  {
    id: 'alura-redux',
    title: 'React: gerenciamento de estados globais com Redux',
    platform: 'Alura',
    year: 'mar 2025',
    url: 'https://www.alura.com.br/user/marianeh/certificate/b6d4b854-bfd5-45a3-abed-167438119e22',
    tags: ['React', 'Redux'],
  },
  {
    id: 'alura-react-hook-form',
    title: 'React: gerencie e valide formulários com o React Hook Form',
    platform: 'Alura',
    year: 'mar 2025',
    url: 'https://www.alura.com.br/user/marianeh/certificate/fa78fdcd-17e4-480d-8c64-557d33f93586',
    tags: ['React', 'React Hook Form'],
  },
  {
    id: 'alura-js-storage',
    title: 'JavaScript na Web: armazenando dados no navegador',
    platform: 'Alura',
    year: 'jul 2022',
    url: 'https://www.alura.com.br/user/marianeh/certificate/6305553b-1f3d-4b7a-a222-fa0f9642bd5d',
    tags: ['JavaScript'],
  },
  {
    id: 'alura-js-dom',
    title: 'JavaScript: manipulando o DOM',
    platform: 'Alura',
    year: 'jul 2022',
    url: 'https://www.alura.com.br/user/marianeh/certificate/6e3cb23d-f0dc-4a9a-a083-45a4e602854f',
    tags: ['JavaScript'],
  },
  {
    id: 'alura-html-css-1',
    title: 'HTML5 e CSS3 parte 1: crie uma página da Web',
    platform: 'Alura',
    year: 'jul 2022',
    url: 'https://www.alura.com.br/user/marianeh/certificate/d3a04d3d-c5e9-4bb9-8d59-1bea5cd60807',
    tags: ['HTML5', 'CSS'],
  },
  {
    id: 'alura-html-css-3',
    title: 'HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas',
    platform: 'Alura',
    year: 'jul 2022',
    url: 'https://www.alura.com.br/user/marianeh/certificate/5d571068-50e6-4827-a213-4ddfa2821c97',
    tags: ['HTML5', 'CSS'],
  },
  {
    id: 'alura-html-css-2',
    title: 'HTML5 e CSS3 parte 2: posicionamento, listas e navegação',
    platform: 'Alura',
    year: 'jul 2022',
    url: 'https://www.alura.com.br/user/marianeh/certificate/380b0ec4-dd21-41e4-8097-b06622b9d145',
    tags: ['HTML5', 'CSS'],
  },
  {
    id: 'alura-html-css-4',
    title: 'HTML5 e CSS3 parte 4: avançando no CSS',
    platform: 'Alura',
    year: 'jul 2022',
    url: 'https://www.alura.com.br/user/marianeh/certificate/225697db-5c4f-428a-beee-e6c0851c744c',
    tags: ['HTML5', 'CSS'],
  },
  {
    id: 'alura-js-web-dinamicas',
    title: 'JavaScript para Web: Crie páginas dinâmicas',
    platform: 'Alura',
    year: 'jul 2022',
    url: 'https://www.alura.com.br/user/marianeh/certificate/c4e59307-8201-444f-ae5a-c636d52d93e5',
    tags: ['JavaScript'],
  },
  {
    id: 'alura-js-linguagem-web',
    title: 'JavaScript: programando na linguagem da web',
    platform: 'Alura',
    year: 'jul 2022',
    url: 'https://www.alura.com.br/user/marianeh/certificate/cecfc730-07c0-4364-8ad0-728da7a40d1f',
    tags: ['JavaScript'],
  },
  {
    id: 'alura-csharp-oo',
    title: 'Formação C# e orientação a objetos',
    platform: 'Alura',
    year: 'mai 2022',
    url: 'https://www.alura.com.br/user/marianeh/certificate/3b4834ed-7997-4596-bdbe-e19b0ba502e7',
    tags: ['C#'],
  },
  {
    id: 'alura-git-github',
    title: 'Git e Github: controle e compartilhe seu código',
    platform: 'Alura',
    year: 'mai 2022',
    url: 'https://www.alura.com.br/user/marianeh/certificate/9b0a0714-f603-45da-bd79-081d368272d0',
    tags: ['Git', 'GitHub'],
  },
  {
    id: 'alura-sql-t-sql',
    title: 'SQL Server: T-SQL com Microsoft SQL Server 2017',
    platform: 'Alura',
    year: 'abr 2022',
    url: 'https://www.alura.com.br/user/marianeh/certificate/2a33123f-efde-4d43-8b69-824ab5b4a543',
    tags: ['SQL', 'SQL Server'],
  },
  {
    id: 'alura-sql-manipulacao',
    title: 'SQL Server: Manipulação de dados com Microsoft SQL Server 2017',
    platform: 'Alura',
    year: 'abr 2022',
    url: 'https://www.alura.com.br/user/marianeh/certificate/4ef03a74-abb3-40e4-9a51-ac2ce4c9115d',
    tags: ['SQL', 'SQL Server'],
  },
  {
    id: 'alura-sql-consultas',
    title: 'SQL Server: consultas avançadas com Microsoft SQL Server 2017',
    platform: 'Alura',
    year: 'abr 2022',
    url: 'https://www.alura.com.br/user/marianeh/certificate/d0ffaed9-8a95-4e29-ab3e-39031a959778',
    tags: ['SQL', 'SQL Server'],
  },
  {
    id: 'bradesco-logica',
    title: 'Fundamentos de Lógica de Programação',
    platform: 'Fundação Bradesco',
    year: 'jan 2022',
    tags: ['Lógica de programação'],
  },
  {
    id: 'pucrs-produtividade',
    title: 'Produtividade, Gestão do Tempo e Propósito',
    platform: 'PUCRS',
    year: 'jan 2022',
    tags: ['Produtividade', 'Gestão do tempo'],
  },
]

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
    title: 'Desenvolvedora Full Stack · Wk JobHub',
    description: 'Celebré Soluções Digitais & Abrutelecom — ponta a ponta com React, .NET e Azure.',
    isCurrent: true,
  },
  {
    id: 'bem-jr',
    period: '2023 – 2025',
    title: 'Desenvolvedora Frontend · Bem Promotora',
    description: 'Design System, micro front-ends e testes automatizados.',
  },
  {
    id: 'bem-estagio',
    period: '2022 – 2023',
    title: 'Estágio Desenvolvedora Full Stack · Bem Promotora',
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
    image: 'projects/cute-chaos.png',
    viewUrl: 'https://cutechaos.com.br',
    tags: ['React', 'Vite', 'TypeScript', 'SCSS'],
  },
  {
    id: 'design-system',
    title: 'Design System',
    description: 'Biblioteca de componentes reutilizáveis e micro front-ends com React, vite e storybook.',
    image: 'projects/design-system.png',
    viewUrl: 'https://marianehds.github.io/StarSystem/',
    codeUrl: 'https://github.com/marianehds/StarSystem',
    tags: ['React', 'Vite', 'Storybook', 'SCSS'],
  },
  {
    id: 'pokedex',
    title: 'Pokedex',
    description: 'Pokedex com React, TypeScript, Vite e API de Pokémon.',
    image: 'projects/pokedex.png',
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
