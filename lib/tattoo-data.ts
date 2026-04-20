export interface TattooStyle {
  name: string
  description: string
  imagePath: string
}

export interface BodyPlacement {
  name: string
  value: string
}

export const tattooStyles: TattooStyle[] = [
  {
    name: 'Traditional',
    description: 'Bold lines, bright colors, and iconic designs from American tattooing heritage',
    imagePath: '/style-examples/traditional.jpg'
  },
  {
    name: 'Realism',
    description: 'Photo-realistic tattoos that look exactly like real-life images',
    imagePath: '/style-examples/realism.jpg'
  },
  {
    name: 'Watercolor',
    description: 'Bright, vivid designs with soft edges and gradient color changes',
    imagePath: '/style-examples/watercolor.jpg'
  },
  {
    name: 'Blackwork',
    description: 'Designs created exclusively with solid black ink',
    imagePath: '/style-examples/blackwork.jpg'
  },
  {
    name: 'Neo Traditional',
    description: 'Modern evolution of traditional style with more detail and color variety',
    imagePath: '/style-examples/neo-traditional.jpg'
  },
  {
    name: 'Japanese (Irezumi)',
    description: 'Traditional Japanese style with rich symbolism and bold imagery',
    imagePath: '/style-examples/japanese.jpg'
  },
  {
    name: 'Tribal',
    description: 'Bold geometric patterns inspired by indigenous cultures',
    imagePath: '/style-examples/tribal.jpg'
  },
  {
    name: 'New School',
    description: 'Cartoon-like designs with exaggerated features and vibrant colors',
    imagePath: '/style-examples/new-school.jpg'
  },
  {
    name: 'Illustrative',
    description: 'Artistic, painterly designs that resemble fine art illustrations',
    imagePath: '/style-examples/illustrative.jpg'
  },
  {
    name: 'Dotwork',
    description: 'Intricate designs composed entirely of tiny dots',
    imagePath: '/style-examples/dotwork.jpg'
  },
  {
    name: 'Geometric',
    description: 'Precise patterns using shapes, lines, and mathematical symmetry',
    imagePath: '/style-examples/geometric.jpg'
  },
  {
    name: 'Sketch',
    description: 'Rough, hand-drawn aesthetic with visible pencil-like marks',
    imagePath: '/style-examples/sketch.jpg'
  },
  {
    name: 'Minimalist',
    description: 'Simple, clean designs with fine lines and minimal detail',
    imagePath: '/style-examples/minimalist.jpg'
  },
  {
    name: 'Black and Grey',
    description: 'Monochrome tattoos using black ink with varying shades of grey',
    imagePath: '/style-examples/black-grey.jpg'
  },
  {
    name: 'Surrealism',
    description: 'Dream-like, abstract designs that challenge reality',
    imagePath: '/style-examples/surrealism.jpg'
  }
]

export const bodyPlacements: BodyPlacement[] = [
  { name: 'Upper Arm', value: 'upper-arm' },
  { name: 'Forearm', value: 'forearm' },
  { name: 'Wrist', value: 'wrist' },
  { name: 'Hand / Fingers', value: 'hand' },
  { name: 'Shoulder', value: 'shoulder' },
  { name: 'Shoulder Blade', value: 'shoulder-blade' },
  { name: 'Chest', value: 'chest' },
  { name: 'Ribs', value: 'ribs' },
  { name: 'Upper Back', value: 'upper-back' },
  { name: 'Mid Back', value: 'mid-back' },
  { name: 'Lower Back', value: 'lower-back' },
  { name: 'Spine', value: 'spine' },
  { name: 'Hip', value: 'hip' },
  { name: 'Outer Thigh', value: 'outer-thigh' },
  { name: 'Inner Thigh', value: 'inner-thigh' },
  { name: 'Calf', value: 'calf' },
  { name: 'Ankle', value: 'ankle' },
  { name: 'Neck', value: 'neck' }
]
