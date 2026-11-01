import { createNoiseTexture } from '../utils/textures'

export default function Walls() {
  return (
    <>
      {/* Left wall */}
      <mesh position={[-2, 1.8, 0]} receiveShadow>
        <boxGeometry args={[0.2, 3.6, 5]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.95}
          map={createNoiseTexture(256, 255)}
        />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 1.8, -2.5]} receiveShadow>
        <boxGeometry args={[4, 3.6, 0.2]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.95}
          map={createNoiseTexture(256, 255)}
        />
      </mesh>
    </>
  )
}