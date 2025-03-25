'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, Code, Globe, Users, Rocket } from 'lucide-react'
import { Team } from '@/components/sections/Team' // Import your Team component
import { Stats } from '@/components/sections/Stats' // New stats component

export default function About() {
  const features = [
    {
      icon: <Code size={32} className="text-blue-600" />,
      title: "Technical Excellence",
      description: "Cutting-edge technologies and modern development practices"
    },
    {
      icon: <Globe size={32} className="text-purple-600" />,
      title: "Global Reach",
      description: "Serving clients worldwide with localized solutions"
    },
    {
      icon: <Users size={32} className="text-green-600" />,
      title: "User-Centric",
      description: "Designing with real users in mind for maximum impact"
    },
    {
      icon: <Rocket size={32} className="text-orange-600" />,
      title: "Rapid Delivery",
      description: "Agile processes that accelerate time-to-market"
    }
  ]

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Devzyner was born with a vision to transform digital experiences"
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Secured our first enterprise client, marking our industry arrival"
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew to 15 full-time experts across multiple disciplines"
    },
    {
      year: "2023",
      title: "Product Suite Launch",
      description: "Introduced our first SaaS product for small businesses"
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="px-8 relative py-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent dark:from-gray-800/50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-500/10 blur-[100px]" />
        </div>
        
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Devzyner</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10">
              We are a passionate team of developers, designers, and innovators building digital solutions that transform businesses.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all">
                Meet Our Team
              </button>
              <button className="px-8 py-4 rounded-xl border border-gray-300 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-8">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden aspect-video"
            >
              <Image
                src="/about/team-working.jpg" // Replace with your image
                alt="Devzyner team working"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To empower businesses through innovative technology solutions that drive growth, efficiency, and digital transformation.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We believe in building partnerships, not just products. Our approach combines technical excellence with deep understanding of business challenges.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Timeline Section */}
      <section className="py-20 px-8 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Milestones in our growth and development
            </p>
          </motion.div>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-24"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    {item.year}
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Whether you need a custom solution or expert advice, we are here to help.
            </p>
            <button className="px-10 py-5 rounded-xl bg-white text-blue-600 font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
