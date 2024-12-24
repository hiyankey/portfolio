import Image from 'next/image'
import { Tag } from './tag'
import { StatusIcon } from './icons/status'
import Link from 'next/link'

interface TagProps {
  name: string
  icon: () => JSX.Element
}

interface Props {
  title: string
  desc: string
  thumbnail: string
  tags: TagProps[],
  path?: string,
}

export default function Project({ title, desc, thumbnail, tags , path}: Props) {
  return (
    <Link
      href={`${path || ''}`}
      className=' flex items-center space-x-4 border-b border-dashed border-white/10 space-y-[1.6rem] pb-[1.6rem]'
    >
      <div>
        {' '}
        <div className='space-y-[.6rem] mb-[1.2rem] flex flex-col'>
          <h3>{title}</h3>
          <p className='text-white/40'>{desc}</p>
        </div>
        <div className='[&_div]:mr-4 space-y-4 flex items-baseline  flex-wrap'>
          {tags.map((tag, index) => (
            <Tag
              key={index}
              variant={'secondary'}
              rounded={'md'}
              className='flex items-center'
            >
              <span className=' mr-4'>
                <tag.icon />
              </span>
              {tag.name}
            </Tag>
          ))}
        </div>
      </div>

      <div className='w-[32rem] h-[15rem] overflow-clip rounded-[4rem] relative '>
        {' '}
        <Image
          src={thumbnail}
          alt={`${title} thumbnail`}
          width={200}
          height={150}
          className='w-full h-full object-cover'
        />
        <Tag
          variant={'secondary'}
          className='flex space-x-2 items-center  z-20 absolute bottom-[2rem] left-[1.3rem]'
        >
          <div className='relative flex justify-center items-center '>
            <span className='absolute inline-flex h-3 w-3  rounded-full bg-gray-400 opacity-75 animate-ping'></span>

            <StatusIcon classNames='w-6 h-6 relative inline-flex' />
          </div>
          <span>In progress</span>
        </Tag>
        <div className='left-0 absolute bottom-0 bg-background/[.002] backdrop-blur-[.32rem] w-full h-[3.2rem]' />
      </div>
    </Link>
  )
}
