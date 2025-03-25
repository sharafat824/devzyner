import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '../components/navigation/Navbar'
import { Footer } from '../components/sections/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Devzyner | Software Development Experts',
  description: 'Custom software solutions for your business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}