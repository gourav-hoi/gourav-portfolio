'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/ui/section-heading';
import type { TechCategory } from '@/types/portfolio';

export function TechStackSection({ categories }: { categories: TechCategory[] }) {
  return <section id="tech" className="relative py-24 sm:py-28"><div className="section-shell"><SectionHeading eyebrow="Tech Stack" title="A modern stack arranged as floating, interactive capability clusters" description="Frontend, backend, data, and cloud tools are presented as kinetic floating tokens with 3D hover depth and subtle orbital motion." /><div className="mt-16 grid gap-6 lg:grid-cols-2">{categories.map((category, categoryIndex) => <div key={category.name} className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8"><div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/12" /><div className="relative"><p className="text-xs uppercase tracking-[0.35em] text-primary">{category.name}</p><div className="mt-8 flex min-h-[220px] flex-wrap items-center justify-center gap-4">{category.items.map((item, itemIndex) => <motion.div key={item} initial={{ opacity: 0, scale: 0.8, y: 16 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: categoryIndex * 0.08 + itemIndex * 0.06, duration: 0.55 }} whileHover={{ rotateX: -12, rotateY: 12, scale: 1.08, y: -10 }} animate={{ y: [0, -8, 0] }} style={{ transformStyle: 'preserve-3d' }} className="rounded-[1.6rem] border border-white/10 bg-white/6 px-5 py-4 text-sm text-white shadow-[0_12px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl">{item}</motion.div>)}</div></div></div>)}</div></div></section>;
}
