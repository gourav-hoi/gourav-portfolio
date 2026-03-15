'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { registerGsapPlugins } from '@/animations/gsap';
import { isTouchDevice, prefersReducedMotion } from '@/utils/device';
import { setLenisInstance } from '@/utils/scroll';

export function useLenis() {
  useEffect(() => {
    if (isTouchDevice() || prefersReducedMotion()) {
      return;
    }

    const gsap = registerGsapPlugins();
    const lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.95,
      autoResize: true,
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    const updateLenis = (time: number) => lenis.raf(time * 1000);
    const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());

    lenis.on('scroll', updateScrollTrigger);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);
    setLenisInstance(lenis);

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      lenis.off('scroll', updateScrollTrigger);
      gsap.ticker.remove(updateLenis);
      setLenisInstance(null);
      lenis.destroy();
    };
  }, []);
}
