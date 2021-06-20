/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { animated, useSpring } from "@react-spring/three";
import React, { useRef } from "react";

export default function Box(props) {
  const { position, ...rest } = props;
  const styles = useSpring({
    position: position
  });

  const mesh = useRef();

  return (
    <animated.mesh {...styles} {...rest} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      {/* <meshStandardMaterial color={"orange"} /> */}
      <meshPhysicalMaterial
        attach="material"
        clearcoat={0.0}
        clearcoatRoughness={0}
        metalness={0.0}
        roughness={0}
        color={"#fff"}
        transmission={0.85}
        opacity={0.9}
        lightIntensity={1.0}
        envMapIntensity={1.0}
      />
    </animated.mesh>
  );
}
