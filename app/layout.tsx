import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'lintas tenda',
  keywords: ['lintas', 'tenda', 'tent'],
  description: 'Lintas Tenda is a platform for tent rental services'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
