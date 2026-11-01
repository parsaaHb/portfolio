
import type { ReactElement } from 'react'

export default function Ceiling() {
  const panels: ReactElement[] = []

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      panels.push(
        <mesh
          key={`${i}-${j}`}
          position={[
            -1 + i * 2,
            3.6,
            -1.25 + j * 2.5,
          ]}
        >
          <boxGeometry args={[2, 0.1, 2.5]} />
          <meshStandardMaterial
            color="#9e9e9e"
            roughness={0.95}
          />
        </mesh>,
      )
    }
  }

  return <>{panels}</>
}
