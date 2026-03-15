'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 26, mass: 0.25 });
  return <motion.div className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-gradient-to-r from-primary via-secondary to-accent" style={{ scaleX }} />;
}
