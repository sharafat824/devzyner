import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '../components/navigation/Navbar'
import { Footer } from '../components/sections/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  title: {
    default: 'Devzyner | Software Development Experts',
    template: '%s | Devzyner'
  },
  description: 'Custom software solutions tailored to your business needs. Web, mobile, and cloud development experts.',
  keywords: ['software development', 'web development', 'mobile apps', 'custom software', 'Devzyner'],
  authors: [{ name: 'Devzyner Team' }],
  openGraph: {
    title: 'Devzyner | Software Development Experts',
    description: 'Custom software solutions tailored to your business needs',
    url: 'https://devzyner.com',
    siteName: 'Devzyner',
    images: [
      {
        url: 'https://devzyner.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devzyner | Software Development Experts',
    description: 'Custom software solutions tailored to your business needs',
    images: ['https://devzyner.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#2563eb',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2563eb',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}