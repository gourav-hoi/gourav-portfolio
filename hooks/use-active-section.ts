'use client';

import { useEffect, useMemo, useState } from 'react';

import type { NavItem } from '@/types/portfolio';

const sectionThresholds = [0.2, 0.35, 0.5, 0.65];

export function useActiveSection(navigation: NavItem[]) {
  const [activeSectionId, setActiveSectionId] = useState(navigation[0]?.id ?? '');

  useEffect(() => {
    if (!navigation.length || typeof window === 'undefined') {
      return;
    }

    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const visibleSections = new Map<string, number>();

    const updateActiveSection = (nextSectionId: string) => {
      setActiveSectionId((currentSectionId) => (currentSectionId === nextSectionId ? currentSectionId : nextSectionId));
    };

    const syncFromViewport = () => {
      const pivot = window.innerHeight * 0.35;
      let nextSectionId = navigation[0]?.id ?? '';

      navigation.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.getBoundingClientRect().top <= pivot) {
          nextSectionId = item.id;
        }
      });

      updateActiveSection(nextSectionId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = (entry.target as HTMLElement).id;

          if (entry.isIntersecting) {
            visibleSections.set(sectionId, entry.intersectionRatio);
            return;
          }

          visibleSections.delete(sectionId);
        });

        const mostVisibleSectionId = [...visibleSections.entries()].sort((left, right) => right[1] - left[1])[0]?.[0];

        if (mostVisibleSectionId) {
          updateActiveSection(mostVisibleSectionId);
          return;
        }

        syncFromViewport();
      },
      {
        rootMargin: '-18% 0px -55% 0px',
        threshold: sectionThresholds,
      }
    );

    sections.forEach((section) => observer.observe(section));
    syncFromViewport();

    return () => observer.disconnect();
  }, [navigation]);

  return useMemo(
    () => navigation.find((item) => item.id === activeSectionId) ?? navigation[0] ?? null,
    [activeSectionId, navigation]
  );
}
