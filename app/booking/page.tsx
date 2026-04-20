'use client'

import Background from '@/components/Background'
import BookingForm from '@/components/BookingForm'
import Link from 'next/link'

export default function BookingPage() {
  return (
    <>
      <Background />
      <div className="relative min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center space-y-4">
            <Link
              href="/"
              className="inline-block text-gray-400 hover:text-white transition-colors text-sm mb-4"
            >
              ← Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-light tracking-widest text-white">
              BOOK YOUR TATTOO
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Visualize your tattoo placement and size with our interactive 3D
              model, then book a consultation.
            </p>
          </div>

          {/* Form */}
          <BookingForm />
        </div>
      </div>
    </>
  )
}
