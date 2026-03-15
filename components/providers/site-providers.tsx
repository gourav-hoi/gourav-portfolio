'use client';

import { portfolioData } from '@/content/portfolio';
import { useLenis } from '@/hooks/use-lenis';

import { CustomCursor } from '@/components/cursor/custom-cursor';
import { ActiveSectionIndicator } from '@/components/ui/active-section-indicator';
import { CommandPalette } from '@/components/ui/command-palette';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { ThemeProvider } from '@/components/providers/theme-provider';

function ExperienceEnhancers() {
  useLenis();
  return <>
    <ScrollProgress />
    <CustomCursor />
    <ActiveSectionIndicator navigation={portfolioData.navigation} />
    <CommandPalette navigation={portfolioData.navigation} socialLinks={portfolioData.contact.socialLinks} />
  </>;
}

export function SiteProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider><ExperienceEnhancers />{children}</ThemeProvider>;
}
