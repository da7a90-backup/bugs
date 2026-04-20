'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface PortfolioItem {
  id: number
  src: string
  alt: string
  span: 'single' | 'wide' | 'tall' | 'large'
}

// Placeholder portfolio items - user will replace with actual tattoo images
const portfolioItems: PortfolioItem[] = [
  { id: 1, src: '/portfolio/tattoo-1.jpg', alt: 'Tattoo work 1', span: 'large' },
  { id: 2, src: '/portfolio/tattoo-2.jpg', alt: 'Tattoo work 2', span: 'single' },
  { id: 3, src: '/portfolio/tattoo-3.jpg', alt: 'Tattoo work 3', span: 'tall' },
  { id: 4, src: '/portfolio/tattoo-4.jpg', alt: 'Tattoo work 4', span: 'wide' },
  { id: 5, src: '/portfolio/tattoo-5.jpg', alt: 'Tattoo work 5', span: 'single' },
  { id: 6, src: '/portfolio/tattoo-6.jpg', alt: 'Tattoo work 6', span: 'single' },
  { id: 7, src: '/portfolio/tattoo-7.jpg', alt: 'Tattoo work 7', span: 'wide' },
  { id: 8, src: '/portfolio/tattoo-8.jpg', alt: 'Tattoo work 8', span: 'tall' },
]

export default function Portfolio() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 px-6 lg:px-12">
      <motion.h2
        className="mb-12 text-center text-4xl md:text-5xl font-light text-white tracking-wider"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        PORTFOLIO
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto auto-rows-[200px]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {portfolioItems.map((portfolioItem) => {
          const spanClasses = {
            single: 'col-span-1 row-span-1',
            wide: 'col-span-2 row-span-1',
            tall: 'col-span-1 row-span-2',
            large: 'col-span-2 row-span-2',
          }

          return (
            <motion.div
              key={portfolioItem.id}
              className={`group relative overflow-hidden rounded-lg ${spanClasses[portfolioItem.span]}`}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-full w-full bg-zinc-900">
                <Image
                  src={portfolioItem.src}
                  alt={portfolioItem.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  // Using placeholder for demo - user will add real images
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.p
        className="mt-8 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        Add your tattoo images to /public/portfolio directory
      </motion.p>
    </section>
  )
}
