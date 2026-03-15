'use client';

import gsap from 'gsap';
import { useEffect, useMemo, useRef, useState } from 'react';

import { isTouchDevice } from '@/utils/device';

type Ripple = { id: number; x: number; y: number };

export function CustomCursor() {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const isTouch = useMemo(() => isTouchDevice(), []);

  useEffect(() => {
    if (isTouch || !outerRef.current || !innerRef.current) return;
    const outerX = gsap.quickTo(outerRef.current, 'x', { duration: 0.45, ease: 'power3.out' });
    const outerY = gsap.quickTo(outerRef.current, 'y', { duration: 0.45, ease: 'power3.out' });
    const innerX = gsap.quickTo(innerRef.current, 'x', { duration: 0.18, ease: 'power2.out' });
    const innerY = gsap.quickTo(innerRef.current, 'y', { duration: 0.18, ease: 'power2.out' });
    const handlePointerMove = (event: PointerEvent) => { outerX(event.clientX); outerY(event.clientY); innerX(event.clientX); innerY(event.clientY); };
    const handlePointerDown = (event: PointerEvent) => {
      const id = Date.now();
      setRipples((current) => [...current, { id, x: event.clientX, y: event.clientY }]);
      window.setTimeout(() => setRipples((current) => current.filter((ripple) => ripple.id !== id)), 700);
    };
    const handleHoverState = (active: boolean) => { if (outerRef.current) gsap.to(outerRef.current, { scale: active ? 1.8 : 1, opacity: active ? 0.85 : 1, duration: 0.24 }); };
    const selectors = ['a', 'button', '[data-cursor="hover"]', 'input', 'textarea'];
    const targets = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(',')));
    const enterHandlers = targets.map((node) => {
      const enter = () => handleHoverState(true);
      const leave = () => handleHoverState(false);
      node.addEventListener('mouseenter', enter);
      node.addEventListener('mouseleave', leave);
      return { node, enter, leave };
    });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      enterHandlers.forEach(({ node, enter, leave }) => { node.removeEventListener('mouseenter', enter); node.removeEventListener('mouseleave', leave); });
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={outerRef}
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/45 bg-primary/10 backdrop-blur-xl md:block"
      />
      <div
        ref={innerRef}
        className="pointer-events-none fixed left-0 top-0 z-[81] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(83,252,248,0.8)] md:block"
      />
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none fixed z-[79] hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-primary/50 md:block"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </>
  );
}
