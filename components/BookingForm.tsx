'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import HumanModel3D from './HumanModel3D'
import StyleTooltip from './StyleTooltip'
import { tattooStyles, bodyPlacements } from '@/lib/tattoo-data'

export default function BookingForm() {
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [placement, setPlacement] = useState<string | null>(null)
  const [size, setSize] = useState(3)
  const [style, setStyle] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!placement) {
      setError('Please select a body placement')
      return
    }

    if (!style) {
      setError('Please select a tattoo style')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gender,
          placement,
          size,
          style,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit booking')
      }

      // Redirect to Calendly
      const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL
      if (calendlyUrl) {
        window.location.href = calendlyUrl
      } else {
        alert('Booking saved! Calendly URL not configured.')
      }
    } catch (err) {
      setError('Failed to submit booking. Please try again.')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Gender Selection */}
        <div className="space-y-3">
          <label className="block text-lg font-light text-white tracking-wide">
            SELECT MODEL
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setGender('male')}
              className={`flex-1 py-4 px-6 rounded-lg border transition-all ${
                gender === 'male'
                  ? 'border-purple-500 bg-purple-500/20 text-white'
                  : 'border-white/20 text-gray-400 hover:border-white/40'
              }`}
            >
              Male
            </button>
            <button
              type="button"
              onClick={() => setGender('female')}
              className={`flex-1 py-4 px-6 rounded-lg border transition-all ${
                gender === 'female'
                  ? 'border-purple-500 bg-purple-500/20 text-white'
                  : 'border-white/20 text-gray-400 hover:border-white/40'
              }`}
            >
              Female
            </button>
          </div>
        </div>

        {/* 3D Model */}
        <div className="space-y-3">
          <label className="block text-lg font-light text-white tracking-wide">
            SELECT PLACEMENT
          </label>
          <HumanModel3D
            gender={gender}
            selectedPlacement={placement}
            size={size}
            onPlacementSelect={setPlacement}
          />
          {placement && (
            <p className="text-sm text-purple-400">
              Selected:{' '}
              {bodyPlacements.find((p) => p.value === placement)?.name ||
                placement}
            </p>
          )}
        </div>

        {/* Size Slider */}
        <div className="space-y-3">
          <label className="block text-lg font-light text-white tracking-wide">
            TATTOO SIZE: {size} INCHES
          </label>
          <div className="space-y-2">
            <input
              type="range"
              min="1"
              max="12"
              step="0.5"
              value={size}
              onChange={(e) => setSize(parseFloat(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>1"</span>
              <span>6"</span>
              <span>12"</span>
            </div>
          </div>
        </div>

        {/* Style Selection */}
        <div className="space-y-3">
          <label className="block text-lg font-light text-white tracking-wide">
            SELECT STYLE
          </label>
          <div className="relative">
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full py-4 px-6 bg-black/30 border border-white/20 rounded-lg text-white appearance-none cursor-pointer focus:border-purple-500 focus:outline-none"
              required
            >
              <option value="" disabled>
                Choose a tattoo style...
              </option>
              {tattooStyles.map((styleOption) => (
                <option key={styleOption.name} value={styleOption.name}>
                  {styleOption.name}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Style descriptions with tooltips */}
          {style && (
            <div className="flex items-start gap-2 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <div className="flex-1">
                <p className="text-sm text-gray-300">
                  {tattooStyles.find((s) => s.name === style)?.description}
                </p>
              </div>
              <StyleTooltip
                style={tattooStyles.find((s) => s.name === style)!}
              />
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 px-8 bg-white text-black hover:bg-gray-200 disabled:bg-gray-600 disabled:text-gray-400 transition-all duration-300 rounded-lg tracking-wider text-sm font-medium"
        >
          {isSubmitting ? 'SUBMITTING...' : 'CONTINUE TO BOOKING'}
        </button>

        <p className="text-center text-xs text-gray-500">
          You'll be redirected to Calendly to schedule your consultation
        </p>
      </form>
    </motion.div>
  )
}
