'use client';

import { useTheme } from 'next-themes';

export function useThemeMode() {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  return { theme, resolvedTheme, toggleTheme };
}
