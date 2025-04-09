import { Suspense } from 'react'
import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { Team } from '../components/sections/Team'
import { Testimonials } from '../components/sections/Testimonials'
import { Process } from '../components/sections/Process'
import Loading from './loading'

export const metadata = {
  title: 'Home | Devzyner',
  description: 'Custom software solutions for your business',
  alternates: {
    canonical: 'https://devzyner.com',
  },
}

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Hero />
        <Services />
        <Process />
        <Team />
        <Testimonials />
      </Suspense>
    </main>
  )
}