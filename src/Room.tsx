import Baseboards from './components/Baseboards'
import CameraRig from './components/CameraRig'
import Ceiling from './components/Ceiling'
import Floor from './components/Floor'
import Lighting from './components/Lighting'
import Walls from './components/Walls'

export default function Room() {
  return (
    <>
      <Floor />
      <Walls />
      <Baseboards />
      <Lighting />
      <CameraRig />
    </>
  )
}
