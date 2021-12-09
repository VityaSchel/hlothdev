import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Menu() {
  return (
    <MenuItem id='me' />
  )
}

function MenuItem(props) {
  const shape = useLoader(GLTFLoader, `/models/cards/`)
}
