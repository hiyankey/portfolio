import Image from 'next/image'
import { Container } from './ui/container'
import { Button } from './ui/button'
import { Tag } from './ui/tag'
import { projects } from './lib/data'
import Project from './ui/project'
import { Status } from './ui/status'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Container className='py-[9.6rem]'>
        <div className='flex mb-[3.2rem] items-center space-x-4'>
          <div className='w-[6rem] h-[6rem] rounded-[1.6rem] overflow-clip'>
            <Image
              src={'/profile.jpg'}
              alt='Profile pic'
              width={675}
              height={900}
              className='block object-cover w-full h-full grayscale'
            />
          </div>
          <div>
            <h3 className='text-md mb-[.8rem]'>Emmanuel Yankey</h3>
            <Tag variant={'secondary'} className='flex space-x-2 items-center'>
              <div className='relative flex justify-center items-center  '>
                <span className='absolute inline-flex h-3 w-3  rounded-full bg-orange-400 opacity-75 animate-ping'></span>

                <Status/>
              </div>
              <span>i&apos;m available</span>
            </Tag>
          </div>
        </div>
        <div className='mb-[9.6rem]'>
          <p className='text-xl text-black/40 mb-[2.4rem] max-w-[48rem]'>
            I&apos;m a self-taught{' '}
            <span className='text-black'>design engineer</span> helping
            start-ups & founders build user friendly products.
          </p>
          <Button><Link href={' https://wa.me/+233501315738'}>Let&apos;s chat</Link></Button>
        </div>

        <div>
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              desc={project.desc}
              path={project.path}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}
