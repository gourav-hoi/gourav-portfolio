'use client';

import { Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import type { Group } from 'three';

const shapes = [
  { position: [-2.6, 1.4, -1.8], color: '#53fcf8', scale: 0.6 },
  { position: [2.4, -0.8, -1.6], color: '#ad62ff', scale: 0.74 },
  { position: [0.4, 2.2, -2.2], color: '#ff5ec4', scale: 0.4 },
  { position: [1.8, 1.2, -2.6], color: '#53fcf8', scale: 0.28 },
];

export function FloatingGeometry() {
  const group = useRef<Group | null>(null);
  const materials = useMemo(() => shapes, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.08;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.16) * 0.08;
  });

  return <group ref={group}>{materials.map((shape, index) => <Float key={shape.color + index} speed={1.2 + index * 0.2} rotationIntensity={1.4} floatIntensity={2.2} position={shape.position as [number, number, number]}><mesh scale={shape.scale}>{index % 2 === 0 ? <icosahedronGeometry args={[1, 0]} /> : <torusKnotGeometry args={[0.85, 0.26, 120, 16]} />}<meshStandardMaterial color={shape.color} metalness={0.4} roughness={0.08} emissive={shape.color} emissiveIntensity={0.35} /></mesh></Float>)}</group>;
}
