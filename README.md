# Minimalist Tattoo Artist Website

A dark, glitchy, goth-aesthetic tattoo artist website with interactive 3D body visualization for tattoo placement and booking.

## Features

- **Dark Glitchy Background**: Animated goth aesthetic with geometric shapes and particle effects
- **Bento Grid Portfolio**: Mixed-size grid layout showcasing tattoo work
- **Interactive 3D Model**: Visualize tattoo placement on male/female body models
- **Size Visualization**: Real-time tattoo size preview on 3D model
- **Style Selection**: 15 tattoo styles with hover tooltips and descriptions
- **Booking System**: Stores booking data in Vercel Postgres
- **Calendly Integration**: Automatic redirect to Calendly for consultation scheduling

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D**: React Three Fiber + Three.js
- **Database**: Vercel Postgres with Prisma ORM
- **Deployment**: Vercel

## Setup Instructions

### 1. Clone and Install

\`\`\`bash
cd tattoo-website
npm install
\`\`\`

### 2. Set up Vercel Postgres

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Create a new Postgres database in your Vercel dashboard
3. Copy the database URL

### 3. Configure Environment Variables

Create a \`.env\` file in the root directory:

\`\`\`bash
cp .env.example .env
\`\`\`

Edit \`.env\` and add your credentials:

\`\`\`env
DATABASE_URL="your-postgres-connection-string"
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/your-username/consultation"
\`\`\`

### 4. Initialize Database

\`\`\`bash
npx prisma generate
npx prisma db push
\`\`\`

### 5. Add Portfolio Images

Add your tattoo portfolio images to \`/public/portfolio/\`:
- tattoo-1.jpg
- tattoo-2.jpg
- tattoo-3.jpg
- etc.

### 6. Add Style Example Images

Add style example images to \`/public/style-examples/\`:
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

### 7. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view your site.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - \`DATABASE_URL\`
   - \`NEXT_PUBLIC_CALENDLY_URL\`
4. Deploy

Vercel will automatically detect it's a Next.js project and configure build settings.

## Project Structure

\`\`\`
tattoo-website/
├── app/
│   ├── page.tsx              # Landing page
│   ├── booking/
│   │   └── page.tsx          # Booking page
│   └── api/
│       └── bookings/
│           └── route.ts      # API endpoint
├── components/
│   ├── Background.tsx        # Animated background
│   ├── Portfolio.tsx         # Bento grid portfolio
│   ├── BookingForm.tsx       # Main booking form
│   ├── HumanModel3D.tsx      # 3D body model
│   └── StyleTooltip.tsx      # Style info tooltip
├── lib/
│   ├── db.ts                 # Prisma client
│   └── tattoo-data.ts        # Styles & placements data
├── prisma/
│   └── schema.prisma         # Database schema
└── public/
    ├── portfolio/            # Tattoo portfolio images
    └── style-examples/       # Style example images
\`\`\`

## Customization

### Update Tattoo Styles

Edit \`lib/tattoo-data.ts\` to add/remove/modify tattoo styles.

### Update Body Placements

Edit \`lib/tattoo-data.ts\` and \`components/HumanModel3D.tsx\` to modify body placement options and 3D coordinates.

### Change Color Theme

The main color is purple (\`#a855f7\`). Search for \`purple-\` in components to change the accent color.

### Replace 3D Model

Currently using a simplified geometric body model. To use realistic GLTF models:

1. Add \`.glb\` files to \`/public/models/\`
2. Update \`HumanModel3D.tsx\` to load models using \`useGLTF\` from \`@react-three/drei\`

## Tattoo Styles Included

1. **Traditional** - Bold lines, bright colors
2. **Realism** - Photo-realistic designs
3. **Watercolor** - Gradient, soft edges
4. **Blackwork** - Solid black ink
5. **Neo Traditional** - Modern twist on traditional
6. **Japanese (Irezumi)** - Traditional Japanese style
7. **Tribal** - Bold geometric patterns
8. **New School** - Cartoon-like, exaggerated
9. **Illustrative** - Artistic, painterly
10. **Dotwork** - Composed of dots
11. **Geometric** - Shapes and patterns
12. **Sketch** - Rough, hand-drawn look
13. **Minimalist** - Simple, clean lines
14. **Black and Grey** - Monochrome shading
15. **Surrealism** - Dream-like, abstract

## Body Placements Included

- Upper Arm, Forearm, Wrist, Hand/Fingers
- Shoulder, Shoulder Blade, Chest, Ribs
- Upper Back, Mid Back, Lower Back, Spine
- Hip, Outer Thigh, Inner Thigh
- Calf, Ankle, Neck

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
