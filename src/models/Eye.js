/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const group = useRef();
  const mesh = useRef();
  const { nodes, materials } = useGLTF("/eye.gltf");

  useFrame(({ delta, clock }) => {
    const g = mesh.current;

    g.rotation.x += 0.01;
    g.rotation.x += 0.01;
    g.rotation.z += 0.01;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Icosahedron.geometry}
        // material={nodes.Icosahedron.material}
      >
        <meshStandardMaterial color={"#ff8426"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/eye.gltf");
