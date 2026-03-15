'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import type { ExperienceItem } from '@/types/portfolio';

import { registerGsapPlugins } from '@/animations/gsap';
import { fadeUp, staggerContainer } from '@/animations/motion';
import { TimelineGlow } from '@/components/reactbits/timeline-glow';

export function Timeline({ items }: { items: ExperienceItem[] }) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    const gsap = registerGsapPlugins();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-timeline-line]',
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 75%',
            end: 'bottom 75%',
            scrub: true,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>('[data-timeline-card]').forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.45, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative space-y-8 pl-12">
      <div ref={rootRef}>
      <TimelineGlow />
      <div data-timeline-line className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
      {items.map((item) => (
        <motion.article key={`${item.company}-${item.role}`} variants={fadeUp} data-timeline-card className="glass-panel relative rounded-[2rem] p-6">
          <span className="absolute left-[-36px] top-7 h-4 w-4 rounded-full border border-primary/40 bg-primary/80 shadow-[0_0_20px_rgba(83,252,248,0.6)]" />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><h3 className="font-display text-2xl text-white">{item.role}</h3><p className="mt-1 text-sm uppercase tracking-[0.3em] text-primary">{item.company}</p></div><p className="text-sm text-white/45">{item.duration}</p></div>
          <div className="mt-5 space-y-3">{item.highlights.map((highlight) => <p key={highlight} className="flex gap-3 text-sm leading-7 text-white/68"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" /><span>{highlight}</span></p>)}</div>
        </motion.article>
      ))}
      </div>
    </motion.div>
  );
}
