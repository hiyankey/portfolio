'use client'

import Image from 'next/image'
import { Tag } from './tag'
import { StatusIcon } from './icons/status'
import Link from 'next/link'
import { JSX } from 'react'

interface TagProps {
  name: string
  icon: () => JSX.Element
}

interface Props {
  title: string
  desc: string
  path?: string
}

export default function Project({ title, desc, path }: Props) {
  return (
    <Link
      href={path || ''}
      className="flex items-center space-x-4 border-b first:border-t border-dashed border-black/10 py-[1.6rem] relative"
    >
      <div className="space-y-[.6rem] mb-[1.2rem]">
        <h3>{title}  <Tag
        variant={'secondary'}
        className=" space-x-2 items-center z-20   ml-auto inline-flex"
      >
        <div className="relative flex justify-center items-center">
          <span className="absolute inline-flex h-3 w-3 rounded-full bg-orange-400 opacity-75 animate-ping" />
          <StatusIcon classNames="w-6 h-6 relative inline-flex" />
        </div>
        <span>In progress</span>
      </Tag></h3>
        <p className="text-black/40">{desc}</p>
      </div>

     
    </Link>
  )
}
