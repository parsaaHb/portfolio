import { Canvas } from '@react-three/fiber'
import Room from './Room'
import './App.css'

export default function App() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0b0b12',
        overflow: 'hidden',
      }}
    >
      <Canvas
        shadows
        camera={{
          position: [7, 5.5, 7],
          fov: 35,
          near: 0.1,
          far: 100,
        }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <Room />
      </Canvas>
    </div>
  )
}
