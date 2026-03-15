'use client';

import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import type { Points } from 'three';
import { MathUtils } from 'three';

export function Particles({ count = 180 }: { count?: number }) {
  const pointsRef = useRef<Points | null>(null);
  const [positions] = useState(() => {
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (Math.random() - 0.5) * 10;
      values[index * 3 + 1] = (Math.random() - 0.5) * 6;
      values[index * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return values;
  });

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += 0.0008;
    pointsRef.current.rotation.x = MathUtils.lerp(pointsRef.current.rotation.x, state.pointer.y * 0.12, 0.04);
    pointsRef.current.rotation.z = MathUtils.lerp(pointsRef.current.rotation.z, state.pointer.x * 0.12, 0.04);
  });

  return <points ref={pointsRef}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry><pointsMaterial color="#8ffcf9" size={0.035} sizeAttenuation transparent opacity={0.95} depthWrite={false} /></points>;
}
