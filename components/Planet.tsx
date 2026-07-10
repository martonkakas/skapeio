'use client';
import { ReactNode, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Planet = (): ReactNode => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={3} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#4a5568" />
      
      {/* Solid Earth Base */}
      <mesh>
        <sphereGeometry args={[11.8, 64, 64]} />
        <meshStandardMaterial 
          color="#000000" 
          roughness={0.7}
          metalness={0.2}
        />
      </mesh>

      {/* Atmosphere / Grid / High-tech overlay */}
      <mesh scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[12, 32, 32]} />
        <meshBasicMaterial 
          color="#ffffff" 
          wireframe={true} 
          transparent 
          opacity={0.08} 
        />
      </mesh>
      
      {/* Outer Glow / Halo */}
      <mesh scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[12, 32, 32]} />
        <meshBasicMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.03} 
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

export default Planet;