'use client';

import { MoonStar, SunMedium } from 'lucide-react';

import { useMounted } from '@/hooks/use-mounted';
import { useThemeMode } from '@/hooks/use-theme-mode';

export function ThemeToggle() {
  const mounted = useMounted();
  const { resolvedTheme, toggleTheme } = useThemeMode();
  if (!mounted) return <div className="h-11 w-11 rounded-full border border-white/10 bg-white/5" />;
  const isDark = resolvedTheme !== 'light';
  return <button type="button" onClick={toggleTheme} aria-label="Toggle theme" className="glass-panel flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:scale-105 hover:border-primary/40">{isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}</button>;
}
