import { ClerkIcon } from '../ui/icons/clerk'
import { LemonSqueezyIcon } from '../ui/icons/lemon-squeezy'
import { NextjsIcon } from '../ui/icons/nextjs'
import { PrismaIcon } from '../ui/icons/prisma'
import { RadixUIIcon } from '../ui/icons/radix-ui'
import { StichesIcon } from '../ui/icons/stitches'
import { SupabaseIcon } from '../ui/icons/supabase'
import { TailwindIcon } from '../ui/icons/tailwind'

export const projects = [
  {
    title: 'acme mobile ui',
    desc: 'i designed and built mobile app ui from 0 - 1',
    thumbnail: '/thumb-1.jpg',
    tags: [
      {
        name: 'Clerk',
        icon: ClerkIcon,
      },
      {
        name: 'Tailwind',
        icon: TailwindIcon,
      },
      {
        name: 'Prisma',
        icon: PrismaIcon,
      },
      {
        name: 'Lemon squeezy',
        icon: LemonSqueezyIcon,
      },
      {
        name: 'Next.js',
        icon: NextjsIcon,
      },
    ],
  },
  {
    title: 'Kanban board',
    desc: 'A simple kanban board to streamline workflow',
    thumbnail: '/kanban.jpg',
    tags: [
      {
        name: 'Supabase',
        icon: SupabaseIcon,
      },
      {
        name: 'Radix UI',
        icon: RadixUIIcon,
      },

      {
        name: 'Stiches',
        icon: StichesIcon,
      },
      {
        name: 'Lemon squeezy',
        icon: LemonSqueezyIcon,
      },
      {
        name: 'Next.js',
        icon: NextjsIcon,
      },
    ],
  },
]
