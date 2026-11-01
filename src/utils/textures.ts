import * as THREE from 'three'

export function createNoiseTexture(
  size = 256,
  baseColor = 255,
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  const imageData = ctx.createImageData(size, size)
  const data = imageData.data
  for (let i = 0; i < data.length; i += 4) {
    const value = baseColor + Math.floor(Math.random() * 12) - 6
    data[i] = value
    data[i + 1] = value
    data[i + 2] = value
    data[i + 3] = 255
  }
  ctx.putImageData(imageData, 0, 0)
  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(2, 2)
  texture.anisotropy = 4
  return texture
}
