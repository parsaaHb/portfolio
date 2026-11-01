import { createNoiseTexture } from '../utils/textures'

export default function Floor() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
      receiveShadow
    >
      <planeGeometry args={[4, 5]} />
      <meshStandardMaterial
        color="#c7c7c7"
        roughness={0.8}
        metalness={0}
        map={createNoiseTexture(256, 205)}
      />
    </mesh>
  )
}