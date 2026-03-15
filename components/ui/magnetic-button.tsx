'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { useRef } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/utils/cn';

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  download?: boolean;
  external?: boolean;
};

export function MagneticButton({ href, children, className, variant = 'primary', size = 'default', download, external }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const move = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const x = event.clientX - bounds.left - bounds.width / 2;
    const y = event.clientY - bounds.top - bounds.height / 2;
    gsap.to(ref.current, { x: x * 0.18, y: y * 0.18, duration: 0.3, ease: 'power2.out' });
  };
  const reset = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.45, ease: 'elastic.out(1, 0.45)' });
  };
  const isExternal = external ?? (href.startsWith('http') || href.startsWith('mailto'));
  const classes = cn(buttonVariants({ variant, size }), 'group relative overflow-hidden', className);
  if (href.startsWith('#')) return <a ref={ref} href={href} className={classes} onMouseMove={move} onMouseLeave={reset} data-cursor="hover">{children}</a>;
  if (isExternal || download) return <a ref={ref} href={href} download={download} target={download ? undefined : '_blank'} rel={download ? undefined : 'noreferrer'} className={classes} onMouseMove={move} onMouseLeave={reset} data-cursor="hover">{children}{isExternal && !download ? <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /> : null}</a>;
  return <Link ref={ref} href={href} className={classes} onMouseMove={move} onMouseLeave={reset} data-cursor="hover">{children}</Link>;
}
