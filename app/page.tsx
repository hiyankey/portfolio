import classNames from "classnames"
import { LinkIcon } from "@iconicicons/react"
const work = [
  {
    name: "Landing page",
    description: "Exploring design concepts.",
    url: "/",
  },

  {
    name: "Merch shop ",
    description: "Ongoing",
    url: "/",
  },
  {
    name: "Todo app ",
    description: "Built with typescript and reactjs.",
    url: "https://github.com/hiyankey/todo-app",
  },
  {
    name: "Personal website ",
    description: "Designed with figma, built with nextjs.",
    url: "https://github.com/hiyankey/portfolio",
  },
]
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 mx-auto pb-40">
        {work.map((w, index) => (
          <div
            className={classNames(
              "w-[400px] h-[250px] rounded-2xl overflow-hidden shrink-0",
              "bg"
            )}
            key={index}
          >
            <div className="flex flex-col justify-end h-full p-4">
              <a className="flex text-sm" href={w.url}>
                <LinkIcon width={16} /> <h3>{w.name}</h3>
              </a>
              <p className="text-sm text-[#444]">{w.description}</p>
            </div>
          </div>
        ))}
      </div>
   
      
    </>
  )
}
