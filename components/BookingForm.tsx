'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import BodyMapSelector from './BodyMapSelector'
import StyleTooltip from './StyleTooltip'
import { tattooStyles } from '@/lib/tattoo-data'

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
      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Gender Selection */}
        <div className="space-y-4">
          <label className="block text-lg font-light text-white tracking-widest">
            SELECT BODY TYPE
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setGender('male')}
              className={`flex-1 py-4 px-6 rounded border transition-all ${
                gender === 'male'
                  ? 'border-red-800 bg-red-900/20 text-white'
                  : 'border-white/10 text-gray-400 hover:border-white/30'
              }`}
            >
              Male
            </button>
            <button
              type="button"
              onClick={() => setGender('female')}
              className={`flex-1 py-4 px-6 rounded border transition-all ${
                gender === 'female'
                  ? 'border-red-800 bg-red-900/20 text-white'
                  : 'border-white/10 text-gray-400 hover:border-white/30'
              }`}
            >
              Female
            </button>
          </div>
        </div>

        {/* Body Map Selector */}
        <div className="space-y-4">
          <label className="block text-lg font-light text-white tracking-widest">
            SELECT PLACEMENT
          </label>
          <BodyMapSelector
            gender={gender}
            selectedPlacement={placement}
            size={size}
            onPlacementSelect={setPlacement}
          />
        </div>

        {/* Size Slider */}
        <div className="space-y-4">
          <label className="block text-lg font-light text-white tracking-widest">
            TATTOO SIZE: {size} INCHES
          </label>
          <div className="space-y-3">
            <input
              type="range"
              min="1"
              max="12"
              step="0.5"
              value={size}
              onChange={(e) => setSize(parseFloat(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-red-800"
              style={{
                background: `linear-gradient(to right, #7f1d1d 0%, #7f1d1d ${((size - 1) / 11) * 100}%, rgba(255,255,255,0.1) ${((size - 1) / 11) * 100}%, rgba(255,255,255,0.1) 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>1"</span>
              <span>6"</span>
              <span>12"</span>
            </div>
          </div>
        </div>

        {/* Style Selection */}
        <div className="space-y-4">
          <label className="block text-lg font-light text-white tracking-widest">
            SELECT STYLE
          </label>
          <div className="relative">
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full py-4 px-6 bg-black/40 border border-white/10 rounded text-white appearance-none cursor-pointer focus:border-red-800 focus:outline-none"
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
            <div className="flex items-start gap-2 p-4 bg-red-900/10 border border-red-900/30 rounded">
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
          <div className="p-4 bg-red-900/10 border border-red-800/30 rounded">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 px-8 bg-red-800 text-white hover:bg-red-700 disabled:bg-gray-700 disabled:text-gray-400 transition-all duration-300 rounded tracking-widest text-sm font-medium"
        >
          {isSubmitting ? 'SUBMITTING...' : 'CONTINUE TO BOOKING'}
        </button>

        <p className="text-center text-xs text-gray-500">
          You'll be redirected to schedule your consultation
        </p>
      </form>
    </motion.div>
  )
}
