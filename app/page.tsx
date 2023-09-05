import classNames from "classnames"
import { ArrowUpRightIcon } from "@iconicicons/react"
const work = [
  {
    name: "Landing page",
    description: "Exploring design concepts.",
    url: "https://read.cv/hiyankey",
  },

  {
    name: "Carousel",
    description: "A modern carousel built with CSS and JavaScript.",
    url: "https://carousel-hiyankey.vercel.app/",
  },
  {
    name: "Todo app ",
    description: "Built with typescript and reactjs.",
    url: "https://todo-app-hiyankey.vercel.app/",
  },
  {
    name: "Personal website",
    description: "Designed with figma, built with nextjs.",
    url: "https://portfolio-hiyankey.vercel.app/",
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
        {work.map((w, index) => (
          <div key={index}>
            <div className="flex flex-col justify-end h-full p-4 border-b border-[#444]">
              <a className="flex text-sm hover:underline" href={w.url}>
                <h3>{w.name}</h3>
                <ArrowUpRightIcon width={16} />
              </a>
              <p className="text-sm text-[#888]">{w.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
