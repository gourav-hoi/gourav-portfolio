'use client';

import { motion } from 'framer-motion';

import { fadeUp, staggerContainer } from '@/animations/motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { SkillGraph } from '@/components/ui/skill-graph';
import type { PortfolioData } from '@/types/portfolio';

export function AboutSection({ about }: { about: PortfolioData['about'] }) {
  return <section id="about" className="relative py-24 sm:py-28"><div className="section-shell"><SectionHeading eyebrow="About" title="Engineering polished experiences across mobile, web, and backend systems" description={about.intro} /><motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"><div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">{about.cards.map((card) => <motion.article key={card.title} variants={fadeUp} className="glass-panel rounded-[2rem] p-6"><p className="text-xs uppercase tracking-[0.3em] text-primary">{card.title}</p><p className="mt-4 text-sm leading-7 text-white/68">{card.body}</p></motion.article>)}<motion.div variants={fadeUp} className="glass-panel rounded-[2rem] p-6"><p className="text-xs uppercase tracking-[0.3em] text-white/45">Scroll-storytelling timeline</p><div className="mt-6 space-y-6">{about.achievements.map((item, index) => <div key={item.title} className="relative pl-8"><span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_24px_rgba(83,252,248,0.75)]" />{index < about.achievements.length - 1 ? <span className="absolute left-[5px] top-6 h-[calc(100%-4px)] w-px bg-white/10" /> : null}<p className="font-display text-lg text-white">{item.title}</p><p className="mt-2 text-sm leading-7 text-white/60">{item.description}</p></div>)}</div></motion.div></div><motion.div variants={fadeUp}><SkillGraph /></motion.div></motion.div></div></section>;
}
