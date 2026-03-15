'use client';

import { motion } from 'framer-motion';

import { useMouseParallax } from '@/hooks/use-mouse-parallax';

export function Spotlight() {
  const { x, y } = useMouseParallax();
  return <motion.div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden" animate={{ background: `radial-gradient(circle at ${50 + x * 10}% ${40 + y * 10}%, rgba(83,252,248,0.16), transparent 24%), radial-gradient(circle at ${70 - x * 8}% ${20 - y * 8}%, rgba(173,98,255,0.18), transparent 28%)` }} transition={{ type: 'spring', stiffness: 60, damping: 20 }} />;
}
