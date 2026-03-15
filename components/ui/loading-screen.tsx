'use client';

import { AnimatePresence, motion } from 'framer-motion';

export function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  return <AnimatePresence>{isLoading ? <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }} className="fixed inset-0 z-[90] flex items-center justify-center bg-[#050816]"><div className="relative flex flex-col items-center gap-4"><motion.div className="h-24 w-24 rounded-full border border-primary/30 bg-primary/10" animate={{ scale: [1, 1.08, 1], rotate: [0, 180, 360] }} transition={{ duration: 2.4, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }} /><motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-display text-xs uppercase tracking-[0.45em] text-white/60">Calibrating immersive portfolio</motion.p></div></motion.div> : null}</AnimatePresence>;
}
