import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

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
      <head>
        {/* Google Analytics Tag */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-TQJN13ZCHS" 
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TQJN13ZCHS');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}