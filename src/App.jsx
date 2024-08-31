import React from 'react'
import "./style.css"
import { Canvas } from '@react-three/fiber'
import { Environment, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const App = () => {
  return (
    <div className='w-full h-full bg-black'>
      <div className='absoltue text-white font-extrabold flex items-center justify-center text-9xl'  >
        MACBOOK PRO
      </div>
      <Canvas camera={{fov:12,position:[0,-10,220]}}>
        <Environment files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"}/>
        <ScrollControls pages={3}>
          <MacContainer/>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App