/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/blob.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lathe.geometry}
        // material={nodes.Lathe.material}
      >
        <meshLambertMaterial color={props.color} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/blob.gltf')
