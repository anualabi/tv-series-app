import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const helveticaNeue = localFont({
  src: [
    {
      path: '../../public/fonts/HelveticaNeueLTStd-Bd.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/HelveticaNeueLTStd-Lt.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/HelveticaNeueLTStd-Md.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/HelveticaNeueLTStd-Roman.otf',
      weight: '400',
      style: 'normal'
    }
  ]
})

export const metadata: Metadata = {
  title: 'Insecure',
  description: 'Follows the awkward experiences and racy tribulations of a modern-day African-American woman.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={helveticaNeue.className}>{children}</body>
    </html>
  )
}
