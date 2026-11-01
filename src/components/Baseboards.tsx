
export default function Baseboards() {
  return (
    <>
      {/* Left wall baseboard */}
      <mesh position={[-1.88, 0.06, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.04, 0.12, 5]} />
        <meshStandardMaterial color="#ffffff" roughness={0.6} />
      </mesh>

      {/* Back wall baseboard */}
      <mesh position={[0, 0.06, -2.38]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.12, 0.04]} />
        <meshStandardMaterial color="#ffffff" roughness={0.6} />
      </mesh>
    </>
  )
}
