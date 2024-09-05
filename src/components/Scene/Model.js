"use client";

import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'

export default function Model() {
    const { nodes } = useGLTF("/medias/torrus.glb");
    const { viewport } = useThree()
    const torus = useRef(null);
    
    useFrame( () => {
        torus.current.rotation.x += 0.02
    })

    const materialProps = {
        thickness: 0.2,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.02,
        backside: true,
    }

    const handleClick = useCallback(() => {
        window.open('https://instagram.com/payingheavy', '_blank');
    }, []);
    
    return (
        <group scale={viewport.width / 3.75}>
            <Text 
                font={'/fonts/PPNeueMontreal-Bold.otf'} 
                position={[0, 0, -1]} 
                fontSize={0.5} 
                color="white" 
                anchorX="center" 
                anchorY="middle"
            >
                bryan monterrey.
            </Text>
            <mesh ref={torus} {...nodes.Torus002}>
                <MeshTransmissionMaterial {...materialProps}/>
            </mesh>
            <Text 
                font={'/fonts/PPNeueMontreal-Bold.otf'} 
                position={[0, -1.65, -1]} 
                fontSize={0.05} 
                color="white" 
                anchorX="center" 
                anchorY="middle"
            >
                software developer and product designer
            </Text>
            <Text 
                font={'/fonts/PPNeueMontreal-Bold.otf'} 
                position={[0, -1.75, -1]} 
                fontSize={0.095} 
                color="white" 
                anchorX="center" 
                anchorY="middle"
                onClick={handleClick}
                onPointerOver={(e) => document.body.style.cursor = 'pointer'}
                onPointerOut={(e) => document.body.style.cursor = 'auto'}
            >
                @payingheavy
            </Text>
        </group>
    )
}
