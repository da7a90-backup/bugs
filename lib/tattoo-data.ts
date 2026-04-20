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
  // Neck
  { name: 'Neck (Front)', value: 'neck-front' },
  { name: 'Neck (Back)', value: 'neck-back' },

  // Chest & Upper Body Front
  { name: 'Upper Chest', value: 'upper-chest' },
  { name: 'Sternum', value: 'sternum' },
  { name: 'Lower Chest', value: 'lower-chest' },
  { name: 'Left Pec', value: 'left-pec' },
  { name: 'Right Pec', value: 'right-pec' },
  { name: 'Left Upper Chest', value: 'left-upper-chest' },
  { name: 'Right Upper Chest', value: 'right-upper-chest' },
  { name: 'Left Ribs', value: 'left-ribs' },
  { name: 'Right Ribs', value: 'right-ribs' },

  // Shoulders & Back
  { name: 'Left Shoulder', value: 'left-shoulder' },
  { name: 'Right Shoulder', value: 'right-shoulder' },
  { name: 'Left Shoulder Blade', value: 'left-shoulder-blade' },
  { name: 'Right Shoulder Blade', value: 'right-shoulder-blade' },
  { name: 'Upper Back', value: 'upper-back' },
  { name: 'Mid Back', value: 'mid-back' },
  { name: 'Lower Back', value: 'lower-back' },
  { name: 'Upper Spine', value: 'upper-spine' },
  { name: 'Mid Spine', value: 'mid-spine' },
  { name: 'Lower Spine', value: 'lower-spine' },
  { name: 'Left Lat', value: 'left-lat' },
  { name: 'Right Lat', value: 'right-lat' },

  // Arms - Biceps
  { name: 'Left Outer Bicep', value: 'left-outer-bicep' },
  { name: 'Right Outer Bicep', value: 'right-outer-bicep' },
  { name: 'Left Inner Bicep', value: 'left-inner-bicep' },
  { name: 'Right Inner Bicep', value: 'right-inner-bicep' },
  { name: 'Left Upper Arm (Back)', value: 'left-upper-arm-back' },
  { name: 'Right Upper Arm (Back)', value: 'right-upper-arm-back' },
  { name: 'Left Tricep', value: 'left-tricep' },
  { name: 'Right Tricep', value: 'right-tricep' },

  // Arms - Forearms
  { name: 'Left Outer Forearm', value: 'left-outer-forearm' },
  { name: 'Right Outer Forearm', value: 'right-outer-forearm' },
  { name: 'Left Inner Forearm', value: 'left-inner-forearm' },
  { name: 'Right Inner Forearm', value: 'right-inner-forearm' },
  { name: 'Left Forearm (Back)', value: 'left-forearm-back' },
  { name: 'Right Forearm (Back)', value: 'right-forearm-back' },

  // Wrists & Hands
  { name: 'Left Wrist (Outer)', value: 'left-wrist-outer' },
  { name: 'Right Wrist (Outer)', value: 'right-wrist-outer' },
  { name: 'Left Wrist (Inner)', value: 'left-wrist-inner' },
  { name: 'Right Wrist (Inner)', value: 'right-wrist-inner' },
  { name: 'Left Wrist Back (Outer)', value: 'left-wrist-back-outer' },
  { name: 'Right Wrist Back (Outer)', value: 'right-wrist-back-outer' },
  { name: 'Left Wrist Back (Inner)', value: 'left-wrist-back-inner' },
  { name: 'Right Wrist Back (Inner)', value: 'right-wrist-back-inner' },
  { name: 'Left Hand', value: 'left-hand' },
  { name: 'Right Hand', value: 'right-hand' },
  { name: 'Left Hand (Back)', value: 'left-hand-back' },
  { name: 'Right Hand (Back)', value: 'right-hand-back' },

  // Hips & Glutes
  { name: 'Left Hip', value: 'left-hip' },
  { name: 'Right Hip', value: 'right-hip' },
  { name: 'Left Hip (Back)', value: 'left-hip-back' },
  { name: 'Right Hip (Back)', value: 'right-hip-back' },
  { name: 'Left Glute', value: 'left-glute' },
  { name: 'Right Glute', value: 'right-glute' },

  // Thighs
  { name: 'Left Outer Thigh', value: 'left-outer-thigh' },
  { name: 'Right Outer Thigh', value: 'right-outer-thigh' },
  { name: 'Left Inner Thigh', value: 'left-inner-thigh' },
  { name: 'Right Inner Thigh', value: 'right-inner-thigh' },
  { name: 'Left Front Thigh', value: 'left-front-thigh' },
  { name: 'Right Front Thigh', value: 'right-front-thigh' },
  { name: 'Left Outer Thigh (Back)', value: 'left-outer-thigh-back' },
  { name: 'Right Outer Thigh (Back)', value: 'right-outer-thigh-back' },
  { name: 'Left Hamstring', value: 'left-hamstring' },
  { name: 'Right Hamstring', value: 'right-hamstring' },

  // Calves
  { name: 'Left Outer Calf', value: 'left-outer-calf' },
  { name: 'Right Outer Calf', value: 'right-outer-calf' },
  { name: 'Left Inner Calf', value: 'left-inner-calf' },
  { name: 'Right Inner Calf', value: 'right-inner-calf' },
  { name: 'Left Outer Calf (Back)', value: 'left-outer-calf-back' },
  { name: 'Right Outer Calf (Back)', value: 'right-outer-calf-back' },
  { name: 'Left Inner Calf (Back)', value: 'left-inner-calf-back' },
  { name: 'Right Inner Calf (Back)', value: 'right-inner-calf-back' },

  // Ankles
  { name: 'Left Ankle (Outer)', value: 'left-ankle-outer' },
  { name: 'Right Ankle (Outer)', value: 'right-ankle-outer' },
  { name: 'Left Ankle (Inner)', value: 'left-ankle-inner' },
  { name: 'Right Ankle (Inner)', value: 'right-ankle-inner' },
  { name: 'Left Ankle Back (Outer)', value: 'left-ankle-back-outer' },
  { name: 'Right Ankle Back (Outer)', value: 'right-ankle-back-outer' },
  { name: 'Left Ankle Back (Inner)', value: 'left-ankle-back-inner' },
  { name: 'Right Ankle Back (Inner)', value: 'right-ankle-back-inner' }
]
