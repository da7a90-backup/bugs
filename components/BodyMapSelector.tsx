'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface BodyMapSelectorProps {
  gender: 'male' | 'female'
  selectedPlacement: string | null
  size: number
  onPlacementSelect: (placement: string) => void
}

export default function BodyMapSelector({
  gender,
  selectedPlacement,
  size,
  onPlacementSelect,
}: BodyMapSelectorProps) {
  const [svgFront, setSvgFront] = useState<string>('')
  const [svgBack, setSvgBack] = useState<string>('')

  useEffect(() => {
    // Load SVG files
    const frontPath = `/body-maps/${gender}-front.svg`
    const backPath = `/body-maps/${gender}-back.svg`

    fetch(frontPath)
      .then((res) => res.text())
      .then(setSvgFront)
      .catch(console.error)

    fetch(backPath)
      .then((res) => res.text())
      .then(setSvgBack)
      .catch(console.error)
  }, [gender])

  useEffect(() => {
    // Add click handlers to SVG regions
    const handleClick = (e: MouseEvent) => {
      const target = e.target as SVGElement
      if (target.classList.contains('clickable-region')) {
        const placementId = target.id
        onPlacementSelect(placementId)
      }
    }

    // Update selected state in SVG
    const updateSelection = () => {
      const allRegions = document.querySelectorAll('.clickable-region')
      allRegions.forEach((region) => {
        if (region.id === selectedPlacement) {
          region.classList.add('selected')
        } else {
          region.classList.remove('selected')
        }
      })
    }

    const frontSvg = document.getElementById('front-body-map')
    const backSvg = document.getElementById('back-body-map')

    if (frontSvg) frontSvg.addEventListener('click', handleClick)
    if (backSvg) backSvg.addEventListener('click', handleClick)

    updateSelection()

    return () => {
      if (frontSvg) frontSvg.removeEventListener('click', handleClick)
      if (backSvg) backSvg.removeEventListener('click', handleClick)
    }
  }, [selectedPlacement, onPlacementSelect, svgFront, svgBack])

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {/* Front View */}
        <div className="space-y-3">
          <h3 className="text-center text-sm font-light text-white/60 tracking-wider">
            FRONT VIEW
          </h3>
          <div className="aspect-[2/5] w-full bg-black/20 rounded-lg border border-white/10 p-4 flex items-center justify-center">
            {svgFront ? (
              <div
                id="front-body-map"
                className="w-full h-full"
                dangerouslySetInnerHTML={{ __html: svgFront }}
              />
            ) : (
              <div className="text-white/40 text-sm">Loading...</div>
            )}
          </div>
        </div>

        {/* Back View */}
        <div className="space-y-3">
          <h3 className="text-center text-sm font-light text-white/60 tracking-wider">
            BACK VIEW
          </h3>
          <div className="aspect-[2/5] w-full bg-black/20 rounded-lg border border-white/10 p-4 flex items-center justify-center">
            {svgBack ? (
              <div
                id="back-body-map"
                className="w-full h-full"
                dangerouslySetInnerHTML={{ __html: svgBack }}
              />
            ) : (
              <div className="text-white/40 text-sm">Loading...</div>
            )}
          </div>
        </div>
      </motion.div>

      <div className="mt-6 text-center">
        <p className="text-xs text-white/40">
          Click on a body area to select placement
        </p>
        {selectedPlacement && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-600"
          >
            Selected: {selectedPlacement.replace(/-/g, ' ').toUpperCase()}
            {size > 0 && ` • ${size}"`}
          </motion.p>
        )}
      </div>
    </div>
  )
}
