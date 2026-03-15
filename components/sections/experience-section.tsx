import { Timeline } from '@/components/experience/timeline';
import { SectionHeading } from '@/components/ui/section-heading';
import type { ExperienceItem } from '@/types/portfolio';

export function ExperienceSection({ experience }: { experience: ExperienceItem[] }) {
  return <section id="experience" className="relative py-24 sm:py-28"><div className="section-shell"><SectionHeading eyebrow="Experience" title="A scroll-triggered timeline of product delivery, performance tuning, and system scale" description="The timeline focuses on impact across analytics, notification systems, admin dashboards, and mobile experiences used in production." /><div className="mt-16"><Timeline items={experience} /></div></div></section>;
}
