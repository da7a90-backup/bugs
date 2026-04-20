import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { gender, placement, size, style } = body

    // Validate required fields
    if (!gender || !placement || !size || !style) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create booking in database
    const booking = await prisma.booking.create({
      data: {
        gender,
        placement,
        size: parseFloat(size),
        style,
      },
    })

    return NextResponse.json(
      { success: true, booking },
      { status: 201 }
    )
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Optional: Get all bookings (useful for admin view)
    const bookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json({ bookings })
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}
