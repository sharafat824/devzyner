'use client'

import { motion } from 'framer-motion'
import { testimonials } from '../../data/testimonials'
import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="relative px-8 py-28 overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[100px]" />
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
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Client Voices</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Feedback</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            What our clients say about working with Devzyner
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-500/30 dark:hover:border-blue-400/30 shadow-sm hover:shadow-lg transition-all duration-300 p-8"
            >
              {/* Quote icon */}
              <Quote className="absolute top-8 right-8 w-8 h-8 text-gray-200 dark:text-gray-700 group-hover:text-blue-100 dark:group-hover:text-blue-900 transition-colors" />
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={20}
                    className={i < testimonial.rating ? 
                      "text-yellow-400 fill-yellow-400" : 
                      "text-gray-300 dark:text-gray-600"
                    }
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                {testimonial.quote}
              </blockquote>

              {/* Client info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center text-lg font-bold text-blue-600 dark:text-blue-400">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{testimonial.author}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.company}</p>
                </div>
              </div>

              {/* Company logo (optional) */}
              {testimonial.logo && (
                <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.company} 
                    className="h-8 w-auto max-w-[100px] object-contain" 
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 dark:text-white">100%</p>
              <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 dark:text-white">50+</p>
              <p className="text-gray-600 dark:text-gray-400">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 dark:text-white">24/7</p>
              <p className="text-gray-600 dark:text-gray-400">Support Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}