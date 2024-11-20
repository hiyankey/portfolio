import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = localFont({
  src: './fonts/InterVariable.woff2',
  variable: '--font-inter',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Emmanuel Yankey',
  description: 'Personal site',
  icons: [],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable}  antialiased`}>
        {children} <Analytics />
      </body>
    </html>
  )
}
