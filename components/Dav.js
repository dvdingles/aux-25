/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dav(props) {
  const { nodes, materials } = useGLTF("/4D COEXMA.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano001.geometry}
        material={materials["Material.001"]}
        position={[0.06, 0.09, -0.08]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano002.geometry}
        material={materials["Material.001"]}
        position={[0.06, 0.09, -0.08]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano003.geometry}
        material={materials["Material.001"]}
        position={[-0.09, 0.09, 0.07]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto.geometry}
        material={materials["Material.001"]}
        position={[0.21, -0.12, 0.03]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.71}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto001.geometry}
        material={materials["Material.001"]}
        position={[-0.01, -0.12, 0.33]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.71}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto002.geometry}
        material={materials["Material.001"]}
        position={[0.21, -0.02, -0.14]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.71}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom"].geometry}
        material={materials.TQ_ARD_front}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom_1"].geometry}
        material={materials.TQ_ARD_back}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom_2"].geometry}
        material={materials.TQ_ARD_edge}
      />
    </group>
  );
}

useGLTF.preload("/4D COEXMA.gltf");
