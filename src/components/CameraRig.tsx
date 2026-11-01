
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

export default function CameraRig() {
  const camera = useThree((state) => state.camera)

  useEffect(() => {
    // Camera position
    camera.position.set(7, 5.5, 7)

    // Where the camera looks
    camera.lookAt(0, 1.5, 0)

    camera.updateProjectionMatrix()
  }, [camera])

  return null
}
