'use client'

import { motion } from 'framer-motion'
import { workflowSteps } from '../../data/process'
import { CheckCircle } from 'lucide-react'

export function Process() {
  return (
    <section className="px-8 relative py-28 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-[80px]" />
      </div>

      <div className="container relative">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-flex mb-4 px-4 py-2 rounded-full bg-blue-600/10 dark:bg-blue-500/20">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Our Methodology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A transparent, iterative approach that delivers exceptional results
          </p>
        </motion.div>

        {/* Process timeline */}
        <div className="relative">
          {/* Animated timeline */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-600 to-purple-600/20 -translate-x-1/2 origin-top"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`relative ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left lg:mt-24'}`}
              >
                {/* Animated timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="hidden lg:flex absolute top-6 left-1/2 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full -translate-x-1/2 items-center justify-center shadow-lg z-10"
                >
                  <span className="text-white text-sm font-bold">{step.step}</span>
                </motion.div>

                {/* Process card */}
                <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-500/30 dark:hover:border-blue-400/30 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex lg:flex-col items-start gap-6">
                      {/* Icon with gradient background */}
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center text-2xl text-blue-600 dark:text-blue-400">
                        {step.icon}
                      </div>
                      
                      <div className={index % 2 === 0 ? 'lg:mr-6' : 'lg:ml-6'}>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {step.title}
                          </h3>
                          <CheckCircle className="text-blue-500 dark:text-blue-400 w-5 h-5" />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {step.description}
                        </p>
                        
                        {/* Process features (optional) */}
                        {step.features && (
                          <ul className="mt-4 space-y-2">
                            {step.features.map((feature, i) => (
                              <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                                <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Ready to start your project? We wll guide you through every step.
          </p>
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  )
}