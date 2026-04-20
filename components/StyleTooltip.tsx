'use client'

import { useState } from 'react'
import Image from 'next/image'
import { TattooStyle } from '@/lib/tattoo-data'

interface StyleTooltipProps {
  style: TattooStyle
}

export default function StyleTooltip({ style }: StyleTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="relative inline-block ml-2">
      <button
        type="button"
        className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-gray-500 text-gray-400 hover:border-red-800 hover:text-red-600 transition-colors text-xs"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
      >
        i
      </button>

      {showTooltip && (
        <div className="absolute left-8 top-0 z-50 w-72 p-4 bg-zinc-900 border border-red-900/30 rounded-lg shadow-2xl">
          <div className="space-y-3">
            <h4 className="font-medium text-white text-sm">{style.name}</h4>
            <div className="relative w-full h-40 bg-black/30 rounded overflow-hidden">
              <Image
                src={style.imagePath}
                alt={`${style.name} tattoo style example`}
                fill
                className="object-cover"
                sizes="288px"
                // Placeholder for demo
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {style.description}
            </p>
          </div>

          {/* Arrow pointing to the button */}
          <div className="absolute left-[-8px] top-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-red-900/30" />
        </div>
      )}
    </div>
  )
}
