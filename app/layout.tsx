import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import classNames from "classnames"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Emmanuel Yankey",
  description: "Designer / Frontend engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "bg-[#111] text-white")}>
        <div className="max-w-[800px] h-screen mx-auto flex flex-col space-y-10 mt-16 px-8 ">
          <div className="space-x-4">
            <Link href="https://read.cv/hiyankey">CV</Link>
            <span>/</span>
            <Link href="https://github.com/hiyankey">Github</Link>
          </div>

          {children}
          <div className="w-full flex justify-center">
            <a
              href="mailto:hiyankey@gmail.com"
              className="flex bg-[#00000060] w-fit px-3 py-3 rounded-[16px] space-x-4 text-sm  backdrop-blur text-white bottom-4  fixed mx-auto border-[#ffffff20] "
            >
             <span👋span>  <span> Available for your next project! </span>
            
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
