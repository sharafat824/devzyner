'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'
import { useRouter } from 'next/navigation'

export function Hero() {
  const router = useRouter()
  const prefersReducedMotion = useReducedMotion()

  // Animation variants for reduced motion
  const fadeIn = prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }
  const fadeInAnimate = prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }
  const scaleDown = prefersReducedMotion ? { scale: 1 } : { scale: 1.2 }
  const scaleDownAnimate = prefersReducedMotion ? { scale: 1 } : { scale: 1 }

  return (
    <section 
      className="relative h-screen w-full overflow-hidden  sm:px-6 lg:px-8 mt-8"
      aria-label="Main hero section"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={scaleDown}
          animate={scaleDownAnimate}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white/90 to-purple-50/70"
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.8)_100%)]" 
          aria-hidden="true"
        />
      </div>

      {/* Floating particles/abstract shapes - reduced motion alternative */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.3, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="absolute rounded-full bg-blue-600/20"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(40px)'
              }}
            />
          ))}
        </div>
      )}

      <div className="container relative h-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={fadeIn}
          animate={fadeInAnimate}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl px-4"
        >
          {/* Subtle pre-heading */}
          <motion.p
            initial={fadeIn}
            animate={fadeInAnimate}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-medium text-blue-600 mb-4"
          >
            Innovative Software Development
          </motion.p>

          {/* Main headline with gradient */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 lg:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Devzyner
            </span>{' '}
            <motion.span 
              initial={fadeIn}
              animate={fadeInAnimate}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-900"
            >
              Digital Solutions
            </motion.span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={fadeIn}
            animate={fadeInAnimate}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto"
          >
            We craft bespoke software experiences that drive growth, efficiency, and digital transformation for forward-thinking businesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={fadeIn}
            animate={fadeInAnimate}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Button 
              size="xl" 
              className="group"
              onClick={() => router.push('/contact')}
              aria-label="Start your project with Devzyner"
            >
              Start Your Project
              <ArrowRight 
                size={20} 
                className="ml-2 group-hover:translate-x-1 transition-transform" 
                aria-hidden="true"
              />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => router.push('/portfolio')}
              aria-label="Explore our work"
            >
              Explore Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator - hidden for reduced motion */}
        {!prefersReducedMotion && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <p className="text-xs sm:text-sm text-gray-500 mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              aria-hidden="true"
            >
              <ChevronDown className="text-gray-400" size={20} />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}