'use client';

import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

import type { Stat } from '@/types/portfolio';

export function StatCounter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Number(latest.toFixed(stat.value % 1 === 0 ? 0 : 1)));
  useEffect(() => { if (!isInView) return; const controls = animate(count, stat.value, { duration: 1.6, ease: 'easeOut' }); return () => controls.stop(); }, [count, isInView, stat.value]);
  return <div ref={ref} className="glass-panel rounded-3xl p-5 text-left"><motion.div className="font-display text-3xl font-semibold text-white sm:text-4xl">{stat.prefix}<motion.span>{rounded}</motion.span>{stat.suffix}</motion.div><p className="mt-2 text-sm text-white/60">{stat.label}</p></div>;
}
