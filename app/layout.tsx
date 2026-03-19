import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Lintas Tenda | Sewa Tenda & Party Entertainment Terpercaya',
  description: 'Lintas Tenda adalah penyedia sewa tenda, dekorasi pernikahan, sound system, dan paket event komplit untuk acara impian Anda.',
  keywords: ['sewa tenda', 'tenda pernikahan', 'dekorasi pernikahan', 'sound system', 'event organizer', 'party entertainment', 'sewa alat pesta'],
  authors: [{ name: 'Lintas Tenda' }],
  creator: 'Lintas Tenda',
  publisher: 'Lintas Tenda',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.lintastenda.site',
    title: 'Lintas Tenda | Sewa Tenda & Party Entertainment Terpercaya',
    description: 'Penyedia sewa tenda, dekorasi, sound system, dan paket event komplit untuk acara impian Anda.',
    siteName: 'Lintas Tenda',
    images: [
      {
        url: '/1.png',
        width: 800,
        height: 600,
        alt: 'Lintas Tenda - Layanan Penyewaan Alat Pesta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lintas Tenda | Sewa Tenda & Party Entertainment Terpercaya',
    description: 'Solusi lengkap penyewaan tenda, dekorasi pernikahan, sound system untuk semua jenis acara.',
    images: ['/1.png'],
  },
  alternates: {
    canonical: 'https://www.lintastenda.site',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
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