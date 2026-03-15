import { GlowBadge } from '@/components/reactbits/glow-badge';

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="mx-auto max-w-3xl text-center"><GlowBadge>{eyebrow}</GlowBadge><h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2><p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">{description}</p></div>;
}
