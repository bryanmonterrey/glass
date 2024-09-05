'use client';

import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

const Model = dynamic(() => import('./Model'), { ssr: false })

export default function Index() {
  return (
    <Canvas style={{background: '#000000'}}>
        <Model />
        <directionalLight intensity={2} position={[0, 2, 3]}/>
        <Environment preset="city" />
    </Canvas>
  )
}