'use client';

import { useActiveSection } from '@/hooks/use-active-section';
import type { NavItem } from '@/types/portfolio';

export function ActiveSectionIndicator({ navigation }: { navigation: NavItem[] }) {
  const activeSection = useActiveSection(navigation);

  if (!activeSection) {
    return null;
  }

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed left-4 top-6 z-[72] hidden items-center gap-3 rounded-full border border-primary/20 bg-[#090d17]/80 px-4 py-3 text-[11px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-xl md:flex"
    >
      <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_rgba(83,252,248,0.7)]" aria-hidden="true" />
      <span className="text-white/40">Section</span>
      <span className="text-white">{activeSection.label}</span>
    </div>
  );
}
