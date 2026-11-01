import { useEffect } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

export default function Lighting() {
  const scene = useThree((state) => state.scene)

  useEffect(() => {
    const ambient = new THREE.AmbientLight(0xffffff, 0.5)
    const dir = new THREE.DirectionalLight(0xffffff, 1.2)
    dir.castShadow = true
    dir.shadow.mapSize.set(2048, 2048)
    dir.shadow.camera.left = -6
    dir.shadow.camera.right = 6
    dir.shadow.camera.top = 6
    dir.shadow.camera.bottom = -6
    dir.shadow.camera.far = 20
    dir.position.set(1, 2.5, 2.5)
    dir.lookAt(new THREE.Vector3(1, 0, 2.5))
    scene.add(ambient, dir)
    return () => {
      scene.remove(ambient)
      scene.remove(dir)
    }
  }, [scene])

  return null
}
