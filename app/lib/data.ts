interface Project {
  title: string;
  desc: string;
  path: string;
  thumbnail: string;
}

export const projects: Project[] = [
  {
    title: 'Acme',
    desc: 'Building an e2e application with Nestjs, tRPC & Nextjs',
    path: 'https://github.com/hiyankey/acme',
    thumbnail: '/Acme.png'
  },
  {
    title: 'Kanban board', 
    desc: 'A simple kanban board to streamline workflow',
    path: 'https://kanban-bice-five.vercel.app/',
    thumbnail: '/Kanban.jpg'
  }
]
