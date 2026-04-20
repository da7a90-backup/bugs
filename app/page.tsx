'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Background from '@/components/Background'
import Portfolio from '@/components/Portfolio'

export default function Home() {
  return (
    <>
      <Background />
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-light tracking-widest text-white">
              INK
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl">
              Where art meets skin. Custom tattoo designs crafted with precision
              and passion.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link
                href="/booking"
                className="inline-block px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm tracking-wider text-sm"
              >
                BOOK CONSULTATION
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
            >
              <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Portfolio Section */}
        <Portfolio />

        {/* CTA Section */}
        <section className="py-32 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-wider">
              READY TO START?
            </h2>
            <p className="text-lg text-gray-400">
              Use our interactive booking tool to visualize your tattoo placement
              and get started on your custom design.
            </p>
            <Link
              href="/booking"
              className="inline-block px-10 py-5 bg-white text-black hover:bg-gray-200 transition-all duration-300 rounded-sm tracking-wider text-sm font-medium"
            >
              BOOK NOW
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  )
}
