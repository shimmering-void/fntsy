/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

export default function Model(props) {
  const group = useRef()
  const inner = useRef()
  const { nodes, materials } = useGLTF('/crystal.gltf')

  useFrame(({ delta, clock }) => {
    const g = inner.current

    g.rotation.x += 0.01 * Math.sin(props.offset)
    g.rotation.x += 0.01 * Math.sin(props.offset)
    g.rotation.z += 0.01 * Math.sin(props.offset)
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={inner} position={[0, 0, 0]} scale={[1, 0.5, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_2.geometry}
          // material={nodes.Pyramid_2.material}
          position={[0, -50, 0]}
          rotation={[0, 0, -Math.PI]}
        >
          <meshStandardMaterial color={props.color} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid.geometry}
          // material={nodes.Pyramid.material}
          position={[0, 50, 0]}
        >
          <meshStandardMaterial color={props.color} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/crystal.gltf')
