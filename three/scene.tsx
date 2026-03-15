'use client';

import { Environment, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Bloom, DepthOfField, EffectComposer, Noise } from '@react-three/postprocessing';
import { Suspense, useMemo } from 'react';

import { prefersReducedMotion } from '@/utils/device';

import { FloatingGeometry } from '@/three/floating-geometry';
import { Particles } from '@/three/particles';

function SceneContent() {
  const reducedMotion = useMemo(() => prefersReducedMotion(), []);
  return <><PerspectiveCamera makeDefault position={[0, 0, 5.5]} fov={40} /><color attach="background" args={['#050816']} /><ambientLight intensity={0.6} /><directionalLight position={[3, 4, 2]} intensity={2.2} color="#53fcf8" /><pointLight position={[-3, -1, 2]} intensity={1.6} color="#ad62ff" /><Environment preset="city" /><FloatingGeometry /><Particles count={reducedMotion ? 90 : 180} />{reducedMotion ? <EffectComposer multisampling={0}><Bloom intensity={0.9} luminanceThreshold={0.2} mipmapBlur /><Noise premultiply opacity={0.02} /></EffectComposer> : <EffectComposer multisampling={0}><Bloom intensity={0.9} luminanceThreshold={0.2} mipmapBlur /><Noise premultiply opacity={0.02} /><DepthOfField focusDistance={0.015} focalLength={0.02} bokehScale={2.4} height={700} /></EffectComposer>}</>;
}

export function ThreeScene() {
  return <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 opacity-90"><Canvas dpr={[1, 1.7]} gl={{ antialias: false, powerPreference: 'high-performance' }}><Suspense fallback={null}><SceneContent /></Suspense></Canvas></div>;
}
