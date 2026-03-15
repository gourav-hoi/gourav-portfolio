import { ProjectCard } from '@/components/projects/project-card';
import { SectionHeading } from '@/components/ui/section-heading';
import type { Project } from '@/types/portfolio';

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return <section id="projects" className="relative py-24 sm:py-28"><div className="section-shell"><SectionHeading eyebrow="Projects" title="Interactive product stories with 3D tilt, hover depth, and execution detail" description="Each card highlights the product context, technology decisions, and outcome-driven metrics behind the systems I have built." /><div className="mt-16 grid gap-6 lg:grid-cols-2">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div></div></section>;
}
