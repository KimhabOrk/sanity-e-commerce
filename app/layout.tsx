import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ["latin"]
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ["latin"]
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'KIMHAB ORK - Premium Womenswear Fashion',
  description: 'Discover curated collections of luxury womenswear featuring premium fabrics and contemporary designs.',
  generator: 'v0.app',
  keywords: ['luxury fashion', 'womenswear', 'designer clothing', 'premium fashion'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kimhab.com',
    title: 'KIMHAB ORK - Premium Womenswear Fashion',
    description: 'Discover curated collections of luxury womenswear',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KIMHAB ORK Fashion',
      },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>
          {`
            :root {
              --font-geist-sans: ${geistSans.style.fontFamily};
              --font-geist-mono: ${geistMono.style.fontFamily};
              --font-playfair: ${playfair.style.fontFamily};
            }
          `}
        </style>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
