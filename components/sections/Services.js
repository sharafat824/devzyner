'use client'

import { motion } from 'framer-motion'
import { services } from '../../data/services'
import { ArrowRight } from 'lucide-react'

export function Services() {
  return (
    <section className=" px-8 relative py-28 overflow-hidden" id="services">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/40" />
        <div className="absolute top-0 left-1/2 w-[800px] -translate-x-1/2 h-[500px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex mb-4 px-4 py-2 rounded-full bg-blue-600/10"
          >
            <span className="text-sm font-medium text-blue-600">What We Offer</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            End-to-end digital solutions designed to accelerate your business growth
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 hover:border-transparent shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Service icon */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-3xl mb-6 text-blue-600">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="flex items-center text-blue-600 font-medium group-hover:text-purple-600 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
  Don&#39;t see exactly what you need? We specialize in custom solutions.
</p>
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium shadow-lg hover:shadow-xl transition-all">
            Discuss Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}