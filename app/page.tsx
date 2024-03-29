import classNames from "classnames"
import { ArrowUpRightIcon } from "@iconicicons/react"
const projects = [
  {
    name: "Dialogue",
    description: "An HTML Dialogue",
    url: "https://dialogue-hiyankey.vercel.app",
  },
  {
    name: "Task app ",
    description: "Built with typescript and nextjs.",
    url: "https://task-app-hiyankey.vercel.app",
  },
  {
    name: "Personal website",
    description: "Designed with figma, built with nextjs.",
    url: "https://portfolio-hiyankey.vercel.app",
  },
  {
    name: "Linear Rebuild",
    description: "Rebuilt Linear landing page",
    url: "https://linear-rebuild-hiyankey.vercel.app",
  },
]
export default function Home() {
  return (
    <>
   <div className="max-w-[600px]">
      <p>
        I&apos;m Emmanuel Yankey, a design / frontend engineer. I craft
        beautiful interfaces and take brands further through visual
        experience.
      </p>
    </div>
    <h2 className="">Projects</h2>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 mx-auto pb-40">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex flex-col justify-end h-full p-4 border-b border-[#444]">
              <a className="flex text-sm hover:underline" href={project.url}>
                <h3>{project.name}</h3>
                <ArrowUpRightIcon width={16} />
              </a>
              <p className="text-sm text-[#888]">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
