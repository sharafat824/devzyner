'use client'

import { motion } from 'framer-motion'
import { teamMembers } from '../../data/team'
import Image from 'next/image'
import { Linkedin, Github, Twitter, Crown } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

export function Team() {
  return (
    <section id='team' className="px-8 relative py-28 overflow-hidden bg-gradient-to-b from-white via-white/90 to-gray-50 dark:from-gray-900 dark:via-gray-900/90 dark:to-gray-950">
      {/* ...Decorations and header remain unchanged... */}

      <div className="container relative">
        {/* Single Swiper for all viewports */}
        <Swiper
          spaceBetween={24}
          pagination={{ clickable: true }}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[Pagination]}
          className="h-full"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={member.name} className="h-auto">
              <TeamCard member={member} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA remains unchanged */}
      </div>
    </section>
  )
}

function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className={`group relative rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col
        ${member.highlight ?
          'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-blue-300 dark:border-blue-500/50' :
          'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-blue-500/30 dark:hover:border-blue-400/30'
        }`}
    >

      {/* Highlight badge */}
      {member.highlight && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold shadow-md
          bg-gradient-to-r from-yellow-400 to-yellow-500 text-white">
          <Crown className="w-3 h-3" />
          <span>{member.highlightBadge || 'Featured'}</span>
        </div>
      )}

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="relative h-80 w-full overflow-hidden flex-shrink-0">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-105
              ${member.highlight ? 'brightness-100' : 'brightness-95 group-hover:brightness-100'}`}
          />
          {/* Socials Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <div className="flex gap-4">
              {member.social?.linkedin && (
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              )}
              {member.social?.github && (
                <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                  <Github className="w-5 h-5 text-white" />
                </a>
              )}
              {member.social?.twitter && (
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              )}
            </div>
          </div>
        </div>
 
        {/* Info */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className={`text-xl font-semibold ${member.highlight ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
            {member.name}
          </h3>
          <p className={`font-medium ${member.highlight ? 'text-purple-600 dark:text-purple-400' : 'text-blue-600 dark:text-blue-400'}`}>
            {member.role}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{member.bio}</p>
          {member.skills && (
            <div className="mt-auto">
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, i) => (
                  <span key={i} className={`px-3 py-1 text-xs rounded-full ${member.highlight ?
                    'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200' :
                    'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                    }`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
