import { cn } from '@/utils/cn';

export function GlowBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn('inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.32em] text-primary shadow-glow', className)}><span className="h-1.5 w-1.5 rounded-full bg-primary" />{children}</span>;
}
