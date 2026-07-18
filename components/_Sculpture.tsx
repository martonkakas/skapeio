import { ReactNode, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Sculpture = (): ReactNode => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <torusKnotGeometry args={[10, 3, 200, 32]} />
        <meshBasicMaterial color="#ffffff" wireframe={true} transparent opacity={0.15} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[14, 2]} />
        <meshBasicMaterial color="#ffffff" wireframe={true} transparent opacity={0.05} />
      </mesh>
    </group>
  );
};

export default Sculpture;
