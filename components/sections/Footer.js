'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const socialLinks = [
    { icon: <Linkedin size={20} />, name: 'LinkedIn', href: '#' },
    { icon: <Github size={20} />, name: 'GitHub', href: '#' },
    { icon: <Twitter size={20} />, name: 'Twitter', href: '#' },
    { icon: <Facebook size={20} />, name: 'Facebook', href: '#' },
    { icon: <Instagram size={20} />, name: 'Instagram', href: '#' },
  ]

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Custom Software', href: '/services' },
        { name: 'Web Development', href: '/services' },
        { name: 'Mobile Apps', href: '/services' },
        { name: 'UI/UX Design', href: '/services' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/whitepapers' },
        { name: 'Development Tools', href: '/tools' },
        { name: 'API Documentation', href: '/docs' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'hello@devzyner.com', href: 'mailto:hello@devzyner.com', icon: <Mail size={16} className="mr-2" /> },
        { name: '+1 (555) 123-4567', href: 'tel:+15551234567', icon: <Phone size={16} className="mr-2" /> },
        { name: 'Contact Form', href: '/contact' },
        { name: 'Support Portal', href: '/support' },
      ],
    },
  ]

  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden px-8">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-900/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-900/10 blur-[100px]" />
      </div>

      <div className="container relative py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Devzyner
              </span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-md">
              We craft innovative digital solutions that transform businesses and drive growth in the modern marketplace.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  href={link.href}
                  aria-label={link.name}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all"
                  whileHover={{ y: -3 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                Subscribe to our newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-3 rounded-l-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button className="px-6 py-3 rounded-r-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity">
                  Join
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Links columns */}
          {footerLinks.map((column, colIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + colIndex * 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + colIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center text-gray-400 hover:text-white transition-colors group"
                    >
                      {link.icon && (
                        <span className="mr-2 group-hover:text-blue-400 transition-colors">
                          {link.icon}
                        </span>
                      )}
                      {link.name}
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-gray-800 py-8"
      >
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Devzyner. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}