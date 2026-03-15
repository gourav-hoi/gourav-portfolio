'use client';

import { useEffect, useState } from 'react';

import { isTouchDevice, prefersReducedMotion } from '@/utils/device';

export function useMouseParallax() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isTouchDevice() || prefersReducedMotion()) {
      return;
    }

    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const commitOffset = () => {
      frame = 0;
      setOffset((currentOffset) => {
        if (Math.abs(currentOffset.x - nextX) < 0.01 && Math.abs(currentOffset.y - nextY) < 0.01) {
          return currentOffset;
        }

        return { x: nextX, y: nextY };
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      nextX = (event.clientX / window.innerWidth - 0.5) * 2;
      nextY = (event.clientY / window.innerHeight - 0.5) * 2;

      if (!frame) {
        frame = window.requestAnimationFrame(commitOffset);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return offset;
}
