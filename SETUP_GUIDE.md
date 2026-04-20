# Quick Setup Guide

Follow these steps to get your tattoo artist website running:

## 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

## 2. Set Up Database

### Create Vercel Postgres Database

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Storage" → "Create Database"
3. Select "Postgres"
4. Copy the connection string

### Configure Environment

\`\`\`bash
cp .env.example .env
\`\`\`

Edit \`.env\` and add:
- Your Vercel Postgres \`DATABASE_URL\`
- Your Calendly link as \`NEXT_PUBLIC_CALENDLY_URL\`

### Initialize Database

\`\`\`bash
npx prisma generate
npx prisma db push
\`\`\`

## 3. Add Your Images

### Portfolio Images
Add 8+ tattoo images to \`public/portfolio/\` named:
- tattoo-1.jpg, tattoo-2.jpg, etc.

### Style Example Images
Add 15 style example images to \`public/style-examples/\`:
- traditional.jpg
- realism.jpg
- watercolor.jpg
- blackwork.jpg
- neo-traditional.jpg
- japanese.jpg
- tribal.jpg
- new-school.jpg
- illustrative.jpg
- dotwork.jpg
- geometric.jpg
- sketch.jpg
- minimalist.jpg
- black-grey.jpg
- surrealism.jpg

## 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000)

## 5. Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Features Overview

- **Landing Page**: Hero section + bento grid portfolio + CTA
- **Booking Page**: Interactive 3D body model + style selection + size slider
- **API**: Saves bookings to Vercel Postgres
- **Redirect**: Automatic redirect to Calendly after booking

## Customization

- **Colors**: Search for \`purple-\` in components to change accent color
- **Styles**: Edit \`lib/tattoo-data.ts\` to modify tattoo styles
- **Placements**: Edit \`lib/tattoo-data.ts\` to modify body placements
- **Copy**: Edit page content in \`app/page.tsx\` and \`app/booking/page.tsx\`

## Need Help?

Check the main README.md for detailed documentation.
