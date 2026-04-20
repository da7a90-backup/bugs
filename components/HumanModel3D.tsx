'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center } from '@react-three/drei'
import { Suspense, useState } from 'react'
import * as THREE from 'three'

interface HumanModel3DProps {
  gender: 'male' | 'female'
  selectedPlacement: string | null
  size: number
  onPlacementSelect: (placement: string) => void
}

// Body part mapping for highlighting
const bodyPartMap: Record<
  string,
  { position: [number, number, number]; rotation?: [number, number, number] }
> = {
  'upper-arm': { position: [0.8, 0.3, 0] },
  forearm: { position: [0.8, -0.3, 0] },
  wrist: { position: [0.8, -0.8, 0] },
  hand: { position: [0.8, -1.2, 0] },
  shoulder: { position: [0.6, 0.7, 0] },
  'shoulder-blade': { position: [0.5, 0.6, -0.3] },
  chest: { position: [0, 0.5, 0.3] },
  ribs: { position: [0.5, 0, 0.2] },
  'upper-back': { position: [0, 0.7, -0.3] },
  'mid-back': { position: [0, 0.3, -0.3] },
  'lower-back': { position: [0, -0.1, -0.3] },
  spine: { position: [0, 0.3, -0.35] },
  hip: { position: [0.4, -0.4, 0] },
  'outer-thigh': { position: [0.4, -1, 0] },
  'inner-thigh': { position: [0.2, -1, 0.1] },
  calf: { position: [0.3, -1.8, 0] },
  ankle: { position: [0.3, -2.2, 0] },
  neck: { position: [0, 1.2, 0] },
}

function BodyPart({
  placement,
  position,
  isSelected,
  size,
  onClick,
}: {
  placement: string
  position: [number, number, number]
  isSelected: boolean
  size: number
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)
  // Scale size from inches to 3D units (1 inch ≈ 0.05 3D units)
  const scaledSize = (size / 12) * 0.8

  return (
    <mesh
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[isSelected ? scaledSize : 0.15, 16, 16]} />
      <meshStandardMaterial
        color={isSelected ? '#a855f7' : hovered ? '#c084fc' : '#ffffff'}
        emissive={isSelected || hovered ? '#a855f7' : '#000000'}
        emissiveIntensity={isSelected ? 0.8 : hovered ? 0.4 : 0}
        transparent
        opacity={isSelected ? 0.7 : hovered ? 0.3 : 0.2}
      />
    </mesh>
  )
}

function SimplifiedHumanModel({ gender }: { gender: 'male' | 'female' }) {
  // Simplified human body representation using basic shapes
  // In production, you'd load actual GLTF models
  const bodyWidth = gender === 'female' ? 0.45 : 0.5

  return (
    <group>
      {/* Head */}
      <mesh position={[0, 1.4, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#d4a574" />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.05, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.3, 16]} />
        <meshStandardMaterial color="#d4a574" />
      </mesh>

      {/* Torso */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[bodyWidth, 1.2, 0.3]} />
        <meshStandardMaterial color="#d4a574" />
      </mesh>

      {/* Arms - Left */}
      <group position={[-bodyWidth / 2 - 0.15, 0.6, 0]}>
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.1, 0.08, 0.6, 16]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
        <mesh position={[0, -0.9, 0]}>
          <cylinderGeometry args={[0.08, 0.06, 0.6, 16]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
        <mesh position={[0, -1.3, 0]}>
          <boxGeometry args={[0.12, 0.2, 0.05]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
      </group>

      {/* Arms - Right */}
      <group position={[bodyWidth / 2 + 0.15, 0.6, 0]}>
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.1, 0.08, 0.6, 16]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
        <mesh position={[0, -0.9, 0]}>
          <cylinderGeometry args={[0.08, 0.06, 0.6, 16]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
        <mesh position={[0, -1.3, 0]}>
          <boxGeometry args={[0.12, 0.2, 0.05]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
      </group>

      {/* Legs - Left */}
      <group position={[-bodyWidth / 4, -0.3, 0]}>
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[0.15, 0.12, 1.2, 16]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.1, 0.08, 0.8, 16]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
        <mesh position={[0, -2, 0.1]}>
          <boxGeometry args={[0.15, 0.1, 0.25]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
      </group>

      {/* Legs - Right */}
      <group position={[bodyWidth / 4, -0.3, 0]}>
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[0.15, 0.12, 1.2, 16]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.1, 0.08, 0.8, 16]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
        <mesh position={[0, -2, 0.1]}>
          <boxGeometry args={[0.15, 0.1, 0.25]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
      </group>
    </group>
  )
}

export default function HumanModel3D({
  gender,
  selectedPlacement,
  size,
  onPlacementSelect,
}: HumanModel3DProps) {
  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden bg-black/20 border border-white/10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} />

          <Center>
            <SimplifiedHumanModel gender={gender} />

            {/* Render interactive body parts */}
            {Object.entries(bodyPartMap).map(([placement, { position }]) => (
              <BodyPart
                key={placement}
                placement={placement}
                position={position}
                isSelected={selectedPlacement === placement}
                size={size}
                onClick={() => onPlacementSelect(placement)}
              />
            ))}
          </Center>

          <OrbitControls
            enableZoom
            enablePan
            minDistance={3}
            maxDistance={8}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
          />
        </Suspense>
      </Canvas>

      <div className="text-center text-xs text-gray-400 mt-2">
        Click on body parts to select placement • Scroll to zoom • Drag to rotate
      </div>
    </div>
  )
}
