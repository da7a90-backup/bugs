'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0a]">
      {/* Subtle gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, #1a0505 0%, #0a0a0a 50%)',
            'radial-gradient(circle at 80% 70%, #1a0505 0%, #0a0a0a 50%)',
            'radial-gradient(circle at 20% 30%, #1a0505 0%, #0a0a0a 50%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      {/* Minimal geometric shapes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-10"
          style={{
            width: 120,
            height: 120,
            left: `${25 + i * 30}%`,
            top: `${20 + i * 25}%`,
          }}
          animate={{
            rotate: [0, 360],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div
            className="h-full w-full border border-red-900/30"
            style={{
              clipPath:
                i % 2 === 0
                  ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                  : 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            }}
          />
        </motion.div>
      ))}

      {/* Mouse-reactive glow */}
      <motion.div
        className="pointer-events-none absolute h-80 w-80 rounded-full bg-red-900/5 blur-3xl"
        animate={{
          x: mousePosition.x * windowSize.width - 160,
          y: mousePosition.y * windowSize.height - 160,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 150 }}
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
