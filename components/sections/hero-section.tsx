'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

import type { ContactData, HeroData, Stat } from '@/types/portfolio';

import { GlowBadge } from '@/components/reactbits/glow-badge';
import { TextReveal } from '@/components/reactbits/text-reveal';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { StatCounter } from '@/components/ui/stat-counter';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useMouseParallax } from '@/hooks/use-mouse-parallax';

export function HeroSection({ hero, stats, social }: { hero: HeroData; stats: Stat[]; social: ContactData['socialLinks'] }) {
  const [activeTitle, setActiveTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const { x, y } = useMouseParallax();
  const currentTitle = useMemo(() => hero.rotatingTitles[titleIndex % hero.rotatingTitles.length], [hero.rotatingTitles, titleIndex]);

  useEffect(() => {
    let charIndex = 0;
    const typing = window.setInterval(() => {
      charIndex += 1;
      setActiveTitle(currentTitle.slice(0, charIndex));
      if (charIndex >= currentTitle.length) {
        window.clearInterval(typing);
        window.setTimeout(() => setTitleIndex((value) => value + 1), 1800);
      }
    }, 55);
    return () => window.clearInterval(typing);
  }, [currentTitle]);

  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden pt-6">
      <div className="section-shell relative flex min-h-screen flex-col justify-between py-8 sm:py-10 lg:py-14">
        <div className="flex items-center justify-between gap-4"><GlowBadge>Immersive portfolio 2026</GlowBadge><div className="flex items-center gap-3"><p className="hidden text-xs uppercase tracking-[0.28em] text-white/40 md:block">⌘K for quick actions</p><ThemeToggle /></div></div>
        <div className="grid items-center gap-12 pb-10 pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:pt-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60 backdrop-blur-xl"><Sparkles className="h-4 w-4 text-primary" />Available for full-time and freelance product work</div>
            <h1 className="mt-8 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-8xl"><TextReveal text={hero.name} /></h1>
            <p className="mt-4 text-xl font-medium text-white/80 sm:text-2xl lg:text-3xl">{hero.title}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">{hero.tagline}</p>
            <div className="mt-8 flex min-h-[32px] items-center text-sm uppercase tracking-[0.34em] text-primary sm:text-base"><span>{activeTitle}</span><span className="ml-1 h-5 w-px animate-pulse bg-primary" /></div>
            <div className="mt-10 flex flex-wrap gap-4">{hero.ctas.map((cta, index) => <MagneticButton key={cta.label} href={cta.href} variant={index === 0 ? 'primary' : index === 1 ? 'secondary' : 'ghost'} size="lg" download={cta.label === 'Download Resume'}>{cta.label}<ArrowDownRight className="h-4 w-4" /></MagneticButton>)}</div>
            <div className="mt-10 flex flex-wrap gap-3">{social.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('mailto') ? undefined : '_blank'} rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'} className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.28em] transition ${link.placeholder ? 'border-white/10 text-white/35' : 'border-white/15 bg-white/5 text-white/65 hover:border-primary/30 hover:text-white'}`} data-cursor="hover">{link.label}</a>)}</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.92, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-xl" style={{ transform: `translate3d(${x * 10}px, ${y * 10}px, 0)` }}>
            <div className="glass-panel relative overflow-hidden rounded-[2.5rem] p-6 sm:p-8"><div className="absolute inset-0 bg-hero-grid opacity-90" /><div className="relative space-y-6"><div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50"><span>Realtime system builder</span><span>Mobile + Web + APIs</span></div><div className="grid gap-4 rounded-[2rem] border border-white/10 bg-black/20 p-5 backdrop-blur-xl sm:grid-cols-2"><div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4"><p className="text-xs uppercase tracking-[0.28em] text-white/45">Current focus</p><p className="mt-3 text-lg text-white">Scalable mobile systems and operational dashboards</p></div><div className="rounded-[1.5rem] border border-primary/20 bg-primary/10 p-4"><p className="text-xs uppercase tracking-[0.28em] text-white/45">Stack</p><p className="mt-3 text-lg text-white">React Native, Next.js, Spring Boot, Firebase</p></div></div><div className="grid gap-4 sm:grid-cols-2">{stats.slice(0, 2).map((stat) => <StatCounter key={stat.label} stat={stat} />)}</div></div></div>
          </motion.div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{stats.map((stat) => <StatCounter key={`hero-${stat.label}`} stat={stat} />)}</div>
      </div>
    </section>
  );
}
